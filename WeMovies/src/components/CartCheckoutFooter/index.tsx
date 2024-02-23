import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";
import { useNavigate } from "react-router-dom";
import Divider from "../Divider";
import DesktopCartCheckoutFooter from "./DesktopCartCheckoutFooter";
import MobileCartCheckoutFooter from "./MobileCartCheckoutFooter";
import { CartCheckoutFooterContainer } from "./styles";
import currencyFormatter from "../../utils/currencyFormatter";
import { useWindowDimensions } from "../../hooks/windowDimentions";


export default function CartCheckoutFooter() {
  const navigate = useNavigate();
  const cart = useContext(CartContext)
  const { isSmallerThan640px } = useWindowDimensions()

  function getTotalPrice() {
    let total = 0

    for (const item of cart.getCart()) {
      total += (item.price * item.quantity)
    }

    return currencyFormatter(total)
  }

  function finishCheckout() {
    cart.clearCart()
    navigate('/cart/finished')
  }

  return <CartCheckoutFooterContainer>
    {isSmallerThan640px && <Divider />}
    {!isSmallerThan640px
      ? <DesktopCartCheckoutFooter finishCheckout={finishCheckout} getTotalPrice={getTotalPrice} />
      : <MobileCartCheckoutFooter finishCheckout={finishCheckout} getTotalPrice={getTotalPrice} />
    }
  </CartCheckoutFooterContainer>
}