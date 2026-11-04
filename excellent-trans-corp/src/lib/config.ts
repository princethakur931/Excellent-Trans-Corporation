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
    id: "ftl",
    title: "Full Truck Load (FTL)",
    shortDesc: "Dedicated vehicle transportation for large and bulk shipments.",
    fullDesc:
      "Our Full Truck Load service offers dedicated vehicle allocation for your large-volume shipments. Ideal for manufacturers and businesses that require exclusive use of the truck, ensuring faster transit times, minimised handling and complete control over your goods.",
    icon: "Truck",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    benefits: [
      "Dedicated vehicle — no sharing",
      "Faster transit due to direct routing",
      "Reduced handling and breakage risk",
      "Real-time shipment coordination",
    ],
  },
  {
    id: "ptl",
    title: "Part Truck Load (PTL)",
    shortDesc: "Cost-effective transportation for smaller consignments.",
    fullDesc:
      "Part Truck Load allows businesses to ship smaller quantities without bearing the full cost of a dedicated truck. We consolidate multiple shipments going in the same direction, helping you save costs while ensuring your goods reach their destination safely.",
    icon: "Package",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    benefits: [
      "Pay only for the space you use",
      "Ideal for smaller and medium businesses",
      "Scheduled consolidation pickups",
      "Careful handling of individual consignments",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Transport",
    shortDesc: "Reliable goods movement for manufacturing and industrial units.",
    fullDesc:
      "We specialise in transporting goods for manufacturing plants, industrial units and engineering companies. Our fleet is equipped to handle heavy industrial materials, machinery components, raw materials and finished goods with the care and precision these industries demand.",
    icon: "Factory",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
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
    shortDesc: "Goods transportation across Maharashtra and all major locations in India.",
    fullDesc:
      "Our Pan-India transportation service connects Pune and Maharashtra to major industrial and commercial destinations across the country. Whether you need to move goods to metros or tier-2 cities, we ensure reliable delivery with proper documentation and transit support.",
    icon: "MapPin",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
    benefits: [
      "Wide network coverage across India",
      "Proper documentation and e-way bill support",
      "Dedicated route coordination",
      "Consistent service standards nationwide",
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
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
    video: "/videos/manufacturing.mp4",
  },
  {
    id: "engineering",
    title: "Engineering",
    description:
      "Safe movement of engineering components, machinery parts and equipment with proper securing and handling.",
    icon: "Settings",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    video: "/videos/engineering.mp4",
  },
  {
    id: "industrial-supplies",
    title: "Industrial Supplies",
    description:
      "Transportation of industrial supplies, tools, consumables and materials for plants and factories.",
    icon: "Package",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    video: "/videos/industryspully.mp4",
  },
  {
    id: "steel-metals",
    title: "Steel & Metals",
    description:
      "Specialised transportation for steel coils, metal sheets, rods, beams and other heavy metallic goods.",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=800&q=80",
    video: "/videos/steel.mp4",
  },
  {
    id: "fmcg",
    title: "FMCG & Other Industries",
    description:
      "Timely and careful transportation for FMCG products and consumer goods requiring scheduled deliveries.",
    icon: "ShoppingCart",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
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

