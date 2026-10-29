/**
 * =============================================================================
 *  INSTANT QUOTE — question config
 * =============================================================================
 *  Add or edit questions here; the quote flow renders whatever is listed.
 *  Price = basePrice + the `price` of every answer chosen.
 *  `image` is optional — answers with images render as picture cards.
 *
 *  Price adjustments come from Quote-Pricing-Sheet.xlsx in the project root.
 *  Until those are filled in, every quote shows the base price.
 *
 *  The online quote is an estimate only. Nothing is signed online; the price
 *  is confirmed and the paperwork signed at the free in-home visit.
 * =============================================================================
 */

export interface QuoteOption {
  value: string;
  label: string;
  /** Dollars added to (or subtracted from) the quote. */
  price: number;
  image?: string;
}

export interface QuoteQuestion {
  id: string;
  /** Position shown to the customer ("Question N of 11"). */
  number: number;
  /** Allow picking several answers (customer taps Continue). */
  multiple?: boolean;
  title: string;
  help?: string;
  options: QuoteOption[];
}

/** Starting point for every quote (matches pricing.startingPrice). */
export const basePrice = 15800;

/** Total number of questions the finished flow will have. */
export const totalQuestions = 11;

export const quoteQuestions: QuoteQuestion[] = [
  {
    id: "layout",
    number: 1,
    title: "Which layout best describes your bathroom?",
    help: "Pick the closest match. We confirm exact measurements at your in-home visit.",
    // TODO: set the real price adjustment for each layout.
    options: [
      { value: "standard", label: "Standard", price: 0, image: "/images/quote/layout-standard.webp" },
      { value: "long-narrow", label: "Long and narrow", price: 0, image: "/images/quote/layout-long-narrow.webp" },
      { value: "corner-tub-shower", label: "Corner tub / shower", price: 0, image: "/images/quote/layout-corner-tub-shower.webp" },
      { value: "separate-tub-shower", label: "Separate tub + shower", price: 0, image: "/images/quote/layout-separate-tub-shower.webp" },
      { value: "shower-only", label: "Shower only", price: 0, image: "/images/quote/layout-shower-only.webp" },
      { value: "not-sure", label: "Not sure", price: 0, image: "/images/quote/layout-not-sure.webp" },
    ],
  },
  {
    id: "current",
    number: 2,
    title: "What do you have there now?",
    // TODO: set the real price adjustment for each answer.
    options: [
      { value: "tub-shower", label: "Tub with a shower over it", price: 0 },
      { value: "tub-only", label: "Tub only", price: 0 },
      { value: "shower", label: "Walk-in or stand-up shower", price: 0 },
      { value: "other", label: "Something else", price: 0 },
    ],
  },
  {
    id: "wall-length",
    number: 3,
    title: "How long is the wall where your tub or shower sits?",
    help: "Measure along the back wall, from corner to corner.",
    // TODO: set the real price adjustment for each answer.
    options: [
      { value: "under-54", label: "Shorter than 54 inches", price: 0 },
      { value: "54-59", label: "About 54 to 59 inches", price: 0 },
      { value: "60", label: "About 60 inches (5 feet)", price: 0 },
      { value: "over-60", label: "Longer than 60 inches", price: 0 },
      { value: "not-sure", label: "Not sure", price: 0 },
    ],
  },
  {
    id: "door-width",
    number: 4,
    title: "How wide is your bathroom door?",
    help: "Open the door and measure the clear opening, from the door stop to the edge of the door.",
    // TODO: set the real price adjustment for each answer.
    options: [
      { value: "under-24", label: "Narrower than 24 inches", price: 0 },
      { value: "24-27", label: "24 to 27 inches", price: 0 },
      { value: "28-29", label: "28 to 29 inches", price: 0 },
      { value: "30+", label: "30 inches or wider", price: 0 },
      { value: "not-sure", label: "Not sure", price: 0 },
    ],
  },
  {
    id: "door-side",
    number: 5,
    title: "Which way would you like the tub door to open?",
    help: "Think about where you will stand when you step in.",
    // TODO: set the real price adjustment for each answer.
    options: [
      { value: "left", label: "Left-hand", price: 0 },
      { value: "right", label: "Right-hand", price: 0 },
      { value: "not-sure", label: "Not sure, decide at the site visit", price: 0 },
    ],
  },
  {
    id: "home-type",
    number: 6,
    title: "What type of home is it?",
    // TODO: set the real price adjustment for each answer.
    options: [
      { value: "house", label: "House", price: 0 },
      { value: "townhouse", label: "Townhouse", price: 0 },
      { value: "condo", label: "Condo or apartment", price: 0 },
      { value: "mobile", label: "Mobile or manufactured home", price: 0 },
    ],
  },
  {
    id: "floor",
    number: 7,
    title: "Which floor is the bathroom on?",
    // TODO: set the real price adjustment for each answer.
    options: [
      { value: "main", label: "Main floor", price: 0 },
      { value: "upstairs", label: "Upstairs", price: 0 },
      { value: "basement", label: "Basement", price: 0 },
    ],
  },
  {
    id: "home-age",
    number: 8,
    title: "Roughly how old is your home?",
    // TODO: set the real price adjustment for each answer.
    options: [
      { value: "pre-1960", label: "Built before 1960", price: 0 },
      { value: "1960-79", label: "1960 to 1979", price: 0 },
      { value: "1980-99", label: "1980 to 1999", price: 0 },
      { value: "2000+", label: "2000 or newer", price: 0 },
      { value: "not-sure", label: "Not sure", price: 0 },
    ],
  },
  {
    id: "walls",
    number: 9,
    title: "What are the walls around your tub or shower made of?",
    // TODO: set the real price adjustment for each answer.
    options: [
      { value: "tile", label: "Tile", price: 0 },
      { value: "panels", label: "Fibreglass or acrylic panels", price: 0 },
      { value: "drywall", label: "Painted drywall", price: 0 },
      { value: "not-sure", label: "Not sure", price: 0 },
    ],
  },
  {
    id: "damage",
    number: 10,
    title: "Have you noticed any water damage, soft spots or mould around the tub or shower?",
    // TODO: set the real price adjustment for each answer.
    options: [
      { value: "no", label: "No", price: 0 },
      { value: "yes", label: "Yes", price: 0 },
      { value: "not-sure", label: "Not sure", price: 0 },
    ],
  },
  {
    id: "priorities",
    number: 11,
    multiple: true,
    title: "What matters most to you?",
    help: "Pick as many as you like.",
    // TODO: set the real price adjustment for each answer.
    options: [
      { value: "safe-entry", label: "Easier, safer entry", price: 0 },
      { value: "soaking", label: "Relaxing, therapeutic soaking", price: 0 },
      { value: "easy-clean", label: "Easy to clean", price: 0 },
      { value: "style", label: "Matching my current style", price: 0 },
      { value: "budget", label: "Staying within a budget", price: 0 },
    ],
  },
];

/** Answers are stored as arrays of option values (one entry for single-choice). */
export type QuoteAnswers = Record<string, string[]>;

export function calculatePrice(answers: QuoteAnswers): number {
  return quoteQuestions.reduce((sum, q) => {
    const picked = answers[q.id] ?? [];
    return (
      sum +
      q.options
        .filter((o) => picked.includes(o.value))
        .reduce((s, o) => s + o.price, 0)
    );
  }, basePrice);
}

export const formatPrice = (n: number) => `$${n.toLocaleString("en-CA")}`;

/** One line per question for the summary screen and emails. */
export function summarizeAnswers(answers: QuoteAnswers) {
  return quoteQuestions.map((q) => ({
    question: q.title,
    answer:
      q.options
        .filter((o) => (answers[q.id] ?? []).includes(o.value))
        .map((o) => o.label)
        .join(", ") || "—",
  }));
}
