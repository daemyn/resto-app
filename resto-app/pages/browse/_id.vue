<template>
  <div>
    <div>
      <v-breadcrumbs
        :items="items"
        divider="-"
      ></v-breadcrumbs>
    </div>

    <h1 class="text-center mt-12 mb-12">{{ category.name }}</h1>

    <v-container>
      <v-row
        class="mt-6"
      >
        <v-col
          md="4"
          sm="12" 
          cols="12"
          v-for="i in list"
          :key="i._id"
        >
          <v-card
            class="mx-auto"
          >
            <v-card-text>
              <p class="display-1 text--primary">
                {{ i.name }}
              </p>
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :value="randomRating()"
                  color="amber"
                  dense
                  readonly
                  size="16"
                ></v-rating>

                <div class="grey--text ml-4">
                  4.5 ({{ randomCount() }})
                </div>
              </v-row>
              <div class="my-4 subtitle-1">
                {{ i.description }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                x-large
                text
                color="orange"
              >
               {{ i.price.toFixed(2) }} €
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                text
                fab
                color="orange"
                @click="addToCart()"
              >
              <v-icon>mdi-cart-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.v-card__text {
  padding-bottom: 0;
}
</style>

<script>
import { mapState } from 'vuex';

export default {
  layout: 'site',
  mounted() {
    this.$store.dispatch('categories/fetchCategory', this.$route.params.id);
    this.$store.dispatch('items/fetchItemsByCategory', this.$route.params.id);
  },
  computed: {
    ...mapState('items', ['list']),
    ...mapState('categories', ['category']),
    items(){
      return [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: this.category.name,
          disabled: true,
          href: '#',
        },
      ];
    }
  },
  head() {
    return {
      title: this.category.name,
    }
  },
  data () {
    return {
      title: 'MyResto',
    }
  },
  methods: {
    randomRating() {
      return Math.floor(Math.random() * 5) + 3;
    },
    randomCount() {
      return Math.floor(Math.random() * 500) + 100;
    },
    addToCart() {
      this.$store.commit('cart/addToCart');
    },
  }
}
</script>
