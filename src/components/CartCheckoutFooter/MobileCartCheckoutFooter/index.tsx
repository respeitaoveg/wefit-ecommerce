import Button from "../../buttons/Button";
import { MobileCartCheckoutFooterContainer, MobileCartCheckoutFooterResume, MobileCartCheckoutFooterTotal, MobileCartCheckoutFooterPrice } from "./styles";


interface MobileCartCheckoutFooterProps {
  finishCheckout: () => void
  getTotalPrice: () => number
}

export default function MobileCartCheckoutFooter({finishCheckout, getTotalPrice} : MobileCartCheckoutFooterProps) {
  return <MobileCartCheckoutFooterContainer>
    <MobileCartCheckoutFooterResume>
      <MobileCartCheckoutFooterTotal>TOTAL</MobileCartCheckoutFooterTotal>
      <MobileCartCheckoutFooterPrice>{getTotalPrice()}</MobileCartCheckoutFooterPrice>
    </MobileCartCheckoutFooterResume>
    <Button onClick={finishCheckout}>FINALIZAR PEDIDO</Button>
  </MobileCartCheckoutFooterContainer>
}