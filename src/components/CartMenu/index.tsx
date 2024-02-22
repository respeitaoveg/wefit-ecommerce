import { useNavigate } from "react-router-dom";
import BagIcon from "../icons/BagIcon";
import { CartMenuContainer, TitleContainer, Title, Subtitle } from "./styles";


export default function CartMenu() {
  const navigate = useNavigate();

  return <CartMenuContainer onClick={() => navigate('/cart')}>
    <TitleContainer>
      <Title>Meu Carrinho</Title>
      <Subtitle>0 itens</Subtitle>
    </TitleContainer>
    <BagIcon />
  </CartMenuContainer>
}