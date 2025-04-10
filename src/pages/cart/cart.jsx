import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pilulier Connecté",
      price: 29.99,
      quantity: 1,
      image: "/assets/pilulier.png",
    },
    {
      id: 2,
      name: "Boîte de rangement verte",
      price: 14.99,
      quantity: 2,
      image: "/assets/rangement.png",
    }
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Votre panier</h1>

      {cartItems.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">Quantité : {item.quantity}</p>
              </div>
              <div className="text-right font-semibold">
                {(item.price * item.quantity).toFixed(2)} €
              </div>
            </div>
          ))}

          <div className="text-right mt-6 text-lg font-bold">
            Total : {total} €
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
