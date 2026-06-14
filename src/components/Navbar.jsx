import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo23.png"; // adjust path


const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Solutions", path: "/solutions", sub: [
    { label: "All Solutions", path: "/solutions" },
    { label: "On-Site Packaging Teams", path: "/solutions/onsite" },
  ]},
  { label: "Products", path: "/products", mega: true },
  { label: "Industries", path: "/industries" },
  // { label: "Gallery", path: "/gallery" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setMegaOpen(null); }, [location]);

  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "center", paddingTop: scrolled ? "8px" : "12px", transition: "all 0.4s ease" }}>
        <nav
          className="pill-nav"
          style={{
            background: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.72)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.12)" : "0 4px 24px rgba(0,0,0,0.08)",
            padding: scrolled ? "8px 24px" : "12px 28px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            transition: "all 0.4s ease",
          }}
        >
          {/* Logo */}

<Link
  to="/"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
  }}
>
  <img
    src={logo}
    alt="Rudren Solutions"
    style={{
      width: "60px",
      height: "60px",
      objectFit: "contain",
    }}
  />

  <div>
    <div
      style={{
        fontFamily: "Poppins",
        fontWeight: 700,
        fontSize: "15px",
        color: "#1F2937",
        lineHeight: 1.1,
      }}
    >
      Rudren Solutions
    </div>

    <div
      style={{
        fontSize: "10px",
        color: "#6B7280",
        lineHeight: 1,
      }}
    >
      Packaging Partner
    </div>
  </div>
</Link>
          

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <div key={link.label} style={{ position: "relative" }}
                onMouseEnter={() => (link.sub || link.mega) && setMegaOpen(link.label)}
                onMouseLeave={() => setMegaOpen(null)}
              >
                <Link
                  to={link.path}
                  style={{
                    display: "flex", alignItems: "center", gap: 4,
                    padding: "6px 12px", borderRadius: "100px",
                    fontFamily: "Inter", fontWeight: 500, fontSize: 13,
                    color: location.pathname === link.path ? "#22C55E" : "#374151",
                    background: location.pathname === link.path ? "rgba(34,197,94,0.1)" : "transparent",
                    textDecoration: "none", transition: "all 0.2s",
                    whiteSpace: "nowrap"
                  }}
                  onMouseEnter={e => { if (location.pathname !== link.path) e.currentTarget.style.color = "#22C55E"; }}
                  onMouseLeave={e => { if (location.pathname !== link.path) e.currentTarget.style.color = "#374151"; }}
                >
                  {link.label}
                  {(link.sub || link.mega) && <span style={{ fontSize: 10 }}>▾</span>}
                </Link>

                {/* Sub dropdown */}
                {link.sub && megaOpen === link.label && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)",
                    background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.6)", borderRadius: 16,
                    boxShadow: "0 24px 60px rgba(0,0,0,0.12)", padding: "8px",
                    minWidth: 220, zIndex: 200
                  }}>
                    {link.sub.map(s => (
                      <Link key={s.path} to={s.path} style={{
                        display: "block", padding: "10px 16px", borderRadius: 10,
                        fontFamily: "Inter", fontSize: 13, color: "#374151", textDecoration: "none",
                        transition: "all 0.15s", fontWeight: 500
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = "rgba(34,197,94,0.08)"; e.currentTarget.style.color = "#22C55E"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#374151"; }}
                      >{s.label}</Link>
                    ))}
                  </div>
                )}

                {/* Mega menu */}
                {link.mega && megaOpen === link.label && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)",
                    background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.6)", borderRadius: 20,
                    boxShadow: "0 24px 60px rgba(0,0,0,0.14)", padding: "20px",
                    minWidth: 340, zIndex: 200
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.08em", marginBottom: 12, textTransform: "uppercase" }}>Products</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      {[
                        { to: "/products", label: "All Products", desc: "Browse complete catalog", icon: "📦" },
                        { to: "/products?brand=itipack", label: "Itipack", desc: "Strapping & sealing machines", icon: "🔧" },
                        { to: "/products?brand=atlanta", label: "Atlanta", desc: "Stretch wrapping systems", icon: "🏭" },
                      ].map(item => (
                        <Link key={item.to} to={item.to} style={{
                          display: "flex", alignItems: "center", gap: 12,
                          padding: "10px 14px", borderRadius: 12, textDecoration: "none", transition: "all 0.15s"
                        }}
                          onMouseEnter={e => e.currentTarget.style.background = "rgba(34,197,94,0.07)"}
                          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                        >
                          <span style={{ fontSize: 22 }}>{item.icon}</span>
                          <div>
                            <div style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 13, color: "#1F2937" }}>{item.label}</div>
                            <div style={{ fontSize: 11, color: "#9CA3AF" }}>{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link to="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "8px 18px", borderRadius: "100px",
              background: "linear-gradient(135deg, #22C55E, #16A34A)",
              color: "white", fontFamily: "Inter", fontWeight: 600, fontSize: 13,
              textDecoration: "none", boxShadow: "0 4px 14px rgba(34,197,94,0.35)",
              transition: "all 0.2s", whiteSpace: "nowrap"
            }}
              className="cta-desktop"
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 20px rgba(34,197,94,0.5)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 14px rgba(34,197,94,0.35)"}
            >
              Get In Touch
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: "none", width: 36, height: 36, borderRadius: "50%",
                background: mobileOpen ? "rgba(34,197,94,0.15)" : "transparent",
                border: "none", cursor: "pointer", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 4
              }}
              className="hamburger"
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: "block", width: 18, height: 2,
                  background: "#1F2937", borderRadius: 2, transition: "all 0.2s",
                  ...(mobileOpen && i === 0 ? { transform: "translateY(6px) rotate(45deg)" } : {}),
                  ...(mobileOpen && i === 1 ? { opacity: 0 } : {}),
                  ...(mobileOpen && i === 2 ? { transform: "translateY(-6px) rotate(-45deg)" } : {}),
                }} />
              ))}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, top: 0, zIndex: 99,
          background: "rgba(255,255,255,0.96)", backdropFilter: "blur(20px)",
          paddingTop: 80, paddingInline: 24, overflowY: "auto"
        }}>
          {NAV_LINKS.map((link, i) => (
            <div key={link.label} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", animationDelay: `${i * 0.05}s` }} className="fade-in-up">
              <Link to={link.path} style={{
                display: "block", padding: "16px 0",
                fontFamily: "Poppins", fontWeight: 600, fontSize: 18, color: "#1F2937", textDecoration: "none"
              }}>{link.label}</Link>
              {link.sub && link.sub.map(s => (
                <Link key={s.path} to={s.path} style={{
                  display: "block", padding: "10px 0 10px 16px",
                  fontFamily: "Inter", fontSize: 14, color: "#6B7280", textDecoration: "none"
                }}>{s.label}</Link>
              ))}
              {link.mega && (
                <>
                  <Link to="/products" style={{ display: "block", padding: "10px 0 10px 16px", fontFamily: "Inter", fontSize: 14, color: "#6B7280", textDecoration: "none" }}>All Products</Link>
                  <Link to="/products?brand=itipack" style={{ display: "block", padding: "10px 0 10px 16px", fontFamily: "Inter", fontSize: 14, color: "#6B7280", textDecoration: "none" }}>Itipack</Link>
                  <Link to="/products?brand=atlanta" style={{ display: "block", padding: "10px 0 10px 16px", fontFamily: "Inter", fontSize: 14, color: "#6B7280", textDecoration: "none" }}>Atlanta</Link>
                </>
              )}
            </div>
          ))}
          <div style={{ padding: "24px 0" }}>
            <Link to="/contact" style={{
              display: "block", padding: "16px 24px", textAlign: "center", borderRadius: 100,
              background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white",
              fontFamily: "Poppins", fontWeight: 600, fontSize: 16, textDecoration: "none"
            }}>Get In Touch</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .cta-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
