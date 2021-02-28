<template>
  <div>

    <h1 class="text-center mt-6 mb-6">CATEGORIES</h1>

    <create-category></create-category>

    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            #
          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Description
          </th>
          <th class="text-left">
            Image
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="c in list"
          :key="c._id"
        >
          <td>{{ c._id }}</td>
          <td>{{ c.name }}</td>
          <td>{{ c.description }}</td>
          <td>{{ c.image }}</td>
          <td>
            <update-category :category=c></update-category>
            <delete-category :cid=c._id></delete-category>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CreateCategory from './create-category.vue';
import DeleteCategory from './delete-category.vue';
import UpdateCategory from './update-category.vue';

export default {
  middleware: 'auth',
  components: {
    CreateCategory,
    DeleteCategory,
    UpdateCategory,
  },
  mounted() {
    this.$store.dispatch('categories/fetchCategories');
  },
  computed: {
    ...mapState('categories', ['list'])
  },
  methods: {}
}
</script>
