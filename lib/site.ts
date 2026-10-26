/**
 * =============================================================================
 *  SITE CONFIGURATION — single source of truth
 * =============================================================================
 *  Edit business details, contact info, service areas, and reusable content
 *  here. Every page and component reads from this file, so updating a value
 *  once updates it everywhere on the site.
 * =============================================================================
 */

import type { IconName } from "@/components/Icon";

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
  // Not uploaded yet. Add the file to /public/images, then set the path,
  // e.g. forSeniors: "/images/for-seniors.jpg". Until then a branded
  // illustration panel shows instead of a broken image.
  forSeniors: "",                        // Senior relaxing in the tub
  forAdultChildren: "",                  // Adult child with parent
  forCaregivers: "",                     // Caregiver with client
  tubOverhead: "",   // Product: overhead view, jets on   (/images/tub-overhead.jpg)
  tubInstalled: "",  // Product: installed in bathroom    (/images/tub-installed.jpg)
  illustration: "/images/tub-illustration.png", // Line drawing of an open-door walk-in tub
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
  /** Shorter label for the desktop header, where space is tight. */
  short?: string;
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Walk-In Bathtubs", href: "/walk-in-bathtubs", short: "Walk-In Tubs" },
  { label: "Features & Options", href: "/features-and-options", short: "Features" },
  { label: "Installation", href: "/installation-process" },
  { label: "Financing & Funding", href: "/financing", short: "Financing" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About Us", href: "/about", short: "About" },
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
export const trustIndicators: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Locally owned",
    text: "An Alberta company serving Edmonton and the surrounding communities.",
    icon: "local-alberta",
  },
  {
    title: "Professional installation",
    text: "Your walk-in bathtub is installed by our own experienced installers.",
    icon: "certified-installer",
  },
  {
    title: "In-home consultations",
    text: "We visit your home to measure, answer questions, and plan the work.",
    icon: "free-assessment",
  },
  {
    title: "Clear, no-pressure guidance",
    text: "Straightforward advice so you can make the right decision for your home.",
    icon: "no-pressure",
  },
];

// ---------------------------------------------------------------------------
//  BENEFITS OF WALK-IN BATHTUBS
// ---------------------------------------------------------------------------
export const benefits: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Step in safely",
    text: "A low step-in threshold and a watertight door mean no more climbing over a high tub wall.",
    icon: "low-step-entry",
  },
  {
    title: "Sit while you bathe",
    text: "A built-in, comfortable seat lets you bathe seated rather than lowering to the floor of the tub.",
    icon: "built-in-seat",
  },
  {
    title: "Sturdy support",
    text: "Grab bars and slip-resistant surfaces help you feel steady getting in, out, and while seated.",
    icon: "grab-bar",
  },
  {
    title: "Soothing warm water",
    text: "A deep soak can ease sore joints and stiff muscles and make bathing something to look forward to again.",
    icon: "hydrotherapy-jets",
  },
  {
    title: "More independence",
    text: "Bathe on your own schedule, with more privacy and less need to rely on others.",
    icon: "fall-prevention",
  },
  {
    title: "Stay in your home",
    text: "A safer bathroom can help you or your loved one continue living comfortably at home.",
    icon: "aging-in-place",
  },
];

// ---------------------------------------------------------------------------
//  PRODUCT OPTIONS
//  Generic product categories — no invented brand names, prices, or specs.
// ---------------------------------------------------------------------------
export const products: {
  name: string;
  icon: IconName;
  summary: string;
  points: string[];
}[] = [
  {
    name: "Soaker walk-in tubs",
    icon: "walk-in-tub",
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
    icon: "hydrotherapy-jets",
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
    icon: "leakproof-door",
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
    icon: "low-step-entry",
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
export const features: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Low step-in threshold",
    icon: "low-step-entry",
    text: "A low entry point reduces how far you have to lift your leg to get in and out.",
  },
  {
    title: "Watertight door",
    icon: "leakproof-door",
    text: "A sealed, inward- or outward-opening door keeps water in while you bathe and lets you enter at floor level.",
  },
  {
    title: "Built-in seat",
    icon: "built-in-seat",
    text: "A comfortable, contoured seat lets you bathe sitting down at a natural height.",
  },
  {
    title: "Grab bars",
    icon: "grab-bar",
    text: "Securely mounted grab bars give you something sturdy to hold while moving in and out.",
  },
  {
    title: "Slip-resistant surfaces",
    icon: "non-slip-floor",
    text: "Textured floor and seat surfaces help reduce slipping when wet.",
  },
  {
    title: "Anti-scald controls",
    icon: "anti-scald",
    text: "Temperature-limiting controls help protect against water that is too hot.",
  },
  {
    title: "Fast-fill and fast-drain",
    icon: "quick-drain",
    text: "Designed to fill and drain efficiently so you spend less time waiting in the tub.",
  },
  {
    title: "Handheld shower",
    icon: "handheld-shower",
    text: "An adjustable handheld shower makes rinsing easier and more comfortable.",
  },
  {
    title: "Hydrotherapy jets",
    icon: "hydrotherapy-jets",
    text: "Optional warm-water or air jets provide a gentle massage that can ease aches and stiffness.",
  },
  {
    title: "Easy-reach controls",
    icon: "easy-controls",
    text: "Controls placed within comfortable reach of the seat, with large, simple markings.",
  },
  {
    title: "Chromotherapy lighting",
    icon: "chromotherapy",
    text: "Optional soft coloured lighting for a calming, spa-like bathing experience.",
  },
  {
    title: "Heated surfaces",
    icon: "heated-seat",
    text: "Optional heated seat and backrest for added comfort during longer soaks.",
  },
];

// ---------------------------------------------------------------------------
//  INSTALLATION PROCESS
// ---------------------------------------------------------------------------
export const installationSteps: {
  step: number;
  icon: IconName;
  title: string;
  text: string;
}[] = [
  {
    step: 1,
    icon: "free-assessment",
    title: "Free in-home consultation",
    text: "We visit your home at a time that suits you, look at your bathroom, listen to your needs, take measurements, and answer every question — with no pressure to decide.",
  },
  {
    step: 2,
    icon: "quote-request",
    title: "Personalized recommendation",
    text: "Based on your bathroom, your mobility needs, and your budget, we recommend the walk-in tub and options that fit best, and explain your choices in plain language.",
  },
  {
    step: 3,
    icon: "hours",
    title: "Scheduling & preparation",
    text: "Once you decide to go ahead, we schedule your installation and let you know exactly what to expect on the day, including how long it should take.",
  },
  {
    step: 4,
    icon: "certified-installer",
    title: "Professional installation",
    text: "Our experienced installers remove your old tub if needed, fit your new walk-in tub, connect the plumbing, and make sure everything works properly.",
  },
  {
    step: 5,
    icon: "check",
    title: "Walkthrough & cleanup",
    text: "We show you how to use your new tub and all of its features, answer any remaining questions, and clean up so your bathroom is ready to use.",
  },
  {
    step: 6,
    icon: "transferable-warranty",
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
//  No invented rates, lenders, or terms. General, truthful framing.
// ---------------------------------------------------------------------------
export const financingPoints: { title: string; text: string; icon: IconName }[] = [
  {
    title: "A clear, written quote",
    text: "You receive a written quote for your specific bathroom and chosen options before any work begins — no surprises and no obligation.",
    icon: "transparent-pricing",
  },
  {
    title: "Options to spread the cost",
    text: "During your consultation we can talk through ways to spread the cost over time so it fits comfortably within your budget.",
    icon: "financing",
  },
  {
    title: "Help with government programs",
    text: "Alberta seniors may qualify for provincial and federal programs that lower the cost or remove the monthly payment entirely. We will help you see which ones may apply.",
    icon: "government-funding",
  },
  {
    title: "Plain-language answers",
    text: "We explain every option in plain language so you and your family can decide what makes sense — at your own pace.",
    icon: "no-pressure",
  },
];

// ---------------------------------------------------------------------------
//  FUNDING PROGRAMS
//  Checked against the official pages in October 2026. Programs change, so
//  review these each spring and fall (SHARP's rate is reviewed every April
//  and October) and always point people to the official page.
// ---------------------------------------------------------------------------
export const fundingCheckedDate = "October 2026";

export const fundingPrograms: {
  name: string;
  short: string;
  kind: string;
  icon: IconName;
  summary: string;
  points: string[];
  url: string;
}[] = [
  {
    name: "Seniors Home Adaptation and Repair Program",
    short: "SHARP",
    kind: "Alberta low-interest home-equity loan",
    icon: "home-equity-loan",
    summary:
      "A Government of Alberta loan for home adaptations. The program lists walk-in tubs by name as an eligible project.",
    points: [
      "Loans of up to $40,000",
      "For Albertans 65+ (only one spouse needs to be 65) with household income of $75,000 or less",
      "No monthly payments — repaid when the home is sold or is no longer your main residence",
      "Low simple interest, set by the province (4.45% as of October 2026, reviewed every April and October)",
      "You need to keep at least 25% equity in your home",
    ],
    url: "https://www.alberta.ca/seniors-home-adaptation-repair-program",
  },
  {
    name: "Home Accessibility Tax Credit",
    short: "HATC",
    kind: "Federal tax credit",
    icon: "tax-credit",
    summary:
      "A non-refundable federal tax credit for renovations that make a home safer or more accessible for a senior or a person eligible for the disability tax credit.",
    points: [
      "Claim up to $20,000 of eligible expenses per year (line 31285 of your return)",
      "Worth 15% of eligible expenses — up to $3,000 back on your taxes",
      "For people 65+ at the end of the year, or eligible for the disability tax credit",
      "Not reduced by grants, and the same expense may also qualify as a medical expense",
    ],
    url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-31285-home-accessibility-expenses.html",
  },
  {
    name: "Residential Access Modification Program",
    short: "RAMP",
    kind: "Alberta grant (non-repayable)",
    icon: "government-funding",
    summary:
      "A provincial grant for lower-income Albertans who use a wheelchair, seniors who use a 4-wheel walker on an ongoing basis, or people living with certain progressive conditions.",
    points: [
      "Grants of up to $12,000 per year, and up to $24,000 within 10 years",
      "Income limits apply (for example, $36,900 for a single adult)",
      "Covers permanent changes that help you get into and move around your home — bathroom eligibility is decided case by case",
      "Two contractor quotes are required — we are happy to provide one",
    ],
    url: "https://www.alberta.ca/residential-access-modification-program",
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
      "Every bathroom is different, so the time can vary. During your consultation we assess your space and tell you how long your installation should take before any work begins, so you can plan around it.",
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
      "Complete, professionally installed projects start from $15,800. Your final price depends on the tub you choose, the options you add, and the work your bathroom needs, so we give you a clear, written quote after a free in-home consultation — with no obligation.",
  },
  {
    question: "Are there financing options?",
    answer:
      "Yes. We can discuss ways to spread the cost over time during your consultation so it fits your budget, and explain your options in plain language so you and your family can decide what works.",
  },
  {
    question: "Are there government programs that help pay for a walk-in tub?",
    answer:
      "Often, yes. Alberta's Seniors Home Adaptation and Repair Program (SHARP) offers eligible seniors a low-interest home-equity loan with no monthly payments, and it lists walk-in tubs as an eligible project. The federal Home Accessibility Tax Credit can return up to $3,000 on your taxes, and some lower-income Albertans with significant mobility needs may qualify for a RAMP grant. See our Financing & Funding page for details, and we can help you work out which programs may apply.",
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
