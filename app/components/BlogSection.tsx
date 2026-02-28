"use client";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useRef } from "react";

const posts = [
  {
    title: "From Zero to Flask: My Web Dev Kickoff",
    date: "Oct 20, 2025",
    summary:
      "A beginner-friendly journey into Flask web development, covering setup, routing, templates, and deployment.",
    url: "https://from-zero-to-flask.hashnode.dev/getting-started-with-flask-a-beginners-web-development-journey",
    tags: ["Python", "Roadmap", "Foundations"],
  },
  {
    title: "Beyond docker-compose up: Building a 5-Service Local Appliance",
    date: "Jan 16, 2026",
    summary: "My First dockerized multi-service local appliance for Simpesa.",
    url: "https://building-a-5-service-local-appliance.hashnode.dev/building-simpesa-5-service-docker-appliance",
    tags: ["Redis", "PostgreSQL", "Docker", "Backend", "Typescript"],
  },
  {
    title: "Building a Production Migration System",
    date: "Jan 31, 2026",
    summary: "How I developed a Production Migration System Without an ORM",
    url: "https://building-a-production-migration-system.hashnode.dev/week-2-building-a-production-migration-system",
    tags: ["PostgreSQL", "Backend", "Typescript"],
  },
  {
    title: "Building the Core SimPesa's API endpoint",
    date: "Feb 4, 2026",
    summary:
      "How I engineered a resilient ingestion engine for an M-Pesa simulator",
    url: "https://week-3-the-ingestion-layer.hashnode.dev/week-3-building-the-core-api-endpoint",
    tags: ["Redis", "Backend", "Typescript", "BullMQ"],
  },
  {
    title: "The Art of Trace",
    date: "Feb 13, 2026",
    summary:
      "Journey into distributed tracing and observability with tools, techniques, and best practices.",
    url: "https://the-art-of-trace.hashnode.dev/",
    tags: ["Distributed Systems", "Observability", "Tracing"],
  },
  {
    title: "The Transactional state machine",
    date: "Feb 20, 2026",
    summary:
      "Designing deterministic state transitions in a distributed system",
    url: "https://week-5-the-transactional-state-machine.hashnode.dev/",
    tags: ["Backend", "Typescript", "State Machine"],
  },
  {
    title: "Building a Financial Vault: Row-Level Locking",
    date: "February 25, 2026",
    summary:
      "Learn how I used PostgreSQL's SELECT ... FOR UPDATE to handle concurrent payments, prevent double-spending, and survive a simulated race condition where two transactions hit the same account simultaneously",
    url: "https://simpesa.hashnode.dev/building-a-financial-vault-row-level-locking-and-the-two-lock-dance",
    tags: ["PostgreSQL", "Backend", "Security", "Concurrency"],
  },
];

const BlogSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const cardWidth =
        scrollContainerRef.current.querySelector("a")?.clientWidth || 0;
      const gap = 24;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, posts.length - 1));
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section
      id="blog"
      className="py-20 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Learning Reflections
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing my journey, insights, and lessons learned as I grow in tech
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative group">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-cyan-500/20 hover:bg-cyan-500/30 backdrop-blur-sm border border-cyan-400/30 rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="text-cyan-400" size={20} />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-cyan-500/20 hover:bg-cyan-500/30 backdrop-blur-sm border border-cyan-400/30 rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
              aria-label="Scroll right"
            >
              <FaChevronRight className="text-cyan-400" size={20} />
            </button>
          )}

          {/* Scrollable Posts */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 items-stretch"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {posts.map((post, i) => (
              <motion.a
                key={post.title}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[32%] snap-start bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                  {post.summary}
                </p>

                {/* Tags Wrapper */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center space-x-2 text-cyan-400 text-sm pt-2">
                  <FaExternalLinkAlt size={12} />
                  <span>Read More</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-3 pt-2">
          {posts.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                  ? "bg-cyan-400 w-8"
                  : "bg-cyan-400/30 hover:bg-cyan-400/50"
                }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;
