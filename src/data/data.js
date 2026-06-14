export const PRODUCTS = [
  // ITIPACK
  {
    id: 1, brand: "itipack", category: "Strapping Machines",
    name: "Itipack Semi-Auto Strapping Machine",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    description: "High-speed semi-automatic strapping machine for cartons, bundles, and pallet loads. Ideal for medium-volume packaging lines.",
    features: ["Adjustable strap tension control", "Quick-change strap feed", "Ergonomic work table", "Low maintenance design", "Safety certified"],
    applications: ["Carton sealing", "Bundle strapping", "Pallet unitizing", "Export packaging"],
    specs: [
      { key: "Strap Width", value: "9–19 mm" },
      { key: "Strap Thickness", value: "0.5–1.0 mm" },
      { key: "Cycle Time", value: "1.5 sec" },
      { key: "Power", value: "220V / 50Hz" },
      { key: "Table Height", value: "800 mm" },
    ]
  },
  {
    id: 2, brand: "itipack", category: "Strapping Machines",
    name: "Itipack Fully Auto Strapping Machine",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    description: "Fully automated strapping system for high-volume production lines with conveyor integration capability.",
    features: ["Automatic strap threading", "Conveyor integration ready", "Touchscreen HMI", "Variable speed control", "Auto fault detection"],
    applications: ["High-volume production", "Automated lines", "Pharma packaging", "FMCG lines"],
    specs: [
      { key: "Strap Width", value: "9–16 mm" },
      { key: "Cycle Time", value: "0.8 sec" },
      { key: "Speed", value: "Up to 60 cycles/min" },
      { key: "Power", value: "380V / 3Ph" },
    ]
  },
  {
    id: 3, brand: "itipack", category: "Stretch Wrapping Machines",
    name: "Itipack Turntable Stretch Wrapper",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    description: "Rotary turntable stretch wrapping machine for palletized loads. Ensures load stability during transit and storage.",
    features: ["Variable turntable speed", "Pre-stretch film system up to 250%", "Adjustable film tension", "Safety fence option", "Remote control"],
    applications: ["Pallet wrapping", "Load stabilization", "Export packaging", "Warehouse operations"],
    specs: [
      { key: "Turntable Diameter", value: "1500 mm" },
      { key: "Max Load Height", value: "2200 mm" },
      { key: "Max Load Weight", value: "2000 kg" },
      { key: "Film Width", value: "500 mm" },
    ]
  },
  {
    id: 4, brand: "itipack", category: "Carton Sealing Machines",
    name: "Itipack Uniform Carton Sealer",
    image: "https://images.unsplash.com/photo-1605463617032-5e24bdcf3e94?w=600&q=80",
    description: "Automatic uniform carton sealing with top and bottom tape application for consistent, professional case sealing.",
    features: ["Top & bottom taping", "Auto size adjustment", "Stainless steel frame", "Easy tape change", "Speed adjustable belt drive"],
    applications: ["Carton sealing", "E-commerce", "Food packaging", "Export lines"],
    specs: [
      { key: "Carton Width", value: "150–500 mm" },
      { key: "Carton Height", value: "100–500 mm" },
      { key: "Belt Speed", value: "0–30 m/min" },
      { key: "Tape Width", value: "48/75 mm" },
    ]
  },
  {
    id: 5, brand: "itipack", category: "Shrink Wrapping Machines",
    name: "Itipack L-Sealer Shrink Tunnel",
    image: "https://images.unsplash.com/photo-1601999109332-542b18dbec57?w=600&q=80",
    description: "L-bar sealer with shrink tunnel for professional shrink wrapping of products, bundles, and display packs.",
    features: ["L-bar sealing system", "Digital temperature control", "Motorized conveyor", "Safety cut-off", "Variable tunnel speed"],
    applications: ["Shrink wrapping", "Bundle packing", "Display packaging", "Promotional packs"],
    specs: [
      { key: "Sealing Area", value: "500×400 mm" },
      { key: "Tunnel Size", value: "600×250 mm" },
      { key: "Temp Range", value: "100–220°C" },
    ]
  },
  {
    id: 6, brand: "itipack", category: "Packaging Consumables",
    name: "Itipack PET Strapping Roll",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&q=80",
    description: "High-tensile PET strapping for heavy-duty industrial and export packaging applications.",
    features: ["High tensile strength", "UV stabilized", "Low elongation", "Smooth surface finish", "Available in multiple widths"],
    applications: ["Steel coil strapping", "Timber strapping", "Heavy industrial loads", "Export packaging"],
    specs: [
      { key: "Width", value: "9 / 12 / 15 / 19 mm" },
      { key: "Thickness", value: "0.6–1.0 mm" },
      { key: "Break Strength", value: "Up to 750 kgf" },
    ]
  },

  // ATLANTA
  {
    id: 7, brand: "atlanta", category: "Semi Automatic Machines",
    name: "Atlanta Semi-Auto Orbital Stretch Wrapper",
    image: "https://images.unsplash.com/photo-1565799557186-bdf9af3e22c5?w=600&q=80",
    description: "Orbital stretch wrapping for long profiles, pipes, tubes, and extrusions. Ideal for aluminum, PVC, and steel sections.",
    features: ["Ring orbital mechanism", "Adjustable film overlap", "Variable ring speed", "Photo-eye sensors", "PLC controlled"],
    applications: ["Aluminum extrusions", "Steel profiles", "PVC pipes", "Long timber", "Cable reels"],
    specs: [
      { key: "Ring Diameter", value: "900 / 1200 mm" },
      { key: "Max Profile Length", value: "Unlimited" },
      { key: "Film Width", value: "200 mm" },
      { key: "Ring Speed", value: "Up to 60 RPM" },
    ]
  },
  {
    id: 8, brand: "atlanta", category: "Fully Automatic Machines",
    name: "Atlanta Fully Auto Rotary Arm Wrapper",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    description: "Rotating arm stretch wrapper for unstable or very heavy pallet loads where turntable rotation isn't possible.",
    features: ["Rotating arm design", "Load remains stationary", "Auto film clamp & cut", "Touchscreen control", "Top platen option"],
    applications: ["Unstable loads", "Very heavy pallets", "Hazardous goods", "Large format loads"],
    specs: [
      { key: "Max Pallet Size", value: "1200×1200 mm" },
      { key: "Max Load Height", value: "2500 mm" },
      { key: "Max Load Weight", value: "Unlimited" },
      { key: "Throughput", value: "Up to 80 pallets/hr" },
    ]
  },
  {
    id: 9, brand: "atlanta", category: "Pallet Wrapping Systems",
    name: "Atlanta Inline Pallet Conveyor Wrapper",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    description: "Automated inline pallet wrapping integrated with conveyor systems for high-throughput production and logistics environments.",
    features: ["Conveyor integration", "Auto load detection", "Pre-programmed wrap patterns", "Remote monitoring", "Emergency stop system"],
    applications: ["Automated warehouses", "High-volume lines", "FMCG distribution", "Cold storage"],
    specs: [
      { key: "Throughput", value: "100+ pallets/hr" },
      { key: "Integration", value: "Standard conveyor systems" },
      { key: "Control", value: "PLC + SCADA ready" },
    ]
  },
  {
    id: 10, brand: "atlanta", category: "Industrial Packaging Equipment",
    name: "Atlanta Horizontal Ring Orbital Wrapper",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    description: "Heavy-duty horizontal wrapping for coils, rolls, cable drums, and other circular products requiring full coverage.",
    features: ["Heavy-duty ring mechanism", "Full load coverage", "Adjustable film carriage", "PLC with HMI", "Corrosion-resistant construction"],
    applications: ["Wire coils", "Cable drums", "Steel coils", "Rubber rolls"],
    specs: [
      { key: "Ring Diameter", value: "Up to 2000 mm" },
      { key: "Load Weight", value: "Up to 10,000 kg" },
      { key: "Film Width", value: "500 mm" },
    ]
  },

  // GENERAL
  {
    id: 11, brand: "general", category: "Strapping Tools & Systems",
    name: "Pneumatic PET/Steel Strapping Tool",
    image: "https://www.mithradh.com/images/products/1.jpg",
    description: "Heavy-duty pneumatic strapping tool for fast, reliable tensioning and sealing of PET and steel straps.",
    features: ["Pneumatic operation", "Adjustable tension", "Ergonomic grip", "Lightweight design", "Compatible with PET & steel strap"],
    applications: ["Industrial strapping", "Timber bundling", "Steel coil packaging", "Export crating"],
    specs: [
      { key: "Strap Width", value: "13–19 mm" },
      { key: "Air Pressure", value: "6–8 bar" },
      { key: "Cycle Time", value: "2 sec" },
    ]
  },
  {
    id: 12, brand: "general", category: "Cargo Securing & Lashing Equipment",
    name: "Cargo Lashing Belt System",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&q=80",
    description: "Industrial cargo lashing belts for securing loads in containers, trucks, and vessels. Compliant with international cargo securing standards.",
    features: ["High-tensile polyester webbing", "Ratchet buckle mechanism", "EN 12195-2 compliant", "Multiple width options", "Corrosion-resistant fittings"],
    applications: ["Container loading", "Ship cargo", "Truck transport", "Port operations"],
    specs: [
      { key: "Lashing Capacity", value: "1000–5000 kg" },
      { key: "Width", value: "25–75 mm" },
      { key: "Standard", value: "EN 12195-2" },
    ]
  },
  {
    id: 13, brand: "general", category: "Packaging Consumables",
    name: "Machine Stretch Film Roll",
    image: "https://images.unsplash.com/photo-1530676845447-5e42fffec4f8?w=600&q=80",
    description: "Premium machine-grade stretch film for automated pallet wrapping. High clarity, excellent cling, and puncture resistance.",
    features: ["High pre-stretch capability", "Excellent cling properties", "Puncture resistant", "Clear visibility", "Consistent gauge"],
    applications: ["Pallet wrapping", "Load stabilization", "Product protection", "Bundling"],
    specs: [
      { key: "Width", value: "500 mm" },
      { key: "Thickness", value: "17–25 micron" },
      { key: "Core", value: "76 mm" },
    ]
  },
  {
    id: 14, brand: "general", category: "Pneumatic Nailers & Staplers",
    name: "Industrial Pneumatic Nailer",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    description: "Heavy-duty pneumatic nailer for wooden crate and pallet assembly. Fast, reliable, and designed for industrial use.",
    features: ["High-cycle durability", "Adjustable depth drive", "Sequential firing mode", "Tool-free jam clearing", "Rubber grip handle"],
    applications: ["Crate assembly", "Pallet making", "Wooden box packaging", "Timber framing"],
    specs: [
      { key: "Nail Length", value: "50–90 mm" },
      { key: "Air Pressure", value: "5.5–8 bar" },
      { key: "Magazine Capacity", value: "100 nails" },
    ]
  },
];

export const INDUSTRIES = [
  { name: "Pharmaceutical", icon: "💊", desc: "Validated packaging solutions compliant with GMP and export standards for pharmaceutical manufacturers.", color: "#3B82F6" },
  { name: "Chemical", icon: "⚗️", desc: "Safe, compliant packaging for hazardous and non-hazardous chemical products for domestic and export markets.", color: "#F59E0B" },
  { name: "Fish & Seafood Processing", icon: "🐟", desc: "Cold-chain ready packaging for Goa's thriving seafood export industry, meeting international food safety standards.", color: "#06B6D4" },
  { name: "Mining & Minerals", icon: "⛏️", desc: "Heavy-duty strapping, bulk bag, and crate solutions for ore, minerals, and mining product packaging.", color: "#8B5CF6" },
  { name: "Heavy Engineering", icon: "⚙️", desc: "Custom crating, skidding, and protection packaging for heavy machinery, equipment, and engineering components.", color: "#EF4444" },
  { name: "Steel & Aluminium", icon: "🏗️", desc: "Coil, sheet, and profile packaging using orbital wrappers, strapping, and interleaving materials.", color: "#6B7280" },
  { name: "Food Processing", icon: "🏭", desc: "Food-grade stretch films, strapping, and case sealing for FMCG and food processing plants.", color: "#22C55E" },
  { name: "Export & Logistics", icon: "🚢", desc: "Complete export-grade packaging solutions including ISPM-15 fumigated crates, lashing, and cargo securing.", color: "#0EA5E9" },
  { name: "Glass & Ceramics", icon: "🏺", desc: "Protective packaging using foam, void fill, edge protectors, and corner guards for fragile goods.", color: "#A78BFA" },
  { name: "Energy & Power", icon: "⚡", desc: "Specialized packaging for electrical panels, transformers, generators, and energy infrastructure equipment.", color: "#FCD34D" },
  { name: "Cargo & Shipping", icon: "📦", desc: "Container loading, cargo lashing, and load securing for FCL/LCL and break-bulk shipments.", color: "#F97316" },
  { name: "Port Operations", icon: "⚓", desc: "Onsite packaging support at port facilities for re-packing, damage repair, and container stuffing.", color: "#14B8A6" },
];

export const FAQS = [
  {
    q: "What types of packaging services does Rudren Solutions offer?",
    a: "We offer a comprehensive range of industrial packaging services including complete industrial packaging solutions, on-site packaging team deployment, cargo securing and ship lashing, packaging audits, and technical services. We also supply packaging machinery, tools, and consumables from leading brands like Itipack and Atlanta."
  },
  {
    q: "What is the On-Site Packaging Teams service?",
    a: "Our flagship service involves deploying dedicated, trained packaging teams at your facility under an annual service agreement. We handle all aspects of the packaging operation — staffing, supervision, tools, consumables, and process management — so your core team can focus on production."
  },
  {
    q: "Which industries do you serve?",
    a: "We serve a wide range of industries including Pharmaceutical, Chemical, Fish & Seafood Processing, Mining & Minerals, Heavy Engineering, Steel & Aluminium, Food Processing, Export & Logistics, Glass & Ceramics, Energy & Power, Cargo & Shipping, and Port Operations."
  },
  {
    q: "Do you supply packaging machinery for purchase?",
    a: "Yes. We supply a full range of packaging machinery and tools from our brand partners Itipack and Atlanta, including strapping machines, stretch wrapping machines, carton sealers, shrink wrappers, orbital wrappers, and more. We also provide installation, training, and after-sales support."
  },
  {
    q: "Are you based in Goa? Do you serve locations outside Goa?",
    a: "Rudren Solutions is headquartered in South Goa. We primarily serve industrial clients across Goa, and we also support projects in neighboring regions of Maharashtra and Karnataka. Contact us to discuss your location and requirements."
  },
  {
    q: "What packaging consumables do you supply?",
    a: "We supply PET strapping rolls, steel strapping, PP strapping, machine and hand stretch films, adhesive tapes, edge protectors, VCI films and papers, desiccants, corner boards, and various cargo securing consumables."
  },
  {
    q: "What is an Annual Service Agreement for on-site packaging?",
    a: "An Annual Service Agreement is a structured contract where Rudren Solutions deploys and manages a dedicated packaging team at your facility for a fixed annual fee. The agreement covers team deployment, supervision, standard operating procedures, reporting, and consumable supply."
  },
  {
    q: "How do I get a quote or inquiry?",
    a: "You can contact us via phone at +91 9607024997, email at info@rudren.com, or fill out the inquiry form on our Contact page. You can also use the WhatsApp button on our website for quick inquiries."
  },
  {
    q: "Do you offer packaging audits?",
    a: "Yes. Our packaging audit service involves a detailed assessment of your existing packaging process, identifying inefficiencies, risks, and opportunities for cost savings or quality improvement. We provide a written report with actionable recommendations."
  },
  {
    q: "What brands of packaging machinery do you represent?",
    a: "We are authorized partners for Itipack and Atlanta — two established names in industrial packaging machinery. Itipack is known for strapping, carton sealing, and shrink wrapping machines. Atlanta specializes in stretch wrapping and orbital wrapping systems."
  },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Naik", role: "Plant Manager", company: "Goa Industrial Exporters",
    text: "Rudren Solutions transformed our packaging line completely. Their on-site team is professional, efficient, and reliable. We've seen a 30% reduction in packaging time since they took over.",
    rating: 5
  },
  {
    name: "Priya Shenoy", role: "Operations Head", company: "Marine Fresh Exports",
    text: "For our seafood export operations, packaging quality is critical. Rudren's team understands our cold-chain requirements perfectly and delivers consistent results every time.",
    rating: 5
  },
  {
    name: "Arvind Desai", role: "CEO", company: "Konkan Engineering Works",
    text: "The machinery supply and installation support from Rudren has been excellent. The Atlanta stretch wrapper they recommended for our heavy profiles has been running flawlessly for 2 years.",
    rating: 5
  },
  {
    name: "Sunita Kamath", role: "Logistics Manager", company: "Goa Pharma Industries",
    text: "Our pharmaceutical packaging compliance requirements are stringent. Rudren not only meets them but proactively suggests improvements. Highly recommended for any industrial packaging need.",
    rating: 5
  },
];
