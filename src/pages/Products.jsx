import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS } from "../data/data";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const TABS = [
  { key: "all", label: "All Products" },
  { key: "itipack", label: "Itipack" },
  { key: "atlanta", label: "Atlanta" },
  { key: "general", label: "General" },
];

export default function Products() {
  const [searchParams] = useSearchParams();
  const initBrand = searchParams.get("brand") || "all";
  const [activeTab, setActiveTab] = useState(initBrand);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const brand = searchParams.get("brand");
    if (brand) setActiveTab(brand);
  }, [searchParams]);

  const filtered = PRODUCTS.filter(p => {
    const matchTab = activeTab === "all" || p.brand === activeTab;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div style={{ paddingTop: 80 }}>
      {/* HERO */}
      <div style={{
        padding: "80px 24px 100px", background: "linear-gradient(135deg, #1F2937, #111827)",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 50%, rgba(34,197,94,0.12) 0%, transparent 60%)" }}/>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>Our Products</span>
          <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", color: "white", marginTop: 12, marginBottom: 16 }}>
            Industrial Packaging Machinery & Consumables
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: 15, lineHeight: 1.7 }}>
            Premium packaging machinery, tools, and consumables from Itipack, Atlanta, and specialist suppliers — specified for industrial applications across Goa.
          </p>
        </div>
      </div>

      {/* TABS + SEARCH */}
      <div style={{ background: "white", borderBottom: "1px solid #E5E7EB", padding: "20px 24px", position: "sticky", top: 70, zIndex: 90 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {TABS.map(tab => (
              <button
                key={tab.key}
                className={`tab-btn${activeTab === tab.key ? " active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: "8px 20px", borderRadius: 100,
                  border: activeTab === tab.key ? "none" : "1.5px solid #E5E7EB",
                  background: activeTab === tab.key ? "" : "white",
                  color: activeTab === tab.key ? "" : "#374151",
                  fontFamily: "Inter", fontWeight: 600, fontSize: 13, cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >{tab.label}</button>
            ))}
          </div>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: "#9CA3AF" }}>🔍</span>
            <input
              type="text" placeholder="Search products..."
              value={search} onChange={e => setSearch(e.target.value)}
              style={{
                paddingLeft: 36, paddingRight: 16, paddingTop: 8, paddingBottom: 8,
                borderRadius: 100, border: "1.5px solid #E5E7EB",
                fontFamily: "Inter", fontSize: 13, color: "#374151", outline: "none",
                width: 220
              }}
            />
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div style={{ padding: "60px 24px", background: "#F8FAFC", minHeight: 400 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 24px", color: "#9CA3AF" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 18, color: "#374151" }}>No products found</div>
              <div style={{ fontSize: 14, marginTop: 8 }}>Try adjusting your search or filter</div>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: 24, color: "#6B7280", fontSize: 13 }}>
                Showing <strong style={{ color: "#1F2937" }}>{filtered.length}</strong> product{filtered.length !== 1 ? "s" : ""}
                {activeTab !== "all" && ` from ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} onClick={setSelectedProduct} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "80px 24px", background: "#1F2937", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(22px, 3vw, 34px)", color: "white", marginBottom: 14 }}>
          Can't Find What You Need?
        </h2>
        <p style={{ color: "#9CA3AF", fontSize: 15, maxWidth: 480, margin: "0 auto 28px" }}>
          We have access to a wider catalog of packaging products and can source specific items for your requirements. Contact us to discuss.
        </p>
        <a href="https://wa.me/919607024997?text=Hi,%20I%20need%20help%20finding%20a%20packaging%20product" target="_blank" rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 100,
            background: "#25D366", color: "white",
            fontFamily: "Inter", fontWeight: 700, fontSize: 15, textDecoration: "none"
          }}>💬 WhatsApp Us Your Requirement</a>
      </div>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}
