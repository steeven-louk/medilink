import React from 'react';

const piluliers = [
  {
    id: 1,
    name: "Pilulier Classique",
    description: "Un pilulier simple pour une prise de médicaments facile.",
    image: "https://via.placeholder.com/400x300?text=Pilulier+Classique",
  },
  {
    id: 2,
    name: "Pilulier Semaine",
    description: "Pilulier organisé par jours de la semaine pour un suivi plus précis.",
    image: "https://via.placeholder.com/400x300?text=Pilulier+Semaine",
  },
  {
    id: 3,
    name: "Pilulier Voyage",
    description: "Pilulier compact et pratique pour vos déplacements.",
    image: "https://via.placeholder.com/400x300?text=Pilulier+Voyage",
  },
  {
    id: 4,
    name: "Pilulier Complet",
    description: "Pilulier avec plusieurs compartiments pour chaque prise de médicament.",
    image: "https://via.placeholder.com/400x300?text=Pilulier+Complet",
  },
];

const NotrePilulier = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 capitalize">Notre Pilulier</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {piluliers.map((pilulier) => (
          <div key={pilulier.id} className="shadow-lg rounded-lg overflow-hidden bg-white">
            <img
              src={pilulier.image}
              alt={pilulier.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{pilulier.name}</h2>
              <p className="text-gray-600 mt-2">{pilulier.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NotrePilulier;
