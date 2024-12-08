import { Separator } from "@/components/ui/separator";
import { Experiences } from "@/lib//staticContent";

export default function ProfessionalExperience() {
  return (
    <div style={{ fontFamily: "Esteban, serif" }} className="py-8">
      <h2 className="text-2xl font-medium mb-4 pb-2">
        professional experience
      </h2>
      <Separator className="my-2 bg-black" />
      <div>
        {Experiences.map((exp) => (
          <div key={exp.key}>
            <div className="flex justify-between items-start px-4 my-5 text-[#434343]">
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
