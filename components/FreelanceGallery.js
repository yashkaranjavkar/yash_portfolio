"use client";
import Link from "next/link";
import Image from "next/image";
import { email } from "@/lib/staticContent";

export default function FreelanceGallery() {
  const projects = [
    {
      title: "Mandeshi Agro",
      image: "/freelance1.png",
      description: "Social Media Posters",
      link: "https://www.behance.net/gallery/150123194/Mandeshi-Agro",
    },
    {
      title: "Monic Elctricals",
      image: "/freelance2.png",
      description: "Out-reach collaterals",
      link: "https://www.behance.net/gallery/163098497/Monic-Electricals",
    },
    {
      title: "Volleyball World",
      image: "/freelance3.png",
      description: "ATL collaterals",
      link: "https://www.behance.net/gallery/171881065/Volleyball-World-marketing-assets",
    },
  ];

  return (
    <div
      style={{ fontFamily: "Esteban, serif" }}
      className=" font-normal mt-8 py-5"
    >
      {/* Main Section */}
      <div className="px-6 sm:px-12 lg:px-24 py-16">
        <div className="text-center">
          <h2 className="text-4xl">freelance design gallery</h2>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div
                onClick={() => window.open(project.link, "_blank")}
                className="overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-500">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{ fontFamily: "Karla, sans-serif" }}
        className="mt-3 font-medium text-xl text-center underline"
      >
        see more
      </div>
      <div
        style={{ fontFamily: "Esteban, serif" }}
        className="flex flex-col items-end text-end mb-6"
      >
        <h2 className="text-4xl font-medium">what’s on your mind?</h2>
        <p className="text-4xl font-medium">share with me</p>
        <Link
          style={{ fontFamily: "Karla, sans-serif" }}
          href={`mailto:${email}`}
          className="text-purple-600 text-xl mt-2 inline-block"
        >
          {">>> " + email}
        </Link>
      </div>
    </div>
  );
}
