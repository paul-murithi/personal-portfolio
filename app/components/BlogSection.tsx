"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { PageHeading } from "./PageHeading";
import { projects } from "../utils/blog-projects";

const DEFAULT_VISIBLE = 6;
const PERIODS_PER_GROUP = 4;

const BlogSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [activePeriod, setActivePeriod] = useState<number | "all">("all");
  const [expanded, setExpanded] = useState(false);

  const project = projects[activeProject];
  const isMonthly = project.timelineUnit === "month";
  const periodLabels =
    project.periodLabels ??
    Array.from({ length: 4 }, (_, index) =>
      isMonthly
        ? `Month ${index + 1}`
        : `Weeks ${index * PERIODS_PER_GROUP + 1}–${(index + 1) * PERIODS_PER_GROUP}`,
    );

  const getPostPeriodValue = (post: (typeof project.posts)[number]) =>
    isMonthly ? post.month : post.week;

  const visiblePeriods = isMonthly
    ? periodLabels.map((_, index) => index)
    : [0, 1, 2, 3].filter((periodIndex) =>
        project.posts.some((post) => {
          const periodValue = getPostPeriodValue(post);

          if (!periodValue) {
            return false;
          }

          return (
            periodValue >= periodIndex * PERIODS_PER_GROUP + 1 &&
            periodValue <= (periodIndex + 1) * PERIODS_PER_GROUP
          );
        }),
      );

  const filteredPosts =
    activePeriod === "all"
      ? project.posts
      : project.posts.filter((post) => {
          const periodValue = getPostPeriodValue(post);

          if (!periodValue) {
            return false;
          }

          if (isMonthly) {
            return periodValue === (activePeriod as number) + 1;
          }

          return (
            periodValue >= (activePeriod as number) * PERIODS_PER_GROUP + 1 &&
            periodValue <= ((activePeriod as number) + 1) * PERIODS_PER_GROUP
          );
        });

  const displayedPosts = expanded
    ? filteredPosts
    : filteredPosts.slice(0, DEFAULT_VISIBLE);
  const hasMore = filteredPosts.length > DEFAULT_VISIBLE;
  const hiddenCount = filteredPosts.length - DEFAULT_VISIBLE;

  const progressPct = Math.round(
    (project.posts.length / project.totalUnits) * 100,
  );

  const handleProjectSwitch = (i: number) => {
    setActiveProject(i);
    setActivePeriod("all");
    setExpanded(false);
  };

  const handlePeriodSwitch = (period: number | "all") => {
    setActivePeriod(period);
    setExpanded(false);
  };

  return (
    <section
      id="blog"
      className="py-20 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        <PageHeading heading="Learning Reflections" />

        {/* Project Tabs */}
        <div className="flex flex-wrap gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleProjectSwitch(i)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                i === activeProject
                  ? "bg-white text-gray-950 border-white font-medium"
                  : "bg-transparent text-gray-400 border-white/20 hover:border-white/40 hover:text-white"
              }`}
            >
              {p.name}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  i === activeProject
                    ? "bg-black/15 text-gray-900"
                    : "bg-white/10 text-gray-400"
                }`}
              >
                {p.posts.length}/{p.totalUnits}{" "}
                {p.timelineUnit === "month" ? "mo" : "wk"}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handlePeriodSwitch("all")}
              className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 ${
                activePeriod === "all"
                  ? "border-white/40 text-white bg-white/10"
                  : "border-white/10 text-gray-500 hover:border-white/25 hover:text-gray-400"
              }`}
            >
              All {isMonthly ? "months" : "weeks"}
            </button>
            {visiblePeriods.map((period) => (
              <button
                key={period}
                onClick={() => handlePeriodSwitch(period)}
                className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 ${
                  activePeriod === period
                    ? "border-white/40 text-white bg-white/10"
                    : "border-white/10 text-gray-500 hover:border-white/25 hover:text-gray-400"
                }`}
              >
                {periodLabels[period]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">
              {project.posts.length} of {project.totalUnits}{" "}
              {isMonthly ? "months" : "weeks"}
            </span>
            <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-400 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center text-gray-600 text-sm">
            No posts published yet for this project.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence initial={false}>
                {displayedPosts.map((post, i) => (
                  <motion.a
                    key={post.week ?? post.month ?? i}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{
                      duration: 0.2,
                      delay:
                        i < DEFAULT_VISIBLE ? 0 : (i - DEFAULT_VISIBLE) * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xs text-gray-600 font-medium mb-1">
                      {post.month ? `Month ${post.month}` : `Week ${post.week}`}
                    </span>
                    <h3 className="text-sm font-semibold text-white leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-3 line-clamp-2">
                      {post.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5">
                      <span className="text-xs text-gray-600">{post.date}</span>
                      <span className="flex items-center gap-1.5 text-xs text-cyan-400">
                        <FaExternalLinkAlt size={10} />
                        Read post
                      </span>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </div>

            {/* Expand / Collapse */}
            {hasMore && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setExpanded((prev) => !prev)}
                  className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 text-sm text-gray-400 hover:border-white/30 hover:text-white transition-all duration-200"
                >
                  {expanded ? (
                    <>
                      <FaChevronUp size={11} />
                      Show less
                    </>
                  ) : (
                    <>
                      <FaChevronDown size={11} />
                      Show {hiddenCount} more{" "}
                      {hiddenCount === 1 ? "post" : "posts"}
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
export default BlogSection;
