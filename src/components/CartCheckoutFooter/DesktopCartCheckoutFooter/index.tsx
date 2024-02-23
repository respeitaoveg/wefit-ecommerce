import Button from "../../buttons/Button";
import { Resume, ResumeTitle, ResumePrice } from "./styles";

interface DesktopCartCheckoutFooterProps {
  finishCheckout: () => void
  getTotalPrice: () => number
}

export default function DesktopCartCheckoutFooter({finishCheckout, getTotalPrice} : DesktopCartCheckoutFooterProps) {
  return <>
    <Button onClick={finishCheckout}>FINALIZAR PEDIDO</Button>
    <Resume>
      <ResumeTitle>TOTAL</ResumeTitle>
      <ResumePrice>{getTotalPrice()}</ResumePrice>
    </Resume>
  </>
}