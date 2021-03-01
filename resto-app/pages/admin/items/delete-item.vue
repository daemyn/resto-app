<template>
  <div class="text-left d-inline">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red"
          fab
          small
          v-bind="attrs"
          v-on="on"
        >
          <v-icon color="white">mdi-delete</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-text class="mt-4 text-center pt-6">
          <v-icon x-large color="red">mdi-alert-circle-outline</v-icon>
          <div color="red">Are you sure?</div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            @click="submit()"
          >
            Confirm Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'delete-item',
  props: ['iid'],
  mounted() {},
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('items/deleteItem', this.$props.iid);
      this.dialog = false;
    }
  }
}
</script>
