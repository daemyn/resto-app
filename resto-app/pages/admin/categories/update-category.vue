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
          Update category
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

            <v-text-field
              v-model="description"
              label="Description"
              required
            ></v-text-field>

            <v-text-field
              v-model="image"
              label="Image"
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
export default {
  name: 'update-category',
  props: ['category'],
  data () {
    return {
      dialog: false,
      valid: true,
      name: this.$props.category.name,
      nameRules: [
        v => !!v || 'Name is required',
      ],
      description: this.$props.category.description,
      image: this.$props.category.image,
    }
  },
  methods: {
    submit() {
      if(!this.$refs.form.validate()) return;
      this.$store.dispatch('categories/updateCategory', {
        _id: this.$props.category._id,
        name: this.name,
        description: this.description,
        image: this.image,
      });
      this.dialog = false;
    }
  }
}
</script>
