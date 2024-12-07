import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import FreelanceGallery from "@/components/FreelanceGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="bg-white px-6 md:px-64">
        {/* Header */}
        <div
          style={{ fontFamily: '"MS Reference Sans Serif", sans-serif' }}
          className="bg-white sticky top-0 z-50 py-10"
        >
          <Header />
        </div>

        {/* Hero Section: Center */}
        <Hero />

        {/* Project Section */}
        <Project />

        {/* Professional Experience */}
        <ProfessionalExperience />

        {/* FreelanceGallery */}
        <FreelanceGallery />

        {/* Footer */}
        <Footer />
      </div>
      {/* <p style={{ fontFamily: "Karla, sans-serif" }}>This text uses Karla.</p>
      <h1 style={{ fontFamily: "Esteban, serif" }}>This text uses Esteban.</h1>
      <div>This text uses MS Reference Sans Serif.</div> */}
    </div>
  );
}
