import { Esteban } from "next/font/google";
import Image from "next/image";
import { companies } from "@/lib/staticContent";

const esteban = Esteban({ subsets: ["latin"], weight: "400" });

const ExperienceWith = () => {
  return (
    <div className={`${esteban.className} mt-8 py-8`}>
      <h2 className="text-5xl font-medium text-center my-5">
        experience in working with
      </h2>
      <div className="border-t border-b border-black py-4 mt-12">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {companies.map((company, index) => (
            <div key={index} className="">
              <Image
                src={company.logo}
                alt={company.alt}
                width={100}
                height={100}
                className="mx-auto w-full h-auto my-4 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceWith;
