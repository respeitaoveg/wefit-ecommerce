import { test, expect } from "bun:test"

test('Should have a list of products with length greater than zero', async () => {
  const allProducts = await fetch('http://localhost:3000/products')
    .then(response => {
      if (!response.ok) expect().fail('Response not OK')

      return response.json()
    })

  expect(allProducts).toBeArray()
  expect(allProducts.length).toBeGreaterThan(0)
})
