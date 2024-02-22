import emptyImage from "../../assets/images/empty.png"
import Button from "../../components/button/Button";
import { CartContainer, Title } from "./styles";


export default function Cart() {
  return <CartContainer>
    <Title>Parece que não há nada por aqui :(</Title>
    <img src={emptyImage} alt="" />
    <Button path="/">VOLTAR</Button>
  </CartContainer>
}