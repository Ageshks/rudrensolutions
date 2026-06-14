import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer style={{
      background: "#1F2937",
      color: "white",
      padding: "64px 24px 24px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
  style={{
    width: 80,
    height: 80,
    borderRadius: 12,
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  }}
>
  <img
    src={logo}
    alt="Rudren Solutions"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
    }}
  />
</div>
              <div>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 16, color: "white" }}>Rudren Solutions LLP</div>
                <div style={{ fontSize: 11, color: "#9CA3AF" }}>Goa's Packaging Partner</div>
              </div>
            </div>
            <p style={{ color: "#9CA3AF", fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
              Goa's trusted industrial packaging solutions partner — supplying machinery, tools, consumables, and dedicated on-site packaging teams.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["📞", "📧", "💬"].map((icon, i) => (
                <a key={i} href={i === 0 ? "tel:+919607024997" : i === 1 ? "mailto:info@rudren.com" : "https://wa.me/919607024997"}
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, textDecoration: "none", transition: "all 0.2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(34,197,94,0.2)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 14, color: "white", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.06em" }}>Quick Links</div>
            {[
              { label: "About Us", path: "/about" },
              { label: "Solutions", path: "/solutions" },
              { label: "Products", path: "/products" },
              { label: "Industries", path: "/industries" },
              { label: "On-Site Teams", path: "/solutions/onsite" },
              { label: "Contact", path: "/contact" },
            ].map(link => (
              <Link key={link.path} to={link.path} style={{
                display: "block", color: "#9CA3AF", fontSize: 13, textDecoration: "none",
                marginBottom: 10, transition: "color 0.2s"
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#22C55E"}
                onMouseLeave={e => e.currentTarget.style.color = "#9CA3AF"}
              >→ {link.label}</Link>
            ))}
          </div>

          {/* Products */}
          <div>
            <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 14, color: "white", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.06em" }}>Products</div>
            {["Strapping Machines", "Stretch Wrappers", "Carton Sealers", "Orbital Wrappers", "Strapping Tools", "Cargo Lashing"].map(p => (
              <div key={p} style={{ color: "#9CA3AF", fontSize: 13, marginBottom: 10 }}>→ {p}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 14, color: "white", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.06em" }}>Contact</div>
            {[
              { icon: "📍", text: "114/C, Zoriwaddo, Davorlim, South Goa – 403707" },
              { icon: "📞", text: "+91 9607024997" },
              { icon: "📧", text: "info@rudren.com" },
              { icon: "🌐", text: "www.rudren.com" },
              { icon: "🕐", text: "Mon–Sat: 9:00 AM – 7:00 PM" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 14, marginTop: 1 }}>{item.icon}</span>
                <span style={{ color: "#9CA3AF", fontSize: 13, lineHeight: 1.5 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12
        }}>
          <div style={{ color: "#6B7280", fontSize: 12 }}>
            © 2025 Rudren Solutions LLP. All rights reserved. | Goa, India
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {["Privacy Policy", "Terms of Service"].map(t => (
              <span key={t} style={{ color: "#6B7280", fontSize: 12, cursor: "pointer" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
