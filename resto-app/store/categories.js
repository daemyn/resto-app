export const state = () => ({
  list: []
})

export const mutations = {
  setCategories(state, categories) {
    state.list = categories;
  },
  add(state, category) {
    state.list.push(category)
  }
}

export const actions = {
  async fetchCategories ({ commit }) {
    const categories = await this.$axios.$get('/categories');
    commit('setCategories', categories)
  }
}