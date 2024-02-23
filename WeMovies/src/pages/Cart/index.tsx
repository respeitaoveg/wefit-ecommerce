import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";
import CartEmpty from "../../components/CartEmpty";
import CartCheckout from "../../components/CartCheckout";


export default function Cart() {
  const cart = useContext(CartContext)

  return <>
  {(cart.getCart() && cart.getCart().length > 0)
  ? (
    <CartCheckout></CartCheckout>
  ) : (
    <CartEmpty></CartEmpty>
  )}
  </>
}