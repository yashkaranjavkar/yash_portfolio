"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Skills from "@/components/Skills";
import ExperienceWith from "@/components/ExperienceWith";
import FreelanceGallery from "@/components/FreelanceGallery";

const Loader = () => (
  <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
    <video
      autoPlay
      muted
      loop
      playsInline
      className=""
      onLoadedData={(e) => {
        console.log("Video Loaded", e);
      }}
    >
      <source src="/loader.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <div className="px-6 lg:px-64">
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

          <div className="px-6 lg:px-64">
            {/* FreelanceGallery */}
            <FreelanceGallery />
          </div>
        </>
      )}
    </div>
  );
}
