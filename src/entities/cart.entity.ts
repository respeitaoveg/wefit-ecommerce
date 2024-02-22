import { product } from "./product.entity"

export type item = product & {
  quantity: number
}

export default interface cart {
  getCart: () => item[]
  getItemCart: (productId: number) => item | undefined
  addToCart: (product: product) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
}