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
};
// Flagship
// Semester / Major Projects
export const majorProjects: ProjectType[] = [
  {
    title: "Smart Campus Assistant",
    semester: "Semester 1",
    description:
      "Flask-based chatbot for academic FAQs, schedules, and grade calculations. Deployed locally and optionally on the web.",
    image: "",
    github: "https://github.com/yourusername/smart-campus-assistant",
    demo: "https://smart-campus-assistant.vercel.app/",
    tags: ["Python", "Flask", "APIs", "NLP"],
    details:
      "My Semester 1 capstone project. It integrates APIs, NLP, and a simple frontend to answer campus FAQs and perform grade calculations. Focused on teamwork and deployment.",
    status: "in-progress",
  },
  {
    title: "Smart Admission Assistant",
    semester: "Semester 2",
    description:
      "Full-stack ML-powered web app that predicts admission/scholarship chances based on student profiles.",
    image: "",
    github: "",
    demo: "",
    tags: ["Python", "Flask", "scikit-learn", "Postgres"],
    details:
      "Semester 2 flagship project — combines supervised ML models with Flask APIs, SQL database integration, and a frontend interface.",
    status: "upcoming",
  },
  {
    title: "Smart Recipe Recommender",
    semester: "Semester 3",
    description:
      "AI platform recommending recipes based on ingredients using NLP + optional image classification. Backend with caching & auth.",
    image: "",
    github: "",
    demo: "",
    tags: ["PyTorch", "FastAPI", "Postgres", "Docker"],
    details:
      "Semester 3 project — full-stack AI recommender system. Includes FastAPI backend, database, JWT authentication, Redis caching, Docker deployment, and CI/CD pipeline.",
    status: "upcoming",
  },
  {
    title: "LLM-Powered Resume Enhancer",
    semester: "Semester 4",
    description:
      "AI-powered tool that analyzes resumes and suggests improvements. Includes optional role-matching features.",
    image: "",
    github: "",
    demo: "",
    tags: ["FastAPI", "Transformers", "Docker", "CI/CD"],
    details:
      "Semester 4 project — uses Hugging Face models for NLP, deployed via FastAPI with Postgres storage. Includes CI/CD workflows and public demo.",
    status: "upcoming",
  },
  {
    title: "ScholarMatch AI",
    semester: "Semester 5",
    description:
      "Scholarship matching platform recommending opportunities based on student profiles.",
    image: "",
    github: "",
    demo: "",
    tags: ["FastAPI", "Hugging Face", "Docker", "SQLite/Postgres"],
    details:
      "Semester 5 flagship project — multi-modal AI app integrating NLP pipelines, backend APIs, and database persistence.",
    status: "upcoming",
  },
  {
    title: "Capstone: Product at Scale",
    semester: "Semester 6",
    description:
      "Final production-level AI system (choose one: AI Career Navigator, Medical Assistant Chatbot, or AI Inventory Forecast System).",
    image: "",
    github: "",
    demo: "",
    tags: ["Full-stack AI", "FastAPI", "Postgres", "CI/CD", "Monitoring"],
    details:
      "Final semester capstone. Production-ready AI product with user authentication, database, monitoring, CI/CD, and deployment. Demonstrates industry-level readiness.",
    status: "upcoming",
  },
];

// Side Projects - smaller experiments and tools
export const minorProjects: ProjectType[] = [
  {
    title: "CLI Student Grade Manager",
    semester: "Semester 1",
    description:
      "Command-line tool to manage student grades with CRUD operations, JSON/SQLite storage, and unit tests.",
    image: "",
    github: "https://github.com/yourusername/cli-grade-manager",
    demo: "",
    tags: ["Python", "SQLite", "CLI", "Git"],
    details:
      "Solidified Python basics with CLI, file I/O, and database integration. Includes CRUD operations and unit tests.",
    status: "in-progress",
  },
  {
    title: "Kenyan Market Trends Dashboard",
    semester: "Semester 2",
    description:
      "Dashboard analyzing and visualizing datasets from Kenya Open Data using Pandas and Streamlit.",
    image: "",
    github: "",
    demo: "",
    tags: ["Python", "Pandas", "Streamlit", "Visualization"],
    details:
      "Analyzes local datasets, builds visual insights, and presents them in an interactive dashboard.",
    status: "upcoming",
  },
  {
    title: "MNIST Digit Classifier App",
    semester: "Semester 3",
    description:
      "PyTorch MLP model trained on MNIST dataset with a lightweight web interface.",
    image: "",
    github: "",
    demo: "",
    tags: ["PyTorch", "MLP", "FastAPI", "Deployment"],
    details:
      "Demonstrates PyTorch basics with digit recognition, API wrapping, and deployment to a simple web service.",
    status: "upcoming",
  },
  {
    title: "AI Question Answering Bot",
    semester: "Semester 4",
    description:
      "DistilBERT-powered QA bot exposed as a FastAPI endpoint for interactive querying.",
    image: "",
    github: "",
    demo: "",
    tags: ["FastAPI", "Transformers", "Hugging Face"],
    details:
      "NLP-powered service that answers questions based on a passage. Lightweight and deployable.",
    status: "upcoming",
  },
  {
    title: "Speech-to-Summary App",
    semester: "Semester 5",
    description:
      "App that records speech, transcribes it using Whisper, and summarizes it with an LLM.",
    image: "",
    github: "",
    demo: "",
    tags: ["Whisper", "LLM", "Streamlit", "FastAPI"],
    details:
      "Multi-modal app showcasing speech recognition + summarization pipeline. Deployed with Streamlit/FastAPI.",
    status: "upcoming",
  },
  {
    title: "Job Interview Coach",
    semester: "Semester 6",
    description:
      "LLM-based tool that generates custom interview questions given a resume and job description.",
    image: "",
    github: "",
    demo: "",
    tags: ["FastAPI", "LLM", "NLP"],
    details:
      "Helps students prepare for job interviews by generating realistic, role-specific questions.",
    status: "upcoming",
  },
];
