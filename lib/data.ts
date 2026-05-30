export const APPLY_URL = "https://forms.gle/siPb5FzZWvezdN5VA";

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

// Initiative of — institutional / funding bodies (alphabetical)
export const INITIATIVE_PARTNERS: Partner[] = [
  { name: "ACT Coffee Programme", logoUrl: "/images/act.png", website: "https://e4impact.org" /* TODO: replace with official ACT page URL from UNIDO */ },
  { name: "Global Gateway", logoUrl: "/images/global-gateway.png", website: "https://global-gateway.europa.eu" },
  { name: "Government of Kenya", logoUrl: "/images/gok.jpg", website: "https://www.kenya.go.ke" },
  { name: "Italian Cooperation", logoUrl: "/images/republic-of-italiano.png", website: "https://www.esteri.it" },
  { name: "UNIDO", logoUrl: "/images/Unido_EN_Light_Blue_centred.png", website: "https://www.unido.org" },
];

// Implemented by — delivery organisations (alphabetical)
export const IMPLEMENTING_PARTNERS: Partner[] = [
  { name: "Dedan Kimathi University of Technology", logoUrl: "/images/dedan-kimathi.png", website: "https://www.dkut.ac.ke" },
  { name: "E4Impact Foundation", logoUrl: "/images/e4i-foundation.png", website: "https://e4impact.org" },
  { name: "KALRO", logoUrl: "/images/kalro.png", website: "https://www.kalro.org" },
  { name: "Università Cattolica del Sacro Cuore", logoUrl: "/images/university-of-catolica.png", website: "https://www.unicatt.it" },
];

// In partnership with — commercial and NGO partners (alphabetical)
export const PARTNERSHIP_PARTNERS: Partner[] = [
  { name: "Fondazione Ernesto Illy", logoUrl: "/images/fondazone-ennesto.png", website: "https://www.fondazioneernestolly.com" },
  { name: "Fondazione Lavazza", logoUrl: "/images/fondazione.png", website: "https://www.fondazionelavazza.it" },
  { name: "Slow Food Coffee Coalition", logoUrl: "/images/slow-food.png", website: "https://www.slowfood.com/slowfood-coffee-coalition" },
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
    tagColor: "#E86F87",
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
    answer: "The programme is scheduled to start in July 2026. Application deadlines and selection timelines will be communicated through official ACT Coffee Programme channels and the E4Impact Foundation website.",
  },
  {
    question: "Is there a cost to participate?",
    answer: "The programme carries a highly subsidised fee of $300 for selected participants — a fraction of its real cost, made possible through the support of UNIDO, the Italian Cooperation, and partner organisations. This fee is paid in three equal instalments of $100, each due at the start of one of the three programme bootcamps. Participants are also responsible for their own travel and accommodation expenses.",
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
  body: "The Executive Programme in Coffee Innovation and Business is a landmark initiative under the ACT Coffee Programme (Advancing Climate-Resilience and Transformation in African Coffee). Designed for Kenya's leading coffee entrepreneurs and cooperative leaders, it delivers world-class business education anchored in the realities of the African coffee sector.",
  body2: "Participants gain expert knowledge across the full value chain — from climate-resilient production to international market positioning — supported by a distinguished faculty of global coffee industry leaders and development specialists.",
  quote: "One of the ACT Coffee Programme's key initiatives to strengthen human capital and entrepreneurship across the coffee value chain in East Africa.",
  partners: ["UNIDO", "E4Impact", "Università Cattolica", "illycaffè", "Lavazza"],
};

export const FEES_COPY = {
  label: "Programme Fees",
  heading: "Highly Subsidised at $300",
  body: "Thanks to the support of UNIDO, the Italian Cooperation, and our partner organisations, the full programme fee is just $300 — a fraction of its real cost. This is paid in three equal instalments of $100, each due at the start of a programme bootcamp.",
  totalFee: "$300",
  totalLabel: "Total Programme Fee",
  instalments: [
    {
      number: "01",
      title: "Bootcamp 1",
      module: "Module 1 — Production & Processing",
      amount: "$100",
      note: "Due at the start of the first in-person bootcamp.",
    },
    {
      number: "02",
      title: "Bootcamp 2",
      module: "Module 2 — Distribution & Marketing",
      amount: "$100",
      note: "Due at the start of the second in-person bootcamp.",
    },
    {
      number: "03",
      title: "Bootcamp 3",
      module: "Module 3 — Business Growth Project",
      amount: "$100",
      note: "Due at the start of the third in-person bootcamp.",
    },
  ],
  footerNote: "Participants are responsible for their own travel and accommodation expenses. The $300 fee covers all tuition, materials, and faculty access.",
  cta: "Apply Now — places are limited and highly competitive.",
  imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&q=80&auto=format&fit=crop",
  imageAlt: "Coffee professional carefully hand-selecting ripe coffee cherries during harvest",
};

export const NEWS_COPY = {
  label: "News & Updates",
  heading: "Programme News & Updates",
  body: "Stay up to date with training activities, events, and programme milestones. Photos and updates from cohort sessions, Italian partner visits, and field activities will be shared here as the programme progresses.",
};

export interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    category: "Programme Launch",
    title: "ACT Coffee Programme Officially Launches in Kenya",
    date: "July 2026",
    excerpt: "The Executive Programme in Coffee Innovation and Business marks a landmark milestone for Kenya's coffee sector, bringing together world-class faculty and leading entrepreneurs.",
    imageUrl: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Lush coffee farm in the Kenyan highlands with rows of thriving coffee plants",
  },
  {
    id: 2,
    category: "Bootcamp 1",
    title: "Module 1 Training: Innovations in Coffee Production",
    date: "Coming 2026",
    excerpt: "Participants immerse themselves in farm-level innovations, climate-resilient agronomy, and advanced post-harvest processing techniques led by specialist faculty.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Participants engaged in an interactive bootcamp training session",
  },
  {
    id: 3,
    category: "Partner Visit",
    title: "Italian Partners Deliver Specialist Training Week",
    date: "Coming 2026",
    excerpt: "Faculty from Fondazione Lavazza, illycaffè, and Università Cattolica del Sacro Cuore travel to Nairobi to lead intensive in-person sessions with the cohort.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop",
    imageAlt: "International partners and programme participants collaborating during a workshop session",
  },
  {
    id: 4,
    category: "Field Activity",
    title: "Cohort Visits CRI Research Farm in Ruiru",
    date: "Coming 2026",
    excerpt: "Participants experience Kenya's premier coffee research station firsthand, exploring experimental varieties and speaking with lead agronomists on the ground.",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Vibrant red coffee cherries growing on a healthy coffee plant in Kenya",
  },
];

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
