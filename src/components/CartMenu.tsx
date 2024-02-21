import styled from "styled-components";
import BagIcon from "./icons/BagIcon";

const CartMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 4px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

const Subtitle = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #999999;
`;

export default function CartMenu() {
  return <CartMenuContainer>
    <TitleContainer>
      <Title>Meu Carrinho</Title>
      <Subtitle>0 itens</Subtitle>
    </TitleContainer>
    <BagIcon />
  </CartMenuContainer>
}