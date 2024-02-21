import { describe, test, expect, vi } from "vitest"
import {renderHook} from '@testing-library/react'
import useCart from '../src/hooks/cart'
import { product } from "../src/entities/product.entity"


const productMock = vi.fn((): product => ({
  id: 1,
  image: 'imageurl',
  price: 12.22,
  title: 'title'
}))

describe('Cart', () => {
  test('Should initialize with an empty cart', () => {
    const { result } = renderHook(() => useCart())

    expect(result.current.getCart()).toEqual([])
  })

  test('Should add a product to cart', () => {
    const { result, rerender } = renderHook(() => useCart())
    const product = productMock()

    result.current.addToCart(product)
    rerender()

    expect(result.current.getCart())
      .toStrictEqual([product])
  })

  test('Should remove a product of cart', () => {
    const { result, rerender } = renderHook(() => useCart())
    const product = productMock()

    result.current.addToCart(product)
    rerender()

    result.current.removeFromCart(product.id)
    rerender()

    expect(result.current.getCart()).toEqual([])
  })
})