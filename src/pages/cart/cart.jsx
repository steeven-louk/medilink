import React from 'react'
import { useCart } from '../../store/CartContext'

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart()

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Votre panier est vide 🛒</h2>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Votre Panier 🛍️</h2>

      <ul className="space-y-6">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">Quantité : {item.quantity}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-600 font-bold">{(item.price * item.quantity).toFixed(2)} €</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm hover:underline mt-1"
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-right">
        <p className="text-xl font-semibold">Total : <span className="text-green-600">{totalPrice.toFixed(2)} €</span></p>
        <button
          onClick={()=>clearCart()}
          className="mt-4 bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
        >
          Vider le panier
        </button>
      </div>
    </div>
  )
}

export default Cart
