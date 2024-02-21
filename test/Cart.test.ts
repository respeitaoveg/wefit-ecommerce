/** @jest-environment jsdom */
import { describe, test, expect } from "vitest"
import {renderHook} from '@testing-library/react'
import useCart from '../src/hooks/cart'


describe('Cart', () => {
  test('Should initialize with an empty cart', () => {
    const { result } = renderHook(() => useCart())

    expect(result.current.getCart()).toEqual([])
  })
})