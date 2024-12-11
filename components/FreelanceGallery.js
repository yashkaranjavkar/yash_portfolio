"use client";
import Link from "next/link";
import Image from "next/image";
import { Esteban } from "next/font/google";
import { email, freelance } from "@/lib/staticContent";

const esteban = Esteban({ subsets: ["latin"], weight: "400" });

export default function FreelanceGallery() {
  return (
    <div className={`${esteban.className} font-normal mt-8 py-8`}>
      <div className="px-6 sm:px-12 lg:px-24 py-16">
        <h2 className="text-5xl font-medium text-center mb-5">
          freelance design gallery
        </h2>

        <div
          style={{ fontFamily: "Karla, sans-serif" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {freelance.map((project, index) => (
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
      <div className="flex flex-col items-center justify-center mt-3">
        {/* See More Link */}
        <div
          style={{ fontFamily: "Karla, sans-serif" }}
          className="font-medium text-xl text-center underline mb-16"
        >
          see more
        </div>

        {/* Contact Section */}
        <div className={`${esteban.className} block ml-[270px] text-start`}>
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
    </div>
  );
}
