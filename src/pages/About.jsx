import { Link } from "react-router-dom";

const VALUES = [
  { icon: "🤝", title: "Trusted Partnerships", desc: "We build long-term relationships with clients based on transparency, accountability, and consistent delivery." },
  { icon: "🎓", title: "Packaging Expertise", desc: "Our team brings deep industry knowledge to every engagement — from product selection to on-site operations management." },
  { icon: "🎯", title: "Fit-for-Purpose Solutions", desc: "We design solutions around your specific load, transit conditions, and operating environment — not off-the-shelf packages." },
  { icon: "⭐", title: "Quality Commitment", desc: "From the products we supply to the teams we deploy, quality is non-negotiable at every level of our service." },
];

export default function About() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* HERO */}
      <div style={{
        position: "relative", padding: "80px 24px 100px",
        background: "linear-gradient(135deg, #1F2937 0%, #111827 100%)", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)" }}/>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>About Us</span>
          <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(32px, 5vw, 56px)", color: "white", marginTop: 12, marginBottom: 20, lineHeight: 1.2 }}>
            Goa's Industrial Packaging Solutions Partner
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: 16, lineHeight: 1.7 }}>
            Rudren Solutions LLP — a specialist industrial packaging company helping Goa's manufacturers, exporters, and logistics businesses package better.
          </p>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div style={{ padding: "100px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>Who We Are</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "#1F2937", marginTop: 12, marginBottom: 20 }}>
              More Than a Packaging Supplier
            </h2>
            <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
              Rudren Solutions LLP is a Goa-based industrial packaging company that goes beyond simply supplying products. We assess your requirements, design appropriate solutions, supply the right machinery and consumables, and where required, deploy and manage dedicated packaging teams at your facility.
            </p>
            <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
              Founded by packaging professionals with experience across manufacturing, export, and logistics sectors, Rudren brings a consultative approach to every client engagement.
            </p>
            <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.8 }}>
              We are the authorized partner for Itipack and Atlanta — two respected names in industrial packaging machinery — and we supply a wide range of packaging consumables and tools to clients across Goa and neighboring states.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=80" alt="About Rudren"
              style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 24 }} />
          </div>
        </div>
      </div>

      {/* WORKING WITH RUDREN */}
      <div style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>Working With Rudren</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "#1F2937", marginTop: 8 }}>
              How We Engage With Clients
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { step: "01", title: "Requirement Review", desc: "We understand your packaging volumes, load types, transit requirements, and operating environment." },
              { step: "02", title: "Solution Design", desc: "We design a fit-for-purpose solution — products, machinery, and/or team deployment as needed." },
              { step: "03", title: "Supply & Deployment", desc: "We supply machinery, tools, and consumables. Where required, we deploy on-site packaging teams." },
              { step: "04", title: "Ongoing Support", desc: "We provide regular performance reviews, consumable replenishment, and operational support." },
            ].map((item, i) => (
              <div key={i} style={{
                background: "#F8FAFC", borderRadius: 20, padding: 28,
                border: "1px solid #E5E7EB", position: "relative"
              }}>
                <div style={{
                  fontSize: 13, fontWeight: 800, color: "#22C55E",
                  fontFamily: "Poppins", marginBottom: 16, opacity: 0.6
                }}>{item.step}</div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 16, color: "#1F2937", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "#6B7280", fontSize: 13, lineHeight: 1.7 }}>{item.desc}</p>
                {i < 3 && (
                  <div style={{
                    position: "absolute", right: -12, top: "50%", transform: "translateY(-50%)",
                    color: "#22C55E", fontSize: 20, zIndex: 1, display: "none"
                  }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CORE VALUES */}
      <div style={{ padding: "100px 24px", background: "#1F2937" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>Core Values</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "white", marginTop: 8 }}>
              What We Stand For
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {VALUES.map((v, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 32,
                textAlign: "center", transition: "all 0.3s"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(34,197,94,0.1)"; e.currentTarget.style.borderColor = "rgba(34,197,94,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 16, color: "white", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: "#9CA3AF", fontSize: 13, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMMITMENT */}
      <div style={{ padding: "80px 24px", background: "#E1F5EE" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "#1F2937", marginBottom: 16 }}>
            Our Commitment
          </h2>
          <p style={{ color: "#374151", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Rudren Solutions is committed to being a long-term packaging partner for every client we serve. We measure our success by the operational efficiency, cost savings, and packaging quality outcomes we deliver to your business.
          </p>
          <Link to="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 100,
            background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white",
            fontFamily: "Inter", fontWeight: 700, fontSize: 15, textDecoration: "none",
            boxShadow: "0 8px 24px rgba(34,197,94,0.35)"
          }}>Talk to Our Team →</Link>
        </div>
      </div>
    </div>
  );
}
