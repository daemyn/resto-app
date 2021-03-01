<template>
  <v-app>
    <v-app-bar
      fixed
      app
      color="orange"
    >
      <v-icon color="white">mdi-silverware</v-icon>
      <v-toolbar-title v-text="title" style="cursor: pointer" @click="$router.push('/')" />
      <v-spacer></v-spacer>
      <v-badge
          color="black"
          :content="cart.toString()"
          class="mr-4"
        >
          <v-icon color="white">mdi-cart</v-icon>
        </v-badge>
    </v-app-bar>
    <v-main>
      <v-container class="ma-0 pa-0" fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>MyResto</strong>
      </v-col>
  </v-footer>
  </v-app>
</template>

<style scoped>
.v-toolbar__title {
  color: white;
}
</style>

<script>
import { mapState } from 'vuex';

export default {
   computed: {
    ...mapState('cart', ['cart']),
   },
  data () {
    return {
      title: 'MyResto',
    }
  },
}
</script>
