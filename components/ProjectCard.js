import Image from "next/image";

const ProjectCard = (list) => {
  return (
    <>
      {list.map((item, index) => (
        <div
          key={index}
          className="group relative bg-[#F9F2FF] border-r-2 border-b-2 border-[#E4C8Ff] hover:border-r-0"
        >
          <div className="relative z-10 items-center justify-center overflow-hidden transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3">
            <div onClick={() => window.open(item.link, "_blank")} className="">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-full object-cover p-2"
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
          <div class="absolute inset-0 z-0 h-full w-full transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a67cce,10px_10px_#ccb4e3,15px_15px_#e5d9f1]"></div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
