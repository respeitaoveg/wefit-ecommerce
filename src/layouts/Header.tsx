import styled from "styled-components";
import CartMenu from "../components/CartMenu";


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 16px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 27.24px;
`;

export default function Header() {
  return <HeaderContainer>
    <Title>WeMovies</Title>
    <CartMenu />
  </HeaderContainer>
}