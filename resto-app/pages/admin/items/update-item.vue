<template>
  <div class="text-left d-inline">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          small
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Update item
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
  name: 'update-item',
  props: ['item'],
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
      name: this.$props.item.name,
      nameRules: [
        v => !!v || 'Name is required',
      ],
      categoryRules: [
        v => !!v || 'Category is required',
      ],
      description: this.$props.item.description,
      price: this.$props.item.price,
      category: this.$props.item.category,
    }
  },
  methods: {
    submit() {
      if(!this.$refs.form.validate()) return;
      this.$store.dispatch('items/updateItem', {
        _id: this.$props.item._id,
        name: this.name,
        description: this.description,
        category: this.category,
        price: parseFloat(this.price),
      });
      this.dialog = false;
    }
  }
}
</script>
