import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Pilulier Classique",
    description: "Coffret complet pour organiser vos médicaments.",
    category: "Piluliers",
    image: "/assets/pilulier.png",
    price: 189
  },

  {
    id: 2,
    name: "Boîte de rangement",
    description: "Boîte de rangement pour les médicaments.",
    category: "Accessoires",
    image: "/assets/pilulink.png",
    price: 110
  }
];

const Boutique = () => {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' ? products : products.filter(product => product.category === filter);

  const addToCart =(cart)=>{
    if(!cart)return;
    const count =0
    if(cart){
    localStorage.setItem("count", count+1);
    localStorage.setItem("product", JSON.stringify(cart.price + cart.price));

    }
    localStorage.setItem("product", JSON.stringify(cart));
    localStorage.setItem("count", count+1);
  }
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
          onClick={() => setFilter('Accessoires')}
          className="bg-gray-500 text-white py-2 px-4 rounded-md mx-2 hover:bg-gray-600 transition"
        >
          Accessoires
        </button>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="shadow-lg rounded-lg overflow-hidden bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl text-black font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>

            </div>
            <div className="flex justify-between items-center mt-4 p-2">
                <span className="text-lg text-black font-bold">{product.price}€</span>
                <button onClick={addToCart(product)} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                  Ajouter au panier
                </button>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Boutique;
