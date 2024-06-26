import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import HomeSection from "@/sections/HomeSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
export const revalidate = 30; // revalidate at most every hour

export default async function Home() {
  return (
    <main className="">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
