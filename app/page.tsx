import HeroProfileSection from "./components/ProfileSection";
import SemesterProgressBar from "./components/SemesterProgressBar";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";

export default function PortfolioPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* 1. Intro */}
      <section id="home">
        <HeroProfileSection />
      </section>

      {/* 2. Current Progress */}
      <SemesterProgressBar />

      {/* 3. Academic Journey */}
      {/* <section id="roadmap">
        <RoadmapSection />
      </section> */}

      {/* 4. Skills Evolution */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* 5. Projects */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* 6. Reflections / Blog */}
      <section id="blog">
        <BlogSection />
      </section>

      {/* 7. Contact CTA */}
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
