import {
  COMPANY,
  FINCAN_HOURS,
  FINCAN_PHONE,
  PAGES,
  SERVICES,
  TEAM,
} from "./knowledgeBase";

export type ChatIntent =
  | "greeting"
  | "thanks"
  | "services"
  | "ma"
  | "financing"
  | "specialized_financing"
  | "consulting"
  | "management"
  | "founder"
  | "team"
  | "about"
  | "success"
  | "consultation"
  | "contact"
  | "hours"
  | "location"
  | "pricing"
  | "entrepreneur"
  | "planning"
  | "rejection"
  | "developer"
  | "investor"
  | "navigation"
  | "goodbye"
  | "affirmative"
  | "more_info"
  | "general";

export interface ChatContext {
  userName?: string;
  lastIntent?: ChatIntent;
  recentUserMessages?: string[];
}

interface IntentRule {
  intent: ChatIntent;
  keywords: string[];
  weight?: number;
}

const INTENT_RULES: IntentRule[] = [
  { intent: "greeting", keywords: ["hello", "hi ", "hey", "salam", "assalam", "good morning", "good evening", "good afternoon", "howdy", "namaste"], weight: 3 },
  { intent: "thanks", keywords: ["thank", "thanks", "shukriya", "appreciate", "helpful", "great info"], weight: 3 },
  { intent: "goodbye", keywords: ["bye", "goodbye", "see you", "later", "alvida", "khuda hafiz"], weight: 3 },
  { intent: "affirmative", keywords: ["yes", "yeah", "yep", "sure", "ok", "okay", "please", "go on", "continue", "haan", "ji"], weight: 2 },
  { intent: "more_info", keywords: ["tell me more", "more detail", "explain", "elaborate", "what else", "and?", "go on", "expand", "details"], weight: 4 },
  { intent: "ma", keywords: ["merger", "acquisition", "m&a", "acquire", "sell business", "exit strategy", "partnership deal", "sell my company"], weight: 4 },
  { intent: "financing", keywords: ["financ", "loan", "funding", "capital", "lender", "bank loan", "borrow", "credit", "investment money", "raise money"], weight: 4 },
  { intent: "rejection", keywords: ["rejected", "rejection", "denied", "turned down", "bank said no", "declined"], weight: 5 },
  { intent: "specialized_financing", keywords: ["real estate", "construction", "equipment", "infrastructure", "commercial loan", "property", "mortgage", "cattle", "farm", "auction"], weight: 4 },
  { intent: "planning", keywords: ["business plan", "projection", "financial model", "lender ready", "bankable", "proposal"], weight: 4 },
  { intent: "consulting", keywords: ["consult", "advice", "guidance", "financial consult", "cash flow", "profitability"], weight: 3 },
  { intent: "management", keywords: ["management", "operations", "operational", "growth strateg", "restructur", "turnaround"], weight: 3 },
  { intent: "founder", keywords: ["adeel", "moghal", "founder", "who started", "who owns", "ceo", "principal advisor"], weight: 4 },
  { intent: "team", keywords: ["team", "simran", "hassan", "staff", "who works", "advisor", "coordinator", "analyst"], weight: 3 },
  { intent: "about", keywords: ["about", "who is fincan", "fincan solution", "company", "mission", "what is fincan", "tell me about fincan"], weight: 4 },
  { intent: "success", keywords: ["success", "case stud", "story", "stories", "client result", "example", "portfolio"], weight: 3 },
  { intent: "consultation", keywords: ["book", "consultation", "appointment", "schedule", "meeting", "free consult", "talk to someone", "speak with"], weight: 4 },
  { intent: "contact", keywords: ["contact", "phone", "call", "email", "reach", "whatsapp", "number", "get in touch"], weight: 3 },
  { intent: "hours", keywords: ["hour", "open", "timing", "when open", "available", "what time", "working hours"], weight: 3 },
  { intent: "location", keywords: ["location", "where are you", "address", "canada", "alberta", "office", "based in", "dubai", "middle east", "europe"], weight: 3 },
  { intent: "pricing", keywords: ["price", "cost", "fee", "charge", "how much", "pricing", "expensive", "afford"], weight: 3 },
  { intent: "entrepreneur", keywords: ["entrepreneur", "startup", "small business", "new business", "sme"], weight: 3 },
  { intent: "developer", keywords: ["developer", "development project", "real estate developer", "construction project"], weight: 3 },
  { intent: "investor", keywords: ["investor", "investment opportunity", "pitch deck", "angel", "venture"], weight: 3 },
  { intent: "services", keywords: ["service", "offer", "expertise", "what do you do", "help with", "what can you"], weight: 2 },
  { intent: "navigation", keywords: ["home page", "navigate", "website", "link", "where is", "go to"], weight: 2 },
];

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s&'-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreIntent(text: string): { intent: ChatIntent; score: number } {
  const scores = new Map<ChatIntent, number>();

  for (const rule of INTENT_RULES) {
    for (const kw of rule.keywords) {
      if (text.includes(kw)) {
        const w = rule.weight ?? 1;
        scores.set(rule.intent, (scores.get(rule.intent) ?? 0) + w);
      }
    }
  }

  // Question-word boosts
  if (text.startsWith("who")) scores.set("team", (scores.get("team") ?? 0) + 2);
  if (text.startsWith("what")) scores.set("services", (scores.get("services") ?? 0) + 1);
  if (text.startsWith("how")) scores.set("consultation", (scores.get("consultation") ?? 0) + 1);
  if (text.startsWith("when")) scores.set("hours", (scores.get("hours") ?? 0) + 2);
  if (text.startsWith("where")) scores.set("location", (scores.get("location") ?? 0) + 2);

  let best: ChatIntent = "general";
  let bestScore = 0;
  for (const [intent, score] of scores) {
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }

  return { intent: best, score: bestScore };
}

function pickName(ctx: ChatContext) {
  return ctx.userName ? `${ctx.userName}, ` : "";
}

function responseForIntent(intent: ChatIntent, ctx: ChatContext): string {
  const n = pickName(ctx);

  switch (intent) {
    case "greeting":
      return `${n}welcome to **FinCan**! I can help with financing, business planning, M&A advisory, consultations, and more.\n\nWhat brings you here today — funding, planning, or exploring our services?`;

    case "thanks":
      return `You're very welcome${ctx.userName ? `, ${ctx.userName}` : ""}! Happy to help. Ask me anything else, or book a **free consultation** when you're ready.`;

    case "goodbye":
      return `Thank you for chatting${ctx.userName ? `, ${ctx.userName}` : ""}! Tap **End Chat** to continue on WhatsApp with your summary, or visit **Contact Us** anytime.`;

    case "services": {
      const list = SERVICES.map((s, i) => `${i + 1}. **${s.name}** — ${s.summary}`).join("\n\n");
      return `FinCan offers **4 core services**:\n\n${list}\n\nAsk about any number (e.g. "tell me about financing") for deeper details!`;
    }

    case "ma": {
      const s = SERVICES[0];
      return `**${s.name}**\n\n${s.details}\n\nIdeal if you're buying, selling, merging, or seeking a strategic partner. Want to know how to get started?`;
    }

    case "financing": {
      const s = SERVICES[1];
      return `**${s.name}**\n\n${s.details}\n\nWe support **$100K to $50M** projects depending on scope. If a bank has already said no, we specialize in restructuring deals into lender-ready packages.`;
    }

    case "rejection":
      return `You're not alone — we've helped clients turned down by **multiple banks** secure full approval.\n\n**Example:** A central Alberta cattle auction business was rejected 3 times. FinCan restructured the deal and achieved **100% financing approval**.\n\nWe can review your case in a free consultation. Interested?`;

    case "specialized_financing":
      return `Yes, we cover specialized financing:\n\n• **Real Estate** — development, acquisition, investment\n• **Commercial** — expansion, working capital\n• **Equipment** — machinery, vehicles, assets\n• **Infrastructure** — large-scale projects\n• **Agriculture** — including livestock & auction businesses\n\nWhich area matches your project?`;

    case "planning":
      return `We build **lender-ready business plans** with clear financial projections, market opportunity, growth strategy, and funding requirements.\n\nThis is core to our **Financing & Business Planning** service — the same approach that helped clients go from rejection to approval.`;

    case "consulting": {
      const s = SERVICES[2];
      return `**${s.name}**\n\n${s.summary}\n\n${s.details}\n\nGreat for improving cash flow, profitability, and funding readiness.`;
    }

    case "management": {
      const s = SERVICES[3];
      return `**${s.name}**\n\n${s.summary}\n\n${s.details}`;
    }

    case "founder": {
      const a = TEAM[0];
      return `**${a.name}** — ${a.role}\n\n${a.bio}\n\n${COMPANY.founder}`;
    }

    case "team": {
      const list = TEAM.map((t) => `**${t.name}** — ${t.role}\n${t.bio}`).join("\n\n");
      return `Meet the FinCan team:\n\n${list}`;
    }

    case "about":
      return `**${COMPANY.name}**\n*${COMPANY.tagline}*\n\n${COMPANY.about}\n\n**Track record:**\n${COMPANY.stats.map((s) => `• ${s}`).join("\n")}`;

    case "success":
      return `**Featured Success Story:**\n${COMPANY.successStory}\n\nMore stories on our **Case Studies** page (${PAGES.caseStudies}).`;

    case "consultation":
      return `Book a **free consultation**:\n\n• Homepage → "Book Your Free Consultation"\n• **Contact Us** → ${PAGES.contact}\n• Call **${FINCAN_PHONE}**\n• End chat → **Continue on WhatsApp**\n\n${FINCAN_HOURS} — our specialists tailor advice to your goals.`;

    case "contact":
      return `**Reach FinCan:**\n\n📞 **${FINCAN_PHONE}**\n🕐 **${FINCAN_HOURS}**\n📍 Contact page → ${PAGES.contact}\n\nOr end this chat and message us on **WhatsApp** with your full summary.`;

    case "hours":
      return `We're open **${FINCAN_HOURS}**. Call **${FINCAN_PHONE}** or book a consultation online — we'll respond promptly!`;

    case "location":
      return `FinCan Inc. is **Canada-based**, serving entrepreneurs nationwide.\n\nOur founder brings **25+ years** of experience from **Dubai, Europe, and North America** — combining global insight with Canadian lending standards.`;

    case "pricing":
      return `Initial consultation is **free**. Every project is unique, so we tailor our approach after understanding your goals — no pressure, no obligation.`;

    case "entrepreneur":
      return `**${COMPANY.tagline}** — that's our focus!\n\n${COMPANY.about}\n\nWe turn ambitious ideas into **fundable, lender-approved** projects. What's your business about?`;

    case "developer":
      return `We work with **developers** on real estate, construction, and infrastructure financing — structuring deals that meet lender requirements and international best practices.`;

    case "investor":
      return `We support **investors** with deal assessment, funding structure, business planning, and lender-ready presentations — bridging entrepreneurs and financial institutions.`;

    case "navigation":
      return `**Site map:**\n• Home → /\n• Our Team → /about\n• Services → /services\n• Success Stories → /casestudy\n• Contact → /contactus`;

    case "more_info":
    case "affirmative":
      if (ctx.lastIntent && ctx.lastIntent !== "general" && ctx.lastIntent !== "affirmative" && ctx.lastIntent !== "more_info") {
        return responseForIntent(ctx.lastIntent, { ...ctx, lastIntent: undefined });
      }
      return `Happy to share more! I can dive deeper into:\n\n• Financing & business planning\n• M&A advisory\n• Success stories\n• Booking a consultation\n\nWhat would you like to explore?`;

    default:
      return `${n}I'd love to help! FinCan specializes in making businesses **bankable** — financing, planning, M&A, and consulting.\n\nTry asking:\n• "How do I get funding for my startup?"\n• "Bank rejected my loan — can you help?"\n• "What services do you offer?"\n\nOr call **${FINCAN_PHONE}** (${FINCAN_HOURS}).`;
  }
}

export function getBotResponse(input: string, context: ChatContext = {}): {
  text: string;
  intent: ChatIntent;
} {
  const normalized = normalize(input);
  const { intent, score } = scoreIntent(normalized);

  // Short follow-ups reuse last topic
  if (
    score < 2 &&
    (intent === "affirmative" || intent === "more_info" || normalized.length < 12) &&
    context.lastIntent
  ) {
    return {
      text: responseForIntent(context.lastIntent, context),
      intent: context.lastIntent,
    };
  }

  // Low confidence: blend with recent context
  if (score < 2 && context.recentUserMessages?.length) {
    const combined = [...context.recentUserMessages, normalized].join(" ");
    const retry = scoreIntent(combined);
    if (retry.score >= 2) {
      return { text: responseForIntent(retry.intent, context), intent: retry.intent };
    }
  }

  const resolved = score >= 2 ? intent : "general";
  return { text: responseForIntent(resolved, context), intent: resolved };
}

export const FOLLOW_UP_SUGGESTIONS: Record<ChatIntent, string[]> = {
  greeting: ["What services do you offer?", "How can I book a consultation?", "Tell me about FinCan"],
  services: ["Tell me about financing", "What is M&A advisory?", "Book a free consultation"],
  financing: ["Bank rejected my loan", "What is a business plan?", "Book a consultation"],
  rejection: ["How do I book a consultation?", "What services do you offer?", "Tell me about success stories"],
  ma: ["Book a consultation", "Tell me about financing", "Who is Adeel Moghal?"],
  specialized_financing: ["Book a consultation", "Tell me about business planning", "Success stories"],
  planning: ["How much funding can I get?", "Book a consultation", "Contact details"],
  consulting: ["Financing options", "Book a consultation", "About FinCan"],
  management: ["Financial consulting", "Book a consultation", "Our services"],
  founder: ["Tell me about the team", "Book a consultation", "Success stories"],
  team: ["Who is the founder?", "Book a consultation", "Our services"],
  about: ["What services do you offer?", "Success stories", "Book a consultation"],
  success: ["How can you help me?", "Book a consultation", "Financing services"],
  consultation: ["Contact details", "What are your hours?", "Our services"],
  contact: ["Book a consultation", "What are your hours?", "Our services"],
  hours: ["Book a consultation", "Contact details", "Our services"],
  location: ["Book a consultation", "About FinCan", "Our services"],
  pricing: ["Book a free consultation", "Our services", "Success stories"],
  entrepreneur: ["Financing for startups", "Business planning", "Book a consultation"],
  developer: ["Real estate financing", "Book a consultation", "Success stories"],
  investor: ["M&A advisory", "Financing services", "Book a consultation"],
  navigation: ["Our services", "Contact us", "Book a consultation"],
  thanks: ["What else can you help with?", "Book a consultation", "Contact details"],
  goodbye: ["Book a consultation", "Contact details"],
  affirmative: ["Tell me about financing", "Book a consultation", "Success stories"],
  more_info: ["Our services", "Book a consultation", "Contact details"],
  general: ["What services do you offer?", "Book a free consultation", "Bank rejected my loan"],
};

export function getDynamicSuggestions(intent: ChatIntent): string[] {
  return FOLLOW_UP_SUGGESTIONS[intent] ?? FOLLOW_UP_SUGGESTIONS.general;
}

export function formatBotMessage(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>");
}
