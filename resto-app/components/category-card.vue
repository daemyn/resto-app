<template>
  <v-card
    class="mx-auto my-12"
  >
    <v-img
      height="250"
      :src="'/categories/' + cat.image"
    ></v-img>

    <v-card-title>{{ cat.name }}</v-card-title>

    <v-card-text>
      <div>{{ cat.description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-orange lighten-1"
        text
        @click="showItems(cat._id)"
      >
        Order Now
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<style scoped>

</style>

<script>
export default {
  name: 'category-card',
  props: ['category'],
  data() {
    return {
      cat: this.$props.category,
    };
  },
  methods: {
    showItems(cid) {
      this.$router.push(`/browse/${cid}`);
    }
  }
}
</script>