import Button from "../../components/button/Button";
import finishedImage from "../../assets/images/finished.png"
import { CartContainer, Title } from "./styles";


export default function Finished() {
  return <CartContainer>
    <Title>Compra realizada com sucesso!</Title>
    <img src={finishedImage} alt="Imagem em 2D fazendo um joinha e uma tela afrente ilustrando o step da compra" />
    <Button path="/">VOLTAR</Button>
  </CartContainer>
}