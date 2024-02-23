import { CartCheckoutContainer } from "./styles";
import Divider from "../Divider";
import CartCheckoutFooter from "../CartCheckoutFooter";
import CartCheckoutList from "../CartCheckoutList";
import { useWindowDimensions } from "../../hooks/windowDimentions";


export default function CartCheckout() {
  const { isSmallerThan640px } = useWindowDimensions()

  return <CartCheckoutContainer>
    <CartCheckoutList />
    {!isSmallerThan640px && <Divider />}
    <CartCheckoutFooter />
  </CartCheckoutContainer>
}