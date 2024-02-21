import { useState } from "react";
import { product } from "../entities/product.entity";


export default function useCart() {
  const [cart, setCart] = useState<product[]>([])

  function getCart() {
    return cart
  }

  function addToCart(product: product) {
    setCart(old => [...old, product])
  }

  return {
    getCart,
    addToCart
  }
}