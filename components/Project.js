"use client";
import { Projects, behance } from "@/lib/staticContent";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div style={{ fontFamily: "Karla, sans-serif" }} className="mt-8 py-8">
      <h2 className="text-4xl font-normal pb-6">explore my projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {ProjectCard(Projects)}
      </div>
      <div
        onClick={() => window.open(behance, "_blank")}
        className="mt-12 text-center underline"
      >
        see more
      </div>
    </div>
  );
}
