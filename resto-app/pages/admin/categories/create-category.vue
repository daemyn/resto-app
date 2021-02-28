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
          New Category
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Create a new category
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
  name: 'create-category',
  data () {
    return {
      dialog: false,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      description: '',
      image: '',
    }
  },
  methods: {
    submit() {
      if(!this.$refs.form.validate()) return;
      this.$store.dispatch('categories/createCategory', {
        name: this.name,
        description: this.description,
        image: this.image,
      });
      this.dialog = false;
    }
  }
}
</script>
