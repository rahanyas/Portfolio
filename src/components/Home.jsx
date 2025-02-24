import { motion } from "framer-motion";
import homeImg from '../assets/homeImage1.png'

const Home = () => {
  return (
    <div className="grid grid-cols-2 mt-16 px-2">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="capitalize text-[30px] md:text-5xl font-bold">rahanyas</h1>
        <h3 className="capitalize font-semibold text-[28px]whitespace-wrap">web developer</h3>
      </div>
      <div className="flex items-center justify-center ">
        <motion.img
          src={homeImg}
          alt="home-img"
          className="rounded-2xl shadow-xl mix-blend-color-dodge"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default Home;
