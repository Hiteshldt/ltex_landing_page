import Link from "next/link";
import { Arrow } from "@/components/ui/Icon";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/seo";

// Shared top-of-page header for the inner routes. `crumbs` is a list of [label, href]
// pairs ending with the current page (also emitted as BreadcrumbList JSON-LD); `aside` renders a visual in a right-hand column;
// `children` render full-width beneath, on the same first screen.
export default function PageIntro({ crumbs, eyebrow, title, intro, primary, secondary, aside, children, className = "" }) {
  return (
    <header className={`page-intro ${className}`}>
      <div className="page-intro__bg" aria-hidden="true" />
      <div className={`container page-intro__grid ${aside ? "has-aside" : ""}`}>
        <div className="page-intro__copy">
          {crumbs && (
            <nav className="crumbs fade-up" aria-label="Breadcrumb">
              <JsonLd data={breadcrumbLd(crumbs)} />
              {crumbs.map(([label, href], i) => (
                <span key={label} style={{ display: "contents" }}>
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < crumbs.length - 1 ? <Link href={href}>{label}</Link> : <span aria-current="page">{label}</span>}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && <span className="eyebrow fade-up" style={{ "--d": "80ms" }}>{eyebrow}</span>}
          <h1 className="display-xl fade-up" style={{ "--d": "160ms" }}>{title}</h1>
          {intro && <p className="lead fade-up" style={{ "--d": "260ms" }}>{intro}</p>}
          {(primary || secondary) && (
            <div className="btn-row fade-up" style={{ "--d": "360ms" }}>
              {primary && <Link href={primary.href} className="btn btn-green">{primary.label} <Arrow /></Link>}
              {secondary && <Link href={secondary.href} className="btn btn-ghost">{secondary.label}</Link>}
            </div>
          )}
        </div>
        {aside && <div className="page-intro__aside fade-up" style={{ "--d": "300ms" }}>{aside}</div>}
      </div>
      {children && <div className="container page-intro__extra">{children}</div>}
    </header>
  );
}
