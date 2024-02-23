import { Fragment, useContext } from "react"
import { CartContext } from "../../contexts/Cart"
import { useMediaQuery } from "styled-breakpoints/use-media-query"
import { useTheme } from "styled-components"
import { Header, HeaderText } from "./styles"
import DesktopList from "./DesktopList"
import MobileList from "./MobileList"


export default function CartCheckoutList() {
  const cart = useContext(CartContext)
  const { breakpoints } = useTheme()
  const isGtSm = useMediaQuery(breakpoints.only('sm'))

  return <>
    {isGtSm && (
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
        {isGtSm ? DesktopList({item, cart}) : MobileList({item, cart})}
      </Fragment>
    ))}
  </>
}