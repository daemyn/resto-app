<template>
  <v-row>
    <v-col class="text-center">
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          prepend-icon="mdi-account"
          label="Username"
          v-model="username"
          :rules="usernameRules"
          required
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-lock"
          label="Password"
          v-model="password"
          type="password"
          :rules="passwordRules"
          required
        ></v-text-field>
        <v-layout justify-space-between class="mt-4">
            <v-btn
              @click="submit"
              dark
            > Login</v-btn>
        </v-layout>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  layout: 'login',
  data: () => ({
    valid: true,
    username: '',
    usernameRules: [
      v => !!v || 'Username is required',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
    ],
  }),
  methods: {
    async submit () {
      if(!this.$refs.form.validate()) return;
      try {
        await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password,
          },
        });
        this.$router.push('/admin');
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>