import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import HomeSection from "@/sections/HomeSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
export default async function Home() {
  return (
    <main className="mt-28 md:mt-0">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
