import Image from "next/image";

const ProjectCard = (list) => {
  return (
    <>
      {list.map((item, index) => (
        <div key={index} className="group relative">
          <div className="relative z-10 transition-all duration-20 group-hover:-translate-x-1 group-hover:-translate-y-1">
            <div
              onClick={() => window.open(item.link, "_blank")}
              className=" bg-[#F9F2FF]"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-200"
              />
            </div>
            <div className="px-4 py-4">
              <div className="text-lg text-[#671CAD] uppercase font-semibold">
                {item.title}
              </div>
              <div className="text-[#434343] text-base line-clamp-1">
                {item.description}
              </div>
            </div>
          </div>
          <div class="absolute inset-0 z-0 h-full w-full transition-all duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:[box-shadow:5px_5px_#A67CCE]"></div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
