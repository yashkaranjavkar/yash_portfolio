import Image from "next/image";

const ProjectCard = (list) => {
  return (
    <>
      {list.map((item, index) => (
        <div
          key={index}
          className="group relative bg-[#F9F2FF] cursor-pointer border-r-2 border-b-2 border-[#E4C8FF] hover:border-r-0 hover:border-b-0 transition-all duration-300"
        >
          {/* Inner content container */}
          <div className="relative z-10 items-center justify-center overflow-hidden transition-transform duration-300 p-2">
            <div onClick={() => window.open(item.link, "_blank")} className="">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-4 py-4">
              <div className="text-lg text-[#671CAD] uppercase font-semibold">
                {item.title}
              </div>
              <div className="text-[#434343] text-base line-clamp-2">
                {item.description}
              </div>
            </div>
          </div>

          {/* Hover shadow effect */}
          <div className="absolute inset-0 z-0 h-full w-full bg-transparent transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:shadow-[10px_10px_#a67cce]"></div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
