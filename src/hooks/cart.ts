import { useState } from "react";
import { product } from "../entities/product.entity";
import cart from "../entities/cart.entity";


export default function useCart(): cart {
  const [cart, setCart] = useState<product[]>([])

  function getCart() {
    return cart
  }

  function addToCart(product: product) {
    setCart(old => [...old, product])
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