import { CartCheckoutContainer } from "./styles";
import Divider from "../Divider";
import CartCheckoutFooter from "../CartCheckoutFooter";
import CartCheckoutList from "../CartCheckoutList";


export default function CartCheckout() {
  return <CartCheckoutContainer>
    <CartCheckoutList />
    <Divider />
    <CartCheckoutFooter />
  </CartCheckoutContainer>
}