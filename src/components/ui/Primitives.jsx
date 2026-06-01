"use client";
import { useEffect, useRef, useState } from "react";

export function ImgPlaceholder({ code, prompt, src, ratio = "4 / 3", dark = false, style = {} }) {
  if (src) {
    return (
      <div
        className={`img-placeholder ${dark ? "dark" : ""}`}
        style={{ aspectRatio: ratio, position: "relative", overflow: "hidden", ...style }}
      >
        <img
          src={src}
          alt={prompt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div className="ph-corner" style={{ position: "absolute", top: 12, left: 12, zIndex: 2 }}>
          {code}
        </div>
      </div>
    );
  }
  return (
    <div
      className={`img-placeholder ${dark ? "dark" : ""}`}
      style={{ aspectRatio: ratio, ...style }}
    >
      <div className="ph-corner">{code}</div>
      <div className="ph-caption">
        <div style={{ opacity: 0.55, marginBottom: 8, fontSize: 9 }}>// designer prompt</div>
        {prompt}
      </div>
    </div>
  );
}

export function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <Tag ref={ref} className={`reveal ${visible ? "in" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export function SectionHead({ code, label, title, subtitle }) {
  return (
    <div className="section-head">
      <div className="meta">
        <span className="code">{code}</span>
        <span>{label}</span>
      </div>
      <div>
        {title && (
          <h2 className="display-l" style={{ margin: 0, maxWidth: "20ch" }}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="body-l" style={{ marginTop: 20, maxWidth: "58ch" }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export function Counter({ to, duration = 1400, prefix = "", suffix = "", decimals = 0 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(to * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  const display =
    decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString();
  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function Wordmark({ size = 24, dark = false }) {
  const fontSize = size;
  const ink = dark ? "#ffffff" : "#0e1116";
  const grey = "#9aa3ad";
  return (
    <span
      style={{
        fontFamily: "var(--display)",
        fontWeight: 800,
        fontSize,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "baseline",
        gap: fontSize * 0.18,
        color: ink,
      }}
    >
      <span>
        lea<span style={{ color: "#18C25A" }}>f</span>tex
      </span>
      <span style={{ color: grey, fontWeight: 700 }}>bio</span>
    </span>
  );
}
