import { useContext } from "react";
import { CartContext } from "../../../contexts/Cart";
import CartPlusIcon from "../../icons/CartPlusIcon";
import { ContainerAddCartButton, Counter, Description } from "./styles";
import { product } from "../../../entities/product.entity";


interface AddCartButtonProps {
  product: product
}
export default function AddCartButton({ product }: AddCartButtonProps) {
  const cart = useContext(CartContext)
  const productInCart = cart.getItemCart(product.id)

  function changeTextItemAdded() {
    if (!productInCart) return 'ADICIONAR AO CARRINHO'

    if (productInCart.quantity === 1) return 'ITEM ADICIONADO'
    if (productInCart.quantity > 1) return 'ITENS ADICIONADOS'
  }

  return <ContainerAddCartButton $bgColor={!!productInCart} onClick={() => cart.addToCart(product)}>
    <Counter>
      <CartPlusIcon />
      <div>{productInCart?.quantity || 0}</div>
    </Counter>
    <Description>
      {changeTextItemAdded()}
    </Description>
  </ContainerAddCartButton>
}