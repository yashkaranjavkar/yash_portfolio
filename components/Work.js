import { WORK } from "@/lib/staticContent";

export default function Work() {
  return (
    <div className="mt-28">
      <header className="mb-8">
        <h1 className="text-4xl ml-2 font-bold">WORK</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-y-8 border-t border-gray-700">
        {WORK.map((project, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index !== 0 ? "border-t border-gray-700 pt-4" : "pt-4"
            } flex-wrap`}
          >
            {/* Left Column */}
            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl ml-3 font-bold">{project.name}</h2>
            </div>
            {/* Right Column */}
            <div className="w-full sm:w-1/2">
              <p className="text-gray-500 text-sm">{project.year}</p>
              <p className=" indent-2 text-base">{project.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
