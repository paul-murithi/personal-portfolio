import { Project } from "./base-types";

export const projects: Project[] = [
  {
    id: 0,
    name: "SimPesa",
    totalWeeks: 16,
    posts: [
      {
        week: 1,
        title: "Building a 5-Service Local Appliance",
        date: "Jan 16, 2026",
        summary:
          "My first dockerized multi-service local appliance for Simpesa.",
        url: "https://building-a-5-service-local-appliance.hashnode.dev/building-simpesa-5-service-docker-appliance",
        tags: ["Redis", "PostgreSQL", "Docker", "Typescript"],
      },
      {
        week: 2,
        title: "Building a Production Migration System",
        date: "Jan 31, 2026",
        summary: "Developing a production migration system without an ORM.",
        url: "https://building-a-production-migration-system.hashnode.dev/week-2-building-a-production-migration-system",
        tags: ["PostgreSQL", "Backend", "Typescript"],
      },
      {
        week: 3,
        title: "Building the Core SimPesa API Endpoint",
        date: "Feb 4, 2026",
        summary:
          "Engineering a resilient ingestion engine for an M-Pesa simulator.",
        url: "https://week-3-the-ingestion-layer.hashnode.dev/week-3-building-the-core-api-endpoint",
        tags: ["Redis", "Backend", "Typescript", "BullMQ"],
      },
      {
        week: 4,
        title: "The Art of Trace",
        date: "Feb 13, 2026",
        summary: "Exploring distributed tracing and observability tools.",
        url: "https://the-art-of-trace.hashnode.dev/",
        tags: ["Distributed Systems", "Observability", "Tracing"],
      },
      {
        week: 5,
        title: "The Transactional State Machine",
        date: "Feb 20, 2026",
        summary:
          "Designing deterministic state transitions in distributed systems.",
        url: "https://week-5-the-transactional-state-machine.hashnode.dev/",
        tags: ["Backend", "Typescript", "State Machine"],
      },
      {
        week: 6,
        title: "Building a Financial Vault: Row-Level Locking",
        date: "Feb 25, 2026",
        summary:
          "Using PostgreSQL row-level locking to handle concurrent payments safely.",
        url: "https://simpesa.hashnode.dev/building-a-financial-vault-row-level-locking-and-the-two-lock-dance",
        tags: ["PostgreSQL", "Backend", "Security", "Concurrency"],
      },
      {
        week: 7,
        title: "Building a Bulletproof Payment Gateway with Atomic Idempotency",
        date: "March 4, 2026",
        summary: "Exploring atomic idempotency in payment gateway design.",
        url: "https://week-7.hashnode.dev/simpesa-atomic-idempotency",
        tags: ["Backend", "Typescript", "Payment Processing"],
      },
      {
        week: 8,
        title:
          "The Testing Obstacle Course: Unit Tests, Integration Tests, and the 66% Reality Check",
        date: "March 12, 2026",
        summary:
          "Navigating the challenges of comprehensive testing in a fast-paced development environment.",
        url: "https://week-8.hashnode.dev/the-testing-obstacle-course-unit-tests-integration-tests-and-the-66-reality-check",
        tags: ["Testing", "Backend", "Typescript"],
      },
      {
        week: 9,
        title:
          "From Synchronous to Async: Building Sim-Pesa's Event-Driven Architecture",
        date: "March 18, 2026",
        summary:
          "Transitioning from a synchronous to an asynchronous architecture for improved scalability and performance.",
        url: "https://week-9.hashnode.dev/from-synchronous-to-async-building-sim-pesa-s-event-driven-architecture",
        tags: ["Backend", "Typescript", "Event-Driven"],
      },
      {
        week: 10,
        title:
          "Building the Webhook Dispatcher: From Fire-and-Forget to Reliable Delivery",
        date: "March 26, 2026",
        summary:
          "Designing a robust webhook dispatcher for handling asynchronous notifications.",
        url: "https://week-10.hashnode.dev/building-the-webhook-dispatcher-from-fire-and-forget-to-reliable-delivery",
        tags: ["Backend", "Typescript", "Webhooks"],
      },
      {
        week: 11,
        title:
          "Building Resilient Webhooks: Exponential Backoff and the Art of Retry Logic",
        date: "April 2, 2026",
        summary:
          "Implementing robust retry mechanisms for handling webhook failures.",
        url: "https://week-11.hashnode.dev/building-resilient-webhooks-exponential-backoff-and-the-art-of-retry-logic",
        tags: ["Backend", "Typescript", "Webhooks"],
      },
      {
        week: 12,
        title:
          "Simulating the Circle of Trust: Security Mocking Without the Overhead",
        date: "April 10, 2026",
        summary:
          "Creating a secure testing environment by simulating trusted third-party interactions without the complexity of full mocks.",
        url: "https://week-12.hashnode.dev/simulating-the-circle-of-trust-security-mocking-without-the-overhead",
        tags: ["Security", "Testing", "Backend", "Typescript"],
      },
      {
        week: 13,
        title:
          "Building a Live Transaction Dashboard: SSE, Redis Pub/Sub, and Real-Time React",
        date: "April 17, 2026",
        summary:
          "Building a real-time transaction dashboard using Server-Sent Events (SSE), Redis Pub/Sub, and React for live updates.",
        url: "https://week-13.hashnode.dev/building-a-live-transaction-dashboard-sse-redis-pub-sub-and-real-time-react",
        tags: ["Backend", "Typescript", "Real-Time", "React"],
      },
      {
        week: 14,
        title:
          "Building the Virtual Smartphone: Redis Pub/Sub and the Human-in-the-Loop Problem",
        date: "April 26, 2026",
        summary:
          "Building a virtual smartphone interface for testing STK Push flows, using Redis Pub/Sub to simulate real-time interactions and addressing the human-in-the-loop challenge.",
        url: "https://week-14.hashnode.dev/building-the-virtual-smartphone-redis-pub-sub-and-the-human-in-the-loop-problem",
        tags: ["Backend", "Typescript", "Redis", "Virtualization"],
      },
      {
        week: 15,
        title: "The Onboarding Wizard: Docker, NGINX, and the localhost Trap",
        date: "May 3, 2026",
        summary:
          "Building an onboarding experience that transforms a fresh docker compose up into a fully configured, ready-to-use simulator in under 60 seconds — with zero manual file editing.",
        url: "https://week-15.hashnode.dev/the-onboarding-wizard-docker-nginx-and-the-localhost-trap",
        tags: ["Backend", "Typescript", "Docker", "NGINX"],
      },
      {
        week: 16,
        title:
          "Sim-Pesa Is Live: A 16-Week Build Log, A Finished Product, and Everything In Between",
        date: "May 12, 2026",
        summary:
          "Reflecting on the journey of building Sim-Pesa, from the initial concept to the final product.",
        url: "https://week-16.hashnode.dev/sim-pesa-is-live-a-16-week-build-log-a-finished-product-and-everything-in-between",
        tags: ["Backend", "Typescript", "Product Development"],
      },
    ],
  },
  {
    id: 1,
    name: "SokoFlow",
    totalWeeks: 16,
    posts: [],
  },
  {
    id: 2,
    name: "Sheria-Chatbot",
    totalWeeks: 16,
    posts: [],
  },
];

export const QUARTER_LABELS = [
  "Weeks 1–4",
  "Weeks 5–8",
  "Weeks 9–12",
  "Weeks 13–16",
];
