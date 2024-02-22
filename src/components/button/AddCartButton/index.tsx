import CartPlusIcon from "../../icons/CartPlusIcon";
import { ContainerAddCartButton, Counter, Description } from "./styles";


export default function AddCartButton() {
  return <ContainerAddCartButton>
    <Counter>
      <CartPlusIcon />
      <div>0</div>
    </Counter>
    <Description>
      ADICIONAR AO CARRINHO
    </Description>
  </ContainerAddCartButton>
}