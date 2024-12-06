import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import FreelanceGallery from "@/components/FreelanceGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-cream px-6 md:px-12 lg:px-24 py-10 font-mono bg-[#f5f0e7] text-[#0a5029]">
        {/* Header */}
        <div className="flex justify-between items-center font-medium z-10 border-b-4 border-r-8 border-l-2 pb-5 pr-2 pl-2">
          <h1 className="font-serif text-2xl">YASH</h1>
          <Header />
        </div>

        {/* Hero Section */}
        <Hero />

        {/* Work Section */}
        <Work />

        {/* FreelanceGallery */}
        <FreelanceGallery />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
