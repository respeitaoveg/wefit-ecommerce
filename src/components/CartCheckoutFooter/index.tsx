import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "styled-breakpoints/use-media-query";
import Divider from "../Divider";
import DesktopCartCheckoutFooter from "./DesktopCartCheckoutFooter";
import MobileCartCheckoutFooter from "./MobileCartCheckoutFooter";
import { CartCheckoutFooterContainer } from "./styles";


export default function CartCheckoutFooter() {
  const navigate = useNavigate();
  const cart = useContext(CartContext)
  const { breakpoints } = useTheme()
  const isGtSm = useMediaQuery(breakpoints.only('sm'))

  function getTotalPrice() {
    let total = 0

    for (const item of cart.getCart()) {
      total += (item.price * item.quantity)
    }

    return total
  }

  function finishCheckout() {
    cart.clearCart()
    navigate('/cart/finished')
  }

  return <CartCheckoutFooterContainer>
    {!isGtSm && <Divider />}
    {isGtSm
      ? <DesktopCartCheckoutFooter finishCheckout={finishCheckout} getTotalPrice={getTotalPrice} />
      : <MobileCartCheckoutFooter finishCheckout={finishCheckout} getTotalPrice={getTotalPrice} />
    }
  </CartCheckoutFooterContainer>
}