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
// Trimester / Major Projects
export const majorProjects: ProjectType[] = [
  {
    title: "Smart Campus Assistant",
    semester: "Trimester 1",
    description:
      "A full-stack web app that helps students access academic info, calculate grades, and manage schedules through a clean interactive interface.",
    image: "",
    github: "https://github.com/username/smart-campus-assistant",
    demo: "https://smart-campus-assistant.example.com",
    tags: ["Python", "Flask", "PostgreSQL", "Auth", "Deployment"],
    details:
      "Smart Campus Assistant is the first milestone of the journey — a project that combines backend logic, REST APIs, authentication, and database CRUD in a practical product. It allows users to query academic info, manage class schedules, and calculate GPA projections. Built with Flask, PostgreSQL, and responsive design principles, the app is deployed publicly to demonstrate early full-stack competence, clean code structure, and user-focused problem solving.",
    status: "in-progress",
  },
  {
    title: "Smart Admission Portal",
    semester: "Trimester 2",
    description:
      "A data-driven admission management system with user roles, applicant analytics, and dashboard insights for university administrators.",
    image: "",
    github: "https://github.com/username/smart-admission-portal",
    demo: "https://smart-admission-portal.example.com",
    tags: ["FastAPI", "PostgreSQL", "Docker", "Render", "Admin Dashboard"],
    details:
      "Smart Admission Portal extends backend learning into system design and deployment. It supports role-based authentication, application form submission, data validation, and analytics dashboards for admission trends. Focus areas include API versioning, Docker-based deployment, and structured logging — essential backend engineer skills. Deliverables include database schema diagrams, deployment notes, and a walkthrough video highlighting API-driven architecture.",
    status: "upcoming",
  },
  {
    title: "Smart Recommender API",
    semester: "Trimester 3",
    description:
      "An API-based recommendation system that delivers personalized content (books, recipes, or learning paths) using embeddings and caching.",
    image: "",
    github: "https://github.com/username/smart-recommender-api",
    demo: "https://smart-recommender-api.example.com",
    tags: ["FastAPI", "Docker", "Redis", "scikit-learn", "API Integration"],
    details:
      "This project introduces AI integration in a production-aware context. Users send preferences or history, and the system returns personalized recommendations powered by lightweight ML models. Redis handles caching for performance, while Docker ensures reproducible deployment. The project emphasizes cloud-readiness, scalability, and well-documented API usage — bridging backend and applied AI engineering.",
    status: "upcoming",
  },
  {
    title: "AI Resume Assistant",
    semester: "Trimester 4",
    description:
      "An AI-enhanced web service that analyzes resumes and job descriptions, then suggests improvements and calculates a fit score.",
    image: "",
    github: "https://github.com/username/ai-resume-assistant",
    demo: "https://ai-resume-assistant.example.com",
    tags: ["FastAPI", "OpenAI API", "LangChain", "Docker", "CI/CD"],
    details:
      "AI Resume Assistant showcases real AI integration into a useful career product. Using the OpenAI API and LangChain, it compares uploaded resumes to job descriptions and generates targeted rewrite suggestions. Users receive feedback on structure, keyword gaps, and match percentage. The backend is containerized with CI/CD pipelines for auto-deployments, making it a clear demonstration of LLM-powered productivity tools.",
    status: "upcoming",
  },
  {
    title: "ScholarMatch AI",
    semester: "Trimester 5",
    description:
      "A matchmaking platform that connects student profiles with scholarships and funding opportunities using explainable AI recommendations.",
    image: "",
    github: "https://github.com/username/scholarmatch-ai",
    demo: "https://scholarmatch.example.com",
    tags: ["FastAPI", "PostgreSQL", "Embeddings", "Automation", "Monitoring"],
    details:
      "ScholarMatch AI continues your AI-integration journey, combining embeddings-based search with automation pipelines. It aggregates scholarship listings, matches users by profile fit, and explains why each opportunity aligns. The system integrates monitoring hooks and automated updates, showcasing the transition from single-user tools to multi-user cloud products — a portfolio-ready demonstration of both backend scalability and applied AI reasoning.",
    status: "upcoming",
  },
  {
    title: "Capstone — Career Launch Hub",
    semester: "Trimester 6",
    description:
      "A production-ready platform combining profile-based recommendations, learning roadmap generation, and interview preparation tools.",
    image: "",
    github: "https://github.com/username/career-launch-hub",
    demo: "https://career-launch-hub.example.com",
    tags: [
      "Full-Stack",
      "FastAPI",
      "React",
      "LangChain",
      "PostgreSQL",
      "CI/CD",
      "Cloud Deployment",
    ],
    details:
      "The Career Launch Hub serves as the grand finale — a full-stack capstone integrating backend APIs, frontend UI, and AI-driven recommendations. It helps users map their skills to career paths, suggests learning tracks, and generates practice interview questions. It’s built with FastAPI, React, and PostgreSQL, containerized for scalable deployment. Deliverables include documentation, CI/CD workflows, a live demo, and analytics dashboards — evidence of end-to-end engineering maturity and readiness for professional work.",
    status: "upcoming",
  },
];

// Side Projects - single polished project per trimester
export const minorProjects: ProjectType[] = [
  {
    title: "GradeShare — Student Progress Web Tool",
    semester: "Trimester 1",
    description:
      "A polished web tool for importing, visualizing, and sharing student grades with role-based access and exportable reports.",
    image: "",
    github: "https://github.com/paul-murithi/gradeshare",
    demo: "",
    tags: ["Python", "Flask", "SQLite", "Auth", "Frontend"],
    details:
      "GradeShare transforms a simple CLI script into a micro full-stack product: CSV import and validation, student/lecturer roles, grade breakdown charts, and shareable progress links. It’s an early demonstration of backend validation, front-end UX, and deployment polish — perfect as a visible first milestone of your developer journey.",
    status: "in-progress",
  },
  {
    title: "Kenya Data Insights Dashboard",
    semester: "Trimester 2",
    description:
      "An interactive dashboard that visualizes Kenya Open Data, offering SMEs and NGOs quick insights on local economic and education trends.",
    image: "",
    github: "https://github.com/username/kenya-data-insights",
    demo: "https://kenya-data-insights.example.com",
    tags: ["Python", "Pandas", "FastAPI", "Streamlit", "Visualization"],
    details:
      "This mid-trimester project combines ETL, API development, and visualization. The pipeline cleans Kenyan public datasets, exposes them through a FastAPI endpoint, and visualizes insights in Streamlit. The tool demonstrates backend-to-frontend integration and local data storytelling — a great example of relevant, Kenya-focused problem-solving.",
    status: "upcoming",
  },
  {
    title: "Dockerized Notes API",
    semester: "Trimester 3",
    description:
      "A lightweight note-taking API deployed in Docker with authentication, caching, and logging.",
    image: "",
    github: "https://github.com/username/dockerized-notes-api",
    demo: "https://notes-api.example.com",
    tags: ["FastAPI", "Docker", "Redis", "Auth", "Logging"],
    details:
      "Dockerized Notes API showcases your growing DevOps awareness. It’s a clean, production-style backend with Redis caching, structured logs, JWT auth, and Docker Compose for deployment. The focus is performance, reproducibility, and developer experience — an ideal cloud-focused learning project.",
    status: "upcoming",
  },
  {
    title: "LLM Micro-API — Text Summarizer",
    semester: "Trimester 4",
    description:
      "A compact FastAPI service that exposes text summarization via OpenAI API with basic rate limiting and API key auth.",
    image: "",
    github: "https://github.com/username/llm-microapi-summarizer",
    demo: "https://llm-microapi.example.com",
    tags: ["FastAPI", "OpenAI API", "LangChain", "Auth", "Rate Limiting"],
    details:
      "This project demonstrates safe and efficient LLM integration. It provides endpoints for summarization and paraphrasing, includes user-level rate limiting, and offers clear documentation for consumers. A short frontend demo illustrates real-world usage of AI APIs — perfect practice for Trimester 4’s AI Integration focus.",
    status: "upcoming",
  },
  {
    title: "Speech2Summary — Audio-to-Notes App",
    semester: "Trimester 5",
    description:
      "A Streamlit + FastAPI tool that transcribes short audio clips into concise, actionable summaries.",
    image: "",
    github: "https://github.com/username/speech2summary",
    demo: "https://speech2summary.example.com",
    tags: ["Whisper", "FastAPI", "Streamlit", "LLM", "Multi-modal"],
    details:
      "Speech2Summary merges speech and text pipelines — using Whisper for transcription and OpenAI for summarization. Users can record audio, get structured notes, and export them as PDF or TXT. It’s your first hands-on multi-modal AI demo, built for usability and real-world impact.",
    status: "upcoming",
  },
  {
    title: "InterviewCoach — Job Prep Micro-SaaS",
    semester: "Trimester 6",
    description:
      "A micro-SaaS web app that generates personalized interview questions and feedback based on a resume and job description.",
    image: "",
    github: "https://github.com/username/interviewcoach",
    demo: "https://interviewcoach.example.com",
    tags: ["FastAPI", "LLM", "React", "PWA", "Auth"],
    details:
      "InterviewCoach helps users prepare for interviews using AI-driven insights. It generates custom question sets, provides model answers, and exports study guides as PDFs. It simulates a subscription SaaS workflow — ideal for demonstrating user experience design, AI feature packaging, and business-oriented coding in your final trimester.",
    status: "upcoming",
  },
];

majorProjects.forEach((project) => {
  project.github = "";
  project.demo = "";
});

minorProjects.forEach((project) => {
  if (project.semester !== "Semester 1") {
    project.github = "";
    project.demo = "";
  }
});
