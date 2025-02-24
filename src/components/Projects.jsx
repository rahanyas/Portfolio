import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
    link: "#",
  },
  {
    title: "Electronics Store",
    image: "/electronic-img.jpg",
    link: "#",
  },
  {
    title: "Admin Panel",
    image: "/admin-panel.jpg",
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
            {/* Image with Opacity */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-60"
              />
            </div>

            {/* Highlighted Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl text-black font-bold  bg-opacity-70 px-6 py-3 rounded-lg">
                {project.title}
              </h2>
            </div>

            {/* Button on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-black rounded-lg font-semibold shadow-md hover:bg-gray-200 transition"
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
