import { ContainerProduct, ContainerProductDetail, ContainerProductDetailImageTitle, ProductTitle, ProductPrice } from "./styles";

const productMock = {
  "id": 1,
  "title": "Viúva Negra",
  "price": 9.99,
  "image": "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
}


export default function Product() {
  return <ContainerProduct>
    <ContainerProductDetail>
      <ContainerProductDetailImageTitle>
        <img src={productMock.image} width={150} alt="" srcset="" />
        <ProductTitle>{productMock.title}</ProductTitle>
      </ContainerProductDetailImageTitle>
      <ProductPrice>R$ {productMock.price}</ProductPrice>
    </ContainerProductDetail>
    <div>BOTAO</div>
  </ContainerProduct>
}