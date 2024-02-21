import { product } from "./product.entity"

export default interface cart {
  getCart: () => product[]
  addToCart: (product: product) => void
  removeFromCart: (productId: number) => void
}