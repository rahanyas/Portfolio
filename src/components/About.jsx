import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg mt-14 text-justify"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      id="about-me"
    >
      <h2 className="text-4xl font-bold mb-4 text-left">About Me</h2>
      <p className="text-lg  leading-loose max-w-3xl ">
        Hi, I&apos;m <span className="font-semibold">Rahanyas</span>, a passionate and dedicated 
        <span className="font-semibold"> Full-Stack Developer</span> with over 
        <span className="font-semibold"> 2 years</span> of experience in software development. 
        As a freelancer, I have had the opportunity to work on diverse projects, from building 
        <span className="font-semibold"> e-commerce websites for fashion and electronics</span> 
        to developing dynamic and responsive web applications that provide exceptional user experiences.
      </p>
      
      <ul className="mt-6 space-y-3  text-lg">
        <li>🚀 Skilled in both frontend and backend development, ensuring seamless integration.</li>
        <li>💡 Strong expertise in the <span className="font-semibold">MERN stack</span> (MongoDB, Express.js, React, Node.js).</li>
        <li>🎨 Proficient in creating user-friendly and visually appealing interfaces.</li>
        <li>🧠 Analytical and problem-solving mindset, delivering robust and scalable solutions.</li>
        <li>📈 Committed to staying updated with the latest industry trends and technologies.</li>
      </ul>
      
      <p className="mt-6 text-lg  leading-loose max-w-3xl">
        Whether you&apos;re looking to build a dynamic social platform, an innovative web application, 
        or simply need a professional touch to your digital projects, I’m here to bring your ideas to life. 
        I thrive on new challenges and am always eager to contribute to exciting and impactful projects.
      </p>
    </motion.div>
  );
};

export default About;
