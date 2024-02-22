import Button from "../../components/button/Button";
import finishedImage from "../../assets/images/finished.png"
import { CartContainer, Title } from "./styles";
import { useNavigate } from "react-router-dom";


export default function Finished() {
  const navigate = useNavigate();

  return <CartContainer>
    <Title>Compra realizada com sucesso!</Title>
    <img src={finishedImage} alt="Imagem em 2D fazendo um joinha e uma tela afrente ilustrando o step da compra" />
    <Button onClick={() => navigate('/')}>VOLTAR</Button>
  </CartContainer>
}