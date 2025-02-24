import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-around flex-wrap p-10 mt-5 capitalize font-bold">
      <h1>Follow Me</h1>
      <a href="#" className="flex items-center gap-2">
        <FaInstagram className="text-xl" /> Instagram
      </a>
      <a href="#" className="flex items-center gap-2">
        <FaLinkedin className="text-xl" /> LinkedIn
      </a>
      <a href="#" className="flex items-center gap-2">
        <FaGithub className="text-xl" /> GitHub
      </a>
    </div>
  );
};

export default Footer;
