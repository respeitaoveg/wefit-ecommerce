/** @jest-environment jsdom */
import { test } from "vitest"
import {renderHook} from '@testing-library/react'
import useCart from '../src/hooks/cart'

test('Should be return empty cart', () => {
  const { result } = renderHook(() => useCart())
})