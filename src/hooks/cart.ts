import { useState } from "react";
import { product } from "../entities/product.entity";
import cart, { item } from "../entities/cart.entity";


export default function useCart(): cart {
  const [cart, setCart] = useState<item[]>([])

  function getCart() {
    return cart
  }

  function addToCart(product: product) {
    const currentCart = getCart();
    const updatedCart = currentCart.map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });

    const foundItemIndex = updatedCart.findIndex(item => item.id === product.id);
    if (foundItemIndex === -1) {
      updatedCart.push({
        ...product,
        quantity: 1
      });
    }

    setCart(updatedCart);
  }

  function removeFromCart(productId: number) {
    setCart(oldCart => oldCart.filter(item => item.id !== productId))
  }

  return {
    getCart,
    addToCart,
    removeFromCart
  }
}