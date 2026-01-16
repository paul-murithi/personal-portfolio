"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const posts = [
  {
    title: "From Zero to Flask: My Web Dev Kickoff",
    date: "Oct 20, 2025",
    semester: "Semester 1",
    summary:
      "A beginner-friendly journey into Flask web development, covering setup, routing, templates, and deployment.",
    url: "https://from-zero-to-flask.hashnode.dev/getting-started-with-flask-a-beginners-web-development-journey",
    tags: ["Python", "Roadmap", "Foundations"],
  },
  {
    title: "Beyond docker-compose up: Building a 5-Service Local Appliance",
    date: "Jan 16, 2026",
    semester: "Semester 2",
    summary: "My First dockerized multi-service local appliance for Simpesa.",
    url: "https://building-a-5-service-local-appliance.hashnode.dev/building-simpesa-5-service-docker-appliance",
    tags: ["Redis", "PostgreSQL", "Docker", "Backend", "Typescript"],
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
            Learning Reflections
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing my journey, insights, and lessons learned as I grow in tech
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 ${
                posts.length === 1
                  ? "sm:col-span-2 lg:col-span-3 mx-auto max-w-3xl"
                  : "w-full"
              }`}
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
            href="#"
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
