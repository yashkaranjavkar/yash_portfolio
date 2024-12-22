"use client";
import { Esteban } from "next/font/google";
import { useState } from "react";

import { Projects } from "@/lib/staticContent";
import ProjectCard from "@/components/ProjectCard";

const esteban = Esteban({ subsets: ["latin"], weight: "400" });

const uniqueTags = [
  "all",
  ...new Set(Projects.flatMap((project) => project.tags)),
];

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? Projects
      : Projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <div style={{ fontFamily: "Karla, sans-serif" }} className="px-6 lg:px-64">
      <h2 className={`${esteban.className} text-4xl font-normal pb-6`}>
        explore my projects
      </h2>
      <div className=" font-medium text-lg mb-6">sort by area</div>
      <div className="filters flex flex-wrap gap-2 mb-4 lg:mb-12">
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            className={`relative group font-normal border-r-2 border-b-2 border-[#E4C8FF] transition-all duration-300 px-4 py-2 text-base ${
              activeFilter === tag
                ? "bg-[#A67CCE] text-white"
                : "bg-[#F9F2FF] text-[#434343]"
            }`}
            onClick={() => setActiveFilter(tag)}
          >
            <span>{tag}</span>
            <div className="absolute inset-0 z-0 h-full w-full bg-transparent transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:shadow-[4px_4px_#a67cce]"></div>
          </button>
        ))}
      </div>
      <div className="project-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ProjectCard(filteredProjects)}
      </div>
    </div>
  );
}
