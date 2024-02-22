import { useContext } from "react";
import emptyImage from "../../assets/images/empty.png"
import Button from "../../components/button/Button";
import { CartContext } from "../../contexts/Cart";
import { CartContainer, Title } from "./styles";


export default function Cart() {
  const value = useContext(CartContext)

  return <CartContainer>
    <Title>Parece que não há nada por aqui :( - {value.getCart().length}</Title>
    <img src={emptyImage} alt="Imagem em 2D de uma mulher segurando um ícone grande de recarregamento com uma folha em branco de fundo" />
    <Button path="/">VOLTAR</Button>
  </CartContainer>
}