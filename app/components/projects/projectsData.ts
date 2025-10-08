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
      "A deployed campus assistant that answers academic FAQs, syncs schedules, and performs grade calculations through a conversational web interface.",
    image: "",
    github: "https://github.com/username/smart-campus-assistant",
    demo: "https://smart-campus-assistant.example.com",
    tags: ["Python", "Flask", "NLP", "Auth", "Deployment"],
    details:
      "Smart Campus Assistant is a full-stack semester capstone demonstrating backend APIs, authentication, database CRUD and lightweight NLP. Visitors can ask academic questions, import schedules (CSV/ICAL), and compute GPA/grade projections. The app uses keyword + embedding-based FAQ search for higher recall, role-based views (student/staff), and a simple calendar export. Deliverables include a deployed demo, system diagram, test suite, and a 2–3 minute walkthrough video — ideal for showing end-to-end engineering basics and user-focused design.",
    status: "in-progress",
  },
  {
    title: "Smart Admission Assistant",
    semester: "Semester 2",
    description:
      "A data-driven web application that predicts admission and scholarship likelihood from applicant profiles and explains the key contributing factors.",
    image: "",
    github: "https://github.com/username/smart-admission-assistant",
    demo: "https://smart-admission-assistant.example.com",
    tags: ["Python", "scikit-learn", "Flask", "Postgres", "Explainability"],
    details:
      "Smart Admission Assistant showcases data engineering and supervised ML in a product context. The pipeline ingests profile data, runs reproducible preprocessing, fits baseline models, and exposes predictions via a secured Flask API. Explainability is provided with SHAP-style feature attributions so recruiters can see why a prediction was made. The project includes a notebook with model evaluation, an admin dashboard for inspecting cases, and a deployment that demonstrates model-API integration and responsible handling of sensitive features.",
    status: "upcoming",
  },
  {
    title: "Smart Recipe Recommender",
    semester: "Semester 3",
    description:
      "A multi-modal recommender that suggests recipes from user-provided ingredients and optional dish photos, with caching and personalization.",
    image: "",
    github: "https://github.com/username/smart-recipe-recommender",
    demo: "https://smart-recipe-recommender.example.com",
    tags: ["PyTorch", "FastAPI", "Embeddings", "Redis", "Docker"],
    details:
      "Smart Recipe Recommender demonstrates embedding-based retrieval, transfer-learning for image inputs, and scalable backend design. Text inputs (ingredient lists) are converted to sentence embeddings for similarity search against a recipe corpus; optional photos are classified and mapped to ingredient tags. The FastAPI backend supports Redis caching, per-user personalization, and Dockerized deployment. The README contains evaluation notes (precision@k), system diagrams, and a short deployment playbook — a strong example of combining DL with production-aware engineering.",
    status: "upcoming",
  },
  {
    title: "LLM-Powered Resume Enhancer (Kenyan Tech Roles)",
    semester: "Semester 4",
    description:
      "An LLM-backed service that analyzes resumes, suggests role-targeted rewrites, and computes a job-fit score against supplied job descriptions.",
    image: "",
    github: "https://github.com/username/llm-resume-enhancer",
    demo: "https://resume-enhancer.example.com",
    tags: ["FastAPI", "Transformers", "Embeddings", "Docker", "CI/CD"],
    details:
      "This project integrates language models with practical hiring needs: uploaded resumes are parsed, keyword gaps vs job descriptions are identified using embeddings, and context-aware rewrite suggestions are generated. The service includes audit logs, an edit-history export, and a documented privacy policy for handling personal data. Deployment includes CI/CD and a public demo showcasing before/after resume examples and the role-fit score — demonstrating LLM integration, prompt engineering, and product-level privacy considerations.",
    status: "upcoming",
  },
  {
    title: "ScholarMatch AI",
    semester: "Semester 5",
    description:
      "A scholarship and program matchmaking platform that connects student profiles to relevant funding opportunities with explainable matches and deadline tracking.",
    image: "",
    github: "https://github.com/username/scholarmatch-ai",
    demo: "https://scholarmatch.example.com",
    tags: ["FastAPI", "Embeddings", "Postgres", "Automation", "Monitoring"],
    details:
      "ScholarMatch AI combines multi-modal profile ingestion (text fields + attachments) with embedding-based search to return prioritized scholarship matches and explain why each opportunity fits. It includes a scraping/ingestion pipeline for public listings (ethics-aware), deadline alerts, and application templates to accelerate submissions. The deliverables include a pilot dataset, a match-quality report, a deployed service, and monitoring hooks to track usage and match acceptance — showcasing impact-oriented product design and full-stack AI deployment.",
    status: "upcoming",
  },
  {
    title: "Capstone — AI Career Navigator",
    semester: "Semester 6",
    description:
      "A production-ready AI Career Navigator that maps user profiles to career pathways, recommends learning resources, and integrates interview prep and job-fit scoring.",
    image: "",
    github: "https://github.com/username/ai-career-navigator",
    demo: "https://ai-career-navigator.example.com",
    tags: [
      "Full-stack AI",
      "FastAPI",
      "Postgres",
      "Embeddings",
      "CI/CD",
      "Monitoring",
    ],
    details:
      "AI Career Navigator is a senior capstone built for industry readiness. Users upload profiles (resume + skills + goals); the system performs skills extraction, clusters career paths, and generates a personalized learning roadmap with prioritized courses and micro-project suggestions. The product includes job-fit scoring (JD ↔ profile embeddings), an InterviewPrep module (practice questions and scoring), and admin analytics to measure user progress. Engineering highlights: scalable FastAPI backend, Postgres persistence, Dockerized services, CI/CD pipelines, usage monitoring, and documented data/privacy practices. The capstone demonstrates product thinking, measurable user outcomes, and production deployment — suitable for recruiters looking for engineers who can ship end-to-end AI products.",
    status: "upcoming",
  },
];

// Side Projects - single polished small project per semester (feature-rich)
export const minorProjects: ProjectType[] = [
  {
    title: "GradeShare — Student Progress Web Tool",
    semester: "Semester 1",
    description:
      "A polished web app to import, visualize and share student grades with role-based access and exportable reports.",
    image: "",
    github: "https://github.com/paul-murithi/gradeshare",
    demo: "",
    tags: ["Python", "Flask", "SQLite", "Auth", "Frontend"],
    details:
      "GradeShare replaces a simple CLI with a production-minded micro product: CSV import/validation, student and professor roles, visual grade breakdowns, and shareable progress links. Designed as a reusable component for larger campus systems, it includes unit tests, deployment instructions and a 90–120s demo video — demonstrating front-end UX, backend validation, and data handling.",
    status: "in-progress",
  },
  {
    title: "Kenya Data Insights Dashboard",
    semester: "Semester 2",
    description:
      "An interactive Streamlit dashboard that cleans and visualizes Kenya Open Data, providing actionable insights for local SMEs and NGOs.",
    image: "",
    github: "https://github.com/username/kenya-data-insights",
    demo: "https://kenya-data-insights.example.com",
    tags: ["Python", "Pandas", "Streamlit", "ETL", "Visualization"],
    details:
      "This project demonstrates ETL and storytelling: automated data-cleaning notebooks, interactive charts, and a downloadable executive summary. It includes an API for the cleaned dataset and small forecasting examples useful to local organizations — showcasing practical data engineering and visualization skills with local relevance.",
    status: "upcoming",
  },
  {
    title: "Image Tagging Microservice",
    semester: "Semester 3",
    description:
      "A deployable FastAPI microservice that tags images with transfer-learning and returns inference metadata (latency, confidence).",
    image: "",
    github: "https://github.com/username/image-tagging-service",
    demo: "https://image-tagging.example.com",
    tags: ["PyTorch", "FastAPI", "Transfer Learning", "Docker", "Caching"],
    details:
      "The Image Tagging Microservice uses transfer learning (pretrained CNN) for low-shot tagging and exposes a secure REST endpoint with simple caching and auth. Documentation includes inference performance notes, Dockerfile, and a tiny frontend for demoing uploads — a practical example of taking a model from notebook to service.",
    status: "upcoming",
  },
  {
    title: "LLM Micro-API: QA & Summarization",
    semester: "Semester 4",
    description:
      "A compact FastAPI service exposing passage question-answering and summarization endpoints with rate-limits and privacy guidance.",
    image: "",
    github: "https://github.com/username/llm-microapi-qa-sum",
    demo: "https://llm-microapi.example.com",
    tags: ["FastAPI", "Transformers", "Hugging Face", "Auth", "Rate Limiting"],
    details:
      "This micro-API combines two high-value language services: span-based QA and abstractive summarization. It includes JWT auth, request limiting, a sample frontend, and documented PII handling. The microservice is intended as a reusable building block for larger applications and demonstrates safe LLM usage patterns in production-like settings.",
    status: "upcoming",
  },
  {
    title: "Speech2Summary — Audio-to-Notes Demo",
    semester: "Semester 5",
    description:
      "A Streamlit + FastAPI app that transcribes spoken audio and generates concise meeting notes and action items.",
    image: "",
    github: "https://github.com/username/speech2summary",
    demo: "https://speech2summary.example.com",
    tags: ["Whisper", "FastAPI", "Streamlit", "LLM", "Multi-modal"],
    details:
      "Speech2Summary demonstrates a multi-modal pipeline: audio capture, Whisper-based transcription, and LLM summarization to produce structured notes and action items. The app emphasizes accessibility (speaker labeling) and export options (PDF/TXT), and includes analytics to show typical summary lengths and latency — a useful showcase for audio + NLP integration.",
    status: "upcoming",
  },
  {
    title: "InterviewCoach — Job Prep Micro-SaaS",
    semester: "Semester 6",
    description:
      "A role-specific interview practice tool that generates custom questions and feedback based on a submitted resume and job description.",
    image: "",
    github: "https://github.com/username/interviewcoach",
    demo: "https://interviewcoach.example.com",
    tags: ["FastAPI", "LLM", "Auth", "Exports", "PWA"],
    details:
      "InterviewCoach helps candidates prepare with curated question sets, model answers, and a short study plan. Sessions can be saved and exported to PDFs for offline study, and the app includes a demo subscription flow to illustrate productization. It demonstrates how LLM-driven features can be packaged into user-facing SaaS functionality with attention to UX and user data handling.",
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
