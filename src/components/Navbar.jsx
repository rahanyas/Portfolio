import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <section className="navbar p-4 flex justify-between items-center text-[#bdc3c7] md:p-5 w-full">
      <div className="logo-box ">
        <h1 className="uppercase text-3xl">rahanyas</h1>
        <h5  className="capitalize ml-5">fullstack develepor</h5>
      </div>
      <div className="nav-items">
        <ul className="flex gap-5 md:text-2xl capitalize md:gap-7">
          <li className="cursor-pointer transition duration-300 hover:text-[#00ff9f] hover:drop-shadow-[0_0_8px_#00ff9f]">
            <NavLink to="/">home</NavLink>
          </li>
          <li className="cursor-pointer transition duration-300 hover:text-[#00ff9f] hover:drop-shadow-[0_0_8px_#00ff9f]">
            <NavLink to="/about">about</NavLink>
          </li>
          <li className="cursor-pointer transition duration-300 hover:text-[#00ff9f] hover:drop-shadow-[0_0_8px_#00ff9f]">
            <NavLink to="/project">projects</NavLink>
          </li>
          <li className="cursor-pointer transition duration-300 hover:text-[#00ff9f] hover:drop-shadow-[0_0_8px_#00ff9f]">
            <NavLink to='/contact'>contact</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
