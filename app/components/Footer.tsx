"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-t border-white/10 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* My personal info */}
        <div className="text-center md:text-left">
          <h3 className="text-sm font-semibold text-gray-300">
            © {year} Paul Murithi — “The Bird”
          </h3>
          <p className="text-xs text-gray-500">Powered by Paulos Network</p>
        </div>

        {/* My Social Links */}
        <div className="flex items-center space-x-5">
          <a
            href="https://github.com/paul-murithi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="www.linkedin.com/in/paul-murithi-a14482355"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://x.com/__the__bird__"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
