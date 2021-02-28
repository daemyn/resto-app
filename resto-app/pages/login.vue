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
            >
              Login
              <v-progress-circular
                v-show="inProgress"
                class="ml-2"
                indeterminate
                color="white"
                size="16"
              ></v-progress-circular>
            </v-btn>
        </v-layout>
        <v-alert type="error" class="mt-4 text-left" v-show="errorMessage">{{ errorMessage }}</v-alert>
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
    errorMessage: null,
    inProgress: false,
  }),
  methods: {
    async submit () {
      if(!this.$refs.form.validate()) return;
      try {
        this.inProgress = true;
        await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password,
          },
        });
        this.inProgress = false;
        this.$router.push('/admin');
      } catch (e) {
        this.inProgress = false;
        this.errorMessage = 'Authentication failed!';
        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      }
    },
  },
}
</script>