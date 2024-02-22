import { product } from "../../entities/product.entity";
import AddCartButton from "../buttons/AddCartButton";
import { ContainerProduct, ContainerProductDetail, ContainerProductDetailImageTitle, ProductTitle, ProductPrice } from "./styles";


interface ProductProps {
  product: product
}

export default function Product(props: ProductProps) {
  const { product } = props


  return <ContainerProduct>
    <ContainerProductDetail>
      <ContainerProductDetailImageTitle>
        <img src={product.image} width={150} alt="" />
        <ProductTitle>{product.title}</ProductTitle>
      </ContainerProductDetailImageTitle>
      <ProductPrice>R$ {product.price}</ProductPrice>
    </ContainerProductDetail>
    <AddCartButton product={product} />
  </ContainerProduct>
}