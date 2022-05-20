import { fetchCartItems } from '../api/api'

export const state = () => ({
  cartItems: [],
})

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

export const mutations = {
  addCartItem(state, cartItem) {
    state.cartItems.push(cartItem)
  },
  setCartItems(state, items) {
    state.cartItems = items
  },
}

export const actions = {
  // server 의 cart 에서 받아오기
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems()
    commit('setCartItems', data)
  },
  async nuxtServerInit(storeContext, nuxtContext) {
    await storeContext.dispatch(FETCH_CART_ITEMS)
  },
}
