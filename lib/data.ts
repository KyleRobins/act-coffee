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
  { name: "ACT Coffee Programme", logoUrl: "/images/act.png", website: "https://www.unido.org/act" },
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
    answer: "The programme carries a highly subsidised fee of $150 for selected participants — a fraction of its real cost, made possible through the support of UNIDO, the Italian Cooperation, and partner organisations. This fee is a one-off payment made upon acceptance into the programme. Participants are also responsible for their own travel and accommodation expenses.",
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
  heading: "Highly Subsidised at $150",
  body: "Thanks to the support of UNIDO, the Italian Cooperation, and our partner organisations, the full programme fee is just $150 — a fraction of its real cost. This is a single, one-off payment made upon acceptance into the programme.",
  totalFee: "$150",
  totalLabel: "Total Programme Fee",
  paymentNote: "One-off payment",
  footerNote: "Participants are responsible for their own travel and accommodation expenses. The $150 fee covers all tuition, materials, and faculty access.",
  cta: "Apply Now — places are limited and highly competitive.",
};

export const COHORT_COPY = {
  label: "Cohort 1",
  heading: "Meet the Pioneers of Cohort 1",
  body: "Thirty coffee sector leaders from across Kenya were selected to launch the Executive Programme in Coffee Innovation and Business — entrepreneurs, cooperative managers, agronomists, and value chain specialists, each already shaping the future of Kenyan coffee.",
  stats: [
    { value: "30", label: "Participants" },
    { value: "12 / 18", label: "Women / Men" },
    { value: "21", label: "Under age 35" },
    { value: "22 / 8", label: "Private sector / Cooperatives" },
  ],
};

export interface Participant {
  id: number;
  name: string;
  title: string;
  profile: string;
  highlights: string[];
}

export const PARTICIPANTS: Participant[] = [
  {
    id: 1,
    name: "Juliet Jepngetich",
    title: "Founder, Jullyira Coffee | Coffee technologist and cupper",
    profile: "Juliet is the founder of Jullyira Coffee, a young enterprise adding value to coffee from farm to cup: farming, processing, roasting and packaging. Trained at Dedan Kimathi University of Technology, she holds a Diploma in Coffee Technology and Cupping and a Certificate in Coffee Technology and Quality Management. Alongside her own brand, she is Assistant Farm Manager at Ko-kos Coffee Farm and previously served as liquorer and quality assurance manager at Tigoi International.",
    highlights: [
      "Built her own coffee brand covering farming, roasting and packaging since 2021",
      "Trained liquorer with quality assurance experience across mills and estates",
      "Proof that young women can own the whole coffee journey",
    ],
  },
  {
    id: 2,
    name: "Jayoo Dorcus Nyamwaya",
    title: "Agribusiness consultant | Cooperative development specialist",
    profile: "Jayoo is an agribusiness consultant who has worked at three points of Kenya's coffee value chain: nursery and farmer advisory at Kipkelion Coffee Mill, marketing at Kipkelion Coffee Brokerage, and cooperative development with the National Agricultural Value Chain Development Project (NAVCDP). A graduate of the Cooperative University of Kenya (BSc Agribusiness Management), she is a YEFFA–FANRPAN Fellow with pan-African food systems policy exposure, and is committed to building a climate-resilient, internationally competitive coffee enterprise.",
    highlights: [
      "Experience from nursery to brokerage to cooperative advisory",
      "YEFFA–FANRPAN Fellow in youth food systems policy",
      "Trains farmer groups and women agripreneurs in climate-smart practice",
    ],
  },
  {
    id: 3,
    name: "Victor Murei",
    title: "Coffee entrepreneur | Quality and processing",
    profile: "Victor runs Blazing Barry's Coffee, a young coffee business in Trans Nzoia. He describes himself as a coffee entrepreneur, quality control and cupping professional, processor and young coffee innovator, with experience spanning almost every stage of the value chain: farming, wet processing, dry milling, quality, marketing and branding, trading, retail and training. He is part of a new generation of agri-preneurs bringing energy and innovation to Kenyan coffee.",
    highlights: [
      "Experience across nine stages of the coffee value chain",
      "Combines processing know-how with cupping and quality skills",
      "Young innovator building a coffee brand in the North Rift",
    ],
  },
  {
    id: 4,
    name: "Patience Khalayi Mukhwana",
    title: "Coffee entrepreneur | Value chain advisor",
    profile: "Patience is the force behind Imperial Coffee in Bungoma County. A graduate and young coffee innovator, she combines running her own coffee business with advising others along the value chain. Her experience covers coffee farming, wet processing and training and extension work with farmers in western Kenya, a region with strong potential for coffee revival.",
    highlights: [
      "Young woman entrepreneur leading a coffee business in western Kenya",
      "Combines enterprise with value chain advisory work",
      "Hands-on experience in farming, processing and farmer training",
    ],
  },
  {
    id: 5,
    name: "Paul Kamau Ng'ang'a",
    title: "Agribusiness entrepreneur | Youth leader",
    profile: "Paul is a youth leader and agribusiness entrepreneur from Murang'a, linked to Ndiaraini Coffee Factory. Through Kutoka Ardhini Limited he has exported Hass avocados for more than two years, coordinating farmers and buyers to improve market access. He is developing a digital platform to connect smallholder farmers in Murang'a directly to markets and cut post-harvest losses. A Chandaria President's Fellow, he has trained with the YALI Network in agripreneurship and digital marketing.",
    highlights: [
      "Two years of export experience connecting farmers to buyers",
      "Building a digital market-access platform for Murang'a smallholders",
      "Chandaria President's Fellow and active youth leader",
    ],
  },
  {
    id: 6,
    name: "Brian Konga",
    title: "Cooperative coffee leader | Agronomist and marketer",
    profile: "Brian works with Tugen Hills Coffee Cooperative Society in Baringo, bringing together roles as agronomist, extension officer, value chain advisor and coffee marketer. His experience spans farming, wet processing, dry milling and farmer training, giving him a rounded view of how cooperative coffee moves from smallholder farms to market. He represents a growing movement to establish coffee as a viable crop in Baringo's highlands.",
    highlights: [
      "Multi-skilled: agronomy, extension, marketing and advisory",
      "Supports a farmer cooperative in an emerging coffee county",
      "Experience from farm to dry mill",
    ],
  },
  {
    id: 7,
    name: "Abigael Kosgey",
    title: "Agripreneur | Agronomist and value chain advisor",
    profile: "Abigael leads Chemichemi Green Organics, a private business working in the coffee value chain. A graduate agronomist and farm manager, she also advises others along the value chain. Her experience covers farming, marketing and branding, technology and innovation, and farmer training, with a focus on organic and sustainable production.",
    highlights: [
      "Young woman leading an organics-focused agribusiness",
      "Combines agronomy with marketing and branding",
      "Interest in technology and innovation for farmers",
    ],
  },
  {
    id: 8,
    name: "Andrew Bodo",
    title: "Consultant and Head of Research & Innovation",
    profile: "Andrew is Consultant and Head of Research and Innovation at RiverBend Consulting and Research. He brings strong skills in data management, quality assurance and monitoring and evaluation, previously as Quality Assurance and Monitoring Officer with CPHRM Group in Kericho. He holds a Diploma in Agri-Ecology through FAO and is studying for an MSc in Digital Transformation at Nexford University. He is a board member of the Kenya Youth Federation and a YALDA regional ambassador.",
    highlights: [
      "Applies research, data and digital tools to agricultural value chains",
      "Diploma in Agri-Ecology (FAO); MSc in Digital Transformation in progress",
      "Youth leader: Kenya Youth Federation board member",
    ],
  },
  {
    id: 9,
    name: "Jackline Awuor",
    title: "Value chain consultant",
    profile: "Jackline is a value chain consultant with Falcon Insights. Holding a master's degree, she brings experience in cooperative governance, farming, technology and innovation, and training and extension. Her advisory work helps coffee actors strengthen how they are organised and how they use evidence and technology to grow.",
    highlights: [
      "Master's-level value chain consultant",
      "Experience in cooperative governance and farmer training",
      "Brings an insights-led approach to coffee businesses",
    ],
  },
  {
    id: 10,
    name: "Felix Gizuri",
    title: "Manager, Ilashe Group",
    profile: "Felix is a manager at Ilashe Group Limited, a coffee estate business in Uasin Gishu County. A graduate, he brings management experience to an enterprise whose work covers farming, wet processing, training and extension, and trading and export, linking estate production with buyers.",
    highlights: [
      "Manages a coffee estate business in the North Rift",
      "Enterprise spans production through to trading and export",
      "Young professional bringing management skills to coffee",
    ],
  },
  {
    id: 11,
    name: "Isaack Njoroge Nyoike",
    title: "Coffee agronomist | Sustainable land management",
    profile: "Isaack is an agronomist with Kabati Coffee Masters in Murang'a. He served as a coffee agronomist with AVSI Foundation on the ARABIKA Project, training farmers in sustainable practice, and as an Environment Officer with the Upper Tana–Nairobi Water Fund, where he advised farmers on soil conservation, tree planting and carbon credit programmes. He holds a BSc in Agribusiness Management from JKUAT and a certificate in Climate-Smart Coffee Production from the Kenya Coffee College.",
    highlights: [
      "Coffee agronomist on the AVSI ARABIKA Project",
      "Trains farmers on soil conservation and carbon credits",
      "Certified in climate-smart coffee production",
    ],
  },
  {
    id: 12,
    name: "Bethwel Kimutai Chelashaw",
    title: "General Manager, New Chebaon Farmers Co-op",
    profile: "Bethwel is General Manager of New Chebaon Farmers Co-operative Society, which he helped set up: registering the society, recruiting members, and establishing coffee nurseries, fields and crop-handling systems. An agricultural engineer (BSc, Egerton University), he brings two decades of agro-processing leadership, including factory manager roles at Elmara Tea and Coffee Estate, Korara Highlands and Sisibo tea factories, and earlier work with Sasini and KTDA.",
    highlights: [
      "Built a new coffee farmers' cooperative from the ground up",
      "Around 20 years in tea and coffee processing and factory management",
      "Agricultural engineer trained in ISO 9001 and ISO 22000 quality systems",
    ],
  },
  {
    id: 13,
    name: "Brigid Jepkoech Barmatat",
    title: "Founder and CEO, The Green Cycle Network",
    profile: "Brigid is the founder and CEO of The Green Cycle Network Limited, which she has led since 2022, managing finances, researching farming systems and training farmers and trainers. With a Diploma in Banking and studies in commerce at KCA University, she brings a finance lens to agriculture. As a volunteer with the Indigenous Women and Girls Initiative, she promoted agro-ecology, climate action and food security in her community.",
    highlights: [
      "Young woman founder and CEO since 2022",
      "Combines finance and accounting skills with farmer training",
      "Champion of agro-ecology and climate action",
    ],
  },
  {
    id: 14,
    name: "Brian Mugo Munene",
    title: "Agronomist, processor and coffee trader",
    profile: "Brian works with Mount Kenya Coffee/Tea Packers in Kirinyaga, one of Kenya's leading coffee counties. A graduate, he combines roles as agronomist and farm manager, coffee processor and miller, and trader and marketer. His experience spans farming, wet processing, dry milling and trading and export, giving him a practical understanding of how quality is built and sold.",
    highlights: [
      "Covers agronomy, processing, milling and trade",
      "Based in the heart of Mount Kenya coffee country",
      "Young coffee innovator with a packing and export focus",
    ],
  },
  {
    id: 15,
    name: "Kelvin Waweru Wanjiku",
    title: "Cooperative leader | Extension officer",
    profile: "Kelvin works with Ngarua Cooperative Society in Laikipia as a cooperative manager and extension officer. A social work graduate of St Paul's University, he brings strengths in training, capacity building, safety and wellbeing, and data-driven reporting from his work with L'Arche Kenya. His coffee experience covers farming, finance and investment, marketing and branding, and farmer training.",
    highlights: [
      "Supports cooperative management and extension in Laikipia",
      "Social work background focused on people and inclusion",
      "Experienced trainer and capacity builder",
    ],
  },
  {
    id: 16,
    name: "Benedictor Mueke Mwanza",
    title: "Managing Director, CAFECO Trading",
    profile: "Benedictor is Managing Director of CAFECO Trading Limited, buying coffee at the Nairobi Coffee Exchange and negotiating with international importers. She has over a decade in the sector: as a licensing assistant at the AFA Coffee Directorate, then marketing coffee for Makenga Coffee Estate in Makueni and Emcoff Coffee Estate in Kiambu. She works with farmers in Machakos, Makueni, Kiambu and the North Rift to revive coffee farming as a driver of income and climate mitigation.",
    highlights: [
      "Leads a coffee trading company buying at the Nairobi Coffee Exchange",
      "Regulatory, estate marketing and trading experience",
      "Champion of coffee revival in Machakos and Makueni",
    ],
  },
  {
    id: 17,
    name: "Charles Kinyenje Njoroge",
    title: "Coffee quality specialist | Cupper and trainer",
    profile: "Charles is a food scientist (BSc, Dedan Kimathi University of Technology, Second Class Upper) at the DeKUT Coffee Value Addition Centre, where he grades and roasts coffee, runs cupping sessions and trials processing methods. He has trained cuppers under the ARABIKA project, worked as a research assistant on the CELIM coffee project, and trained farmers for the National Coffee Revitalisation Programme on sustainable production, value addition and cooperative principles.",
    highlights: [
      "Hands-on cupping, grading and roasting at DeKUT Coffee Lab",
      "Trained coffee cuppers under the ARABIKA project",
      "Trainer for the National Coffee Revitalisation Programme",
    ],
  },
  {
    id: 18,
    name: "Josia Adede Adina",
    title: "Agricultural extension specialist | Coffee extension champion",
    profile: "Josia is an agricultural education and extension graduate of Egerton University working with the Young Agripreneurs Alliance CBO in Homa Bay. As a coffee extension champion with the New KPCU, he trains farmers in good agricultural practice, supports the rehabilitation of underperforming farms and mobilises farmers into groups. He has also served as an agripreneur with NAVCDP and holds a certificate in coffee management from Kisii Agricultural Training Centre.",
    highlights: [
      "Coffee extension champion with New KPCU",
      "Rehabilitating coffee farms in an emerging coffee region",
      "Trains farmers in regenerative and good agricultural practice",
    ],
  },
  {
    id: 19,
    name: "Wangeci Gitata-Kiriga",
    title: "Founder, Revolutionary Coffee | Partnerships and sustainability leader",
    profile: "Wangeci founded Revolutionary Coffee in 2022, a woman-owned brand offering 100% washed Arabica microlot coffee for the Kenyan market, deliberately sourced from women farmers. Its Mama Africa line is produced entirely by women, from farmer to roaster. Previously Resource Mobilisation and Partnerships Lead at Fairtrade Africa, she helped develop producer-owned brands such as Zawadi Coffee. She holds an MSc from Georgia State University and an LLB from the University of Nottingham.",
    highlights: [
      "Woman-owned specialty brand sourcing from women farmers",
      "Mama Africa line: women at every step of the value chain",
      "10+ years building partnerships, including at Fairtrade Africa",
    ],
  },
  {
    id: 20,
    name: "Tom Mbirui Muriuki",
    title: "Coffee Ward Champion | ESG consultant",
    profile: "Tom is a Coffee Ward Champion with KPCU at Mwirua Farmers Cooperative Society in Ndia, Kirinyaga, working with more than 100 smallholder farmers on climate-adaptive agronomy and post-harvest quality. As an independent ESG consultant, he has trained 60 farmers on EU Deforestation Regulation (EUDR) compliance, including farm mapping and record keeping. He holds a BSc from JKUAT and a Data and AI Analytics certificate.",
    highlights: [
      "Works with 100+ smallholder coffee farmers in Kirinyaga",
      "Trained 60 farmers on EUDR compliance",
      "Brings data and AI skills to field research",
    ],
  },
  {
    id: 21,
    name: "Grace Wairima Njeri",
    title: "Founder and Brand Owner, Njeri Coffee",
    profile: "Grace founded Njeri Coffee, her own coffee brand, and manages sales, marketing and customer service end to end. She promotes her coffee through social media and direct engagement, building a loyal customer base through personal service. Her customer care role at Waziri Coffee taught her to educate customers on coffee varieties and preparation, and she brings strong online sales and digital marketing skills to the business.",
    highlights: [
      "Took her own coffee brand from concept to active sales",
      "Skilled in social media marketing and online sales",
      "Customer-focused: builds loyalty through personal service",
    ],
  },
  {
    id: 22,
    name: "Geoffrey Murithi Wanjiru",
    title: "Coffee Estate Manager | Industry advocate",
    profile: "Geoffrey manages Kangonja Coffee Estate in Embu, a seven-acre specialty farm growing SL28, SL34 and Ruiru 11, where he has achieved over 80% AA-grade coffee and established a certified nursery and demonstration farm. He chairs the Kathunguri Kanindi Coffee Farmers Association, mentoring young farmers, and is a director of Embu Coffee Estates Company, supporting Rainforest Alliance certification and EUDR mapping. He shares grower tips on YouTube and TikTok.",
    highlights: [
      "Over 80% AA-grade coffee at Kangonja Estate",
      "Chairs a youth-focused coffee farmers' association",
      "Uses drones, AI tools and social media in coffee farming",
    ],
  },
  {
    id: 23,
    name: "George Ngure",
    title: "Head of Operations, Huru Coffee",
    profile: "George is Head of Operations at Huru Coffee Company Limited, a private coffee business. As a young professional, he oversees the day-to-day running of the business and is part of a new generation working to grow Kenya's domestic coffee market.",
    highlights: [
      "Leads operations at a Kenyan coffee company",
      "Young professional growing the local coffee market",
    ],
  },
  {
    id: 24,
    name: "Kevin Manyeki",
    title: "Founder, Out of Kenya Speciality Coffee",
    profile: "Kevin is the business owner behind Out of Kenya Speciality Coffee, a private enterprise focused on specialty Kenyan coffee. A graduate entrepreneur, he joins the programme to strengthen his business and help showcase the quality of Kenyan coffee.",
    highlights: [
      "Runs a specialty Kenyan coffee business",
      "Entrepreneur promoting Kenyan coffee quality",
    ],
  },
  {
    id: 25,
    name: "Patrick Maina Wambui",
    title: "Project Field Extension Officer, 3E Africa",
    profile: "Patrick is a Project Field Extension Officer with 3E Africa, an NGO, where since 2024 he has trained farmers in the coffee and dairy value chains. He works closely with coffee farmers' societies, supporting cooperative development, record keeping and reporting. He holds a Certificate in Sustainable Agriculture and Rural Development from Baraka Agricultural College and completed Coffee Management training at the Coffee Research Institute, Ruiru, in 2025.",
    highlights: [
      "Trains farmers in both coffee and dairy",
      "Supports coffee farmers' cooperative societies",
      "Long-standing grounding in sustainable agriculture",
    ],
  },
  {
    id: 26,
    name: "Judith Mungai",
    title: "Founder and MD, Elite Roast Ventures | Pan-African commercial leader",
    profile: "Judith founded Elite Roast Ventures in 2025, a coffee innovation and market development enterprise creating opportunities for premium Kenyan coffee and for women and farming communities. She brings 15+ years of commercial leadership, including leading Nescafé across East, Southern, Central and West Africa for Nestlé, where she launched the Nescafé Plan in Kenya, and Head of Marketing, East Africa, at Godrej. She holds a BCom from the University of Nairobi.",
    highlights: [
      "15+ years of pan-African brand and commercial leadership",
      "Led Nescafé brands across more than 25 African markets",
      "Founded a coffee value-addition venture for women and farmers",
    ],
  },
  {
    id: 27,
    name: "Mary Wacera Kieha",
    title: "Founder, Over A Drink | CPA and agri-finance professional",
    profile: "Mary founded Over A Drink Ltd in 2023, a Kenyan specialty coffee roaster and exporter shipping green and roasted coffee to the UK and Europe. A CPA with 9+ years in finance and operations, she has mobilised USD 220,000 in external funding for an impact enterprise and built investor-ready financial systems. She is completing an MBA in Sustainability at Warwick Business School and has represented ventures at the CEWAS and E4Impact accelerators.",
    highlights: [
      "Exports Kenyan specialty coffee to the UK and Europe",
      "CPA who has mobilised USD 220,000 in impact funding",
      "MBA candidate in Sustainability, Warwick Business School",
    ],
  },
  {
    id: 28,
    name: "Martin Mwaniki Mwangi",
    title: "Business development lead | Agri-export specialist",
    profile: "Martin has partnered since 2025 with Molinao Kenya Coffee Shop to link coffee producers with local consumers and build a pathway into Europe, China and the Middle East. He brings 10+ years of business development experience, including as co-founder of Bevega, a fresh produce exporter, where he grew export revenue by 25% and secured contracts worth over USD 210,000 a year. He holds a BA in Economics from the Catholic University of Eastern Africa.",
    highlights: [
      "Building international market pathways for Kenyan coffee",
      "Co-founder of an agri-export company serving Hong Kong, UAE and Europe",
      "Represented Kenya at Fruit Attraction and Dubai Expo",
    ],
  },
  {
    id: 29,
    name: "Kevin Wekesa",
    title: "Coffee Value Chain Manager, TJC Farm",
    profile: "Kevin manages the coffee enterprise at TJC Farm near Eldoret, an integrated farm recognised as a centre of excellence in mixed farming. He leads everything from agronomy to harvest, post-harvest quality and sales, within a sustainability model using biogas, rainwater harvesting and a hydraulic ram pump. A trained teacher (BEd, distinction), he uses his skills to train farm teams and neighbouring smallholders. His goal: take TJC coffee from bulk sales to a traceable specialty brand.",
    highlights: [
      "Manages coffee end to end at an integrated commercial farm",
      "Uses renewable energy and water harvesting in production",
      "Trained educator sharing good practice with smallholders",
    ],
  },
  {
    id: 30,
    name: "Rhodah Wambui",
    title: "Programme manager | Coffee sustainability and EUDR",
    profile: "Rhodah is an operations and programme management professional with 8+ years of experience, including as Project Officer at the Nairobi Coffee Exchange, where she took part in DIASCA engagements with GIZ and the Global Coffee Platform on traceability and EUDR readiness. She is Youth Representative at the African Fine Coffees Association and a programme manager with The Forest Foundation. She holds a BSc in International Business Administration (Finance) from USIU and PMP certification.",
    highlights: [
      "Youth Representative, African Fine Coffees Association (AFCA)",
      "Coordinated coffee sector initiatives at the Nairobi Coffee Exchange",
      "Specialist in sustainability, traceability and EUDR",
    ],
  },
];

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
