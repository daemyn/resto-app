export const state = () => ({
  list: [],
  category: {
    name: '',
  },
})

export const mutations = {
  setCategories(state, categories) {
    state.list = categories;
  },
  setCategory(state, category) {
    state.category = category;
  },
  addCategory(state, category) {
    state.list.push(category);
  },
  putCategory(state, category) {
    const index = state.list.findIndex(c => c._id === category._id);
    Object.assign(state.list[index], category);
  },
  removeCategory(state, id) {
    const index = state.list.findIndex(c => c._id === id);
    if (index !== -1) state.list.splice(index, 1);
  }
}

export const actions = {
  async fetchCategories ({ commit }) {
    const categories = await this.$axios.$get('/categories');
    commit('setCategories', categories);
  },
  async fetchCategory ({ commit }, id) {
    const category = await this.$axios.$get(`/categories/${id}`);
    commit('setCategory', category);
  },
  async createCategory ({ commit }, payload) {
    const category = await this.$axios.$post('/categories', payload);
    commit('addCategory', category);
  },
  async updateCategory ({ commit }, payload) {
    const category = await this.$axios.$put(`/categories/${payload._id}`, payload);
    commit('putCategory', category);
  },
  async deleteCategory ({ commit }, id) {
    await this.$axios.$delete(`/categories/${id}`);
    commit('removeCategory', id);
  }
}