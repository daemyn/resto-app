export const state = () => ({
  list: []
})

export const mutations = {
  setItems(state, items) {
    state.list = items;
  },
  addItem(state, item) {
    state.list.push(item);
  },
  putItem(state, item) {
    const index = state.list.findIndex(i => i._id === item._id);
    Object.assign(state.list[index], item);
  },
  removeItem(state, id) {
    const index = state.list.findIndex(i => i._id === id);
    if (index !== -1) state.list.splice(index, 1);
  }
}

export const actions = {
  async fetchItems ({ commit }) {
    const items = await this.$axios.$get('/items');
    commit('setItems', items);
  },
  async createItem ({ commit }, payload) {
    const item = await this.$axios.$post('/items', payload);
    commit('addItem', item);
  },
  async updateItem ({ commit }, payload) {
    const item = await this.$axios.$put(`/items/${payload._id}`, payload);
    commit('putItem', item);
  },
  async deleteItem ({ commit }, id) {
    await this.$axios.$delete(`/items/${id}`);
    commit('removeItem', id);
  }
}
