import { useNavigate } from "react-router-dom";
import BagIcon from "../icons/BagIcon";
import { CartMenuContainer, TitleContainer, Title, Subtitle } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";


export default function CartMenu() {
  const navigate = useNavigate();
  const value = useContext(CartContext)

  const quantityDifferentProducts = value.getCart().length

  function changeTextItem() {
    if (quantityDifferentProducts === 1) return 'item'

    return 'itens'
  }

  return <CartMenuContainer onClick={() => navigate('/cart')}>
    <TitleContainer>
      <Title>Meu Carrinho</Title>
      <Subtitle>{quantityDifferentProducts} {changeTextItem()}</Subtitle>
    </TitleContainer>
    <BagIcon />
  </CartMenuContainer>
}