import { Link } from "react-router-dom";

const SOLUTIONS = [
  {
    num: "01", icon: "📦", title: "Complete Industrial Packaging",
    desc: "We design and implement end-to-end packaging solutions for manufacturers and exporters. This includes material selection, packaging specification, process design, and supply of all required products and machinery.",
    features: ["Packaging design & specification", "Material selection and sourcing", "Process design and documentation", "Quality control standards"],
    flagship: false
  },
  {
    num: "02", icon: "👥", title: "On-Site Packaging Teams",
    desc: "Our flagship service — dedicated, trained packaging teams deployed at your facility under an annual service agreement. We manage the entire packaging operation so you don't have to.",
    features: ["Dedicated trained staff", "Annual service agreement", "Supervisor & accountability structure", "Consumable supply & management", "Performance reporting"],
    flagship: true,
    link: "/solutions/onsite"
  },
  {
    num: "03", icon: "🚢", title: "Cargo Securing & Ship Lashing",
    desc: "Professional cargo lashing and securing services for container shipments, break-bulk cargo, and vessel loading. Fully compliant with international cargo securing standards.",
    features: ["Container cargo lashing", "Ship loading & securing", "Break-bulk cargo packaging", "Lashing material supply", "IMDG compliant documentation"],
    flagship: false
  },
  {
    num: "04", icon: "🔍", title: "Packaging Audits",
    desc: "Independent packaging assessment service identifying inefficiencies, risks, and cost-saving opportunities in your existing packaging operation. Delivered as a structured written report with recommendations.",
    features: ["Process assessment", "Material & cost analysis", "Risk identification", "Written recommendations report"],
    flagship: false
  },
  {
    num: "05", icon: "🔧", title: "Technical Services & Tool Support",
    desc: "Ongoing technical support for the packaging machinery and tools we supply — including installation, operator training, preventive maintenance, and spare parts supply.",
    features: ["Machine installation", "Operator training", "Preventive maintenance visits", "Spare parts supply", "Breakdown support"],
    flagship: false
  },
];

export default function Solutions() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* HERO */}
      <div style={{
        padding: "80px 24px 100px", background: "linear-gradient(135deg, #1F2937, #111827)",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)" }}/>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>Our Solutions</span>
          <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(30px, 5vw, 52px)", color: "white", marginTop: 12, marginBottom: 20 }}>
            Industrial Packaging Solutions Built for Goa
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: 16, lineHeight: 1.7 }}>
            From complete packaging operations management to one-off cargo securing — Rudren Solutions delivers fit-for-purpose packaging services for every need.
          </p>
        </div>
      </div>

      {/* SOLUTIONS */}
      <div style={{ padding: "100px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>
          {SOLUTIONS.map((sol, i) => (
            <div key={i} style={{
              background: sol.flagship ? "linear-gradient(135deg, #E1F5EE, #DCFCE7)" : "white",
              border: sol.flagship ? "2px solid #22C55E" : "1px solid #E5E7EB",
              borderRadius: 24, padding: sol.flagship ? 44 : 36,
              boxShadow: sol.flagship ? "0 8px 40px rgba(34,197,94,0.18)" : "0 2px 16px rgba(0,0,0,0.05)",
              position: "relative"
            }}>
              {sol.flagship && (
                <div style={{
                  position: "absolute", top: -14, left: 32,
                  padding: "6px 18px", borderRadius: 100,
                  background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white",
                  fontSize: 12, fontWeight: 700, boxShadow: "0 4px 14px rgba(34,197,94,0.4)"
                }}>★ Flagship Service</div>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "flex-start" }}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                    background: sol.flagship ? "rgba(34,197,94,0.15)" : "#F8FAFC",
                    border: sol.flagship ? "2px solid rgba(34,197,94,0.3)" : "1px solid #E5E7EB",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24
                  }}>{sol.icon}</div>
                  <div>
                    <span style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 700, letterSpacing: "0.06em" }}>{sol.num}</span>
                    <h2 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: sol.flagship ? 24 : 20, color: "#1F2937", margin: "6px 0 10px" }}>{sol.title}</h2>
                    <p style={{ color: "#6B7280", fontSize: 14, lineHeight: 1.7, maxWidth: 600, marginBottom: 16 }}>{sol.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {sol.features.map(f => (
                        <span key={f} style={{
                          padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 500,
                          background: sol.flagship ? "rgba(34,197,94,0.12)" : "#F8FAFC",
                          border: sol.flagship ? "1px solid rgba(34,197,94,0.25)" : "1px solid #E5E7EB",
                          color: sol.flagship ? "#16A34A" : "#6B7280"
                        }}>{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {sol.link && (
                  <Link to={sol.link} style={{
                    padding: "12px 24px", borderRadius: 100, whiteSpace: "nowrap",
                    background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white",
                    fontFamily: "Inter", fontWeight: 600, fontSize: 13, textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(34,197,94,0.35)", alignSelf: "flex-start"
                  }}>Learn More →</Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW WE WORK */}
      <div style={{ padding: "100px 24px", background: "#1F2937" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>How We Work</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "white", marginTop: 8 }}>
              Our Engagement Process
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {[
              { step: "01", title: "Requirement Review", icon: "📋", desc: "Understand your packaging volumes, load types, and operating environment." },
              { step: "02", title: "Solution Design", icon: "✏️", desc: "Design a fit-for-purpose solution tailored to your specific needs." },
              { step: "03", title: "Supply & Deployment", icon: "🚀", desc: "Deliver machinery, tools, consumables, and team deployment as agreed." },
              { step: "04", title: "Ongoing Support", icon: "🔄", desc: "Regular reviews, replenishment, and operational support throughout." },
            ].map((item, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 28, textAlign: "center"
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#22C55E", marginBottom: 8, letterSpacing: "0.06em" }}>{item.step}</div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 15, color: "white", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: "#9CA3AF", fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "80px 24px", background: "#E1F5EE", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "#1F2937", marginBottom: 16 }}>
          Ready to Discuss Your Packaging Needs?
        </h2>
        <p style={{ color: "#374151", fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 32px" }}>
          Speak to our team for a free consultation and requirement review.
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
