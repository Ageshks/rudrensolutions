export default function ProductCard({ product, onClick }) {
  return (
    <div
      className="card-hover"
      onClick={() => onClick(product)}
      style={{
        background: "white", borderRadius: 20,
        border: "1px solid #E5E7EB", overflow: "hidden", cursor: "pointer",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)"
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src={product.image} alt={product.name}
          style={{ width: "100%", height: 200, objectFit: "cover", transition: "transform 0.4s ease" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        />
        <div style={{
          position: "absolute", top: 12, left: 12,
          padding: "4px 10px", borderRadius: 100,
          background: product.brand === "itipack" ? "rgba(34,197,94,0.9)" : product.brand === "atlanta" ? "rgba(59,130,246,0.9)" : "rgba(107,114,128,0.9)",
          color: "white", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em"
        }}>
          {product.brand === "general" ? "General" : product.brand}
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <div style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 500, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{product.category}</div>
        <h3 style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 15, color: "#1F2937", marginBottom: 8, lineHeight: 1.4 }}>{product.name}</h3>
        <p style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.6, marginBottom: 16 }}>
          {product.description.substring(0, 80)}...
        </p>
        <button style={{
          width: "100%", padding: "10px 0", borderRadius: 100,
          background: "rgba(34,197,94,0.08)", border: "1.5px solid rgba(34,197,94,0.3)",
          color: "#16A34A", fontFamily: "Inter", fontWeight: 600, fontSize: 13, cursor: "pointer",
          transition: "all 0.2s"
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "linear-gradient(135deg, #22C55E, #16A34A)"; e.currentTarget.style.color = "white"; e.currentTarget.style.border = "1.5px solid transparent"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(34,197,94,0.08)"; e.currentTarget.style.color = "#16A34A"; e.currentTarget.style.border = "1.5px solid rgba(34,197,94,0.3)"; }}
        >
          Learn More →
        </button>
      </div>
    </div>
  );
}
