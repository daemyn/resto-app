<template>
  <div class="text-left">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          New Item
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Create a new item
        </v-card-title>

        <v-card-text class="mt-4">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-select
              v-model="category"
              :items="selectCategories"
              :rules="categoryRules"
              label="Category"
              required
            ></v-select>

            <v-text-field
              v-model="description"
              label="Description"
              required
            ></v-text-field>

            <v-text-field
              v-model="price"
              label="Price"
              required
            ></v-text-field>

          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="submit()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'create-item',
  mounted() {
    this.$store.dispatch('categories/fetchCategories');
  },
  computed: {
    ...mapState('categories', ['list']),
    selectCategories: function() {
      return this.list.map(c => ({ text: c.name, value: c._id }));
    },
  },
  data () {
    return {
      dialog: false,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      categoryRules: [
        v => !!v || 'Category is required',
      ],
      description: '',
      price: 0,
      category: '',
    }
  },
  methods: {
    submit() {
      if(!this.$refs.form.validate()) return;
      this.$store.dispatch('items/createItem', {
        name: this.name,
        description: this.description,
        price: parseFloat(this.price),
        category: this.category,
      });
      this.dialog = false;
      this.description = '';
      this.name = '';
      this.price = 0;
      this.category = '';
      this.$refs.form.reset();
    }
  }
}
</script>
