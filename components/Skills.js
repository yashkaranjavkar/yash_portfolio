import { Esteban } from "next/font/google";
import { Separator } from "./ui/separator";
import { skills } from "@/lib/staticContent";

const esteban = Esteban({ subsets: ["latin"], weight: "400" });

export default function Skills() {
  return (
    <div className={`${esteban.className} mt-8 py-8`}>
      <h2 className="text-4xl font-normal pb-6 border-b-[1px] border-black ">
        skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        {skills.map((skill, index) => (
          <div
            style={{ fontFamily: "Karla, sans-serif" }}
            key={index}
            className="space-y-2"
          >
            <h3 className="bg-[#A67CCE] text-white font-semibold px-2 py-1 inline-block text-base">
              {skill.category}
            </h3>
            <div className="text-[#434343] flex text-base">{skill.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
