import { Fragment, useContext } from "react"
import { CartContext } from "../../contexts/Cart"
import TrashIcon from "../icons/TrashIcon"
import { Header, HeaderText, Row, RowData, RowDataProductDetail, RowDataProductDetailTitle, RowDataProductDetailPrice, RowDataAction, TrashAction } from "./styles"
import QuantityInput from "../inputs/Quantity"

export default function CartCheckoutList() {
  const cart = useContext(CartContext)

  return <>
    <Header>
      <HeaderText>PRODUTO</HeaderText>
      <HeaderText></HeaderText>
      <HeaderText>QTD</HeaderText>
      <HeaderText>SUBTOTAL</HeaderText>
      <HeaderText></HeaderText>
    </Header>
    {cart.getCart().map(item => (
      <Fragment key={item.id}>
        <Row>
          <img src={item.image} width='90px' alt="" />
          <RowData>
            <RowDataProductDetail>
              <RowDataProductDetailTitle>
                {item.title}
              </RowDataProductDetailTitle>
              <RowDataProductDetailPrice>
                {item.price}
              </RowDataProductDetailPrice>
            </RowDataProductDetail>
          </RowData>
          <RowData>
            <QuantityInput
              add={() => cart.addToCart(item)}
              quantity={item.quantity}
              remove={() => cart.removeFromCart(item.id)}
            />
          </RowData>
          <RowData>
            <RowDataProductDetailPrice>
              R$ {item.quantity * item.price}
            </RowDataProductDetailPrice>
          </RowData>
          <RowDataAction>
            <TrashAction onClick={() => cart.removeAllFromCart(item.id)}>
              <TrashIcon />
            </TrashAction>
          </RowDataAction>
        </Row>
      </Fragment>
    ))}
  </>
}