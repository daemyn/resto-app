export const state = () => ({
  cart: 0
})

export const mutations = {
  addToCart(state) {
    state.cart++;
  },
}
