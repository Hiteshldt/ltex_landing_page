"use client";
import { useState } from "react";
import Icon, { Arrow } from "@/components/ui/Icon";

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
      <div className="card form-done" role="status">
        <span className="icon-tile"><Icon name="check" strokeWidth={2.2} /></span>
        <h2 className="display-m">Thank you.</h2>
        <p className="lead">
          Your message is on its way to our founders. We&apos;ll be in touch within two business days.
        </p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card form" noValidate>
      <fieldset className="choice">
        <legend>I&apos;m reaching out as a…</legend>
        {INTERESTS.map((i, idx) => (
          <label key={i}>
            <input type="radio" name="interest" value={i} defaultChecked={idx === 0} />
            <span>{i}</span>
          </label>
        ))}
      </fieldset>

      <div className="form__row">
        <div className="field">
          <label htmlFor="cf-name">Name *</label>
          <input id="cf-name" name="name" type="text" autoComplete="name" placeholder="Your full name" required />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email *</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-company">Company / Organization</label>
        <input id="cf-company" name="company" type="text" autoComplete="organization" placeholder="Optional" />
      </div>

      <div className="field">
        <label htmlFor="cf-message">Message *</label>
        <textarea id="cf-message" name="message" required placeholder="Tell us about your application, volumes, or what you'd like to sample." />
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <div aria-hidden="true">
        <label htmlFor="cf-company-website" className="hp">Company website (leave blank)</label>
        <input id="cf-company-website" className="hp" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "err" && <div className="form-status err" role="alert">{error}</div>}

      <div className="form__foot">
        <button type="submit" className="btn btn-green" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"} <Arrow />
        </button>
        <span className="form-note">
          Or email <a href="mailto:founders@leaftex.bio">founders@leaftex.bio</a>
        </span>
      </div>
    </form>
  );
}
