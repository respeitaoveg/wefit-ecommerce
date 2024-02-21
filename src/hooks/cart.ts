import { useState } from "react";
import { product } from "../entities/product.entity";


export default function useCart() {
  const [cart, setCart] = useState<product[]>([])
}