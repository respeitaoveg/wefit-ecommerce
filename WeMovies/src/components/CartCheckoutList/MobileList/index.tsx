import { useTheme } from "styled-components"
import cart, { item } from "../../../entities/cart.entity"
import TrashIcon from "../../icons/TrashIcon"
import QuantityInput from "../../inputs/Quantity"
import { useMediaQuery } from "styled-breakpoints/use-media-query"
import { RowDetail, RowDetailHeader, RowDetailHeaderTitle, RowDetailHeaderPrice, RowDetailFooter, RowDetailFooterResume, RowDetailFooterResumeSubtotal, RowDetailFooterResumePrice } from "./styles"
import { Row, TrashAction } from "../styles"
import currencyFormatter from "../../../utils/currencyFormatter"

interface MobileListProps {
  item: item
  cart: cart
}


export default function MobileList({ cart, item }: MobileListProps) {
  const { breakpoints } = useTheme()
  const isGtSm = useMediaQuery(breakpoints.only('sm'))

  return <Row>
    <img src={item.image} width={isGtSm ? '90px' : '64px'} alt="" />
    <RowDetail>
      <RowDetailHeader>
        <RowDetailHeaderTitle>{item.title}</RowDetailHeaderTitle>
        <RowDetailHeaderPrice>{currencyFormatter(item.price)}</RowDetailHeaderPrice>
        <TrashAction onClick={() => cart.removeAllFromCart(item.id)}>
          <TrashIcon />
        </TrashAction>
      </RowDetailHeader>
      <RowDetailFooter>
        <QuantityInput
          add={() => cart.addToCart(item)}
          quantity={item.quantity}
          remove={() => cart.removeFromCart(item.id)}
        />
        <RowDetailFooterResume>
          <RowDetailFooterResumeSubtotal>
            SUBTOTAL
          </RowDetailFooterResumeSubtotal>
          <RowDetailFooterResumePrice>
            {currencyFormatter(item.price * item.quantity)}
          </RowDetailFooterResumePrice>
        </RowDetailFooterResume>
      </RowDetailFooter>
    </RowDetail>
  </Row>
}