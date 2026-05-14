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
// Trimester / Major Projects
export const majorProjects: ProjectType[] = [
  {
    title: "SimPesa",
    description: "Open Source M-Pesa Payment Gateway Simulator",
    image: "",
    github: "https://github.com/paul-murithi/simpesa",
    demo: "https://youtu.be/_EjKqlZ2IOk",
    link: "https://simpesa-docs.vercel.app/",
    tags: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
      "TypeScript",
    ],
    details:
      "A production-style payment gateway simulator inspired by Safaricom's M-Pesa Daraja API. SimPesa helps developers test STK Push flows, callbacks, transaction state management, idempotency, and asynchronous payment processing in a controlled local environment.",
    status: "done",
  },
  {
    title: "SokoFlow",
    description: "WhatsApp-First Inventory Bot",
    image: "",
    github: "",
    demo: "",
    tags: ["Twillio", "PostgreSQL", "Docker", "Fast API"],
    details:
      "An inventory management chatbot that operates over WhatsApp. It allows small business owners to track stock levels, receive low-stock alerts, and generate sales reports through simple chat commands.",
    status: "upcoming",
  },
  {
    title: "Sheria-Chatbot",
    description: "An AI-Powered Legal Advisor Chatbot for Kenyan Law",
    image: "",
    github: "",
    demo: "",
    tags: ["Vector DB", "LLM", "Redis", "Next.js"],
    details:
      "A localized RAG (Retrieval Augmented Generation) system that answers legal questions using the Kenyan Constitution and Traffic Act as the source of truth",
    status: "upcoming",
  },
];

// Side Projects - single polished project per trimester
export const minorProjects: ProjectType[] = [
  {
    title: "Exam Schedule Extractor",
    description:
      "A simple Python-based tool that extracts your personal exam schedule from a timetable spreadsheet. Then displays it in a clean, readable format.",
    image: "",
    github: "https://github.com/paul-murithi/exam-timetable-extractor",
    demo: "https://exam-timetable-extractor.streamlit.app/",
    tags: ["Python", "Pandas", "Streamlit", "CSV"],
    details:
      "Exam Schedule Extractor is a lightweight project that focuses on practical data extraction and presentation. It reads a user-uploaded timetable CSV, parses exam dates and times, and displays a personalized schedule. Built with Streamlit for quick UI and Pandas for data processing, it demonstrates file handling, data parsing, and user-centric design.",
    status: "done",
  },
  {
    title: "'Rate Limiter' Middleware",
    description:
      "A custom middleware for Sim-Pesa API that blocks users if they make more than 10 requests per minute.",
    image: "",
    github: "",
    demo: "",
    tags: ["Python", "Pandas", "FastAPI", "Streamlit", "Visualization"],
    details:
      "a custom middleware for your API that blocks users if they make more than 10 requests per minute.",
    status: "upcoming",
  },
  {
    title: "Dockerized Cron Job Scheduler",
    description:
      "A production-ready cron job scheduler with Docker deployment, logging, and alerting features.",
    image: "",
    github: "",
    demo: "",
    tags: ["FastAPI", "Docker", "Redis", "Auth", "Logging"],
    details:
      "A script that scrapes a news site every morning, summarizes it, and emails it to you.",
    status: "upcoming",
  },
  {
    title: '"Context-Aware Cache" Middleware',
    description:
      "A custom caching middleware that adjusts cache duration based on request context and user behavior.",
    image: "",
    github: "",
    demo: "",
    tags: ["FastAPI", "OpenAI API", "LangChain", "Auth", "Rate Limiting"],
    details:
      "An API that caches heavy AI responses in Redis, but invalidates the cache if the underlying data changes.",
    status: "upcoming",
  },
];
