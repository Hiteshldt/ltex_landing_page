"use client";
import { useState } from "react";

const INTERESTS = [
  "Spinner / Mill",
  "Fashion / Apparel Brand",
  "Packhouse / Produce",
  "Packaging",
  "Investor",
  "Press / Media",
  "Other",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: if filled, silently succeed (bot).
    if (data.company_website) {
      setStatus("ok");
      form.reset();
      return;
    }
    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      setError("Please fill in your name, email, and a short message.");
      setStatus("err");
      return;
    }
    if (!EMAIL_RE.test(data.email)) {
      setError("That email address doesn't look right.");
      setStatus("err");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setError(err.message || "Could not send. Please email founders@leaftex.bio directly.");
      setStatus("err");
    }
  }

  if (status === "ok") {
    return (
      <div className="card outline" style={{ padding: 36, textAlign: "center" }}>
        <div className="display-m" style={{ color: "var(--green-ink)" }}>Thank you.</div>
        <p className="body-l" style={{ marginTop: 12, marginBottom: 20 }}>
          Your message is on its way to our founders. We&apos;ll be in touch within two business days.
        </p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card outline" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 18 }} noValidate>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
        <div className="field">
          <label htmlFor="cf-name">Name *</label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email *</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
        <div className="field">
          <label htmlFor="cf-company">Company / Organization</label>
          <input id="cf-company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="cf-interest">I'm reaching out as a…</label>
          <select id="cf-interest" name="interest" defaultValue={INTERESTS[0]}>
            {INTERESTS.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-message">Message *</label>
        <textarea id="cf-message" name="message" required placeholder="Tell us about your application, volumes, or what you'd like to sample." />
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <div className="field" aria-hidden="true">
        <label htmlFor="cf-company-website" className="hp">Company website (leave blank)</label>
        <input id="cf-company-website" className="hp" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "err" && <div className="form-status err">{error}</div>}

      <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <button type="submit" className="btn btn-green" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"} <span className="arrow">→</span>
        </button>
        <span className="form-note">
          Or email <a href="mailto:founders@leaftex.bio" style={{ color: "var(--green-ink)", fontWeight: 600 }}>founders@leaftex.bio</a>
        </span>
      </div>

      <style>{`
        @media (max-width: 600px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </form>
  );
}
