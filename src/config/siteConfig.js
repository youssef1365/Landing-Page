export const siteConfig = {
  branding: {
    eventName: "West Africa Market Entry Program",
    eventTagline: "Accra, June 2026",
    description: "The Fastest Way to Enter West African Markets. A curated B2B program connecting international companies with pre-qualified West African buyers and partners — through structured, high-impact meetings.",
    logo: "West Africa Market Entry Program",
    favicon: "/winklogo.png",
  },


  colors: {
    // Primary palette
    primary: "#4dd9ac",
    winkblue: "#003F5C",
    primaryDark: "#1a6e4a",
    primaryLight: "#c8a84b",

    // Secondary palette
    secondary: "#8da5bf",
    accent: "#3bc99c",

    // Backgrounds
    background: "#0d1b2e",
    backgroundDark: "#080e1a",
    surface: "#091524",
    surfaceLight: "#f8fafc",
    surfaceWhite: "#ffffff",

    // Text
    text: "#ffffff",
    textDark: "#0b1220",
    textMuted: "#94aec4",
    textSecondary: "#475569",

    // Borders
    border: "rgba(77, 217, 172, 0.1)",
    borderLight: "#e2e8f0",
    borderDarker: "#e8edf2",

    // Status
    successGreen: "#1a6e4a",
  },


  header: {
    logoImage: "/winkWhite.png",
    nav: [
      { text: "Program", href: "#EventOverview" },
      { text: "Participants", href: "#ParticipantProfiles" },
      { text: "Process", href: "#Journey"},
      { text: "Why Join", href: "#WhyJoin"},
    ],
  },

  hero: {
    seller: {
      badge: { items: ["West Africa Market Entry Program"] },
      headlinePlain: "Enter West African Markets",
      headlineAccent: "Through Qualified Buyers.",
      subheadline: "Meet pre-qualified West African buyers through structured, high-impact B2B meetings designed to generate real deals.",
      ctaPrimary: { text: "Apply", target: "ApplicationForms" },
      ctaSecondary: { text: "How it works", target: "Journey" },
      useBackgroundImage: true,
      backgroundImage: "/hero-seller.png",
      stats: [
        { value: "25 & 26 June", label: "Event Dates" },
        { value: "Kempinski Hotel Gold Coast City", label: "Accra, Ghana" },
        { value: "Verified Buyers Only", label: "Decision-Makers With Mandate" },
        { value: "Limited Seats", label: "Application Required" },
      ],
    },
    buyer: {
      badge: { items: ["West Africa Market Entry Program"] },
      headlinePlain: "Join the Agrofood Trade Mission in Accra",
      headlineAccent: " Curated B2B Program ",
      subheadline: "Meet qualified food exporters from Egypt, France, Spain, Canada, the USA, Morocco, and Italy through structured, high-impact B2B meetings.",
      ctaPrimary: { text: "Join as Buyer", target: "buyer" },
      ctaSecondary: { text: "How it works", target: "Journey" },
      useBackgroundImage: true,
      backgroundImage: "/hero-buyer.png",
      stats: [
        { value: "25 & 26 June", label: "Event Dates" },
        { value: "Kempinski Hotel Gold Coast City", label: "Accra, Ghana" },
        { value: "Verified Buyers Only", label: "Decision-Makers With Mandate" },
        { value: "Limited Seats", label: "Application Required" },
      ],
    },
  },

  eventOverview: {
    seller: {
      label: "The Program",
      headline: "Structured meetings. Zero wasted time.",
      subheadline: "WINK's curated B2B trade missions are built for companies ready to access new export markets. Your agenda is prepared before you arrive — you walk in knowing exactly who you meet and why.",
      subhead2: "Every buyer is pre-screened and matched to your product profile.",
      featuretitle: "What you Get",
      features: [
        "Pre-scheduled B2B meetings — your agenda is confirmed before departure",
        "Carefully selected participants across the agrofood value chain",
        "Direct access to decision-makers with purchasing authority",
        "Focus on outcomes — deals, import agreements, and long-term partnerships",
      ],
      targetMarkets: ["Ghana", "Nigeria", "Ivory Coast"],
    },
    buyer: {
      label: "The Program",
      headline: "This is not a traditional exhibition.",
      subheadline: "It is a curated B2B program designed to connect Ghanaian importers, distributors, and retailers with international food exporters looking to enter or expand in the Ghanaian market. Every meeting is pre-scheduled and tailored to your sourcing needs. No random networking, only relevant business discussions.",
      featuretitle: "What to Expect",
      features: [
        "Pre-scheduled one-on-one meetings with international exporters",
        "Suppliers from Egypt, France, Spain, Canada, USA, Morocco, and Italy",
        "Direct discussions with decision-makers",
        "A structured agenda built before the event",
        "Meetings focused on sourcing, pricing, and partnerships",
        "Possibility of meetings at your premises for deeper engagement",
      ],
      targetMarkets: ["International Suppliers", "Decision Makers", "Qualified Buyers"],
    },
  },

  participantProfiles: {
    seller: {
      headline: "Who You Will Meet",
      subheadline: "Pre-qualified West African buyers, distributors and partners actively looking for partnerships",
      whoYouWillMeet: [
        "Importers and distributors across West Africa",
        "Retail chains and supermarket buyers",
        "Wholesalers with regional distribution networks",
        "Decision-makers with active purchasing mandates",
      ],
      sectorsCovered: [
        "Processed food products",
        "Beverages",
        "Dairy products",
        "Frozen & packaged foods",
        "Cereals, grains & pulses",
        "Oils, sauces & condiments",
        "Confectionery & snacks",
        "Fresh & semi-processed agro products",
      ],
    },
    buyer: {
      headline: "Who You Will Meet",
      subheadline: "Verified international exporters ready to supply and partner in West Africa",
      whoYouWillMeet: [
        "International food exporters targeting Ghana",
        "Producers and manufacturers with export capabilities",
        "Companies ready to supply and negotiate",
        "Decision-makers (export managers, business development, CEOs)",
      ],
      sectorsCovered: [
        "Processed food products",
        "Beverages",
        "Dairy products",
        "Frozen & packaged foods",
        "Cereals, grains & pulses",
        "Oils, sauces & condiments",
        "Confectionery & snacks",
        "Fresh & semi-processed agro products",
      ],
    },
  },

  stats: {
      label: "WINK — Proven Track Record",
      items: [
        { value: "30", suffix: "+", label: "Countries Represented" },
        { value: "30,000", suffix: "+", label: "B2B Meetings Organized" },
        { value: "$100M", suffix: "+", label: "Business Generated" },
      ],
    },

  sellerJourney: {
    cta: {
      headline: "Apply to Join as an Exporter.",
      copy: "We select a limited number of companies for each program to ensure maximum value and focus. Apply now to secure your place and start meeting pre-qualified West African buyers.",
      processLabel: "Selection Process",
    },
    process: {
      label: "The Process",
      headline: "How it works",
      image: "/howseller.jpg",
      imageAlt: "Seller meeting process at WINK B2B program",
      steps: [
        { number: "1", title: "Submit Your Application", description: "A short form — takes 5 minutes. We review every application personally." },
        { number: "2", title: "Qualification Call with Our Team", description: "A 20-minute call to understand your products, targets, and readiness for the Ghanaian market." },
        { number: "3", title: "Confirmation & Onboarding", description: "Once confirmed, we build your personalized meeting agenda with matched, verified buyers." },
      ],
    },
    whyJoin: {
      label: "Why Join",
      headline: "Why Sellers Choose WINK",
      image: "/how-it-works-seller.png",
      imageAlt: "International sellers meeting West African buyers at WINK event",
      reasons: [
        {title: "No wasted meetings.", desc : "Every buyer is screened and matched to your product profile before the program."},
        {title:"Your agenda is ready before you land.", desc : " Meetings are pre-scheduled — you know exactly who you meet and when."},
        {title:"Real decision-makers only.", desc : " No intermediaries, no assistants — only buyers with mandate and budget authority."},
        {title:"30,000+ meetings organized.", desc : " WINK has been running curated B2B trade missions across 30+ countries for over a decade."},
      ],
    },
    finalCta: {
      headline: "Secure Your Place in the Program",
      copy: "Limited company slots available.",
      copy2: "Apply now and our team will be in touch within 48 hours.",
    },
  },

  buyerJourney: {
    cta: {
      headline: "Request to Join as a Buyer.",
      copy: "We are selecting a limited number of Ghanaian buyers to participate in this program. If your company is looking to source new products, diversify suppliers, or secure competitive offers, this is a direct opportunity to meet reliable exporters in a structured setting. Participation is validated to ensure relevant and high-value meetings.",
      processLabel: "Participation Process",
      button: "Apply Now",
    },
    process: {
      label: "The Process",
      headline: "How it works",
      image: "/howseller.jpg",
      imageAlt: "Buyer meeting schedule and process at WINK B2B program",
      steps: [
        { number: "1", title: "Apply", description: "Submit your request and specify the products you are looking for." },
        { number: "2", title: "Qualification", description: "Your profile is reviewed to ensure alignment with the program." },
        { number: "3", title: "Matchmaking", description: "We match you with relevant international exporters." },
        { number: "4", title: "Schedule", description: "You receive a personalized agenda of meetings." },
        { number: "5", title: "Meet", description: "Attend your meetings in Accra and engage directly with suppliers." },
      ],
    },
    whyJoin: {
      label: "Why Join",
      headline: "Why join as a buyer",
      image: "/how-it-works-seller.png",
      imageAlt: "Ghanaian buyers discovering international suppliers at WINK event",
      reasons: [
        { title: "Meet international suppliers in one place"},
        { title:"Save time with pre-arranged meetings"},
        { title:"Access verified exporters ready to work with Ghana"},
        { title:"Discover new products and competitive offers"},
        { title:"Build direct, long-term partnerships"},
      ],
    },
    finalCta: {
      headline: "Secure Your Meetings with International Suppliers",
      copy: "Limited seats available for Ghanaian buyers.",
      copy2: "Apply now to receive your personalized meeting agenda.",
      button: "Request Participation",
    },
  },

  forms: {
    sellerForm: {
      heading: "Apply to Join as a Company",
      description: "We select a limited number of companies for each program to ensure maximum value and focus.",
      processSteps: [
        "Submit Your Application",
        "Qualification Call with Our Team",
        "Final Selection and Onboarding",
      ],
      notice: "Limited Seats Available — We select only qualified companies to ensure the highest value for all participants.",
      ctaButton: "Apply Now",
      fields: [
        { name: "companyName", label: "Company Name", type: "text", required: true, placeholder: "Your company name" },
        { name: "website", label: "Website", type: "url", required: false, placeholder: "https://example.com" },
        { name: "industry", label: "Industry", type: "select", required: true, placeholder: "Select your industry" },
        { name: "products", label: "Products / Services", type: "text", required: true, placeholder: "Describe your main offerings" },
        { name: "targetMarkets", label: "Target Markets", type: "text", required: false, placeholder: "e.g., Ghana, Nigeria, Ivory Coast" },
        { name: "idealBuyers", label: "Ideal Buyers (Wishlist)", type: "text", required: false, placeholder: "What kind of buyers are you looking for?" },
        { name: "contactPerson", label: "Contact Person", type: "text", required: true, placeholder: "Your full name" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "your@email.com" },
        { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "Your phone number" },
      ],
    },
    buyerForm: {
      heading: "Request to Join as a Buyer",
      description: "We carefully select buyers based on their relevance and active business needs in West Africa.",
      exclusivityNotice: "⭐ Applications are subject to approval. Join our exclusive network of West African decision-makers.",
      ctaButton: "Request Access",
      fields: [
        { name: "companyName", label: "Company Name", type: "text", required: true, placeholder: "Your company name" },
        { name: "contactName", label: "Contact Name", type: "text", required: false, placeholder: "Your name" },
        { name: "roleTitle", label: "Role / Title", type: "text", required: true, placeholder: "e.g., Procurement Manager" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "your@email.com" },
        { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "Your phone number" },
        { name: "industry", label: "Industry", type: "select", required: true, placeholder: "Select your industry" },
        { name: "budgetRange", label: "Import annual range", type: "select", required: false, placeholder: "Select import range" },
        { name: "timeline", label: "Timeline", type: "select", required: false, placeholder: "Select timeline" },
        { name: "lookingToSource", label: "What are you looking to source?", type: "textarea", required: true, placeholder: "Describe your sourcing needs" },

      ],
    },
    selectOptions: {
      industries: ["Agri/food", "Construction", "Technology", "Financial Services", "FMCG", "Distribution", "Retail", "Other"],
      budgetRanges: ["Less 1M$", "1M$ - 10M$", " More than 10M$"],
      timelines: ["Immediate", "1-3 months", "3-6 months", "6-12 months"],
    },
  },

  footer: {
    sections: [
      {
        title: "Wink",
        description: "Pre-qualified B2B meetings with West African buyers, distributors and partners. Accra, June 2026.",
      },
      {
        title: "Quick Links",
        links: [
          { text: "About", href: "#EventOverview" },
          { text: "Participants", href: "#ParticipantProfiles" },
          { text: "Process", href: "#Journey" },
        ],
      },
      {
        title: "Wink",
        links: [
          { text: "Wink Consulting", href: "https://www.wink-consulting.com" },
          { text: "About Us", href: "https://www.wink-consulting.com/AboutUs" },
          { text: "Past Missions", href: "https://www.wink-consulting.com/Event" },

        ],
      },
      {
        title: "Contact",
        contactInfo: [
          { label: "Email", value: "winkevents@wink-consulting.com" },
          { label: "Phone", value: "+212 6 69 27 00 75" },
        ],
      },
    ],
    copyright: "© 2026 West Africa Market Entry Program. All rights reserved.",
  },

  seo: {
    title: "West Africa Market Entry Program | Accra, June 2026",
    description: "8–10 pre-qualified B2B meetings with West African buyers, distributors and partners. Sectors: agrifood, construction, technology, financial services.",
    keywords: "West Africa, B2B meetings, Ghana, Nigeria, Ivory Coast, agrifood, market entry, Accra 2026",
    author: "West Africa Market Entry Program",
  },

  api: {
    sellerFormEndpoint: "/api/applications/seller",
    buyerFormEndpoint: "/api/applications/buyer",
    submitSuccessMessage: "Thank you for your application! Our team will review it shortly.",
    submitErrorMessage: "There was an error submitting your application. Please try again.",
  },
};

export const getColor = (colorName) => siteConfig.colors[colorName] || "#000000";

export const getGradient = (color1, color2) => `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;