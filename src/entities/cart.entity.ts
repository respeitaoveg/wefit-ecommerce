import { product } from "./product.entity"

export type item = product & {
  quantity: number
}

export default interface cart {
  getCart: () => item[]
  addToCart: (product: product) => void
  removeFromCart: (productId: number) => void
}