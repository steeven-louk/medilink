import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    {
     name:'accueil',
      lien:"/"
    },
    {
     name:'notre pilulier',
      lien:"/"
    },
    {
     name:'boutique',
      lien:"/boutique"
    },
    {
     name:'blog',
      lien:"/blogs"
    },
    {
     name:'contact',
      lien:"/contact"
    }
  ];

  return (
    <header className="w-full sticky top-0 bg-black shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <span className="text-green-500 text-xl font-bold capitalize">slogon</span>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 font-semibold capitalize">
          {links.map((link, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:text-green-400 transition-colors duration-200"
            >
              <a href={link.lien}>{link.name}</a>
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
        <ul className="md:hidden px-4 pb-4 space-y-2 font-semibold capitalize">
          {links.map((link, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:text-green-400 transition-colors duration-200"
            >
                <a href={link.lien}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
