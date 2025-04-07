import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom'; // ⬅️ Import de NavLink

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'accueil', lien: '/' },
    { name: 'notre pilulier', lien: '/notrePilulier' },
    { name: 'boutique', lien: '/boutique' },
    { name: 'blog', lien: '/blogs' },
    { name: 'contact', lien: '/contact' }
  ];

  return (
    <header className="w-full sticky top-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <span>
          <img src={"/assets/logo.png"} className="object-cover w-[7rem]" />
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 font-semibold text-black capitalize">
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.lien}
                className={({ isActive }) =>
                  `transition-colors duration-200 hover:text-green-400 ${
                    isActive ? 'text-green-500 font-bold' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 font-semibold text-black capitalize">
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.lien}
                className={({ isActive }) =>
                  `transition-colors duration-200 hover:text-green-400 ${
                    isActive ? 'text-green-500 font-bold' : ''
                  }`
                }
                onClick={() => setIsOpen(false)} // ferme le menu mobile après clic
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
