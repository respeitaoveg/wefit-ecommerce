import CartMenu from "../../components/CartMenu";
import { HeaderContainer, Title } from "./styles";


export default function Header() {
  return <HeaderContainer>
    <Title>WeMovies</Title>
    <CartMenu />
  </HeaderContainer>
}