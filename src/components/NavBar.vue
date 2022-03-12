<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <div v-if="isLoggedIn" class="auth-nav">
      <a @click="logout">Logout</a>
    </div>
    <div v-else class="no-auth-nav">
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>


<style lang="scss">
#nav {
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  gap: 20px;
}

.no-auth-nav {
  display: flex;
  gap: 20px;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  &:last-child {
    color: white;
    background: #ffc401;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background 0.3s linear;

    &:hover {
      background: #d1a000;
      transition: background 0.3s linear;
    }
  }
}

a:hover {
  cursor: pointer;
}
</style>
