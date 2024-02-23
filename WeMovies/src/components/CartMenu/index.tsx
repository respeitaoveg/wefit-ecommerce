import { useNavigate } from "react-router-dom";
import BagIcon from "../icons/BagIcon";
import { CartMenuContainer, TitleContainer, Title, Subtitle } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";
import { useWindowDimensions } from "../../hooks/windowDimentions";


export default function CartMenu() {
  const navigate = useNavigate()
  const cart = useContext(CartContext)
  const { isSmallerThan640px } = useWindowDimensions()


  const quantityDifferentProducts = cart.getCart().length

  function changeTextItem() {
    if (quantityDifferentProducts === 1) return 'item'

    return 'itens'
  }

  return <CartMenuContainer onClick={() => navigate('/cart')}>
    <TitleContainer>
      {!isSmallerThan640px && <Title>Meu Carrinho</Title>}
      <Subtitle>{quantityDifferentProducts} {changeTextItem()}</Subtitle>
    </TitleContainer>
    <BagIcon />
  </CartMenuContainer>
}