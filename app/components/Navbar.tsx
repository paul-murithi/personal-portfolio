"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ScrollProgressBar from "./ScrollProgressBar";

const sections = [
  { id: "home", label: "Home" },
  { id: "roadmap", label: "Roadmap" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Show navbar after scrolling
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sectionElements = sections.map((s) => document.getElementById(s.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.3,
      }
    );

    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <ScrollProgressBar />
      <AnimatePresence>
        {show && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-4 inset-x-0 flex justify-center z-50"
          >
            <div
              className="relative flex items-center justify-between w-[90%] max-w-2xl px-6 py-3
              bg-white/5 backdrop-blur-md border border-white/10 rounded-full 
              shadow-lg shadow-cyan-500/10"
            >
              {/* Desktop Menu */}
              <ul className="hidden md:flex items-center justify-center space-x-6 text-sm font-medium text-gray-300">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`transition-colors ${
                        activeSection === section.id
                          ? "text-cyan-400 font-semibold"
                          : "hover:text-cyan-400"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile toggle */}
              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden text-gray-300 hover:text-cyan-400 transition"
                aria-label="Open Menu"
              >
                <FiMenu size={22} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition"
                aria-label="Close Menu"
              >
                <FiX size={28} />
              </button>
            </div>

            {/* Nav Links */}
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col items-center justify-center space-y-8 text-lg font-medium"
            >
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-6 py-2 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? "text-cyan-400 font-semibold"
                        : "text-gray-200 hover:text-cyan-300"
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
