import { Esteban } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import { Experiences } from "@/lib//staticContent";

const esteban = Esteban({ subsets: ["latin"], weight: "400" });

export default function ProfessionalExperience() {
  return (
    <div className={`${esteban.className} mt-8 py-8`}>
      <h2 className="text-4xl font-normal pb-6 border-b-[1px] border-black ">
        professional experience
      </h2>
      <div>
        {Experiences.map((exp) => (
          <div style={{ fontFamily: "Karla, sans-serif" }} key={exp.key}>
            <div className="flex justify-between items-start border-b-[1px] border-black py-5 text-[#434343]">
              <div>
                <h3 className="font-semibold text-lg">{exp.title}</h3>
                <div className="font-medium mt-1">{exp.details}</div>
              </div>
              <div>{exp.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
