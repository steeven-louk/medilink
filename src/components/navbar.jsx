import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CartIcon from './cardIcon';
import { useAuth } from '../store/authContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);
  const {isAuthenticated} = useAuth();

  const links = [
    { name: 'accueil', lien: '/' },
    { name: 'notre pilulier', lien: '/notrePilulier' },
    { name: 'boutique', lien: '/boutique' },
    { name: 'blog', lien: '/blogs' },
    { name: 'contact', lien: '/contact' },
  ];

  
  return (
    <header className="w-full sticky top-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-green-500 text-xl font-bold capitalize">
          <img src="/assets/logo.png" alt="Logo" className="object-cover w-[7rem]" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 font-semibold text-black capitalize items-center">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.lien}
                className={`hover:text-green-400 transition-colors duration-200 ${
                  location.pathname === link.lien ? 'text-green-500' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {!isAuthenticated &&
          
          <li className="flex items-center gap-2">
            <Link to="/login" className="flex items-center gap-1">
              <User className="w-5 h-5" />
              <span>connexion</span>
            </Link>
          </li>
          }
          {/* Cart icon */}
          <li className="relative ml-4">
            <Link to="/cart">
                <CartIcon/>
            </Link>
          </li>
          
        </ul>

        {/* Mobile menu toggle */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 font-semibold text-black capitalize">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.lien}
                className={`hover:text-green-400 transition-colors duration-200 ${
                  location.pathname === link.lien ? 'text-green-500' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Cart icon on mobile */}
          <li className="flex items-center gap-2 mt-2">
            <Link to="/cart" className="flex items-center gap-1">
              <ShoppingCart className="w-5 h-5" />
              <span><CartIcon/></span>
            </Link>
          </li>
          {isAuthenticated &&
          
          <li className="flex items-center gap-2 mt-2">
            <Link to="/login" className="flex items-center gap-1">
              <User className="w-5 h-5" />
              <span>login</span>
            </Link>
          </li>
          }
        </ul>
      )}
    </header>
  );
};

export default Navbar;
