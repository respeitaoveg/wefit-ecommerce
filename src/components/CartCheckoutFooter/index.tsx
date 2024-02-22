import styled from "styled-components";
import Button from "../buttons/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";
import { useNavigate } from "react-router-dom";

const CartCheckoutFooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Resume = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

const ResumeTitle = styled.div`
color: #999999;
font-weight: 700;
font-size: 14px;
`

const ResumePrice = styled.div`
color: #2F2E41;
font-weight: 700;
font-size: 24px;
`

export default function CartCheckoutFooter() {
  const navigate = useNavigate();
  const cart = useContext(CartContext)

  function getTotalPrice() {
    let total = 0

    for (const item of cart.getCart()) {
      total += (item.price * item.quantity)
    }

    return total
  }

  return <CartCheckoutFooterContainer>
    <Button onClick={() => navigate('/cart/finished')}>FINALIZAR PEDIDO</Button>
    <Resume>
      <ResumeTitle>TOTAL</ResumeTitle>
      <ResumePrice>{getTotalPrice()}</ResumePrice>
    </Resume>
  </CartCheckoutFooterContainer>
}