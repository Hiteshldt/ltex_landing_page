"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/ui/Primitives";
import Icon, { Arrow } from "@/components/ui/Icon";
import { PRODUCT_LINES } from "@/lib/productLines";

const LINKS = [
  ["Technology", "/technology"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    setProdOpen(false);
  }, [pathname]);

  // Lock page scroll behind the mobile menu; Escape closes everything.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setProdOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className={`nav ${scrolled || menuOpen ? "is-solid" : ""}`}>
        <div className="container nav__inner">
          <Link href="/" aria-label="LeafTex home" className="nav__logo">
            <Wordmark size={22} />
          </Link>

          <nav className="nav__links" aria-label="Primary">
            <Link href="/" className={`nav__link ${isActive("/") ? "is-active" : ""}`}>Home</Link>

            <div
              className={`nav__dd ${prodOpen ? "is-open" : ""}`}
              onMouseEnter={() => setProdOpen(true)}
              onMouseLeave={() => setProdOpen(false)}
              onFocus={() => setProdOpen(true)}
              onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setProdOpen(false)}
            >
              <Link
                href="/products"
                className={`nav__link ${isActive("/products") ? "is-active" : ""}`}
                aria-haspopup="true"
                aria-expanded={prodOpen}
              >
                Products <Icon name="chevron-down" className="chev" strokeWidth={2} />
              </Link>
              <div className="mega">
                <div className="mega__grid">
                  {PRODUCT_LINES.map((p) => (
                    <Link key={p.href} href={p.href} className="mega__item">
                      <span className="mega__thumb"><img src={p.img} alt="" loading="lazy" /></span>
                      <span>
                        <span className="mega__name" style={{ display: "block" }}>{p.name}</span>
                        <span className="mega__desc" style={{ display: "block" }}>{p.tag}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="mega__foot">
                  <span>One zero-waste platform — all traceable to source.</span>
                  <Link href="/products" className="link-arrow link-arrow--green">
                    All products <Icon name="arrow-up-right" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>

            {LINKS.map(([label, href]) => (
              <Link key={href} href={href} className={`nav__link ${isActive(href) ? "is-active" : ""}`}>{label}</Link>
            ))}
          </nav>

          <div className="nav__actions">
            <Link href="/contact" className="btn btn-green btn-sm nav__cta">
              Partner with us <Arrow />
            </Link>
            <button
              type="button"
              className="nav__burger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
        <span className="nav__progress" aria-hidden="true" />
      </header>

      {/* Mobile menu */}
      <div id="mobile-nav" className={`mnav ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="container mnav__inner">
          <Link href="/" className="mnav__link" tabIndex={menuOpen ? 0 : -1}>Home</Link>
          <button
            type="button"
            className="mnav__link"
            onClick={() => setProdOpen((o) => !o)}
            aria-expanded={prodOpen}
            tabIndex={menuOpen ? 0 : -1}
          >
            Products <Icon name="chevron-down" className="chev" strokeWidth={1.75} />
          </button>
          {prodOpen && (
            <div className="mnav__sub">
              {PRODUCT_LINES.map((p) => (
                <Link key={p.href} href={p.href}>
                  <img src={p.img} alt="" loading="lazy" />
                  {p.name}
                </Link>
              ))}
              <Link href="/products" className="mnav__all">
                All products <Icon name="arrow-right" size={18} strokeWidth={2} />
              </Link>
            </div>
          )}
          {LINKS.map(([label, href]) => (
            <Link key={href} href={href} className="mnav__link" tabIndex={menuOpen ? 0 : -1}>{label}</Link>
          ))}
          <div className="mnav__foot">
            <Link href="/contact" className="btn btn-green" style={{ width: "100%" }} tabIndex={menuOpen ? 0 : -1}>
              Partner with us <Arrow />
            </Link>
            <div className="mnav__contact">
              <a href="mailto:founders@leaftex.bio">founders@leaftex.bio</a>
              <a href="tel:+919353142107">+91 93531 42107</a>
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
