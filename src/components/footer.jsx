import React from 'react'

const Footer = () => {
  return (
    // <footer className='md:p-4 p-2 bg-gray-800 text-center mt-5 font-semibold'>&copy;Copyright - 2025</footer>
    <footer className="bg-gray-100 text-center py-6 text-sm text-gray-700">
      <div className="container mx-auto">
        <p>
          © {new Date().getFullYear()} - Tous droits réservés.
          {' '}
          <a href="/conditions-utilisation" className="text-green-600 hover:underline">
            Conditions d’utilisation
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer