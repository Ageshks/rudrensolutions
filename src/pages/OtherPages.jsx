import { useState } from "react";
import { FAQS } from "../data/data";
import { Link } from "react-router-dom";

// ============ GALLERY ============
const GALLERY_ITEMS = [
  { cat: "Machines", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", title: "Stretch Wrapping Machine" },
  { cat: "Products", img: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&q=80", title: "PET Strapping Rolls" },
  { cat: "Machines", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", title: "Industrial Packaging Line" },
  { cat: "Installation", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80", title: "Machine Installation" },
  { cat: "Factory", img: "https://images.unsplash.com/photo-1565799557186-bdf9af3e22c5?w=600&q=80", title: "Orbital Wrapper" },
  { cat: "Products", img: "https://images.unsplash.com/photo-1530676845447-5e42fffec4f8?w=600&q=80", title: "Stretch Film" },
  { cat: "Machines", img: "https://images.unsplash.com/photo-1605463617032-5e24bdcf3e94?w=600&q=80", title: "Carton Sealing Machine" },
  { cat: "Factory", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", title: "Factory Operations" },
  { cat: "Products", img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80", title: "Strapping Tools" },
  { cat: "Installation", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80", title: "Equipment Setup" },
  { cat: "Factory", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80", title: "Packing Operations" },
  { cat: "Products", img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&q=80", title: "Cargo Lashing Equipment" },
];

const GALLERY_CATS = ["All", "Machines", "Products", "Installation", "Factory"];

export function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.cat === active);

  return (
    <div style={{ paddingTop: 80 }}>
      <div style={{ padding: "80px 24px 100px", background: "linear-gradient(135deg, #1F2937, #111827)", textAlign: "center" }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>Gallery</span>
        <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", color: "white", marginTop: 12, marginBottom: 16 }}>
          Our Work in Pictures
        </h1>
        <p style={{ color: "#9CA3AF", fontSize: 15, lineHeight: 1.7 }}>Packaging machinery, products, installations, and factory operations.</p>
      </div>

      <div style={{ padding: "60px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Filter tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
            {GALLERY_CATS.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`tab-btn${active === cat ? " active" : ""}`}
                style={{
                  padding: "8px 20px", borderRadius: 100,
                  border: active === cat ? "none" : "1.5px solid #E5E7EB",
                  background: active === cat ? "" : "white",
                  color: active === cat ? "" : "#374151",
                  fontFamily: "Inter", fontWeight: 600, fontSize: 13, cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >{cat}</button>
            ))}
          </div>

          {/* Masonry grid */}
          <div style={{ columns: "3 280px", gap: 16 }}>
            {filtered.map((item, i) => (
              <div key={i} className="card-hover" onClick={() => setLightbox(item)}
                style={{ breakInside: "avoid", marginBottom: 16, borderRadius: 16, overflow: "hidden", cursor: "pointer", position: "relative" }}>
                <img src={item.img} alt={item.title} style={{ width: "100%", display: "block" }} />
                <div style={{
                  position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  opacity: 0, transition: "opacity 0.3s", display: "flex", alignItems: "flex-end", padding: 16
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0}
                >
                  <div>
                    <div style={{ fontSize: 11, color: "#22C55E", fontWeight: 600 }}>{item.cat}</div>
                    <div style={{ color: "white", fontFamily: "Poppins", fontWeight: 600, fontSize: 14 }}>{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center", padding: 24
        }} onClick={() => setLightbox(null)}>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 800, width: "100%", position: "relative" }}>
            <img src={lightbox.img} alt={lightbox.title} style={{ width: "100%", borderRadius: 16 }} />
            <button onClick={() => setLightbox(null)} style={{
              position: "absolute", top: -16, right: -16, width: 36, height: 36, borderRadius: "50%",
              background: "white", border: "none", cursor: "pointer", fontSize: 20, fontWeight: 700, color: "#374151"
            }}>×</button>
            <div style={{ color: "white", textAlign: "center", marginTop: 12 }}>
              <span style={{ fontSize: 11, color: "#22C55E", fontWeight: 600 }}>{lightbox.cat}</span>
              <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 16, marginTop: 4 }}>{lightbox.title}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============ FAQ ============
export function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ paddingTop: 80 }}>
      <div style={{ padding: "80px 24px 100px", background: "linear-gradient(135deg, #1F2937, #111827)", textAlign: "center" }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>FAQ</span>
        <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", color: "white", marginTop: 12, marginBottom: 16 }}>
          Frequently Asked Questions
        </h1>
        <p style={{ color: "#9CA3AF", fontSize: 15, lineHeight: 1.7 }}>Everything you need to know about Rudren Solutions and our services.</p>
      </div>

      <div style={{ padding: "100px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{
              background: "white", borderRadius: 16, marginBottom: 12,
              border: open === i ? "1.5px solid #22C55E" : "1px solid #E5E7EB",
              overflow: "hidden", transition: "all 0.3s",
              boxShadow: open === i ? "0 4px 20px rgba(34,197,94,0.12)" : "none"
            }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: "100%", padding: "20px 24px", textAlign: "left", background: "transparent", border: "none",
                cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16
              }}>
                <span style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 15, color: "#1F2937", lineHeight: 1.4 }}>{faq.q}</span>
                <span style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: open === i ? "#22C55E" : "#F8FAFC",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: open === i ? "white" : "#6B7280", fontSize: 16, transition: "all 0.2s",
                  transform: open === i ? "rotate(180deg)" : "none"
                }}>▾</span>
              </button>
              <div className={`accordion-content${open === i ? " open" : ""}`} style={{ padding: open === i ? "0 24px 20px" : "0 24px" }}>
                <p style={{ color: "#6B7280", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: 48, padding: 40, background: "#E1F5EE", borderRadius: 24 }}>
            <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 20, color: "#1F2937", marginBottom: 10 }}>Still Have Questions?</h3>
            <p style={{ color: "#374151", fontSize: 14, marginBottom: 20 }}>Contact our team for a personalized response.</p>
            <Link to="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 100,
              background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white",
              fontFamily: "Inter", fontWeight: 700, fontSize: 14, textDecoration: "none"
            }}>Contact Us →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ CONTACT ============
export function Contact() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div style={{ paddingTop: 80 }}>
      <div style={{ padding: "80px 24px 100px", background: "linear-gradient(135deg, #1F2937, #111827)", textAlign: "center" }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>Contact</span>
        <h1 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", color: "white", marginTop: 12, marginBottom: 16 }}>
          Get In Touch With Our Team
        </h1>
        <p style={{ color: "#9CA3AF", fontSize: 15, lineHeight: 1.7 }}>We're here to help with any packaging inquiry, product question, or consultation request.</p>
      </div>

      <div style={{ padding: "80px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          {/* FORM */}
          <div style={{ background: "white", borderRadius: 24, padding: 40, border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 20, color: "#1F2937", marginBottom: 8 }}>Inquiry Sent!</h3>
                <p style={{ color: "#6B7280", fontSize: 14 }}>Thank you. Our team will contact you within 1 business day.</p>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 22, color: "#1F2937", marginBottom: 8 }}>Send an Inquiry</h2>
                <p style={{ color: "#9CA3AF", fontSize: 13, marginBottom: 28 }}>Fill in the form below and we'll get back to you shortly.</p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { key: "name", label: "Full Name *", type: "text", placeholder: "Your full name" },
                    { key: "company", label: "Company Name *", type: "text", placeholder: "Your company" },
                    { key: "phone", label: "Phone Number *", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                    { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  ].map(field => (
                    <div key={field.key}>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>{field.label}</label>
                      <input type={field.type} placeholder={field.placeholder} required={field.label.includes("*")}
                        value={form[field.key]} onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                        style={{
                          width: "100%", padding: "10px 14px", borderRadius: 10,
                          border: "1.5px solid #E5E7EB", fontFamily: "Inter", fontSize: 14, color: "#374151",
                          outline: "none", transition: "border-color 0.2s"
                        }}
                        onFocus={e => e.target.style.borderColor = "#22C55E"}
                        onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>Service Required</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      style={{
                        width: "100%", padding: "10px 14px", borderRadius: 10,
                        border: "1.5px solid #E5E7EB", fontFamily: "Inter", fontSize: 14, color: "#374151",
                        outline: "none", background: "white"
                      }}>
                      <option value="">Select a service</option>
                      <option>On-Site Packaging Teams</option>
                      <option>Machinery Supply</option>
                      <option>Packaging Consumables</option>
                      <option>Cargo Securing & Lashing</option>
                      <option>Packaging Audit</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>Requirement Description</label>
                    <textarea placeholder="Tell us about your packaging requirements..."
                      rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{
                        width: "100%", padding: "10px 14px", borderRadius: 10,
                        border: "1.5px solid #E5E7EB", fontFamily: "Inter", fontSize: 14, color: "#374151",
                        outline: "none", resize: "vertical"
                      }}
                      onFocus={e => e.target.style.borderColor = "#22C55E"}
                      onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                    />
                  </div>
                  <button type="submit" style={{
                    padding: "14px", borderRadius: 100,
                    background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white",
                    fontFamily: "Inter", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(34,197,94,0.35)"
                  }}>Send Inquiry →</button>
                </form>
              </>
            )}
          </div>

          {/* CONTACT INFO */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{
              background: "#1F2937", borderRadius: 24, padding: 36,
              color: "white"
            }}>
              <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 20, marginBottom: 24 }}>Contact Information</h3>
              {[
                { icon: "📍", label: "Address", val: "114/C, Zoriwaddo, Davorlim, South Goa – 403707" },
                { icon: "📞", label: "Phone", val: "+91 9607024997", href: "tel:+919607024997" },
                { icon: "📧", label: "Email", val: "info@rudren.com", href: "mailto:info@rudren.com" },
                { icon: "🌐", label: "Website", val: "www.rudren.com", href: "https://www.rudren.com" },
                { icon: "🕐", label: "Business Hours", val: "Monday to Saturday: 9:00 AM – 7:00 PM" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 20, alignItems: "flex-start" }}>
                  <span style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16
                  }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 600, marginBottom: 2 }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ color: "white", fontSize: 14, textDecoration: "none" }}>{item.val}</a>
                      : <div style={{ color: "white", fontSize: 14, lineHeight: 1.5 }}>{item.val}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <a href="tel:+919607024997" style={{
                padding: "20px", borderRadius: 16, background: "#E1F5EE",
                border: "1.5px solid rgba(34,197,94,0.25)", textDecoration: "none", textAlign: "center"
              }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>📞</div>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 13, color: "#1F2937" }}>Call Us</div>
                <div style={{ fontSize: 11, color: "#22C55E", marginTop: 2 }}>+91 9607024997</div>
              </a>
              <a href="https://wa.me/919607024997" target="_blank" rel="noopener noreferrer" style={{
                padding: "20px", borderRadius: 16, background: "#F0FDF4",
                border: "1.5px solid rgba(37,211,102,0.3)", textDecoration: "none", textAlign: "center"
              }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>💬</div>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 13, color: "#1F2937" }}>WhatsApp</div>
                <div style={{ fontSize: 11, color: "#16A34A", marginTop: 2 }}>Quick Response</div>
              </a>
            </div>

            {/* Map embed placeholder */}
            <div style={{ borderRadius: 20, overflow: "hidden", height: 220, background: "#E5E7EB", position: "relative" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.1234!2d73.9876!3d15.2345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDEzJzQ0LjAiTiA3M8KwNTknMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="220" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Rudren Solutions Location"
              />
              <div style={{
                position: "absolute", top: 12, left: 12,
                background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)",
                borderRadius: 10, padding: "8px 14px", boxShadow: "0 2px 12px rgba(0,0,0,0.12)"
              }}>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 12, color: "#1F2937" }}>Rudren Solutions LLP</div>
                <div style={{ fontSize: 11, color: "#6B7280" }}>Davorlim, South Goa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
