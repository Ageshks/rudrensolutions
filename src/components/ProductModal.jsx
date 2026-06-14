import { useEffect } from "react";

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "rgba(255,255,255,0.97)", backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.8)", borderRadius: 24,
          maxWidth: 760, width: "100%", maxHeight: "90vh", overflowY: "auto",
          animation: "fadeInUp 0.3s ease",
          boxShadow: "0 40px 100px rgba(0,0,0,0.2)"
        }}
      >
        {/* Header */}
        <div style={{ position: "relative" }}>
          <img src={product.image} alt={product.name}
            style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: "24px 24px 0 0" }} />
          <div style={{
            position: "absolute", inset: 0, borderRadius: "24px 24px 0 0",
            background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)"
          }}/>
          <button onClick={onClose} style={{
            position: "absolute", top: 16, right: 16,
            width: 36, height: 36, borderRadius: "50%",
            background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 700, color: "#374151", transition: "all 0.2s"
          }}>×</button>
          <div style={{ position: "absolute", bottom: 16, left: 20 }}>
            <span style={{
              display: "inline-block", padding: "4px 12px", borderRadius: 100,
              background: "rgba(34,197,94,0.9)", color: "white", fontSize: 11, fontWeight: 600
            }}>{product.category}</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: 32 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
            <div>
              <span style={{ fontSize: 11, color: "#22C55E", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {product.brand.toUpperCase()}
              </span>
              <h2 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 22, color: "#1F2937", marginTop: 4 }}>{product.name}</h2>
            </div>
          </div>

          <p style={{ color: "#6B7280", lineHeight: 1.7, marginBottom: 24, fontSize: 14 }}>{product.description}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
            {/* Features */}
            <div>
              <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 14, color: "#1F2937", marginBottom: 12 }}>Key Features</div>
              {product.features.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
                  <span style={{
                    width: 18, height: 18, borderRadius: "50%",
                    background: "rgba(34,197,94,0.12)", color: "#22C55E",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1
                  }}>✓</span>
                  <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>
            {/* Applications */}
            <div>
              <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 14, color: "#1F2937", marginBottom: 12 }}>Applications</div>
              {product.applications.map((a, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center" }}>
                  <span style={{ color: "#22C55E", fontSize: 14 }}>→</span>
                  <span style={{ fontSize: 13, color: "#374151" }}>{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 14, color: "#1F2937", marginBottom: 12 }}>Technical Specifications</div>
            <div style={{ background: "#F8FAFC", borderRadius: 12, overflow: "hidden", border: "1px solid #E5E7EB" }}>
              {product.specs.map((s, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "10px 16px",
                  borderBottom: i < product.specs.length - 1 ? "1px solid #E5E7EB" : "none",
                  background: i % 2 === 0 ? "white" : "#F8FAFC"
                }}>
                  <span style={{ fontSize: 13, color: "#6B7280", fontWeight: 500 }}>{s.key}</span>
                  <span style={{ fontSize: 13, color: "#1F2937", fontWeight: 600 }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/contact" style={{
              flex: 1, minWidth: 140, padding: "14px 24px", borderRadius: 100, textAlign: "center",
              background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white",
              fontFamily: "Inter", fontWeight: 600, fontSize: 14, textDecoration: "none",
              boxShadow: "0 4px 14px rgba(34,197,94,0.35)"
            }}>Send Inquiry</a>
            <a
              href={`https://wa.me/919607024997?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                flex: 1, minWidth: 140, padding: "14px 24px", borderRadius: 100, textAlign: "center",
                background: "#25D366", color: "white",
                fontFamily: "Inter", fontWeight: 600, fontSize: 14, textDecoration: "none",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8
              }}
            >
              💬 WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
