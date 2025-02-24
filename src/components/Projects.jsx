import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    image: "/public/e-comme.jpg",
    link: "#",
  },
  {
    title: "Electronics Store",
    image: "/public/electronic-img.jpg",
    link: "https://progbiz-test-git-main-rahanyas-projects.vercel.app/",
  },
  {
    title: "Admin Panel",
    image: "/public/admin-panel.jpg",
    link: "#",
  },
];

const Project = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-60"
              />
            </div>

            {/* Title - Show by default, hide on hover (Only for md and larger screens) */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 md:group-hover:opacity-0 ">
              <h2 className="text-3xl text-black font-bold  bg-opacity-70 px-6 py-3 rounded-lg whitespace-nowrap">
                {project.title}
              </h2>
            </div>

            {/* Button - Bottom Right on Mobile, Center on Hover for md+ */}
            <div className="absolute bottom-4 right-4 md:inset-0 md:flex md:items-center md:justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-white text-black rounded-lg font-semibold shadow-md hover:bg-gray-200 transition"
              >
                Visit
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
