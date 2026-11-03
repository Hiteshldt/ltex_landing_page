"use client";
import { useEffect, useRef, useState } from "react";

export function ImgPlaceholder({ code, prompt, src, ratio = "4 / 3", style = {} }) {
  return (
    <div className={src ? "media" : "img-placeholder"} style={{ aspectRatio: ratio, ...style }}>
      {src ? <img src={src} alt={prompt} loading="lazy" /> : (
        <div className="ph-caption">
          <div style={{ opacity: 0.55, marginBottom: 8, fontSize: 9 }}>// designer prompt</div>
          {prompt}
        </div>
      )}
      <span className="tag">{code}</span>
    </div>
  );
}

// Fades/slides children in the first time they scroll into view. `delay` is in ms.
export function Reveal({ children, delay = 0, as: Tag = "div", className = "", style, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "in" : ""} ${className}`}
      style={delay ? { "--d": `${delay}ms`, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function SectionHead({ code, label, title, subtitle, actions }) {
  return (
    <Reveal className={`section-head ${subtitle ? "" : "section-head--stack"}`}>
      <div>
        <span className="eyebrow">
          {code}
          {label && <span style={{ opacity: 0.55 }}>— {label}</span>}
        </span>
        {title && <h2 className="display-l">{title}</h2>}
      </div>
      {subtitle && (
        <div className="section-head__side">
          <p className="lead">{subtitle}</p>
          {actions}
        </div>
      )}
    </Reveal>
  );
}

export function Counter({ to, duration = 1600, prefix = "", suffix = "", decimals = 0 }) {
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
          const eased = 1 - Math.pow(1 - p, 4);
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
  return (
    <span
      style={{
        fontFamily: "var(--brand)",
        fontWeight: 800,
        fontSize: size,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "baseline",
        gap: size * 0.18,
        color: dark ? "#ffffff" : "#0f1512",
      }}
    >
      <span>
        lea<span style={{ color: "#18C25A" }}>f</span>tex
      </span>
      <span style={{ color: dark ? "#82948a" : "#9aa29d", fontWeight: 700 }}>bio</span>
    </span>
  );
}
