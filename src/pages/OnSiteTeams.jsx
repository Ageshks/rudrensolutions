import { Link } from "react-router-dom";

export default function OnSiteTeams() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Breadcrumb */}
      <div style={{ background: "#F8FAFC", padding: "12px 24px", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span style={{ fontSize: 13, color: "#9CA3AF" }}>
            <Link to="/" style={{ color: "#9CA3AF", textDecoration: "none" }}>Home</Link> &gt;{" "}
            <Link to="/solutions" style={{ color: "#9CA3AF", textDecoration: "none" }}>Solutions</Link> &gt;{" "}
            <span style={{ color: "#22C55E", fontWeight: 600 }}>On-Site Packaging Teams</span>
          </span>
        </div>
      </div>

      {/* HERO */}
      <div style={{
        padding: "80px 24px 100px", background: "linear-gradient(135deg, #1F2937, #111827)",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 50%, rgba(34,197,94,0.12) 0%, transparent 60%)" }}/>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{
            display: "inline-block", padding: "6px 16px", borderRadius: 100,
            background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)",
            color: "#22C55E", fontSize: 12, fontWeight: 700, marginBottom: 16, letterSpacing: "0.06em"
          }}>★ FLAGSHIP SERVICE</span>
          <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(30px, 5vw, 54px)", color: "white", marginTop: 8, marginBottom: 20, lineHeight: 1.2 }}>
            On-Site Packaging Teams
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>
            Dedicated, trained packaging teams deployed at your facility under an annual service agreement — bringing consistency, accountability, and operational efficiency to your packaging process.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" style={{
              padding: "14px 32px", borderRadius: 100,
              background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white",
              fontFamily: "Inter", fontWeight: 700, fontSize: 15, textDecoration: "none",
              boxShadow: "0 8px 24px rgba(34,197,94,0.4)"
            }}>Talk to Us About On-Site Packaging</Link>
            <a href="tel:+919607024997" style={{
              padding: "14px 28px", borderRadius: 100,
              background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.2)", color: "white",
              fontFamily: "Inter", fontWeight: 600, fontSize: 15, textDecoration: "none"
            }}>📞 Call Now</a>
          </div>
        </div>
      </div>

      {/* PROBLEM WE SOLVE */}
      <div style={{ padding: "100px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>The Problem We Solve</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "#1F2937", marginTop: 8 }}>
              Why Manufacturers Struggle With Packaging
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              { icon: "😤", title: "Inconsistent Quality", desc: "Packaging quality varies based on who is working that day — leading to damage, returns, and customer complaints." },
              { icon: "🔄", title: "High Staff Turnover", desc: "Casual packaging staff are unreliable. Training investment is lost when workers leave." },
              { icon: "⏰", title: "Supervision Burden", desc: "Your production team spends time managing packaging workers instead of focusing on core operations." },
              { icon: "📊", title: "No Accountability", desc: "Without a structured process and reporting, packaging inefficiencies go unnoticed and uncorrected." },
            ].map((item, i) => (
              <div key={i} style={{
                background: "white", borderRadius: 20, padding: 28,
                border: "1px solid #FEE2E2", borderLeft: "4px solid #EF4444"
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 15, color: "#1F2937", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: "#6B7280", fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICE OVERVIEW */}
      <div style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>The Solution</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "#1F2937", marginTop: 12, marginBottom: 20 }}>
              Your Packaging Operation, Fully Managed
            </h2>
            <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
              Under our On-Site Packaging Teams service, Rudren Solutions deploys a dedicated team of trained packaging operators and a supervisor at your facility. We are responsible for the team — their performance, training, discipline, and output.
            </p>
            <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
              You get consistent packaging quality, measurable outputs, and complete accountability — without the headaches of managing packaging workers yourself.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Trained packaging operators provided by us",
                "Dedicated supervisor manages daily operations",
                "Standard operating procedures established",
                "Consumables sourced and replenished by us",
                "Monthly performance reporting provided",
                "Annual service agreement with clear SLAs",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: "rgba(34,197,94,0.12)", color: "#22C55E",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, flexShrink: 0, marginTop: 2
                  }}>✓</span>
                  <span style={{ color: "#374151", fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80" alt="On-Site Packaging"
              style={{ width: "100%", height: 460, objectFit: "cover", borderRadius: 24 }} />
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ padding: "100px 24px", background: "#1F2937" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>How It Works</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "white", marginTop: 8 }}>
              From Assessment to Deployment
            </h2>
          </div>
          <div style={{ position: "relative" }}>
            {[
              { step: 1, title: "Initial Assessment", desc: "Our team visits your facility to understand packaging volumes, load types, current process, and team requirements." },
              { step: 2, title: "Proposal & Agreement", desc: "We design a tailored deployment plan and present an annual service agreement with clear terms, SLAs, and pricing." },
              { step: 3, title: "Team Deployment", desc: "We deploy trained operators and a supervisor. We run induction and establish SOPs during a controlled handover period." },
              { step: 4, title: "Steady-State Operations", desc: "Your packaging operation runs under our management. We handle attendance, discipline, training, and performance." },
              { step: 5, title: "Review & Improvement", desc: "Monthly performance reviews identify areas for improvement. We adapt the operation as your needs evolve." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                  background: "linear-gradient(135deg, #22C55E, #16A34A)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "Poppins", fontWeight: 800, fontSize: 16, color: "white"
                }}>{item.step}</div>
                <div style={{
                  background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px 24px", flex: 1
                }}>
                  <h3 style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 16, color: "white", marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ color: "#9CA3AF", fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANNUAL SERVICE AGREEMENT */}
      <div style={{ padding: "100px 24px", background: "#E1F5EE" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>Annual Service Agreement</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "#1F2937", marginTop: 8 }}>
              A Structured, Accountable Partnership
            </h2>
          </div>
          <div style={{
            background: "white", borderRadius: 24, padding: 48,
            border: "2px solid rgba(34,197,94,0.3)",
            boxShadow: "0 12px 40px rgba(34,197,94,0.12)"
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
              {[
                { icon: "📄", title: "Clear SLAs", desc: "Defined service levels for team size, attendance, output targets, and quality standards." },
                { icon: "👥", title: "Our Responsibility", desc: "Staffing, training, supervision, and team management — all handled by Rudren." },
                { icon: "📦", title: "Consumable Supply", desc: "We source and replenish packaging consumables as part of the service agreement." },
                { icon: "📊", title: "Monthly Reporting", desc: "Regular reporting on team performance, packaging output, and operational KPIs." },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 15, color: "#1F2937", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ color: "#6B7280", fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "80px 24px", background: "#1F2937", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(24px, 3vw, 36px)", color: "white", marginBottom: 16 }}>
          Ready to Hand Over Your Packaging?
        </h2>
        <p style={{ color: "#9CA3AF", fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 32px" }}>
          Contact us to discuss your facility requirements and get a proposal for an On-Site Packaging Team deployment.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/contact" style={{
            padding: "14px 32px", borderRadius: 100,
            background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white",
            fontFamily: "Inter", fontWeight: 700, fontSize: 15, textDecoration: "none",
            boxShadow: "0 8px 24px rgba(34,197,94,0.4)"
          }}>Request a Proposal</Link>
          <a href="https://wa.me/919607024997" target="_blank" rel="noopener noreferrer" style={{
            padding: "14px 28px", borderRadius: 100,
            background: "#25D366", color: "white",
            fontFamily: "Inter", fontWeight: 600, fontSize: 15, textDecoration: "none"
          }}>💬 WhatsApp Us</a>
        </div>
      </div>
    </div>
  );
}
