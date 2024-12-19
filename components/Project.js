"use client";
import { Projects, behance } from "@/lib/staticContent";
import { Esteban } from "next/font/google";
import ProjectCard from "./ProjectCard";

const esteban = Esteban({ subsets: ["latin"], weight: "400" });

export default function Project() {
  const projects = Projects.slice(0, 6);

  return (
    <div className="mt-8 py-8">
      <h2 className={`${esteban.className} text-4xl font-normal pb-6`}>
        explore my projects
      </h2>
      <div
        style={{ fontFamily: "Karla, sans-serif" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"
      >
        {ProjectCard(projects)}
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
