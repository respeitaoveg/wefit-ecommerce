import { useEffect, useState } from "react";
import { ClientApi } from "../../services/ClientApi";
import ProductComponent from "../Product";
import { ContainerListProducts } from "./styles";
import { product } from "../../entities/product.entity";


export default function ListProducts() {
  const [products, setProducts] = useState<product[] | []>([])

  async function getProducts() {
    const client = new ClientApi()
    const aux = await client.getListProducts()

    setProducts(aux || [])
  }

  useEffect(() => {
    getProducts()
  }, [])

  return <ContainerListProducts>
    {products.map((product) => (<ProductComponent product={product} key={product.id} />))}
  </ContainerListProducts>
}