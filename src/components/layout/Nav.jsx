"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/ui/Primitives";

const PRODUCTS = [
  ["Banana & Pineapple Fibers", "/products/fibers"],
  ["Vegan Leather", "/products/vegan-leather"],
  ["Algae Leather", "/products/algae-leather"],
  ["Leaf-Guard™ Coating", "/products/leaf-guard"],
];

const LINKS = [
  ["Home", "/"],
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
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    setProdOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const productsActive = pathname.startsWith("/products");

  const navStyle = {
    position: "fixed",
    top: 4,
    left: 0,
    right: 0,
    zIndex: 60,
    transition:
      "background 220ms ease, border-color 220ms ease, backdrop-filter 220ms ease",
    background: scrolled || menuOpen ? "rgba(255,255,255,0.92)" : "transparent",
    backdropFilter: scrolled || menuOpen ? "blur(14px) saturate(140%)" : "none",
    WebkitBackdropFilter: scrolled || menuOpen ? "blur(14px) saturate(140%)" : "none",
    borderBottom: scrolled || menuOpen ? "1px solid var(--rule)" : "1px solid transparent",
  };

  const linkStyle = (active) => ({
    fontFamily: "var(--sans)",
    fontSize: 14,
    fontWeight: 600,
    color: active ? "var(--ink)" : "var(--ink-2)",
    textDecoration: "none",
    padding: "6px 0",
    borderBottom: active ? "2px solid var(--green)" : "2px solid transparent",
  });

  return (
    <>
      <div className="brand-strip" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 70 }} />
      <nav style={navStyle}>
        <div
          className="container"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}
        >
          <Link href="/" aria-label="LeafTex home" style={{ display: "inline-flex", alignItems: "baseline", textDecoration: "none" }}>
            <Wordmark size={22} />
          </Link>

          {/* Desktop links */}
          <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 30 }}>
            <Link href="/" style={linkStyle(pathname === "/")}>Home</Link>

            {/* Products dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => setProdOpen(true)}
              onMouseLeave={() => setProdOpen(false)}
              style={{ position: "relative" }}
            >
              <Link
                href="/products"
                style={{ ...linkStyle(productsActive), display: "inline-flex", alignItems: "center", gap: 5 }}
                aria-haspopup="true"
                aria-expanded={prodOpen}
              >
                Products
                <span style={{ fontSize: 10, transform: prodOpen ? "rotate(180deg)" : "none", transition: "transform 160ms ease" }}>▾</span>
              </Link>
              <div className={`dropdown-menu ${prodOpen ? "open" : ""}`}>
                {PRODUCTS.map(([label, href]) => (
                  <Link key={href} href={href} className="dropdown-item">{label}</Link>
                ))}
              </div>
            </div>

            <Link href="/technology" style={linkStyle(isActive("/technology"))}>Technology</Link>
            <Link href="/about" style={linkStyle(isActive("/about"))}>About Us</Link>
            <Link href="/contact" style={linkStyle(isActive("/contact"))}>Contact</Link>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/contact" className="btn btn-green nav-cta" style={{ padding: "10px 18px", fontSize: 13 }}>
              Partner with us <span className="arrow">→</span>
            </Link>
            <button
              type="button"
              className="nav-burger"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span style={{ transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none" }} />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span style={{ transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 8, paddingBottom: 20 }}>
            <Link href="/" className="mobile-link">Home</Link>
            <button
              type="button"
              className="mobile-link mobile-acc"
              onClick={() => setProdOpen((o) => !o)}
              aria-expanded={prodOpen}
            >
              Products <span style={{ transform: prodOpen ? "rotate(180deg)" : "none", transition: "transform 160ms ease" }}>▾</span>
            </button>
            {prodOpen && (
              <div style={{ display: "flex", flexDirection: "column", paddingLeft: 14 }}>
                <Link href="/products" className="mobile-sublink">All products</Link>
                {PRODUCTS.map(([label, href]) => (
                  <Link key={href} href={href} className="mobile-sublink">{label}</Link>
                ))}
              </div>
            )}
            {LINKS.filter(([, h]) => h !== "/").map(([label, href]) => (
              <Link key={href} href={href} className="mobile-link">{label}</Link>
            ))}
            <Link href="/contact" className="btn btn-green" style={{ marginTop: 12, justifyContent: "center" }}>
              Partner with us <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
