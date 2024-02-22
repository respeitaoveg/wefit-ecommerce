import { ReactNode, createContext } from "react";
import useCart from "../hooks/cart";
import cart from "../entities/cart.entity";

export const CartContext = createContext<cart>({} as cart);

export default function CartProvider({ children }: { children: ReactNode }) {
  const cart = useCart()

  return <CartContext.Provider value={{...cart}}>{ children }</CartContext.Provider>
}


