import { CartEmptyContainer, Title } from "./styles";
import emptyImage from "../../assets/images/empty.png"
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";

export default function CartEmpty() {
  const navigate = useNavigate();

  return <CartEmptyContainer>
    <Title>Parece que não há nada por aqui :(</Title>
    <img src={emptyImage} alt="Imagem em 2D de uma mulher segurando um ícone grande de recarregamento com uma folha em branco de fundo" />
    <Button onClick={() => navigate('/')}>VOLTAR</Button>
  </CartEmptyContainer>
}