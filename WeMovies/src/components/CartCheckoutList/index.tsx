import { Fragment, useContext } from "react"
import { CartContext } from "../../contexts/Cart"
import { CartCheckoutListContainer, Header, HeaderText } from "./styles"
import DesktopList from "./DesktopList"
import MobileList from "./MobileList"
import {useWindowDimensions} from "../../hooks/windowDimentions"


export default function CartCheckoutList() {
  const cart = useContext(CartContext)
  const { isSmallerThan640px } = useWindowDimensions()


  return <CartCheckoutListContainer>
    {!isSmallerThan640px && (
      <Header>
        <HeaderText>PRODUTO</HeaderText>
        <HeaderText></HeaderText>
        <HeaderText>QTD</HeaderText>
        <HeaderText>SUBTOTAL</HeaderText>
        <HeaderText></HeaderText>
      </Header>
    )}
    {cart.getCart().map(item => (
      <Fragment key={item.id}>
        {!isSmallerThan640px
          ? <DesktopList item={item} cart={cart} />
          : <MobileList item={item} cart={cart} />
        }
      </Fragment>
    ))}
  </CartCheckoutListContainer>
}