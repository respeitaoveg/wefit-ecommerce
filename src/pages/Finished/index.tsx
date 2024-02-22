import finishedImage from "../../assets/images/finished.png"
import Button from "../../components/button/Button";
import { CartContainer, Title } from "./styles";


export default function Finished() {
  return <CartContainer>
    <Title>Compra realizada com sucesso!</Title>
    <img src={finishedImage} alt="" />
    <Button path="/">VOLTAR</Button>
  </CartContainer>
}