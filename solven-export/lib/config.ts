export const siteConfig = {
  name: "Solven Solutions",
  fullName: "Solven Solutions AS",
  description: "Solven hjelper bedrifter å redusere svartid, øke løsningsgrad og levere bedre kundedialog 24/7. Demo på få minutter.",
  url: "https://www.solven.no",
  
  contact: {
    phone: "+4745391275",
    phoneDisplay: "+47 453 91 275",
    email: "sales@solven.no",
    supportEmail: "support@solven.no",
    contactEmail: "kontakt@solven.no",
    address: "Vestre Bingsa industriveg 5",
  },
  
  cta: {
    primary: "Book demo",
    secondary: "Se pakker",
    contact: "Snakk med salg",
  },
  
  hero: {
    title: "AI-kundeservice som faktisk leverer",
    subtitle: "Reduser svartid, øk løsningsgraden og gi kundene bedre svar – 24/7. Trenet på dine rutiner, produkter og tone-of-voice.",
  },
  
  features: {
    demoWidgetEnabled: process.env.DEMO_WIDGET_ENABLED === 'true',
  },
  
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  },
};
