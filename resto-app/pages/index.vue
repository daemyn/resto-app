<template>
  <div>
    <site-banner />
    <v-container>
      <v-row
        class="mt-6"
      >
        <v-col
          md="4"
          sm="12" 
          cols="12"
          v-for="c in list"
          :key="c._id"
        >
          <category-card :category=c></category-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
</style>

<script>
import { mapState } from 'vuex';

import SiteBanner from '~/components/site-banner.vue';
import CategoryCard from '~/components/category-card.vue';

export default {
  layout: 'site',
  components: {
    SiteBanner,
    CategoryCard,
  },
  head() {
    return {
      title: 'Home',
    }
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
