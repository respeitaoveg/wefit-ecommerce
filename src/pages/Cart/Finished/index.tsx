import Button from "../../../components/button/Button";
import finishedImage from "../../../assets/images/finished.png"
import { CartContainer, Title } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../contexts/Cart";


export default function Finished() {
  const value = useContext(CartContext)

  console.log(value.getCart())

  return <CartContainer>
    <Title>Compra realizada com sucesso!</Title>
    <img src={finishedImage} alt="" />
    <Button path="/">VOLTAR</Button>
  </CartContainer>
}