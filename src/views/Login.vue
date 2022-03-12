<template>
  <div class="login">
    <div class="image">
      <img alt="Colmena logo" src="../assets/logo.png" />
    </div>
    <div class="content">
      <form @submit.prevent="submit" class="signin">
        <h1 class="signup1">INICIAR SESIÓN</h1>
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          v-model="form.username"
          class="username"
        />
        <input
          type="password"
          name="password"
          v-model="form.password"
          class="username"
          placeholder="Contraseña"
        />
        <button type="submit" class="btn">Submit</button>
      </form>
      <p v-if="showError" id="error">Username or Password is incorrect</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      try {
        await this.LogIn(User);
        this.$router.push("/posts");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<style lang="scss">
h3 {
  margin: 40px 0 0;
}

.login {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  .image {
    width: 50%;
    background-image: url(https://beta.colmenaproject.es/admin/img/wallpaper.jpg);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 50%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    .username {
      font-weight: bold;
      margin: 0 35px 20px;
      height: 35px;
      padding: 6px 15px;
      border-radius: 5px;
      outline: none;
      border: none;
      background: #f6f7f9;
      color: #748194;
      font-size: 14px;
    }
    .btn {
      font-weight: bold;
      margin: 0 35px 20px;
      height: 45px;
      padding: 6px 15px;
      border-radius: 5px;
      outline: none;
      border: none;
      background: #f8b333;
      color: white;
      font-size: 14px;
    }
  }
}

.signup1 {
  color: #748194;
  font-size: 30px;
  text-align: center;
}
a {
  text-decoration: none;
}

#error {
  color: red;
}
</style>
