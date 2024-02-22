import { describe, test, expect, vi } from "vitest"
import {renderHook} from '@testing-library/react'
import useCart from '../src/hooks/cart'
import { product } from "../src/entities/product.entity"
import { item } from "../src/entities/cart.entity"


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
    const item: item = {
      ...product,
      quantity: 1
    }

    result.current.addToCart(product)
    rerender()

    expect(result.current.getCart())
      .toStrictEqual([item])
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

  test('Should add two products using the quantity property', () => {
    const { result, rerender } = renderHook(() => useCart())
    const product = productMock()

    result.current.addToCart(product)
    rerender()
    result.current.addToCart(product)
    rerender()


    const cart = result.current.getCart()

    expect(cart[0].quantity).toEqual(2)
  })

  test('Should add and remove products using the quantity property', () => {
    const { result, rerender } = renderHook(() => useCart())
    const product = productMock()

    result.current.addToCart(product)
    rerender()
    result.current.addToCart(product)
    rerender()
    result.current.removeFromCart(product.id)
    rerender()


    const cart = result.current.getCart()

    expect(cart[0].quantity).toEqual(1)
  })

  test('Should get a item from cart by id', () => {
    const { result, rerender } = renderHook(() => useCart())
    const product = productMock()

    result.current.addToCart(product)
    rerender()

    const item = result.current.getItemCart(product.id)

    expect(item).toBeTruthy()
  })

  test('Should clear the cart', () => {
    const { result, rerender } = renderHook(() => useCart())
    const product = productMock()

    result.current.addToCart(product)
    rerender()
    result.current.addToCart(product)
    rerender()
    result.current.clearCart()
    rerender()

    expect(result.current.getCart()).toEqual([])
  })
})