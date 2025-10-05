"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950 text-white"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Build Something Together
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I’m always open to internships, collaborations, and exciting AI /
          backend projects. If you’d like to connect, feel free to drop me a
          message!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <a
            href="mailto:paulmurithi518@gmail.com"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition transform"
          >
            📩 Email Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/paul-murithi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/paul-murithi-a14482355/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:paulmurithi518@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaEnvelope size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
