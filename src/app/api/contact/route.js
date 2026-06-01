import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Very light in-memory rate limit (per warm serverless instance): 5 req / 10 min / IP.
const HITS = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX = 5;

function rateLimited(ip) {
  const now = Date.now();
  const arr = (HITS.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  HITS.set(ip, arr);
  return arr.length > MAX;
}

const esc = (s = "") =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (rateLimited(ip)) {
      return Response.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json().catch(() => ({}));
    const { name, email, company = "", interest = "", message, company_website } = body;

    // Honeypot — pretend success so bots don't retry.
    if (company_website) return Response.json({ ok: true });

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ ok: false, error: "Name, email, and message are required." }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return Response.json({ ok: false, error: "Please provide a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY is not set — cannot send email.");
      return Response.json(
        { ok: false, error: "Email service is not configured yet. Please email founders@leaftex.bio directly." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    // CONTACT_TO may be a single address or a comma-separated list of recipients.
    // NOTE: with the Resend sandbox sender (onboarding@resend.dev) and an unverified
    // domain, only your own Resend account email is deliverable — adding others will
    // make Resend reject the whole send until leaftex.bio is verified.
    const to = (process.env.CONTACT_TO || "leaftex2026@gmail.com")
      .split(",")
      .map((addr) => addr.trim())
      .filter(Boolean);
    const from = process.env.CONTACT_FROM || "LeafTex Website <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry — ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Company:</strong> ${esc(company) || "—"}</p>
        <p><strong>Reaching out as:</strong> ${esc(interest) || "—"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${esc(message)}</p>
        <hr/>
        <p style="color:#888;font-size:12px">Sent from leaftex.bio contact form · IP ${esc(ip)}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return Response.json({ ok: false, error: "Could not send your message right now." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return Response.json({ ok: false, error: "Unexpected error." }, { status: 500 });
  }
}
