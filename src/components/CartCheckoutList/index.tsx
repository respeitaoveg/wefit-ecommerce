import { Fragment, useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../../contexts/Cart"
import TrashIcon from "../icons/TrashIcon"

export const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 52px;
  align-items: start;
`

export const HeaderText = styled.div`
  color: #999999;
  font-weight: 700;
  font-size: 14px;
`

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 52px;
  align-items: center;
`

export const RowData = styled.div`
  display: flex;
  align-items: center;
`
export const RowDataProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const RowDataProductDetailTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  `

export const RowDataProductDetailPrice = styled.div`
  font-weight: 700;
  font-size: 16px;
`

export const RowDataAction = styled.div`
  display: flex;
  justify-content: end;
`

export const TrashAction = styled.div`
  cursor: pointer;
`

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
          <RowData>{item.quantity}</RowData>
          <RowData>
            <RowDataProductDetailPrice>
              R$ {item.quantity * item.price}
            </RowDataProductDetailPrice>
          </RowData>
          <RowDataAction>
            <TrashAction onClick={() => cart.removeFromCart(item.id)}>
              <TrashIcon />
            </TrashAction>
          </RowDataAction>
        </Row>
      </Fragment>
    ))}
  </>
}