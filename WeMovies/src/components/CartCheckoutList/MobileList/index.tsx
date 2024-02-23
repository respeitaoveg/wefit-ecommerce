import cart, { item } from "../../../entities/cart.entity"
import TrashIcon from "../../icons/TrashIcon"
import QuantityInput from "../../inputs/Quantity"
import { RowDetail, RowDetailHeader, RowDetailHeaderTitle, RowDetailHeaderPrice, RowDetailFooter, RowDetailFooterResume, RowDetailFooterResumeSubtotal, RowDetailFooterResumePrice } from "./styles"
import { Row, TrashAction } from "../styles"
import currencyFormatter from "../../../utils/currencyFormatter"
import { useWindowDimensions } from "../../../hooks/windowDimentions"

interface MobileListProps {
  item: item
  cart: cart
}


export default function MobileList({ cart, item }: MobileListProps) {
  const { isSmallerThan640px } = useWindowDimensions()

  return <Row>
    <img src={item.image} width={!isSmallerThan640px ? '90px' : '64px'} alt="" />
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