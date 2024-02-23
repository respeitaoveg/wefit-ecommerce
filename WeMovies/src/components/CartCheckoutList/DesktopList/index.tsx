import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { useTheme } from "styled-components";
import cart, { item } from "../../../entities/cart.entity";
import TrashIcon from "../../icons/TrashIcon";
import QuantityInput from "../../inputs/Quantity";
import { RowDesktopData, RowDesktopDataProductDetail, RowDesktopDataProductDetailTitle, RowDesktopDataProductDetailPrice, RowDesktopDataAction } from "./styles";
import { Row, TrashAction } from "../styles";
import currencyFormatter from "../../../utils/currencyFormatter";
import { useWindowDimensions } from "../../../hooks/windowDimentions";


interface DesktopListProps {
  item: item
  cart: cart
}

export default function DesktopList({ item, cart }: DesktopListProps) {
  const { isSmallerThan640px } = useWindowDimensions()


  return <Row>
    <img src={item.image} width={!isSmallerThan640px ? '90px' : '64px'} alt="" />
    <RowDesktopData>
      <RowDesktopDataProductDetail>
        <RowDesktopDataProductDetailTitle>
          {item.title}
        </RowDesktopDataProductDetailTitle>
        <RowDesktopDataProductDetailPrice>
          {currencyFormatter(item.price)}
        </RowDesktopDataProductDetailPrice>
      </RowDesktopDataProductDetail>
    </RowDesktopData>
    <RowDesktopData>
      <QuantityInput
        add={() => cart.addToCart(item)}
        quantity={item.quantity}
        remove={() => cart.removeFromCart(item.id)}
      />
    </RowDesktopData>
    <RowDesktopData>
      <RowDesktopDataProductDetailPrice>
        {currencyFormatter(item.quantity * item.price)}
      </RowDesktopDataProductDetailPrice>
    </RowDesktopData>
    <RowDesktopDataAction>
      <TrashAction onClick={() => cart.removeAllFromCart(item.id)}>
        <TrashIcon />
      </TrashAction>
    </RowDesktopDataAction>
  </Row>
}