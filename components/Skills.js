import { Separator } from "./ui/separator";
import { skills } from "@/lib/staticContent";

export default function Skills() {
  return (
    <div style={{ fontFamily: "Esteban, serif" }} className="mt-14 py-8">
      <h2 className="text-4xl font-normal mb-4 pb-2">skills</h2>
      <Separator className="my-2 bg-black" />
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
