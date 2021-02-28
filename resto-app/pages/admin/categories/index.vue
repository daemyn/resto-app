<template>
  <div>
    Categories
    <v-btn @click="debug">debug</v-btn>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>desc</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in list" :key="c._id">
          <td>{{ c._id }}</td>
          <td>{{ c.name }}</td>
          <td>{{ c.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'auth',
  mounted () {
    this.$store.dispatch('categories/fetchCategories');
  },
  computed: {
    ...mapState('categories', ['list'])
  },
  methods: {
    debug() {
      this.$store.commit('categories/add', {
        id: 123,
        name: 'test',
        description: 'dexc'
      })
    }
  }
}
</script>
