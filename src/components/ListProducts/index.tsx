import { product } from "../../entities/product.entity";
import Product from "../Product";
import { ContainerListProducts } from "./styles";

const productMock: product[] = [
  {
    "id": 1,
    "title": "Viúva Negra",
    "price": 9.99,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
  },
  {
    "id": 2,
    "title": "Shang-chi",
    "price": 30.99,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png"
  },
  {
    "id": 3,
    "title": "Homem Aranha",
    "price": 29.9,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
  },
  {
    "id": 1,
    "title": "Viúva Negra",
    "price": 9.99,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
  },
  {
    "id": 2,
    "title": "Shang-chi",
    "price": 30.99,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png"
  },
  {
    "id": 3,
    "title": "Homem Aranha",
    "price": 29.9,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
  },
]


export default function ListProducts() {
  return <ContainerListProducts>
    {productMock.map((product, index) => (<Product product={product} key={index} />))}
  </ContainerListProducts>
}