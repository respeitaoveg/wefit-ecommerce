import { useNavigate } from "react-router-dom";
import BagIcon from "../icons/BagIcon";
import { CartMenuContainer, TitleContainer, Title, Subtitle } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";


export default function CartMenu() {
  const navigate = useNavigate();
  const value = useContext(CartContext)

  return <CartMenuContainer onClick={() => navigate('/cart')}>
    <TitleContainer>
      <Title>Meu Carrinho</Title>
      <Subtitle>{value.getCart().length} itens</Subtitle>
    </TitleContainer>
    <BagIcon />
  </CartMenuContainer>
}