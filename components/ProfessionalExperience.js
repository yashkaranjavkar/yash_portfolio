import { Esteban } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import { Experiences } from "@/lib//staticContent";

const esteban = Esteban({ subsets: ["latin"], weight: "400" });

export default function ProfessionalExperience() {
  return (
    <div className={`${esteban.className} mt-8 py-8`}>
      <h2 className="text-4xl font-normal mb-4 pb-2">
        professional experience
      </h2>
      <Separator className="my-2 bg-black" />
      <div>
        {Experiences.map((exp) => (
          <div style={{ fontFamily: "Karla, sans-serif" }} key={exp.key}>
            <div className="flex justify-between items-start my-5 text-[#434343]">
              <div>
                <h3 className="font-semibold text-lg">{exp.title}</h3>
                <div className="font-medium mt-1">{exp.details}</div>
              </div>
              <div>{exp.date}</div>
            </div>
            <Separator className="my-2 bg-black" />
          </div>
        ))}
      </div>
    </div>
  );
}
