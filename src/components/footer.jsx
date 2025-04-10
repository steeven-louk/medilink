import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Description */}
        <div>
          <img src="/assets/logo.png" alt="Logo" className="w-28 mb-4" />
          <p>Un pilulier malin pour mieux suivre vos traitements.</p>
        </div>

        {/* Navigation rapide */}
        <div>
          <h3 className="font-semibold mb-2 text-xl text-black">Navigation</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-green-500">Accueil</Link></li>
            <li><Link to="/notrePilulier" className="hover:text-green-500">Notre Pilulier</Link></li>
            <li><Link to="/boutique" className="hover:text-green-500">Boutique</Link></li>
            <li><Link to="/blogs" className="hover:text-green-500">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-green-500">Contact</Link></li>
          </ul>
        </div>

        {/* Infos légales */}
        <div>
          <h3 className="font-semibold mb-2 text-xl text-black">Informations</h3>
          <ul className="space-y-1">
            <li><Link to="/conditions-utilisation" className="hover:text-green-500">Conditions d'utilisation</Link></li>
            <li><Link to="/politique-confidentialite" className="hover:text-green-500">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} MonPilulier. Tous droits réservés.
      </div>
    </footer>
  )
}

export default Footer