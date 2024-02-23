import { CartCheckoutContainer } from "./styles";
import Divider from "../Divider";
import CartCheckoutFooter from "../CartCheckoutFooter";
import CartCheckoutList from "../CartCheckoutList";
import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { useTheme } from "styled-components";


export default function CartCheckout() {
  const { breakpoints } = useTheme()
  const isGtSm = useMediaQuery(breakpoints.only('sm'))

  return <CartCheckoutContainer>
    <CartCheckoutList />
    {isGtSm && <Divider />}
    <CartCheckoutFooter />
  </CartCheckoutContainer>
}