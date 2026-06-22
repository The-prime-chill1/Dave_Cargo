export const services = [
  {
    id: 1,
    icon: "FaPlaneDeparture",
    title: "Air Freight",
    description: "Express air cargo between UK and Nigeria in 3–7 days. Perfect for urgent shipments and time-sensitive commercial goods.",
    color: "#0057D9",
  },
  {
    id: 2,
    icon: "FaShip",
    title: "Sea Freight",
    description: "Cost-effective sea shipping for large volumes. Full container loads or shared containers — 4 to 6 weeks transit.",
    color: "#00B894",
  },
  {
    id: 3,
    icon: "FaCar",
    title: "Vehicle Shipping",
    description: "Safe and insured vehicle transportation from the UK to Nigeria. Cars, vans, and SUVs handled with expert care.",
    color: "#F5B700",
  },
  {
    id: 4,
    icon: "FaBoxes",
    title: "Commercial Cargo",
    description: "Tailored freight solutions for businesses. Wholesale, retail, and industrial goods moved reliably at scale.",
    color: "#E63946",
  },
  {
    id: 5,
    icon: "FaHome",
    title: "Door-to-Door Delivery",
    description: "We collect from your UK door and deliver to your Nigerian address. No middlemen. No hassle. Just delivery.",
    color: "#6C63FF",
  },
  {
    id: 6,
    icon: "FaCube",
    title: "Container Shipping",
    description: "20ft and 40ft container options for households relocating, businesses importing, or large-volume exporters.",
    color: "#F39C12",
  },
];

export const process = [
  { step: "01", title: "Book Shipment", desc: "Request a quote online, via WhatsApp, or call us. We confirm rates within hours." },
  { step: "02", title: "Pickup / Drop Off", desc: "We collect from your UK door, or you drop off at our Dagenham facility." },
  { step: "03", title: "Cargo Processing", desc: "All cargo is weighed, documented, and prepared for international transit." },
  { step: "04", title: "International Shipping", desc: "Your shipment departs via our scheduled air or sea freight routes." },
  { step: "05", title: "Doorstep Delivery", desc: "Our Nigeria team delivers directly to your Lagos, Ibadan, or nationwide address." },
];

export const rates = [
  {
    title: "220L Blue Barrel",
    icon: "FaBarrel",
    popular: false,
    options: [
      { label: "UK Pickup", price: "£120" },
      { label: "Lagos Delivery", price: "£130" },
      { label: "Outside Lagos", price: "£140" },
    ],
  },
  {
    title: "Medium Ghana Must Go",
    icon: "FaBox",
    popular: false,
    options: [
      { label: "UK Pickup", price: "£60" },
      { label: "Lagos Delivery", price: "£65" },
      { label: "Outside Lagos", price: "£70" },
    ],
  },
  {
    title: "Large Ghana Must Go",
    icon: "FaBoxOpen",
    popular: true,
    options: [
      { label: "UK Pickup", price: "£80" },
      { label: "Lagos Delivery", price: "£90" },
      { label: "Outside Lagos", price: "£100" },
    ],
  },
  {
    title: "Air Freight",
    icon: "FaPlane",
    popular: false,
    perKg: true,
    options: [
      { label: "Per Kilogram", price: "£4.80" },
    ],
  },
];

export const promotions = [
  { title: "Ship 6 Bags, Get 1 Free", desc: "Send six bags and we'll ship your seventh bag absolutely free.", icon: "FaGift", color: "#0057D9" },
  { title: "Ship 6 Boxes, Get 1 Free", desc: "Send six boxes on any route and your next box ships at zero cost.", icon: "FaBox", color: "#00B894" },
  { title: "Spend £1,000 — Free Barrel", desc: "Spend £1,000 or more in a single booking and receive a full barrel shipment free.", icon: "FaStar", color: "#F5B700" },
  { title: "Spend £600 — Free Box", desc: "Reach £600 in cargo value and we'll add a free box to your shipment.", icon: "FaTags", color: "#E63946" },
  { title: "10% Referral Bonus", desc: "Refer a friend who ships with us. You earn 10% credit on their first booking.", icon: "FaUsers", color: "#6C63FF" },
];

export const testimonials = [
  { name: "Adaeze Okafor", role: "Online Retailer, London", text: "Dave Cargo is simply the best. I've been shipping to Lagos for 2 years and never had a single issue. My goods always arrive on time.", rating: 5 },
  { name: "Emeka Chukwu", role: "Restaurant Owner, Birmingham", text: "The barrel deal saved me so much money. Staff are professional and they actually pick up the phone. Highly recommend.", rating: 5 },
  { name: "Fatima Bello", role: "Fashion Importer, Manchester", text: "I was nervous shipping my first container but the team walked me through everything. Arrived in Ibadan safely. Brilliant service.", rating: 5 },
  { name: "Seun Adeleke", role: "Student, Leeds", text: "Fast, affordable, and reliable. Used them for my Ghana-must-go bags twice now. Will definitely use again for everything I send home.", rating: 5 },
];

export const locations = [
  {
    country: "🇬🇧 United Kingdom",
    name: "Dagenham Office",
    address: "218 Estuary House\n196 Ballards Road\nDagenham, RM10 9AB",
    phones: ["+44 7312 014000", "+44 7484 130810", "+44 7378 232002"],
    primary: true,
  },
  {
    country: "🇳🇬 Nigeria — Lagos",
    name: "Lagos Office",
    address: "3 Bode Tobun Street\nOff Oniwaya Road\nDopemu Agege, Lagos",
    phones: ["+234 907 145 4179", "+234 706 337 7767"],
    primary: false,
  },
  {
    country: "🇳🇬 Nigeria — Ibadan",
    name: "Ibadan Office",
    address: "Popoola House\nKM8 Old Lagos-Ibadan Expressway\nOrita Challenge, Ibadan",
    phones: ["+234 907 145 4179"],
    primary: false,
  },
];

export const allowed = ["Clothes & Apparel", "Electronics", "Household Goods", "Food Products", "Cosmetics & Toiletries", "Commercial Cargo", "Books & Documents"];
export const restricted = ["Weapons & Firearms", "Narcotics & Drugs", "Explosives", "Hazardous Chemicals", "Counterfeit Goods", "Gas Cylinders", "Bicycles"];

export const whyUs = [
  { icon: "FaShieldAlt", title: "Fully Insured", desc: "All cargo is covered. Your shipment is protected from collection to delivery." },
  { icon: "FaClock", title: "On-Time Delivery", desc: "We hit our windows. 3–7 days by air. 4–6 weeks by sea. Consistently." },
  { icon: "FaMapMarkerAlt", title: "Real-Time Tracking", desc: "Know where your cargo is at every stage of its journey." },
  { icon: "FaHandshake", title: "Dedicated Support", desc: "A real human answers your calls and messages — UK and Nigeria." },
  { icon: "FaPoundSign", title: "Transparent Pricing", desc: "No hidden fees. What we quote is what you pay." },
  { icon: "FaGlobeAfrica", title: "Nigeria-Wide Delivery", desc: "Lagos, Ibadan, Abuja, Port Harcourt — we deliver across Nigeria." },
];
