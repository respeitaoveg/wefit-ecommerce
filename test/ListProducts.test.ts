import { test, expect } from "vitest"

test('Should have a list of products with length greater than zero', async () => {
  const allProducts = await fetch('http://localhost:3000/products')
    .then(response => response.json())

  expect(Array.isArray(allProducts)).toBeTruthy()
  expect(allProducts.length).toBeGreaterThan(0)
})
