import Image from "next/image";

export default function FreelanceGallery() {
  const projects = [
    {
      title: "Project 1",
      image: "/nina-luong-IOwItPmnkyU-unsplash.jpg", // Replace with actual image paths
      description: "Short description for project 1",
    },
    {
      title: "Project 2",
      image: "/robby-mccullough-_rLDh9IFHf8-unsplash.jpg", // Replace with actual image paths
      description: "Short description for project 2",
    },
    {
      title: "Project 3",
      image: "/mitchell-ng-liang-an-s34iTpkwnF0-unsplash.jpg", // Replace with actual image paths
      description: "Short description for project 3",
    },
  ];

  return (
    <div className="mt-28">
      {/* Main Section */}
      <div className="px-6 sm:px-12 lg:px-24 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">freelance design gallery</h2>
          <p className="text-lg text-gray-500 mt-4">
            brief project overviews & insights
          </p>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-500">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
