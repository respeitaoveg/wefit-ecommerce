import BagIcon from "../icons/BagIcon";
import { CartMenuContainer, TitleContainer, Title, Subtitle } from "./styles";


export default function CartMenu() {
  return <CartMenuContainer>
    <TitleContainer>
      <Title>Meu Carrinho</Title>
      <Subtitle>0 itens</Subtitle>
    </TitleContainer>
    <BagIcon />
  </CartMenuContainer>
}