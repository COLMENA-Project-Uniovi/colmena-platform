<template>
  <div class="login">
    <div class="image">
      <img alt="Colmena logo" src="../assets/logo-text-black.svg" />
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
        <Button text="Acceder" type="submit" />
      </form>
      <p v-if="showError" id="error">Username or Password is incorrect</p>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: { Button },
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
  height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .image {
    flex: 1 0 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      width: 500px;
    }
  }
  .content {
    flex: 1 0 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    @media (max-width: 768px) {
          width: 100%;
    }

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
      background: #f3933d;
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
