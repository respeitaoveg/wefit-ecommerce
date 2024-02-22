import { useContext } from "react";
import { CartContext } from "../../../contexts/Cart";
import CartPlusIcon from "../../icons/CartPlusIcon";
import { ContainerAddCartButton, Counter, Description } from "./styles";
import { product } from "../../../entities/product.entity";


interface AddCartButtonProps {
  product: product
}
export default function AddCartButton({ product }: AddCartButtonProps) {
  const value = useContext(CartContext)
  const productInCart = value.getItemCart(product.id)

  return <ContainerAddCartButton bgColor={!!productInCart} onClick={() => value.addToCart(product)}>
    <Counter>
      <CartPlusIcon />
      <div>{productInCart?.quantity || 0}</div>
    </Counter>
    <Description>
      ADICIONAR AO CARRINHO
    </Description>
  </ContainerAddCartButton>
}