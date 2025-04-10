import React from 'react';
import { ShoppingCart } from 'lucide-react';

import { Link } from 'react-router-dom';
import { useCart } from '../store/CartContext';


const CartIcon = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link aria-label="Panier" to="/cart" className="relative inline-block">
      <ShoppingCart className="w-6 h-6 text-green-600" />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
