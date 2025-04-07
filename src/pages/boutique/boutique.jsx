import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Pilulier Classique",
    description: "Pilulier simple pour une prise facile.",
    price: "19.99€",
    category: "Piluliers",
    image: "/assets/pilulier-simple.png",
  },
  {
    id: 2,
    name: "Pilulier Semaine",
    description: "Pilulier organisé par jours de la semaine.",
    price: "24.99€",
    category: "Piluliers",
    image: "/assets/pilulier-orga.png",
  },
  {
    id: 3,
    name: "Pilulier Voyage",
    description: "Pilulier compact et pratique pour les voyages.",
    price: "29.99€",
    category: "Piluliers",
    image: "https://via.placeholder.com/400x300?text=Pilulier+Voyage",
  },
  {
    id: 4,
    name: "Pilulier Complet",
    description: "Pilulier avec plusieurs compartiments.",
    price: "34.99€",
    category: "Piluliers",
    image: "https://via.placeholder.com/400x300?text=Pilulier+Complet",
  },
  {
    id: 5,
    name: "Coffret de Médicaments",
    description: "Coffret complet pour organiser vos médicaments.",
    price: "49.99€",
    category: "Coffrets",
    image: "https://via.placeholder.com/400x300?text=Coffret+de+Médicaments",
  },
  {
    id: 6,
    name: "Boîte de rangement",
    description: "Boîte de rangement pour les médicaments.",
    price: "15.99€",
    category: "Accessoires",
    image: "https://via.placeholder.com/400x300?text=Boîte+de+rangement",
  }
];

const Boutique = () => {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' ? products : products.filter(product => product.category === filter);

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 capitalize">Notre Boutique</h1>

      {/* Filter options */}
      <div className="mb-8 text-center">
        <button
          onClick={() => setFilter('All')}
          className="bg-blue-500 text-white py-2 px-4 rounded-md mx-2 hover:bg-blue-600 transition"
        >
          Tous les produits
        </button>
        <button
          onClick={() => setFilter('Piluliers')}
          className="bg-green-500 text-white py-2 px-4 rounded-md mx-2 hover:bg-green-600 transition"
        >
          Piluliers
        </button>
        <button
          onClick={() => setFilter('Coffrets')}
          className="bg-yellow-500 text-white py-2 px-4 rounded-md mx-2 hover:bg-yellow-600 transition"
        >
          Coffrets
        </button>
        <button
          onClick={() => setFilter('Accessoires')}
          className="bg-gray-500 text-white py-2 px-4 rounded-md mx-2 hover:bg-gray-600 transition"
        >
          Accessoires
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="shadow-lg rounded-lg overflow-hidden bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">{product.price}</span>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Boutique;
