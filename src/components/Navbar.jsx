 import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState('0px');
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(isMobileMenuOpen ? `${menuRef.current.scrollHeight}px` : '0px');
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className=" p-4 flex items-center justify-between max-w-6xl mx-auto relative mt-4">
      <h1 className="capitalize cursor-pointer font-bold text-2xl">rahanyas</h1>

      <button 
        className="block md:hidden p-2 focus:outline-none cursor-pointer" 
        onClick={toggleMobileMenu}
      >
        <span className={`block w-6 h-1 bg-white mb-1 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-1 bg-white mb-1 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-6 h-1 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 capitalize cursor-pointer text-2xl font-bold ">
        <a href="#about-me" className="hover:text-[#d9d9d9] transition-colors duration-200">about me</a>
        <a href="#projects" className="hover:text-[#d9d9d9] transition-colors duration-200">projects</a>
        <a href="#contact" className="hover:text-[#d9d9d9] transition-colors duration-200">contact me</a>
      </div>


      <div
        ref={menuRef}
        className={`absolute left-0 w-full max-w-6xl bg-[#333333] z-10  md:hidden overflow-hidden transition-all duration-700 ease-out capitalize text-white font-semibold`}
        style={{ top: '100%', height: menuHeight }}
      >
        <a href="#about-me" className="block py-4 w-full text-center hover:text-[#d9d9d9]" onClick={toggleMobileMenu}>about me</a>
        <a href="#projects" className="block py-4 w-full text-center hover:text-[#d9d9d9]" onClick={toggleMobileMenu}>projects</a>
        <a href="#contact" className="block py-4 w-full text-center hover:text-[#d9d9d9]" onClick={toggleMobileMenu}>contact me</a>
      </div>
    </nav>
  );
};

export default Navbar;
