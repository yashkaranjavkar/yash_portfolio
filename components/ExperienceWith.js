import Image from "next/image";
import { companies } from "@/lib/staticContent";

const ExperienceWith = () => {
  return (
    <div style={{ fontFamily: "Esteban, serif" }} className="mt-10 py-5">
      <h2 className="text-6xl font-medium text-center my-5">
        experience in working with
      </h2>
      <div className="border-t border-b border-black py-4 mt-12">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {companies.map((company, index) => (
            <div key={index} className="w-24">
              <Image
                src={company.logo}
                alt={company.alt}
                width={100}
                height={100}
                className="mx-auto w-full h-[50px] my-4 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceWith;
