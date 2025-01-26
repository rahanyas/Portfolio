function Navbar() {
  return (
    <section className="navbar p-4 flex justify-between items-center border-b-2 border-[#8e44ad] bg-[#1c1f2b] text-[#bdc3c7] md:p-5">
      <div className="logo-box">
        <img src="" alt="logo" className="logo w-10 h-10 md:w-12 md:h-12" />
      </div>
      <div className="nav-items">
        <ul className="flex gap-5 md:text-2xl capitalize md:gap-7">
          <li className="cursor-pointer transition duration-300 hover:text-[#00ff9f] hover:drop-shadow-[0_0_8px_#00ff9f]">
            home
          </li>
          <li className="cursor-pointer transition duration-300 hover:text-[#00ff9f] hover:drop-shadow-[0_0_8px_#00ff9f]">
            about
          </li>
          <li className="cursor-pointer transition duration-300 hover:text-[#00ff9f] hover:drop-shadow-[0_0_8px_#00ff9f]">
            projects
          </li>
          <li className="cursor-pointer transition duration-300 hover:text-[#00ff9f] hover:drop-shadow-[0_0_8px_#00ff9f]">
            contact
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
