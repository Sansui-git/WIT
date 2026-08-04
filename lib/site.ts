/**
 * =============================================================================
 *  SITE CONFIGURATION — single source of truth
 * =============================================================================
 *  Edit business details, contact info, service areas, and reusable content
 *  here. Every page and component reads from this file, so updating a value
 *  once updates it everywhere on the site.
 * =============================================================================
 */

export const siteConfig = {
  // ---- Business identity ---------------------------------------------------
  companyName: "Edmonton Walk-In Bath Experts",
  legalName: "Senior Safety Solutions Inc.",
  tagline: "Safer, more comfortable bathing for Edmonton seniors",
  shortDescription:
    "We supply and professionally install walk-in bathtubs for seniors and people with mobility challenges across Edmonton and surrounding communities.",

  // ---- Contact -------------------------------------------------------------
  phone: "780-289-2393",
  // Digits only, used for tel: links.
  phoneHref: "+17802892393",
  email: "info@walkinbathexperts.com",

  // ---- Location & service area --------------------------------------------
  serviceAreaLabel: "Edmonton and surrounding communities, Alberta",
  region: "Alberta",
  regionCode: "AB",
  country: "Canada",
  countryCode: "CA",
  city: "Edmonton",

  // ---- Web -----------------------------------------------------------------
  // Live domain (used for SEO, sitemap, canonical URLs, and structured data).
  url: "https://www.walkinbathexperts.com",

  // Business hours (used in structured data). Adjust to your real hours.
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "By appointment" },
    { days: "Sunday", time: "Closed" },
  ],
  // Machine-readable hours for LocalBusiness schema (openingHoursSpecification).
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
} as const;

// Convenience derived values.
export const phoneDisplay = siteConfig.phone;
export const phoneLink = `tel:${siteConfig.phoneHref}`;
export const emailLink = `mailto:${siteConfig.email}`;

// ---------------------------------------------------------------------------
//  PRICING
//  One honest anchor number. Update here when your pricing changes.
// ---------------------------------------------------------------------------
export const pricing = {
  startingPrice: "$15,800",
  note: "Complete, professionally installed projects — tub, installation, and cleanup included. Your written quote depends on the tub you choose, the options you add, and your bathroom.",
};

// ---------------------------------------------------------------------------
//  IMAGES
//  Central place for site photos. To add a real photo:
//   1. Put the image file in the /public/images folder (create it if needed),
//      e.g. /public/images/hero.jpg
//   2. Set the matching path below, e.g. hero: "/images/hero.jpg"
//  Any entry left as "" shows a tasteful placeholder until you fill it.
// ---------------------------------------------------------------------------
export const siteImages: Record<string, string> = {
  hero: "/images/hero.jpg",              // Staged bathroom, front view of tub
  forSeniors: "/images/for-seniors.jpg", // Senior relaxing in the tub
  forAdultChildren: "",                  // Adult child with parent
  forCaregivers: "",                     // Caregiver with client
  tubOverhead: "/images/tub-overhead.jpg",   // Product: overhead view, jets on
  tubInstalled: "/images/tub-installed.jpg", // Product: installed in bathroom
  install1Before: "",  // Before photo — project 1 (YOUR real projects only)
  install1After: "",   // After photo — project 1
  install2Before: "",  // Before photo — project 2
  install2After: "",   // After photo — project 2
  install3Before: "",  // Before photo — project 3
  install3After: "",   // After photo — project 3
};

// ---------------------------------------------------------------------------
//  NAVIGATION
// ---------------------------------------------------------------------------
export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Walk-In Bathtubs", href: "/walk-in-bathtubs" },
  { label: "Features & Options", href: "/features-and-options" },
  { label: "Installation", href: "/installation-process" },
  { label: "Financing", href: "/financing" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav: NavItem[] = [
  ...primaryNav,
  { label: "Request a Consultation", href: "/request-a-consultation" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

// ---------------------------------------------------------------------------
//  TRUST INDICATORS
//  Factual, non-inflated statements only. No awards, certifications,
//  statistics, or claims that cannot be substantiated.
// ---------------------------------------------------------------------------
export const trustIndicators: { title: string; text: string; icon: string }[] = [
  {
    title: "Locally owned",
    text: "A local company serving Edmonton and the surrounding communities.",
    icon: "map-pin",
  },
  {
    title: "Professional installation",
    text: "Your walk-in bathtub is installed by our own experienced installers.",
    icon: "wrench",
  },
  {
    title: "In-home consultations",
    text: "We visit your home to measure, answer questions, and plan the work.",
    icon: "home",
  },
  {
    title: "Clear, no-pressure guidance",
    text: "Straightforward advice so you can make the right decision for your home.",
    icon: "chat",
  },
];

// ---------------------------------------------------------------------------
//  BENEFITS OF WALK-IN BATHTUBS
// ---------------------------------------------------------------------------
export const benefits: { title: string; text: string; icon: string }[] = [
  {
    title: "Step in safely",
    text: "A low step-in threshold and a watertight door mean no more climbing over a high tub wall.",
    icon: "door",
  },
  {
    title: "Sit while you bathe",
    text: "A built-in, comfortable seat lets you bathe seated rather than lowering to the floor of the tub.",
    icon: "chair",
  },
  {
    title: "Sturdy support",
    text: "Grab bars and slip-resistant surfaces help you feel steady getting in, out, and while seated.",
    icon: "support",
  },
  {
    title: "Soothing warm water",
    text: "A deep soak can ease sore joints and stiff muscles and make bathing something to look forward to again.",
    icon: "water",
  },
  {
    title: "More independence",
    text: "Bathe on your own schedule, with more privacy and less need to rely on others.",
    icon: "independence",
  },
  {
    title: "Stay in your home",
    text: "A safer bathroom can help you or your loved one continue living comfortably at home.",
    icon: "heart",
  },
];

// ---------------------------------------------------------------------------
//  PRODUCT OPTIONS
//  Generic product categories — no invented brand names, prices, or specs.
// ---------------------------------------------------------------------------
export const products: {
  name: string;
  summary: string;
  points: string[];
}[] = [
  {
    name: "Soaker walk-in tubs",
    summary:
      "A straightforward walk-in tub with a low entry, a watertight door, and a comfortable built-in seat for a warm, relaxing soak.",
    points: [
      "Low step-in threshold",
      "Comfortable built-in seat",
      "Grab bars and slip-resistant floor",
      "Handheld shower option",
    ],
  },
  {
    name: "Hydrotherapy walk-in tubs",
    summary:
      "Adds warm-water or air jets that gently massage the body — a popular choice for easing sore muscles and stiff joints.",
    points: [
      "Warm-water and/or air massage jets",
      "Adjustable water flow",
      "Everything included in a soaker tub",
      "Soothing for aches and joint stiffness",
    ],
  },
  {
    name: "Bariatric & wide-door tubs",
    summary:
      "Roomier walk-in tubs with a wider door and larger seat, designed for greater comfort and easier, more supported entry.",
    points: [
      "Wider door opening",
      "Larger, reinforced seating area",
      "Extra support and stability",
      "Built for a comfortable fit",
    ],
  },
  {
    name: "Compact & replacement-fit tubs",
    summary:
      "Sized to fit the footprint of a standard bathtub, so many bathrooms can be upgraded without major remodeling.",
    points: [
      "Fits many existing tub spaces",
      "Less disruption to your bathroom",
      "Good option for smaller bathrooms",
      "Full walk-in safety features",
    ],
  },
];

// ---------------------------------------------------------------------------
//  FEATURES & OPTIONS
// ---------------------------------------------------------------------------
export const features: { title: string; text: string }[] = [
  {
    title: "Low step-in threshold",
    text: "A low entry point reduces how far you have to lift your leg to get in and out.",
  },
  {
    title: "Watertight door",
    text: "A sealed, inward- or outward-opening door keeps water in while you bathe and lets you enter at floor level.",
  },
  {
    title: "Built-in seat",
    text: "A comfortable, contoured seat lets you bathe sitting down at a natural height.",
  },
  {
    title: "Grab bars",
    text: "Securely mounted grab bars give you something sturdy to hold while moving in and out.",
  },
  {
    title: "Slip-resistant surfaces",
    text: "Textured floor and seat surfaces help reduce slipping when wet.",
  },
  {
    title: "Anti-scald controls",
    text: "Temperature-limiting controls help protect against water that is too hot.",
  },
  {
    title: "Fast-fill and fast-drain",
    text: "Designed to fill and drain efficiently so you spend less time waiting in the tub.",
  },
  {
    title: "Handheld shower",
    text: "An adjustable handheld shower makes rinsing easier and more comfortable.",
  },
  {
    title: "Hydrotherapy jets",
    text: "Optional warm-water or air jets provide a gentle massage that can ease aches and stiffness.",
  },
  {
    title: "Easy-reach controls",
    text: "Controls placed within comfortable reach of the seat, with large, simple markings.",
  },
  {
    title: "Chromotherapy lighting",
    text: "Optional soft coloured lighting for a calming, spa-like bathing experience.",
  },
  {
    title: "Heated surfaces",
    text: "Optional heated seat and backrest for added comfort during longer soaks.",
  },
];

// ---------------------------------------------------------------------------
//  INSTALLATION PROCESS
// ---------------------------------------------------------------------------
export const installationSteps: {
  step: number;
  title: string;
  text: string;
}[] = [
  {
    step: 1,
    title: "Free in-home consultation",
    text: "We visit your home at a time that suits you, look at your bathroom, listen to your needs, take measurements, and answer every question — with no pressure to decide.",
  },
  {
    step: 2,
    title: "Personalized recommendation",
    text: "Based on your bathroom, your mobility needs, and your budget, we recommend the walk-in tub and options that fit best, and explain your choices in plain language.",
  },
  {
    step: 3,
    title: "Scheduling & preparation",
    text: "Once you decide to go ahead, we schedule your installation and let you know exactly what to expect on the day, including how long it should take.",
  },
  {
    step: 4,
    title: "Professional installation",
    text: "Our experienced installers remove your old tub if needed, fit your new walk-in tub, connect the plumbing, and make sure everything works properly.",
  },
  {
    step: 5,
    title: "Walkthrough & cleanup",
    text: "We show you how to use your new tub and all of its features, answer any remaining questions, and clean up so your bathroom is ready to use.",
  },
  {
    step: 6,
    title: "Ongoing support",
    text: "We stand behind our work. If you have questions after your installation, you can reach us and we will help.",
  },
];

// ---------------------------------------------------------------------------
//  SERVICE AREAS
//  Communities in and around Edmonton. Update as your coverage changes.
// ---------------------------------------------------------------------------
export const serviceAreas: string[] = [
  "Edmonton",
  "St. Albert",
  "Sherwood Park",
  "Spruce Grove",
  "Stony Plain",
  "Leduc",
  "Beaumont",
  "Fort Saskatchewan",
  "Devon",
  "Nisku",
  "Morinville",
  "Gibbons",
  "Ardrossan",
  "Acheson",
  "Calmar",
];

// ---------------------------------------------------------------------------
//  FINANCING POINTS
//  No invented prices, rates, lenders, or terms. General, truthful framing.
// ---------------------------------------------------------------------------
export const financingPoints: { title: string; text: string }[] = [
  {
    title: "Options to spread the cost",
    text: "A walk-in bathtub is an investment in safety and independence. During your consultation we can discuss ways to spread the cost over time so it fits your budget.",
  },
  {
    title: "A clear, written quote",
    text: "You receive a clear quote for your specific bathroom and chosen options before any work begins — no surprises and no obligation.",
  },
  {
    title: "Help understanding your choices",
    text: "We take the time to explain your payment options in plain language so you and your family can decide what makes sense.",
  },
  {
    title: "Possible funding sources",
    text: "Depending on your situation, other funding or assistance programs may help. We are happy to talk through what to look into, and we recommend confirming details with the relevant program directly.",
  },
];

// ---------------------------------------------------------------------------
//  FREQUENTLY ASKED QUESTIONS
// ---------------------------------------------------------------------------
export const faqs: { question: string; answer: string }[] = [
  {
    question: "What is a walk-in bathtub?",
    answer:
      "A walk-in bathtub has a watertight door and a low step-in threshold, so you can step in at nearly floor level instead of climbing over a high tub wall. Inside, a built-in seat lets you bathe sitting down, with grab bars and slip-resistant surfaces for added safety.",
  },
  {
    question: "Who are walk-in bathtubs for?",
    answer:
      "They are a good fit for seniors, people with limited mobility, and anyone who finds a standard bathtub difficult or unsafe to use. Families often arrange one to help a parent continue bathing safely and independently at home.",
  },
  {
    question: "Will a walk-in tub fit in my bathroom?",
    answer:
      "In many cases, yes. Walk-in tubs come in a range of sizes, and some are designed to fit the footprint of a standard bathtub. The best way to know for certain is a free in-home consultation, where we measure your space and talk through your options.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Every bathroom is different, so the time can vary. During your consultation we assess your space and give you a clear estimate of how long your installation should take before any work begins.",
  },
  {
    question: "Do I have to wait in the tub while it fills and drains?",
    answer:
      "Because the door seals watertight, you sit inside while the tub fills and drains. Many models are designed for faster filling and draining to reduce the wait, and options such as a handheld shower can make the experience more comfortable.",
  },
  {
    question: "Is the water kept warm?",
    answer:
      "Warm water is one of the main comforts of a walk-in tub. Options such as heated seats and backrests, and quick-fill designs, help you stay comfortable. We will walk you through the choices that suit you best.",
  },
  {
    question: "How much does a walk-in bathtub cost?",
    answer:
      "The cost depends on the tub you choose, the options you add, and the work your bathroom needs. That is why we provide a clear, written quote for your specific situation after an in-home consultation — with no obligation.",
  },
  {
    question: "Are there financing options?",
    answer:
      "We can discuss ways to spread the cost over time during your consultation so it fits your budget. We will explain your options in plain language so you and your family can decide what works.",
  },
  {
    question: "Do you serve my community?",
    answer:
      "We serve Edmonton and many surrounding communities across the region. If you are near Edmonton, please call us — we are happy to confirm whether we cover your area.",
  },
  {
    question: "How do I get started?",
    answer:
      "The first step is a free, no-pressure in-home consultation. You can call us or request a consultation through this website, and we will arrange a visit at a time that suits you.",
  },
];
