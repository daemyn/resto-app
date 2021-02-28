<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon>mdi-silverware</v-icon> <v-toolbar-title v-text="title" />

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      stateless
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Admin
          </v-list-item-title>
          <v-list-item-subtitle>
            Resto Management
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          link
          to="/admin/categories"
        >
          <v-list-item-icon>
            <v-icon>mdi-tag</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Categories</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          to="/admin/items"
        >
          <v-list-item-icon>
            <v-icon>mdi-food-fork-drink</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Items</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn dark block @click.stop="logout()">
            <v-icon>mdi-logout</v-icon> Logout
          </v-btn>
        </div>
      </template>
      
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      title: 'RestoApp',
    }
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push('/login');
    },
  },
}
</script>
