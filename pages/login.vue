<template>
  <section class="w-screen h-screen flex">
    <div class="w-1/2 flex justify-center items-center bg-white">
      <img src="~/assets/logos/login.jpg" alt="" width="600px" />
    </div>
    <div class="w-1/2 flex justify-center items-center flex-col bg-yellow-500">
      <h2 class="title has-text-centered">Welcome back!</h2>

      <Notification :message="error" v-if="error" />

      <form method="post" @submit.prevent="login">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input type="email" class="input" name="email" v-model="email" />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              type="password"
              class="input"
              name="password"
              v-model="password"
            />
          </div>
        </div>
        <div class="control">
          <button type="submit" class="button is-dark is-fullwidth">
            Log In
          </button>
        </div>
      </form>
      <div class="has-text-centered" style="margin-top: 20px">
        <p>
          Don't have an account?
          <nuxt-link to="/register">Register</nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },

  methods: {
    async login() {
      try {
        const { data } = await this.$auth.loginWith("local", {
          data: {
            identifier: this.email,
            password: this.password,
          },
        });
        this.$auth.strategy.token.set(data.jwt);
        this.$auth.setUser(data.user);
        this.$axios.setHeader('Authorization', data.jwt);
        this.$router.push("/private");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>

<style scoped>
</style>