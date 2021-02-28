<template>
  <v-app>
     <v-main>
       <v-container fluid fill-height>
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
              <v-toolbar dark class="darken-4">
                <v-toolbar-title ><h4><v-icon>mdi-silverware</v-icon> Welcome to RestoApp</h4></v-toolbar-title>
              </v-toolbar>
              <v-card>
                <v-card-text class="pt-4">
                  <div>
                    <nuxt />
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>
     </v-main>
   </v-app>
</template>

<style scoped>
#app {
  font-family: 'Lato', sans-serif;
}
</style>


<script>
export default {
  data () {
    return {
      title: 'RestoApp - Login'
    }
  }
}
</script>