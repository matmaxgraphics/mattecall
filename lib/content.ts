// Central copy source for the MatteCall landing page.
// Every string here has been checked for dashes (hyphens and em dashes);
// where the source material used one, it has been rewritten with proper
// punctuation or restructured wording instead.

export const nav = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "See A Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "AI Receptionist for Home Service Businesses",
  title: "Stop Losing Jobs Because Nobody Picked Up",
  subtitle:
    "Your technicians are busy doing the work. Your receptionist shouldn't have to be.",
  body: "We set up an AI receptionist that answers your business calls 24/7, handles common customer questions, qualifies service requests, and books appointments directly into your calendar.",
  callout: "Every call gets an answer. Every opportunity gets a next step.",
  primaryCta: {
    label: "Call The Demo: (234) 256-4947",
    href: "tel:+12342564947",
  },
  secondaryCta: { label: "Book A Free 15 Minute Call", href: "#contact" },
};

export const problem = {
  eyebrow: "The Real Problem",
  title: "Your Customers Don't Know You're Busy",
  lines: [
    "A customer doesn't know your technician is under a sink.",
    "They don't know your team is on another job.",
    "They just know nobody answered the phone.",
  ],
  closingLine:
    "And when they need a plumber, electrician, HVAC technician, roofer, or other service provider, they can simply call the next business.",
  resolution: "Your AI receptionist can answer instead.",
};

export const features = {
  eyebrow: "When A Customer Calls",
  title: "Here's What It Can Do",
  items: [
    {
      icon: "PhoneRegular",
      title: "Answer immediately",
      body: "No voicemail. No waiting for someone to become available.",
    },
    {
      icon: "PersonChatRegular",
      title: "Understand the request",
      body: "Identify what the customer needs and ask the relevant follow up questions.",
    },
    {
      icon: "QuestionCircleRegular",
      title: "Answer common questions",
      body: "Services, business hours, service areas, pricing policies, and other information you provide.",
    },
    {
      icon: "CalendarCheckmarkRegular",
      title: "Book appointments",
      body: "Check your actual availability and schedule customers directly.",
    },
    {
      icon: "WeatherMoonRegular",
      title: "Handle after hours calls",
      body: "Continue answering when your office is closed.",
    },
    {
      icon: "ArrowForwardRegular",
      title: "Escalate when necessary",
      body: "When a customer needs a human, the receptionist can hand the conversation over instead of arguing with them.",
    },
  ],
};

export const chatDemo = {
  eyebrow: "See It In Action",
  title: "A Customer Calls About A Leaking Sink",
  description:
    "The receptionist collects the necessary information, checks availability, and books the appointment.",
  closingLine: "No staff member had to stop what they were doing.",
  messages: [
    {
      from: "customer" as const,
      text: "Hi, my kitchen sink is leaking. Can someone come today?",
    },
    {
      from: "ai" as const,
      text: "Absolutely. I can help you schedule a service visit. May I get your name and the address where the service is needed?",
    },
    {
      from: "customer" as const,
      text: "Sure, it's Dana Whitfield, 214 Alder Court.",
    },
    {
      from: "ai" as const,
      text: "Thank you, Dana. I have a technician available at 2:00 PM today. Does that work for you?",
    },
    {
      from: "customer" as const,
      text: "Yes, that works great.",
    },
  ],
  outcomes: [
    { icon: "CheckmarkCircleFilled", label: "Appointment booked" },
    { icon: "CalendarCheckmarkRegular", label: "Calendar updated" },
    { icon: "MailCheckmarkRegular", label: "Customer confirmation sent" },
  ],
};

export const handlesMore = {
  eyebrow: "Beyond Simple FAQs",
  title: "It Handles More Than Simple FAQs",
  intro:
    "A good receptionist needs to know when to answer, when to ask questions, and when to stop.",
  cases: [
    {
      icon: "MoneyRegular",
      label: "Pricing questions",
      quote: "How much does it cost to fix my water heater?",
      response:
        "The receptionist doesn't invent a number. It explains the company's diagnostic or service call fee and offers to schedule an assessment.",
    },
    {
      icon: "WarningRegular",
      label: "Emergency situations",
      quote: "Water is coming through my ceiling.",
      response:
        "The receptionist recognizes the urgency, provides the appropriate safety guidance, collects the necessary information, and prioritizes the service request.",
    },
    {
      icon: "PersonRegular",
      label: "Customers who want a human",
      quote: "I don't want to talk to a robot.",
      response:
        "It doesn't argue. It simply moves toward connecting the customer with a member of the team.",
    },
  ],
};

export const processFlow = {
  eyebrow: "After The Call",
  title: "What Happens After Every Call?",
  intro:
    "You don't just get a recording of a conversation. Your team can have a structured record of what happened.",
  steps: [
    {
      icon: "PhoneRegular",
      title: "Call",
      body: "Customer contacts your business.",
    },
    {
      icon: "PersonChatRegular",
      title: "Conversation",
      body: "The AI answers questions and gathers information.",
    },
    {
      icon: "TagRegular",
      title: "Outcome",
      body: "The interaction is categorized according to what the customer needed.",
    },
    {
      icon: "CalendarCheckmarkRegular",
      title: "Booking",
      body: "If an appointment is made, it appears on your calendar.",
    },
    {
      icon: "AlertRegular",
      title: "Notification",
      body: "Your team receives the relevant notification.",
    },
    {
      icon: "ClipboardTaskRegular",
      title: "Follow up",
      body: "You have the conversation record and information needed to continue the interaction.",
    },
  ],
};

export const setupSteps = {
  eyebrow: "What We Set Up For You",
  title: "You Don't Have To Figure Out The Technology Yourself",
  intro: "We handle the initial implementation.",
  steps: [
    {
      number: "01",
      title: "Business Setup",
      body: "We configure the receptionist around your business, services, hours, service area, and policies.",
    },
    {
      number: "02",
      title: "Conversation Design",
      body: "We define how it should respond to common customer questions and situations.",
    },
    {
      number: "03",
      title: "Lead Qualification",
      body: "We configure the questions needed to understand what the customer needs before booking.",
    },
    {
      number: "04",
      title: "Appointment Booking",
      body: "We connect the receptionist to your scheduling system so customers can book available times.",
    },
    {
      number: "05",
      title: "Escalation",
      body: "We define when the AI should stop and involve your team.",
    },
    {
      number: "06",
      title: "Testing",
      body: "We test normal requests, difficult customers, pricing questions, emergencies, after hours calls, and edge cases before launch.",
    },
    {
      number: "07",
      title: "Launch",
      body: "We connect the system to your phone workflow and monitor the initial conversations.",
    },
  ],
};

export const builtAround = {
  eyebrow: "Not A Generic Chatbot",
  title: "Built Around Your Business",
  intro: "This isn't a generic chatbot dropped onto your phone line.",
  lead: "Before launch, we configure the receptionist around:",
  points: [
    "Your services",
    "Your service area",
    "Your business hours",
    "Your pricing policies",
    "Your booking rules",
    "Your frequently asked questions",
    "Your emergency procedures",
    "Your escalation preferences",
    "Your scheduling availability",
  ],
  closingLine: "And when your business changes, the system can be updated.",
};

type PricingTier = {
  kind: string;
  badge?: string;
  name: string;
  cadence: string;
  description: string;
  price: string;
  priceSuffix: string;
  foundingOffer?: {
    label: string;
    line: string;
    spotsNote: string;
  };
  featuresIntro?: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted: boolean;
};

export const pricing: {
  eyebrow: string;
  title: string;
  intro: string;
  note: string;
  tiers: PricingTier[];
} = {
  eyebrow: "Choose How Much Help You Need",
  title: "Two Ways To Work With Us",
  intro:
    "These are two alternative paths, not two charges that stack. Pick one: a one-time Setup you run yourself afterward, or Full Management with setup included and a monthly plan you can cancel anytime.",
  note: "Software/usage costs are separate and paid by the business.",
  tiers: [
    {
      kind: "Managed",
      badge: "Easiest way to start",
      name: "Full Management",
      cadence: "Monthly, cancel anytime",
      description:
        "Setup is included. We configure, launch, and continuously manage your receptionist for you.",
      price: "$150",
      priceSuffix: "starting from, per month",
      foundingOffer: {
        label: "Founding Client Pricing, Limited Time",
        line: "First 5 clients: the $500 setup fee is waived. Start on the monthly plan with no upfront cost.",
        spotsNote: "3 of 5 founding spots remaining",
      },
      featuresIntro: "Includes everything in Setup, plus:",
      features: [
        "Conversation monitoring",
        "Ongoing response improvements",
        "Business information updates",
        "Workflow adjustments",
        "New FAQ/configuration updates",
        "Performance review",
        "Ongoing support",
      ],
      cta: { label: "Become A Founding Client", href: "#contact" },
      highlighted: true,
    },
    {
      kind: "Setup",
      name: "Setup Only",
      cadence: "One time, self-managed after",
      description:
        "Prefer to run it yourself after launch? A one-time setup with no ongoing contract.",
      price: "$500",
      priceSuffix: "one time, no monthly fee",
      features: [
        "Business configuration",
        "AI receptionist setup",
        "Custom conversation rules",
        "FAQ and service configuration",
        "Lead qualification workflow",
        "Appointment booking setup",
        "Calendar integration",
        "Human escalation rules",
        "Testing and quality checks",
        "Launch support",
      ],
      cta: { label: "Get My Receptionist Set Up", href: "#contact" },
      highlighted: false,
    },
  ],
};

export const keepControl = {
  eyebrow: "You Keep Control",
  title: "Built Around Your Business, Not Ours",
  lines: [
    "Your business maintains ownership of its accounts, calendar, phone infrastructure, and customer information.",
    "We handle the implementation and configuration.",
  ],
};

export const whoIsThisFor = {
  eyebrow: "Who Is This For?",
  title: "This Is Particularly Useful For Businesses Where",
  reasons: [
    {
      icon: "PhoneRegular",
      title: "Calls generate customers",
      body: "Your phone is an important source of new business.",
    },
    {
      icon: "WrenchScrewdriverRegular",
      title: "Staff are frequently on site",
      body: "Your team can't always stop working to answer the phone.",
    },
    {
      icon: "WeatherMoonRegular",
      title: "Customers call outside office hours",
      body: "You want someone available when your team isn't.",
    },
    {
      icon: "CalendarCheckmarkRegular",
      title: "Appointments are part of the business",
      body: "Customers need to schedule service rather than simply ask a question.",
    },
  ],
  examplesLabel: "Examples include",
  examples: [
    "Plumbing",
    "HVAC",
    "Electrical services",
    "Roofing",
    "Cleaning services",
    "Landscaping",
    "Property services",
    "Other appointment based home services",
  ],
};

export const faq = {
  eyebrow: "Frequently Asked Questions",
  title: "Questions, Answered",
  items: [
    {
      question: "Will customers know they're talking to AI?",
      answer:
        "The receptionist can be configured to introduce itself appropriately. The goal isn't to deceive customers; it's to provide a useful first point of contact.",
    },
    {
      question: "Can it make up information?",
      answer:
        "It should be configured with explicit business rules and boundaries. For important information such as pricing, availability, or policies, the receptionist should rely on the information and systems provided rather than inventing an answer.",
    },
    {
      question: "Can customers speak to a human?",
      answer:
        "Yes. Human escalation can be configured for situations where a customer requests a person or the AI shouldn't continue handling the request.",
    },
    {
      question: "Can it book appointments?",
      answer:
        "Yes, when connected to a supported scheduling/calendar workflow and configured with the business's availability.",
    },
    {
      question: "Does it work after business hours?",
      answer:
        "Yes. The receptionist can continue answering calls outside your normal office hours.",
    },
    {
      question: "Do I have to pay for the AI software?",
      answer:
        "The underlying software and usage costs are separate from our implementation/management fee. You'll maintain your own software account.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Simple businesses can be configured relatively quickly. More complex businesses may require additional configuration and testing before launch.",
    },
  ],
};

export const finalCta = {
  eyebrow: "Ready To Stop Missing Calls?",
  title: "Your Next Customer Shouldn't Have To Call Three Businesses",
  body: "Before someone answers, let's build a receptionist that can answer, qualify, and book while your team focuses on the job.",
  primaryCta: {
    label: "Call The Demo: (234) 256-4947",
    href: "tel:+12342564947",
  },
  secondaryCta: {
    label: "Book A Free 15 Minute Call",
    href: "https://calendly.com/mateendeveloper/15min",
  },
  footerLine: "A better phone experience starts with answering the phone.",
  booking: {
    calendlyUrl: "https://calendly.com/mateendeveloper/15min",
    heading: "Or Pick A Time Right Now",
    subheading: "Grab any open slot below, no back and forth required.",
    emailCta: {
      label: "Email Us Instead",
      href: "mailto:mattecall@gmail.com?subject=Interested%20in%20the%20AI%20receptionist%20service&body=Hi%2C%20I%27m%20interested%20in%20the%20AI%20receptionist%20service.",
    },
  },
};

export const siteMeta = {
  name: "MatteCall",
  tagline: "AI receptionist for home service businesses.",
  demoPhoneDisplay: "(234) 256-4947",
  demoPhoneHref: "tel:+12342564947",
};
