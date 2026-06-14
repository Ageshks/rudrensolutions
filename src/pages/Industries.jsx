import { Link } from "react-router-dom";
import { INDUSTRIES } from "../data/data";

export default function Industries() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* HERO */}
      <div style={{
        padding: "80px 24px 100px", background: "linear-gradient(135deg, #1F2937, #111827)",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 20%, rgba(34,197,94,0.12) 0%, transparent 60%)" }}/>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>Industries</span>
          <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", color: "white", marginTop: 12, marginBottom: 16 }}>
            Serving Goa's Diverse Industrial Sectors
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: 15, lineHeight: 1.7 }}>
            Packaging solutions tailored for the specific requirements of each industry — load characteristics, transit conditions, regulatory compliance, and cost constraints.
          </p>
        </div>
      </div>

      {/* INDUSTRIES GRID */}
      <div style={{ padding: "100px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="card-hover" style={{
                background: "white", borderRadius: 24, padding: 32,
                border: "1px solid #E5E7EB", boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                borderTop: `4px solid ${ind.color}`
              }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 16, marginBottom: 20,
                  background: `${ind.color}12`, border: `2px solid ${ind.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28
                }}>{ind.icon}</div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 18, color: "#1F2937", marginBottom: 10 }}>{ind.name}</h3>
                <p style={{ color: "#6B7280", fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>{ind.desc}</p>
                <Link to="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 13, fontWeight: 600, color: "#22C55E", textDecoration: "none"
                }}>Get a Packaging Quote →</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "80px 24px", background: "#1F2937", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "white", marginBottom: 16 }}>
          Don't See Your Industry?
        </h2>
        <p style={{ color: "#9CA3AF", fontSize: 15, maxWidth: 480, margin: "0 auto 32px" }}>
          We serve a wide range of industrial sectors. Contact us to discuss your specific packaging requirements.
        </p>
        <Link to="/contact" style={{
          display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 100,
          background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white",
          fontFamily: "Inter", fontWeight: 700, fontSize: 15, textDecoration: "none",
          boxShadow: "0 8px 24px rgba(34,197,94,0.35)"
        }}>Contact Rudren Solutions →</Link>
      </div>
    </div>
  );
}
