"use client";
import { Separator } from "@/components/ui/separator";
import { Projects, behance } from "@/lib/staticContent";

export default function Project() {
  return (
    <div style={{ fontFamily: "Karla, sans-serif" }} className="mt-8 py-8">
      <div className="grid grid-cols-2 gap-x-4 pb-2 text-black">
        <h3 className="font-semibold text-xl indent-4">projects</h3>
        <h3 className="font-semibold text-xl">details</h3>
      </div>
      <div className="mt-4">
        {Projects.map((project) => (
          <div class="group relative" key={project.key}>
            <div
              onClick={() => window.open(project.link, "_blank")}
              className="relative z-10 cursor-pointer overflow-hidden grid grid-cols-2 items-center gap-x-4 bg-[#F9F2FF] border-r-2 border-b-2 border-[#E4C8FF] py-5 mb-6 transition-all duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1"
            >
              <div className="font-bold text-[#671CAD] indent-4 text-3xl">
                {project.title}
              </div>
              <div className="text-[16px] space-y-1">{project.details}</div>
            </div>
            <div class="absolute inset-0 z-0 h-full w-full transition-all duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:[box-shadow:5px_5px_#A67CCE]"></div>
          </div>
        ))}
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
