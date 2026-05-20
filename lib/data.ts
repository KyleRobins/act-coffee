export const APPLY_URL = "GOOGLE_FORM_URL_PLACEHOLDER";

export interface Stat {
  label: string;
  value: string;
}
export const STATS: Stat[] = [
  { value: "8", label: "Months" },
  { value: "156", label: "Hours Training" },
  { value: "3", label: "Modules" },
  { value: "July 2026", label: "Start Date" },
];

export interface Partner {
  name: string;
  logoUrl: string;
  website: string;
}
export const PARTNERS: Partner[] = [
  { name: "UNIDO", logoUrl: "CLOUDINARY_URL_PLACEHOLDER_UNIDO", website: "https://www.unido.org" },
  { name: "E4Impact", logoUrl: "CLOUDINARY_URL_PLACEHOLDER_E4IMPACT", website: "https://www.e4impact.org" },
  { name: "Università Cattolica", logoUrl: "CLOUDINARY_URL_PLACEHOLDER_UNICATT", website: "https://www.unicatt.it" },
  { name: "illycaffè", logoUrl: "CLOUDINARY_URL_PLACEHOLDER_ILLY", website: "https://www.illy.com" },
  { name: "Fondazione illy", logoUrl: "CLOUDINARY_URL_PLACEHOLDER_FONDILLY", website: "https://www.fondazioneilly.com" },
  { name: "Lavazza", logoUrl: "CLOUDINARY_URL_PLACEHOLDER_LAVAZZA", website: "https://www.lavazza.com" },
  { name: "Slow Food", logoUrl: "CLOUDINARY_URL_PLACEHOLDER_SLOWFOOD", website: "https://www.slowfood.com" },
  { name: "CRI Kenya", logoUrl: "CLOUDINARY_URL_PLACEHOLDER_CRI", website: "https://www.cri.go.ke" },
  { name: "Dedan Kimathi University", logoUrl: "CLOUDINARY_URL_PLACEHOLDER_DEDAN", website: "https://www.dkut.ac.ke" },
  { name: "Italian Cooperation", logoUrl: "CLOUDINARY_URL_PLACEHOLDER_ITALCOOP", website: "https://www.aics.gov.it" },
];

export interface EligibilityCriterion {
  icon: string;
  title: string;
  description: string;
}
export const ELIGIBILITY_CRITERIA: EligibilityCriterion[] = [
  {
    icon: "MapPin",
    title: "Geographic Scope",
    description: "Ventures must be based and actively operating in Kenya, serving local and regional coffee markets.",
  },
  {
    icon: "Coffee",
    title: "Sector Experience",
    description: "Applicants must operate within the coffee sector — production, processing, trading, roasting, or retail.",
  },
  {
    icon: "User",
    title: "Participant Profile",
    description: "Minimum 3 years of professional experience in the coffee value chain as an entrepreneur or manager.",
  },
  {
    icon: "Heart",
    title: "Gender & Youth",
    description: "Women- and youth-led ventures are strongly encouraged to apply and will be given priority consideration.",
  },
  {
    icon: "Leaf",
    title: "Social Impact",
    description: "Demonstrated commitment to social equity, farmer welfare, and environmental sustainability practices.",
  },
  {
    icon: "Globe",
    title: "Language",
    description: "Demonstrated proficiency in English, both written and spoken, is required for programme participation.",
  },
];

export interface Module {
  tag: string;
  tagColor: string;
  title: string;
  body: string;
  icon: string;
  imageUrl: string;
}
export const MODULES: Module[] = [
  {
    tag: "Module 1 · Upstream",
    tagColor: "#2C4A2E",
    title: "Innovations in Coffee Production & Processing",
    body: "Explore farm-level and post-harvest innovations, climate-resilient agricultural practices, and processing techniques that enhance quality across the upstream value chain. Participants engage with leading agronomists, farmers, and researchers driving transformation in East African coffee.",
    icon: "Sprout",
    imageUrl: "/images/program-structure.png",
  },
  {
    tag: "Module 2 · Downstream",
    tagColor: "#D95F4B",
    title: "Innovations in Coffee Distribution & Marketing",
    body: "Master market access strategies, brand positioning, export readiness, and specialty coffee marketing. Learn from industry leaders how Kenyan coffee can capture premium international markets and build lasting commercial relationships.",
    icon: "TrendingUp",
    imageUrl: "/images/program-strucure.png",
  },
  {
    tag: "Module 3 · Project Work",
    tagColor: "#7B4F8A",
    title: "Business Growth Project",
    body: "Develop a comprehensive, practical growth project for your own coffee venture. Receive personalised mentoring from sector experts, then present your business case to a distinguished expert jury for feedback and recognition.",
    icon: "Lightbulb",
    imageUrl: "/images/about.png",
  },
];

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}
export const BENEFITS: Benefit[] = [
  {
    icon: "Award",
    title: "Prestigious Certificate",
    description: "Receive a certificate co-signed by UNIDO, E4Impact, and Università Cattolica del Sacro Cuore — recognised by global coffee industry leaders.",
  },
  {
    icon: "TrendingUp",
    title: "Business Competitiveness",
    description: "Sharpen your competitive edge through expert-led cohort sessions, personalised tutoring, and peer learning with Kenya's top coffee entrepreneurs.",
  },
  {
    icon: "Link",
    title: "End-to-End Expertise",
    description: "Build mastery across the full coffee value chain — from farm-level production and processing through to international marketing and distribution.",
  },
  {
    icon: "Lightbulb",
    title: "Business Growth Project",
    description: "Design and present a real growth project for your venture, receiving structured feedback from an expert jury and actionable recommendations.",
  },
  {
    icon: "Globe",
    title: "Global Network Access",
    description: "Join a network spanning UNIDO, illycaffè, Lavazza, Slow Food, and leading Kenyan institutions — opening doors to partnerships and markets worldwide.",
  },
];

export interface FAQ {
  question: string;
  answer: string;
}
export const FAQS: FAQ[] = [
  {
    question: "Who is eligible to apply for the programme?",
    answer: "The programme is open to coffee sector entrepreneurs, cooperative managers, and business leaders based in Kenya with at least 3 years of experience in the coffee value chain. Women- and youth-led ventures are particularly encouraged to apply.",
  },
  {
    question: "What is the duration and format of the programme?",
    answer: "The Executive Programme runs for 8 months, delivering 156 hours of structured learning across 3 modules. The format combines in-person sessions at the Coffee Research Institute (CRI) in Nairobi, online classes, and personalised one-to-one tutoring.",
  },
  {
    question: "When does the programme start and what are the deadlines?",
    answer: "The programme is scheduled to start in July 2026. Application deadlines and selection timelines will be communicated through official ACT Programme channels and the E4Impact Foundation website.",
  },
  {
    question: "Is there a cost to participate?",
    answer: "The programme is offered at no cost to selected participants, made possible through the support of UNIDO, the Italian Cooperation, and partner organisations. Participants are responsible for their own accommodation and travel expenses.",
  },
  {
    question: "What is the Business Growth Project?",
    answer: "In Module 3, each participant develops a tailored Business Growth Project for their own coffee venture. This practical project is mentored by industry experts and culminates in a presentation to a jury of distinguished professionals from the global coffee sector.",
  },
  {
    question: "What partners are involved in delivering the programme?",
    answer: "The programme is a collaborative effort led by E4Impact Foundation and UNIDO, delivered in partnership with Università Cattolica del Sacro Cuore, illycaffè, Fondazione illy, Lavazza, Slow Food, the Coffee Research Institute (CRI), Dedan Kimathi University of Technology, and the Italian Agency for Development Cooperation.",
  },
  {
    question: "How do I apply?",
    answer: "Applications are submitted through our online application form. Click the 'Apply Now' button on this page to access the form. Shortlisted candidates will be contacted for an interview. For queries, contact the E4Impact Programme team directly.",
  },
];

export const ABOUT_COPY = {
  label: "About the Programme",
  heading: "Transforming Kenya's Coffee Sector Through Innovation",
  body: "The Executive Programme in Coffee Innovation and Business is a landmark initiative under the ACT (Advancing Climate-Resilience and Transformation in African Coffee) Programme. Designed for Kenya's leading coffee entrepreneurs and cooperative leaders, it delivers world-class business education anchored in the realities of the African coffee sector.",
  body2: "Participants gain expert knowledge across the full value chain — from climate-resilient production to international market positioning — supported by a distinguished faculty of global coffee industry leaders and development specialists.",
  quote: "One of the ACT Programme's key initiatives to strengthen human capital and entrepreneurship across the coffee value chain in East Africa.",
  partners: ["UNIDO", "E4Impact", "Università Cattolica", "illycaffè", "Lavazza"],
};

export const VENUE_COPY = {
  label: "Programme Venue",
  heading: "Nairobi, Kenya",
  body: "Sessions are held at the Coffee Research Institute (CRI) — Kenya's foremost authority on coffee science — combining immersive in-person learning in the heart of Kenya's coffee country with flexible online collaboration.",
  hours: "156 hours of structured learning",
  formats: ["In-Person Sessions", "Online Classes", "1:1 Tutoring"],
  address: {
    name: "Coffee Research Institute (CRI)",
    location: "Ruiru, Nairobi County, Kenya",
    note: "Kenya's national centre for coffee research and innovation",
  },
};
