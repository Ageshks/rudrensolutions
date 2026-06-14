import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { INDUSTRIES, TESTIMONIALS } from "../data/data";

const SLIDES = [
  {
    title: "Packaging Built Around Your Operation",
    text: "From requirement assessment and material supply to dedicated on-site packaging teams — Rudren Solutions manages your entire packaging process, so your team can focus on what they do best.",
    cta: "Explore Our Solutions", link: "/solutions",
    image: "https://www.mithradh.com/images/main-slider/1.jpg",
    badge: "Complete Packaging Management"
  },
  {
    title: "Industrial Packaging Products, Sourced and Supplied for Goa",
    text: "Strapping tools, stretch wrapping machines, cargo lashing, and packaging consumables — the right products, specified for your load, your transit, and your operating conditions.",
    cta: "Explore Our Products", link: "/products",
    image: "https://www.mithradh.com/images/main-slider/2.jpg",
    badge: "Premium Product Supply"
  },
  {
    title: "Your Packaging Operation, Managed by Us",
    text: "Dedicated on-site packaging teams, deployed at your facility under an annual service agreement — bringing consistency, accountability, and operational efficiency to your packaging process.",
    cta: "Talk to Us About On-Site Packaging", link: "/solutions/onsite",
    image: "https://www.mithradh.com/images/main-slider/1.jpg",
    badge: "Flagship Service"
  },
];

const STATS = [
  { value: "12+", label: "Industries Served" },
  { value: "200+", label: "Products Supplied" },
  // { value: "50+", label: "Industrial Clients" },
  { value: "5+", label: "Years Experience" },
];

const SOLUTIONS = [
  { num: "01", title: "Packaging Solutions", icon: "📦", desc: "End-to-end industrial packaging design and implementation." },
  { num: "02", title: "Machinery & Tools Supply", icon: "⚙️", desc: "Premium strapping, wrapping, and sealing machinery from Itipack & Atlanta." },
  { num: "03", title: "On-Site Packaging Teams", icon: "👥", desc: "Dedicated packaging teams deployed at your facility under annual agreements.", flagship: true },
  { num: "04", title: "Cargo & Export Packaging", icon: "🚢", desc: "Ship lashing, container packing, and export-grade protection solutions." },
];

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !observed.current) {
        observed.current = true;
        const num = parseInt(target);
        const duration = 1500;
        const step = Math.ceil(num / (duration / 16));
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + step, num);
          setCount(current);
          if (current >= num) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{target.includes("+") ? "+" : ""}</span>;
}

export default function Home() {
  return (
    <div style={{ paddingTop: 0 }}>
      {/* HERO */}
      <div style={{ position: "relative", height: "100vh", minHeight: 600 }}>
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          style={{ height: "100%" }}
        >
          {SLIDES.map((slide, i) => (
            <SwiperSlide key={i}>
              <div style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
                <img src={slide.image} alt={slide.title} style={{
                  position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover"
                }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(17,24,39,0.82) 0%, rgba(17,24,39,0.55) 60%, rgba(17,24,39,0.3) 100%)"
                }}/>
                {/* Mesh overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(ellipse at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 60%)"
                }}/>

                <div style={{
                  position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto",
                  padding: "0 24px", height: "100%",
                  display: "flex", flexDirection: "column", justifyContent: "center",
                  paddingTop: 80
                }}>
                  <div className="fade-in-up">
                    <span style={{
                      display: "inline-block", padding: "6px 16px", borderRadius: 100,
                      background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)",
                      color: "#22C55E", fontSize: 12, fontWeight: 600, marginBottom: 20,
                      backdropFilter: "blur(8px)"
                    }}>{slide.badge}</span>
                    <h1 style={{
                      fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(32px, 5vw, 64px)",
                      color: "white", lineHeight: 1.15, maxWidth: 700, marginBottom: 20
                    }}>{slide.title}</h1>
                    <p style={{
                      color: "rgba(255,255,255,0.8)", fontSize: "clamp(14px, 2vw, 18px)",
                      lineHeight: 1.7, maxWidth: 560, marginBottom: 36
                    }}>{slide.text}</p>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <Link to={slide.link} style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "14px 28px", borderRadius: 100,
                        background: "linear-gradient(135deg, #22C55E, #16A34A)",
                        color: "white", fontFamily: "Inter", fontWeight: 700, fontSize: 15,
                        textDecoration: "none", boxShadow: "0 8px 24px rgba(34,197,94,0.45)"
                      }}>{slide.cta} →</Link>
                      <Link to="/contact" style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "14px 28px", borderRadius: 100,
                        background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        color: "white", fontFamily: "Inter", fontWeight: 600, fontSize: 15,
                        textDecoration: "none"
                      }}>Get Free Consultation</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 48, left: "50%", transform: "translateX(-50%)",
          zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 8
        }}>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em" }}>SCROLL</span>
          <div style={{
            width: 1, height: 48, background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)"
          }}/>
        </div>
      </div>

      {/* STATS BAR */}
      {/* <div style={{ background: "#1F2937", padding: "32px 24px" }}>
        <div style={{
          maxWidth: 1000, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 40, color: "#22C55E" }}>
                <Counter target={s.value} />
              </div>
              <div style={{ color: "#9CA3AF", fontSize: 13, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div> */}

      {/* WHAT WE OFFER */}
      <div className="mesh-bg" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>What We Offer</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(28px, 4vw, 44px)", color: "#1F2937", marginTop: 8, marginBottom: 16 }}>
              Complete Packaging Solutions
            </h2>
            <p style={{ color: "#6B7280", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              From machinery supply to managed on-site operations — we cover every aspect of industrial packaging for Goa's manufacturers and exporters.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {SOLUTIONS.map((s, i) => (
              <div key={i} className="card-hover" style={{
                background: s.flagship ? "linear-gradient(135deg, #E1F5EE, #DCFCE7)" : "white",
                border: s.flagship ? "2px solid #22C55E" : "1px solid #E5E7EB",
                borderRadius: 24, padding: 32, position: "relative",
                boxShadow: s.flagship ? "0 8px 32px rgba(34,197,94,0.2)" : "0 2px 16px rgba(0,0,0,0.05)"
              }}>
                {s.flagship && (
                  <span style={{
                    position: "absolute", top: -12, left: 24,
                    padding: "4px 14px", borderRadius: 100,
                    background: "linear-gradient(135deg, #22C55E, #16A34A)",
                    color: "white", fontSize: 11, fontWeight: 700
                  }}>★ Flagship Service</span>
                )}
                <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                <div style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 700, marginBottom: 8, letterSpacing: "0.08em" }}>{s.num}</div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 18, color: "#1F2937", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "#6B7280", fontSize: 13, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link to="/solutions" style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 100,
              background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white",
              fontFamily: "Inter", fontWeight: 700, fontSize: 15, textDecoration: "none",
              boxShadow: "0 8px 24px rgba(34,197,94,0.35)"
            }}>View All Solutions →</Link>
          </div>
        </div>
      </div>

      {/* ABOUT RUDREN */}
      <div style={{ padding: "100px 24px", background: "#1F2937" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>About Rudren Solutions</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(26px, 3.5vw, 40px)", color: "white", marginTop: 12, marginBottom: 20, lineHeight: 1.3 }}>
              Goa's Industrial Packaging Solutions Partner
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
              Rudren Solutions LLP is a Goa-based industrial packaging company providing end-to-end packaging solutions to manufacturers, exporters, and logistics businesses across the region.
            </p>
            <p style={{ color: "#9CA3AF", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
              We combine local market knowledge with national-level product access and expertise to deliver solutions that are fit for purpose, reliable, and cost-effective.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 36 }}>
              {["Machinery & Tools", "Packaging Consumables", "On-Site Teams", "Cargo Securing"].map(item => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: "rgba(34,197,94,0.15)", color: "#22C55E",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, flexShrink: 0
                  }}>✓</span>
                  <span style={{ color: "#D1D5DB", fontSize: 13, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
            <Link to="/about" style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 100,
              background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)",
              color: "#22C55E", fontFamily: "Inter", fontWeight: 600, fontSize: 14, textDecoration: "none"
            }}>Learn More About Us →</Link>
          </div>
          <div style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80" alt="Rudren Solutions"
              style={{ width: "100%", height: 480, objectFit: "cover", borderRadius: 24 }} />
            
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>

      {/* FEATURED BRANDS */}
      <div style={{ padding: "100px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>Brand Partners</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(26px, 3.5vw, 40px)", color: "#1F2937", marginTop: 8 }}>
              Authorized Suppliers of Premium Brands
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            {[
              {
                name: "Itipack", logo: "🔧", color: "#22C55E",
                desc: "Leading manufacturer of strapping machines, carton sealers, stretch wrappers, and shrink wrapping systems. Trusted by industrial packagers across India.",
                cats: ["Strapping Machines", "Carton Sealers", "Shrink Wrappers", "Stretch Wrappers"]
              },
              {
                name: "Atlanta", logo: "🏭", color: "#3B82F6",
                desc: "Specialists in pallet wrapping and orbital stretch wrapping systems for demanding industrial applications — from aluminium extrusions to steel coils.",
                cats: ["Orbital Wrappers", "Pallet Wrappers", "Rotary Arm Systems", "Inline Conveyors"]
              }
            ].map((brand, i) => (
              <div key={i} className="card-hover" style={{
                background: "white", borderRadius: 24, padding: 40,
                border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.06)"
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 16,
                  background: `${brand.color}18`, border: `2px solid ${brand.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 28, marginBottom: 20
                }}>{brand.logo}</div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 26, color: "#1F2937", marginBottom: 12 }}>{brand.name}</h3>
                <p style={{ color: "#6B7280", fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>{brand.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                  {brand.cats.map(c => (
                    <span key={c} style={{
                      padding: "4px 12px", borderRadius: 100,
                      background: `${brand.color}10`, border: `1px solid ${brand.color}25`,
                      color: brand.color, fontSize: 11, fontWeight: 600
                    }}>{c}</span>
                  ))}
                </div>
                <Link to={`/products?brand=${brand.name.toLowerCase()}`} style={{
                  display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 22px", borderRadius: 100,
                  background: `${brand.color}12`, border: `1.5px solid ${brand.color}30`,
                  color: brand.color, fontFamily: "Inter", fontWeight: 600, fontSize: 13, textDecoration: "none"
                }}>View Products →</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INDUSTRIES */}
      <div style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>Industries We Serve</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(26px, 3.5vw, 40px)", color: "#1F2937", marginTop: 8, marginBottom: 16 }}>
              Serving Goa's Diverse Industrial Base
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 }}>
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="card-hover" style={{
                background: "#F8FAFC", border: "1px solid #E5E7EB", borderRadius: 16,
                padding: "20px 16px", textAlign: "center", cursor: "pointer"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#E1F5EE"; e.currentTarget.style.borderColor = "#22C55E30"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.borderColor = "#E5E7EB"; }}
              >
                <div style={{ fontSize: 28, marginBottom: 10 }}>{ind.icon}</div>
                <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 13, color: "#1F2937" }}>{ind.name}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/industries" style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 100,
              border: "2px solid #22C55E", color: "#22C55E",
              fontFamily: "Inter", fontWeight: 700, fontSize: 14, textDecoration: "none"
            }}>Explore All Industries →</Link>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE RUDREN */}
      <div style={{ padding: "100px 24px", background: "#1F2937" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>Why Choose Us</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(26px, 3.5vw, 40px)", color: "white", marginTop: 8 }}>
              The Rudren Advantage
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { icon: "🏆", title: "Goa-Based Expertise", desc: "Deep understanding of local industry, logistics, and port operations." },
              { icon: "🤝", title: "Managed Services", desc: "We don't just supply — we deploy teams and manage your packaging operation." },
              { icon: "🔩", title: "Premium Brands", desc: "Authorized supplier for Itipack and Atlanta — proven industrial packaging brands." },
              { icon: "📋", title: "Annual Agreements", desc: "Structured service agreements providing accountability, consistency, and cost control." },
              { icon: "⚡", title: "Fast Response", desc: "Local presence means fast delivery, quick support, and responsive service." },
              { icon: "🎯", title: "Fit-for-Purpose", desc: "Solutions designed for your specific load, transit, and operating conditions." },
            ].map((item, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 28,
                transition: "all 0.3s"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(34,197,94,0.1)"; e.currentTarget.style.borderColor = "rgba(34,197,94,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <div style={{ fontSize: 28, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 15, color: "white", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: "#9CA3AF", fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      {/* <div style={{ padding: "100px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#22C55E", textTransform: "uppercase", letterSpacing: "0.1em" }}>Testimonials</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(26px, 3.5vw, 40px)", color: "#1F2937", marginTop: 8 }}>
              What Our Clients Say
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card-hover" style={{
                background: "white", borderRadius: 20, padding: 28,
                border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
              }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {"⭐".repeat(t.rating)}
                </div>
                <p style={{ color: "#374151", fontSize: 13, lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: 16 }}>
                  <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 14, color: "#1F2937" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#9CA3AF" }}>{t.role}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA BANNER */}
      <div style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)"
        }}/>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(26px, 4vw, 44px)", color: "white", marginBottom: 16 }}>
            Ready to Streamline Your Packaging?
          </h2>
          <p style={{ color: "#9CA3AF", fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
            Contact Rudren Solutions for a free consultation and requirement review. We'll design a packaging solution built around your operation.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" style={{
              padding: "16px 36px", borderRadius: 100,
              background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white",
              fontFamily: "Inter", fontWeight: 700, fontSize: 16, textDecoration: "none",
              boxShadow: "0 8px 32px rgba(34,197,94,0.4)"
            }}>Get a Free Consultation</Link>
            <a href="tel:+919607024997" style={{
              padding: "16px 32px", borderRadius: 100,
              background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.2)", color: "white",
              fontFamily: "Inter", fontWeight: 600, fontSize: 16, textDecoration: "none"
            }}>📞 Call Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}
