<template>
  <div>

    <h1 class="text-center mt-6 mb-6">ITEMS</h1>

    <create-item></create-item>

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
            Category
          </th>
          <th class="text-left">
            Description
          </th>
          <th class="text-left">
            Price
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="i in list"
          :key="i._id"
        >
          <td>{{ i._id }}</td>
          <td>{{ i.name }}</td>
          <td>{{ getCategoryName(i.category) }}</td>
          <td>{{ i.description }}</td>
          <td>{{ i.price.toFixed(2) }}</td>
          <td>
            <update-item :item=i></update-item>
            <delete-item :iid=i._id></delete-item>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CreateItem from './create-item.vue';
import UpdateItem from './update-item.vue';
import DeleteItem from './delete-item.vue';

export default {
  middleware: 'auth',
  components: {
    CreateItem,
    DeleteItem,
    UpdateItem,
  },
  mounted() {
    this.$store.dispatch('items/fetchItems');
    this.$store.dispatch('categories/fetchCategories');
  },
  computed: {
    ...mapState('items', ['list'])
  },
  methods: {
    getCategoryName(id) {
      const categories = this.$store.state.categories.list;
      const category = categories.find(c => c._id === id);
      return category ? category.name : '';
    },
  }
}
</script>
