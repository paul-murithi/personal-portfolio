"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const posts = [
  {
    title: "Week 1: Starting My AI Journey",
    date: "Sep 10, 2025",
    semester: "Semester 1",
    summary:
      "Launched my learning roadmap and set up my development environment. Focused on Python basics, CLI tools, and getting into consistent coding habits.",
    url: "/blog/week-1-starting-ai-journey",
    tags: ["Python", "Roadmap", "Foundations"],
  },
  {
    title: "Project Reflection: CLI Student Grade Manager",
    date: "Sep 24, 2025",
    semester: "Semester 1",
    summary:
      "Completed my first CLI project! Learned about CRUD logic, JSON persistence, and testing. Reflecting on lessons learned and future improvements.",
    url: "/blog/cli-student-grade-manager",
    tags: ["CLI", "Python", "Projects"],
  },
  {
    title: "Week 3: Problem Solving & DSA Foundations",
    date: "Oct 01, 2025",
    semester: "Semester 1",
    summary:
      "Exploring data structures through practical mini-projects. Understanding arrays, lists, and search algorithms using visual tools.",
    url: "/blog/week-3-dsa-foundations",
    tags: ["DSA", "Algorithms", "Learning"],
  },
];

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="py-20 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            🧠 Learning Reflections
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Weekly reflections, lessons learned, and progress updates as I move
            through each semester of my BSc IT journey.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              className="block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-cyan-400 uppercase font-medium">
                  {post.semester}
                </span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                {post.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-2 text-cyan-400 text-sm">
                <FaExternalLinkAlt size={12} />
                <span>Read More</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Links */}
        <div className="text-center pt-4">
          <a
            href="/blog"
            className="inline-block text-sm text-cyan-400 hover:text-cyan-300 transition"
          >
            View All Posts →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
