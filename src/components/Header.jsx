import { Link } from 'react-router-dom';
import { useState } from 'react';
import AurAanaLogo from '../assets/AurAanaLogo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    scrollTo(0, 0);
  };

  return (
    <header className="bg-[#cd3609] bg-orange-300 sticky top-0 z-50 shadow-xl">
      <div className="w-full container mx-auto sm:mx-4 px-2 flex items-center justify-between h-16">

        {/* Logo Section */}
        <div className="w-1/3 flex items-center">
          <Link
            to="/"
            className="text-xl font-bold text-white rounded-3xl px-1 sm:px-2 flex items-center"
            onClick={closeMenu}
          >
            <img src={AurAanaLogo} className="h-11 sm:h-12 rounded-lg" alt="AurAana Logo" />
          </Link>
        </div>


        {/* Desktop Nav */}
        <nav className="w-1/3 justify-center hidden md:flex gap-4 lg:gap-12">
          <Link
            to="/"
            className="text-black font-extrabold hover:text-white px-3 py-2 text-lg hover:bg-orange-500 hover:rounded-lg transition-all duration-300"
            onClick={closeMenu}
          >
            Home
          </Link>
          {['Menu', 'About', 'Location'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-black font-extrabold hover:text-white px-3 py-2 text-lg hover:bg-orange-500 hover:rounded-lg transition-all duration-300"
              onClick={closeMenu}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className='w-1/3'></div>




        {/* Menu icon (Right aligned) */}
        <button
          className="md:hidden mr-4 text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-400 px-4 pb-4 space-y-2 transition-all duration-300">
          <Link
            to="/"
            className="block text-black font-extrabold hover:text-white px-3 py-2 text-lg hover:bg-orange-500 hover:rounded-lg"
            onClick={closeMenu}
          >
            Home
          </Link>
          {['Menu', 'About', 'Location'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block text-black font-extrabold hover:text-white px-3 py-2 text-lg hover:bg-orange-500 hover:rounded-lg"
              onClick={closeMenu}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
