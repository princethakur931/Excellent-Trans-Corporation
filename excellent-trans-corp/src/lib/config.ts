// ============================================================
// SITE CONFIGURATION — Edit all values here
// ============================================================

export const siteConfig = {
  name: "Excellent Trans Corporation",
  shortName: "ETC",
  tagline: "Reliable Transportation for Your Business",
  description:
    "End-to-end goods transportation services for manufacturers and industries, ensuring safe, timely and cost-effective delivery across Pune, Maharashtra and India.",
  url: "https://www.excellenttranscorp.com", // UPDATE with your actual domain

  // Contact Details — UPDATE with verified information
  phone: "+91 98704 07755",        // Contact phone number
  whatsapp: "919870407755",        // WhatsApp number
  email: "info@excellenttranscorp.com", // Replace with actual email
  address: {
    line1: "[Office Address Line 1]",   // Replace with verified address
    line2: "[Area / Building Name]",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411XXX",                  // Replace with actual pincode
    country: "India",
  },

  // Social (add if available)
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },

  // SEO
  keywords: [
    "Transport Company in Pune",
    "Transportation Services in Pune",
    "Goods Transport Services Pune",
    "Industrial Transportation Pune",
    "Truck Transportation Services",
    "Logistics Services in Pune",
    "FTL Transport Pune",
    "PTL Transport Pune",
    "Pan India Transportation",
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Our Services",
    href: "/services",
    children: [
      { label: "Full Truck Load (FTL)", href: "/services#ftl" },
      { label: "Part Truck Load (PTL)", href: "/services#ptl" },
      { label: "Industrial Transportation", href: "/services#industrial" },
      { label: "Pan-India Transportation", href: "/services#pan-india" },
    ],
  },
  { label: "Our Process", href: "/our-process" },
  { label: "Industries", href: "/industries" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export const services = [
  {
    id: "ptl",
    title: "LTL (Less Than Truckload)",
    shortDesc:
      "Economical consolidated freight transport for partial truckloads. Pay only for the space you use with secure transit.",
    fullDesc:
      "Part Truck Load / LTL allows businesses to ship smaller quantities without bearing the full cost of a dedicated truck. We consolidate multiple shipments going in the same direction, helping you save costs while ensuring your goods reach their destination safely.",
    icon: "Package",
    image: "/images/ltl.jpg",
    benefits: [
      "Pay only for the space you use",
      "Ideal for smaller and medium businesses",
      "Scheduled consolidation pickups",
      "Careful handling of individual consignments",
    ],
  },
  {
    id: "ftl",
    title: "FTL (Full Truck Load)",
    shortDesc:
      "Dedicated point-to-point transportation reserving the entire truck exclusively for your cargo. Direct dock-to-dock transit.",
    fullDesc:
      "Our Full Truck Load service offers dedicated vehicle allocation for your large-volume shipments. Ideal for manufacturers and businesses that require exclusive use of the truck, ensuring faster transit times, minimised handling and complete control over your goods.",
    icon: "Truck",
    image: "/images/ftl.jpg",
    benefits: [
      "Dedicated vehicle — no sharing",
      "Faster transit due to direct routing",
      "Reduced handling and breakage risk",
      "Real-time shipment coordination",
    ],
  },
  {
    id: "industrial",
    title: "Manufacturing & Industrial Transport",
    shortDesc:
      "Engineered road transport supporting factory production cycles, raw material supply, and plant machinery haulage.",
    fullDesc:
      "We specialise in transporting goods for manufacturing plants, industrial units and engineering companies. Our fleet is equipped to handle heavy industrial materials, machinery components, raw materials and finished goods with the care and precision these industries demand.",
    icon: "Factory",
    image: "/images/industrial-transport.jpg",
    benefits: [
      "Suitable for heavy and oversized goods",
      "Experienced drivers familiar with industrial routes",
      "On-site pickup and delivery coordination",
      "Flexible scheduling to match production needs",
    ],
  },
  {
    id: "pan-india",
    title: "Pan-India Transportation",
    shortDesc:
      "Expansive national road grid connecting Maharashtra to all major industrial corridors and commercial destinations across India.",
    fullDesc:
      "Our Pan-India transportation service connects Pune and Maharashtra to major industrial and commercial destinations across the country. Whether you need to move goods to metros or tier-2 cities, we ensure reliable delivery with proper documentation and transit support.",
    icon: "MapPin",
    image: "/images/pan-india-truck-load.jpg",
    benefits: [
      "Wide network coverage across India",
      "Proper documentation and e-way bill support",
      "Dedicated route coordination",
      "Consistent service standards nationwide",
    ],
  },
  {
    id: "containerized",
    title: "Containerized & Bulk Cargo",
    shortDesc:
      "All-weather sealed container trucks ensuring zero pilferage, moisture protection, and damage-free transit.",
    fullDesc:
      "Secure, weatherproof containerized fleet designed for sensitive commercial goods, auto components, high-value electronics, and FMCG consignments requiring enclosed transit.",
    icon: "PackageCheck",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    benefits: [
      "Tamper-evident container sealing",
      "All-weather water & dust protection",
      "High security for valuable cargo",
      "GPS monitored transit",
    ],
  },
  {
    id: "dedicated",
    title: "Dedicated Contract Logistics",
    shortDesc:
      "Custom fleet allocations, dedicated driver crews, and scheduled logistics support for enterprise operations.",
    fullDesc:
      "Tailored contract logistics solutions for regular corporate shippers. Enjoy guaranteed vehicle availability, customized route planning, and dedicated account management for long-term supply chain needs.",
    icon: "Clock",
    image: "/images/contractLogistics.jpg",
    benefits: [
      "Guaranteed vehicle availability",
      "Customized dispatch schedules",
      "Priority routing & loading",
      "Dedicated logistics manager",
    ],
  },
];

export const industries = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Reliable transport for raw materials and finished products for manufacturing units across Pune and Maharashtra.",
    icon: "Factory",
    image: "/images/industrial-transport.jpg",
    video: "/videos/manufacturing.mp4",
  },
  {
    id: "engineering",
    title: "Engineering",
    description:
      "Safe movement of engineering components, machinery parts and equipment with proper securing and handling.",
    icon: "Settings",
    image: "/images/ftl.jpg",
    video: "/videos/engineering.mp4",
  },
  {
    id: "industrial-supplies",
    title: "Industrial Supplies",
    description:
      "Transportation of industrial supplies, tools, consumables and materials for plants and factories.",
    icon: "Package",
    image: "/images/ltl.jpg",
    video: "/videos/industryspully.mp4",
  },
  {
    id: "steel-metals",
    title: "Steel & Metals",
    description:
      "Specialised transportation for steel coils, metal sheets, rods, beams and other heavy metallic goods.",
    icon: "Layers",
    image: "/images/pan-india-truck-load.jpg",
    video: "/videos/steel.mp4",
  },
  {
    id: "fmcg",
    title: "FMCG & Other Industries",
    description:
      "Timely and careful transportation for FMCG products and consumer goods requiring scheduled deliveries.",
    icon: "ShoppingCart",
    image: "/images/contractLogistics.jpg",
    video: "/videos/fmcg.mp4",
    playbackRate: 2.5,
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Enquiry & Requirement",
    description:
      "Share your pickup location, delivery destination, type of goods and vehicle requirements with us.",
    icon: "FileText",
  },
  {
    step: 2,
    title: "Vehicle Allocation",
    description:
      "We allocate the most suitable vehicle based on your goods type, quantity and destination.",
    icon: "Truck",
  },
  {
    step: 3,
    title: "Loading & Dispatch",
    description:
      "Goods are carefully loaded with proper securing and the vehicle is dispatched on the planned route.",
    icon: "Package",
  },
  {
    step: 4,
    title: "Real-Time Coordination",
    description:
      "Our team monitors the shipment and coordinates with the driver throughout the transit for smooth delivery.",
    icon: "MapPin",
  },
  {
    step: 5,
    title: "Safe & Timely Delivery",
    description:
      "Goods are delivered safely to the destination with proper documentation and delivery confirmation.",
    icon: "CheckCircle2",
  },
];

export const whyChooseUs = [
  {
    title: "Reliable Service",
    description: "Consistent, dependable transportation you can count on.",
    icon: "Award",
  },
  {
    title: "Goods Safety",
    description: "Careful handling and proper securing of all goods.",
    icon: "ShieldCheck",
  },
  {
    title: "Cost-Effective",
    description: "Competitive pricing without compromising on service quality.",
    icon: "Coins",
  },
  {
    title: "Customer-Focused",
    description: "Dedicated support team that understands your requirements.",
    icon: "Users",
  },
  {
    title: "Quick Support",
    description: "Prompt communication and swift response to queries.",
    icon: "Headphones",
  },
];

