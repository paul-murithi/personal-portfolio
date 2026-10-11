export type ProjectType = {
  title: string;
  semester?: string;
  description: string;
  image?: string;
  github?: string;
  demo?: string;
  tags: string[];
  details: string;
  status: "done" | "in-progress" | "upcoming";
  link?: string;
};

// Flagship
// Major Projects
export const majorProjects: ProjectType[] = [
  {
    title: "SimPesa",
    description: "Open Source M-Pesa Payment Gateway Simulator",
    image: "/simpesa.webp",
    github: "https://github.com/paul-murithi/simpesa",
    demo: "https://youtu.be/_EjKqlZ2IOk",
    link: "https://simpesa-docs.vercel.app/",
    tags: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
    ],
    details:
      "A production-style payment gateway simulator inspired by Safaricom's M-Pesa Daraja API. SimPesa helps developers test STK Push flows, callbacks, transaction state management, idempotency, and asynchronous payment processing in a controlled local environment. Includes a live transaction dashboard with SSE-based real-time updates, a virtual smartphone for STK push simulation, and a Redis sliding-window rate limiter.",
    status: "done",
  },
  {
    title: "SokoFlow",
    description: "WhatsApp-First Conversational ERP for Kenyan SMEs",
    image: "",
    github: "",
    demo: "",
    tags: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Meta WhatsApp API",
      "GitHub Actions",
    ],
    details:
      "A conversational ERP that lets small Kenyan shopkeepers track inventory and record sales entirely through WhatsApp — no app downloads, no training required. Built with a TDD-first headless core, a Redis-backed finite state machine (FSM) for stateful conversation management, HMAC-verified webhooks, pg_trgm fuzzy product matching, async PDF report generation via Celery, and a full CI/CD pipeline. Real-world tested with actual shop owners.",
    status: "done",
  },
  {
    title: "SokoFlow AI Layer",
    description: "Natural-Language Shop Analytics via WhatsApp",
    image: "",
    github: "",
    demo: "",
    tags: [
      "Python",
      "LLM Function Calling",
      "FastAPI",
      "Redis",
      "PostgreSQL",
      "Pydantic",
    ],
    details:
      "An AI capability layer added to SokoFlow that lets shopkeepers ask free-form questions via WhatsApp ('which products are running low?', 'how does this week compare to last week?'). Uses LLM function calling with Pydantic-validated structured output against SokoFlow's existing internal APIs — the model proposes an action, SokoFlow's validated service layer executes it, keeping answers grounded in real data. Includes Redis response caching, per-shop token budgeting, and an evaluation set tracking intent-resolution accuracy and hallucination rate.",
    status: "in-progress",
  },
];

// Side Projects
export const minorProjects: ProjectType[] = [
  {
    title: "Exam Schedule Extractor",
    description:
      "A Python-based tool that extracts your personal exam schedule from a timetable spreadsheet and displays it in a clean, readable format.",
    image: "",
    github: "https://github.com/paul-murithi/exam-timetable-extractor",
    demo: "https://exam-timetable-extractor.streamlit.app/",
    tags: ["Python", "Pandas", "Streamlit", "CSV"],
    details:
      "Exam Schedule Extractor is a lightweight project focused on practical data extraction and presentation. It reads a user-uploaded timetable CSV, parses exam dates and times, and displays a personalized schedule. Built with Streamlit for quick UI and Pandas for data processing, it demonstrates file handling, data parsing, and user-centric design.",
    status: "done",
  },
  {
    title: "Rate Limiter Middleware",
    description:
      "A Redis sliding-window rate limiter — blocks clients after 10 requests per 60 seconds and returns a 429 response with Retry-After headers.",
    image: "",
    github: "",
    demo: "",
    tags: ["Node.js", "TypeScript", "Redis", "Express.js", "Security"],
    details:
      "A production-style rate limiting middleware built as a supporting component for SimPesa. Uses a Redis sliding-window algorithm to track per-IP request counts, enforces a 10 req/60s limit with atomic Lua scripting to prevent race conditions, and returns RFC-compliant 429 responses with Retry-After headers. Demonstrates security and resource-protection awareness in a real API context.",
    status: "done",
  },
  {
    title: "Dockerized Cron Job Scheduler",
    description:
      "A containerized background job runner with scheduled task registration, structured logging, and configurable retry policies.",
    image: "",
    github: "",
    demo: "",
    tags: ["FastAPI", "Docker", "Redis", "Celery", "Logging"],
    details:
      "A containerized background job runner built around Celery Beat and Redis. Supports scheduled task registration, structured JSON logging per job run, configurable retry policies, and basic alerting on failure. Designed as a reusable infrastructure pattern.",
    status: "upcoming",
  },
];
