<template>
  <div class="login">
    <div class="image">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="content">
      <form class="signin">
        <h1 class="signup1">INICIAR SESIÓN</h1>
        <input
          name="username"
          type="text"
          placeholder="Username*"
          class="username"
        />

        <input
          name="password"
          type="password"
          placeholder="Password*"
          class="username"
        />

        <button class="btn">Get Started</button>
        <button class="btn" v-on:click="peticion">Get Started</button>

        <br /><br /><br /><br />
        <a href=""><p class="signup2">Forget Password?</p></a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  props: {
    msg: String,
  },
  methods: {
    peticion: async function (e) {
      e.preventDefault();
      const data = { username: "elmer.cortez@neozink.com", password: "Pr43b4" };

      const config = {
        url: "https://beta.colmenaproject.es/admin/api/1.0/users/users/login.json",
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios(config).catch((err) => err);
      if (response) {
        alert(response);
      } else {
        alert(response);
      }

      // const response = await axios.post(
      //   "https://beta.colmenaproject.es/admin/api/1.0/users/users/login.json",
      //   data
      // );
      // // this.totalVuePackages = response.data.total;
      // console.log(response);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 40px 0 0;
}

.login {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  .image {
    width: 40%;
    background-image: url(https://beta.colmenaproject.es/admin/img/wallpaper.jpg);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 60%;
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
</style>
