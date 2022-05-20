import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})
export function fetchAllProduct() {
  return instance.get('/products')
}
export function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

export function fetchProductsByKeyword(keyword) {
  return instance.get('/products', {
    params: {
      name_like: keyword,
    },
  })
}

export function addProductToCart(item) {
  return instance.post('/carts', item)
}

export function fetchCartItems() {
  return instance.get('/carts')
}
