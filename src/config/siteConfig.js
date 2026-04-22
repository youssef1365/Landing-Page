export const siteConfig = {
  branding: {
    eventName: "West Africa Market Entry Program",
    eventTagline: "Accra, June 2026",
    description: "8–10 pre-qualified B2B meetings with West African buyers, distributors and partners across agrifood, construction, technology, and financial services.",
    logo: "West Africa Market Entry Program",
    favicon: "/favicon.ico",
  },

  colors: {
    primary: "#4dd9ac",
    secondary: "#8da5bf",
    accent: "#3bc99c",
    background: "#0d1b2e",
    surface: "#091524",
    text: "#ffffff",
    textMuted: "#94aec4",
    border: "rgba(77, 217, 172, 0.1)",
  },

  header: {
    logo: "West Africa Market Entry Program",
    nav: [
      { text: "About", href: "#EventOverview" },
      { text: "Participants", href: "#ParticipantProfiles" },
      { text: "Apply", href: "#ApplicationForms" },
    ],
  },

  hero: {
    seller: {
      badge: {
        items: ["West Africa Market Entry Program"],
      },
      headlinePlain: "Enter West African Markets",
      headlineAccent: "Through Qualified Buyers.",
      subheadline:
        "Meet pre-qualified West African buyers through structured, high-impact B2B meetings designed to generate real deals.",
      ctaPrimary: {
        text: "Apply as a Company",
        target: "seller",
      },
      ctaSecondary: {
        text: "How it works",
        target: "seller",
      },
      useBackgroundImage: true,
      backgroundImage: "/img.png",
      stats: [
        { value: "25 & 26 June", label: "Event Dates" },
        { value: "Kempinski Hotel Gold Coast City", label: "Accra, Ghana" },
        { value: "Verified Buyers Only", label: "Decision-Makers With Mandate" },
        { value: "Limited Seats", label: "Application Required" },
      ],
    },

    buyer: {
      badge: {
        items: ["West Africa Market Entry Program"],
      },
      headlinePlain: "Meet Verified Exporters",
      headlineAccent: "Ready for Partnerships.",
      subheadline:
        "Join curated meetings with international companies looking for distribution and partnerships in West Africa.",
      ctaPrimary: {
        text: "Request to Join as Buyer",
        target: "buyer",
      },
      ctaSecondary: {
        text: "How it works",
        target: "buyer",
      },
      useBackgroundImage: true,
      backgroundImage: "/img.png",
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
      subheadline:
        "WINK's curated B2B trade missions are built for companies ready to access new export markets. Your agenda is prepared before you arrive — you walk in knowing exactly who you meet and why. Every buyer is pre-screened and matched to your product profile.",
      featuretitle: "Who will you Meet",
      features: [
        "Pre-scheduled B2B meetings — your agenda is confirmed before departure",
        "Carefully selected participants across the agrofood value chain",
        "Direct access to decision-makers with purchasing authority",
        "Focus on outcomes — deals, import agreements, and long-term partnerships"
      ],
      targetMarkets: ["Ghana", "Nigeria", "Ivory Coast"]
    },

    buyer: {
      label: "The Program",
      headline: "This is not a traditional exhibition.",
      subheadline:
        "It is a curated B2B program designed to connect Ghanaian importers, distributors, and retailers with international food exporters looking to enter or expand in the Ghanaian market. Every meeting is pre-scheduled and tailored to your sourcing needs.",
      features: [
        "Pre-scheduled one-on-one meetings with international exporters",
        "Suppliers from Egypt, France, Spain, Canada, USA, Morocco, and Italy",
        "Direct discussions with decision-makers",
        "A structured agenda built before the event",
        "Meetings focused on sourcing, pricing, and partnerships",
        "Possibility of meetings at your premises for deeper engagement"
      ],
      targetMarkets: ["International Suppliers", "Decision Makers", "Qualified Buyers"]
    }
  },

  participantProfiles: {
    headline: "Who You Will Meet",
    subheadline: "Pre-qualified West African buyers, distributors and partners actively looking for partnerships",

    whoYouWillMeet: [
      "International food exporters targeting Ghana",
      "Producers and manufacturers with export capabilities",
      "Companies ready to supply and negotiate",
      "Decision-makers (export managers, business development, CEOs)"
    ],

    sectorsCovered: [
      "Processed food products",
      "Beverages",
      "Dairy products",
      "Frozen & packaged foods",
      "Cereals, grains & pulses",
      "Oils, sauces & condiments",
      "Confectionery & snacks",
      "Fresh & semi-processed agro products"
    ],

    sectors: [
      { name: "Agrifood", countries: 3, icon: "🌾" },
      { name: "Construction", countries: 3, icon: "🏗️" },
      { name: "Technology", countries: 3, icon: "💻" },
      { name: "Financial Services", countries: 3, icon: "💰" },
    ],

    statistics: [
      { number: "400M+", label: "Consumers" },
      { number: "+6.5%", label: "CAGR Growth" },
      { number: "8–10", label: "Pre-qualified Meetings" },
    ],
  },

  forms: {
    sellerForm: {
      heading: "Apply to Join as a Company",
      description: "We select a limited number of companies for each program to ensure maximum value and focus.",
      processSteps: [
        "Submit your application",
        "Qualification call with our team",
        "Final selection and onboarding",
      ],
      notice:
        "Limited Seats Available — We select only qualified companies to ensure the highest value for all participants.",
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
      description:
        "We carefully select buyers based on their relevance and active business needs in West Africa.",
      exclusivityNotice:
        "⭐ Applications are subject to approval. Join our exclusive network of West African decision-makers.",
      ctaButton: "Request Access",
      fields: [
        { name: "companyName", label: "Company Name", type: "text", required: true, placeholder: "Your company name" },
        { name: "roleTitle", label: "Role / Title", type: "text", required: true, placeholder: "e.g., Procurement Manager" },
        { name: "industry", label: "Industry", type: "select", required: true, placeholder: "Select your industry" },
        { name: "lookingToSource", label: "What are you looking to source?", type: "text", required: true, placeholder: "Describe your sourcing needs" },
        { name: "currentProjects", label: "Current Projects / Needs", type: "textarea", required: false, placeholder: "Tell us about your current projects" },
        { name: "budgetRange", label: "Budget Range", type: "select", required: false, placeholder: "Select budget range" },
        { name: "timeline", label: "Timeline", type: "select", required: false, placeholder: "Select timeline" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "your@email.com" },
        { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "Your phone number" },
      ],
    },

    selectOptions: {
      industries: [
        "Agrifood",
        "Construction",
        "Technology",
        "Financial Services",
        "FMCG",
        "Distribution",
        "Retail",
        "Other",
      ],
      budgetRanges: [
        "Under $50K",
        "$50K - $100K",
        "$100K - $500K",
        "$500K - $1M",
        "Over $1M",
      ],
      timelines: [
        "Immediate",
        "1-3 months",
        "3-6 months",
        "6-12 months",
      ],
    },
  },

  footer: {
    sections: [
      {
        title: "West Africa Market Entry Program",
        description:
          "Pre-qualified B2B meetings with West African buyers, distributors and partners. Accra, June 2026.",
      },
      {
        title: "Quick Links",
        links: [
          { text: "About", href: "#about" },
          { text: "Participants", href: "#participants" },
          { text: "Apply", href: "#apply" },
        ],
      },
      {
        title: "Contact",
        contactInfo: [
          { label: "Email", value: "info@westafricaprogram.com" },
          { label: "Phone", value: "+1 (555) 123-4567" },
        ],
      },
    ],
    copyright:
      "© 2026 West Africa Market Entry Program. All rights reserved.",
  },

  seo: {
    title: "West Africa Market Entry Program | Accra, June 2026",
    description:
      "8–10 pre-qualified B2B meetings with West African buyers, distributors and partners. Sectors: agrifood, construction, technology, financial services.",
    keywords:
      "West Africa, B2B meetings, Ghana, Nigeria, Ivory Coast, agrifood, market entry, Accra 2026",
    author: "West Africa Market Entry Program",
  },

  api: {
    sellerFormEndpoint: "/api/applications/seller",
    buyerFormEndpoint: "/api/applications/buyer",
    submitSuccessMessage: "Thank you for your application! Our team will review it shortly.",
    submitErrorMessage: "There was an error submitting your application. Please try again.",
  },
};

export const getColor = (colorName) => {
  return siteConfig.colors[colorName] || "#000000";
};

export const getGradient = (color1, color2) => {
  return `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
};