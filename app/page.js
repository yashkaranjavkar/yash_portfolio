import Hero from "@/components/Hero";
import Project from "@/components/Project";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Skills from "@/components/Skills";
import ExperienceWith from "@/components/ExperienceWith";
import FreelanceGallery from "@/components/FreelanceGallery";

export default function Home() {
  return (
    <>
      <div className="px-6 md:px-64">
        {/* Hero Section: Center */}
        <Hero />

        {/* Project Section */}
        <Project />

        {/* Professional Experience */}
        <ProfessionalExperience />

        {/* Skills */}
        <Skills />
      </div>

      {/* ExperienceWith */}
      <ExperienceWith />
      
      <div className="px-6 md:px-64">
        {/* FreelanceGallery */}
        <FreelanceGallery />
      </div>
      {/* <p style={{ fontFamily: "Karla, sans-serif" }}>This text uses Karla.</p>
      <h1 style={{ fontFamily: "Esteban, serif" }}>This text uses Esteban.</h1>
      <div>This text uses MS Reference Sans Serif.</div> */}
    </>
  );
}
