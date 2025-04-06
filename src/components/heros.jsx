import React from 'react'

const Heros = () => {
  return (
    <header className='header_component'>
       <div className="container md:ml-7 px-4 flex flex-col justify-center items-start h-full md:w-[40rem]">
        <h2 className="text-xl md:text-4xl font-bold ">
          Le bon usage du médicament
        </h2>
        <p className="mt-4 leading-relaxed">
          Un enjeu de santé publique majeur qui nous concerne tous, des patients aux professionnels de santé. Chacun a un rôle à jouer, à chaque étape pour favoriser la bonne utilisation des médicaments.
        </p>
        <p className="mt-4 font-semibold ">
          Le respect de la prescription améliore l’efficacité et la sécurité des médicaments pour vieillir en bonne santé.
        </p>
        <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-md shadow hover:bg-green-600 transition duration-300">
          Découvrez nos piluliers
        </button>
      </div>
    </header>
  )
}

export default Heros