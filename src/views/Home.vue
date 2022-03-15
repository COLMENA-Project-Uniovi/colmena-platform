<template>
  <div class="home">
    <div class="top">
      <div class="content">
        <div class="text">
          <h1>Bienvenido a Colmena</h1>
          <h2>Conoce tus errores de programación</h2>
          <div class="link-container">
            <router-link to="/register" class="link link--register"
              >Register</router-link
            >
            <router-link to="/login" class="link link--login"
              >Login</router-link
            >
          </div>
        </div>
        <div class="logo">
          <img src="../assets/logo-white.svg" alt="" width="300px" />
        </div>
      </div>
      <img src="../assets/wave.svg" alt="" class="wave" />
    </div>
    <div class="blocks">
      <div class="waves"></div>
      <div class="slider">
        <div class="slide">
          <h2 class="title">
            Conoce tus errores <br />
            en programación
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisscing elit. Duis ac
            cursus neque, quis accumsan nisi. Phasellus eleifend tincidunt
            massa. Aliquam in feugiat eros, a viverra erat. Pellentesque eu orci
            condimentum, fermentum neque nec, lacinia libero. Integer vestibulum
            vehicula elit, eu aliquet eros vulputate nec. Curabitur pharetra,
            dolor sit amet feugiat feugiat, nulla libero sodales enim, in
            malesuada risus tellus sed diam. Curabitur sapien magna, vulputate
            nec quam ac, condimentum egestas nisl. Praesent consequat faucibus
            leo, et ultricies leo. Mauris molestie egestas vulputate. Etiam
            varius erat risus, non varius purus pharetra id. Sed a ante id nunc
            vulputate bibendum. Aenean blandit ante vel fringilla pretium.
          </p>

          <p>
            Morbi consectetur massa non lobortis bibendum. Mauris eu tincidunt
            nibh. Vivamus hendrerit ac risus a pulvinar. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Pellentesque ut mollis nunc. Nam
            viverra interdum massa, vitae accumsan dolor fermentum ac. Nunc
            tristique massa at tellus cursus commodo. Cras dui leo, finibus a
            rutrum nec, dictum at ligula. Sed iaculis urna eget nisi finibus
            scelerisque. Etiam et risus massa. Nunc arcu eros, commodo non sem
            et, laoreet maximus felis. Curabitur gravida nisi vel tellus
            suscipit suscipit sit amet non urna. Mauris quis eleifend diam.
            Praesent sit amet est quis nibh suscipit consequat.
          </p>
        </div>
        <div class="slide"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>


<style lang="scss">
.home {
  display: flex;
  flex-direction: column;

  .top {
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      10deg,
      rgba(234, 91, 12, 1) 0%,
      rgba(249, 180, 0, 1) 100%
    );

    @media (max-width: 768px) {
      height: 80vh;
    }

    .content {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 80vh;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
        height: 60vh;
        flex-direction: column-reverse;
      }

      .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 50%;
        justify-content: center;
        padding: 150px;

        h1 {
          font-size: var(--h1-size);
          color: white;
          margin: 0;
        }

        h2 {
          font-size: 2.5rem;
          color: white;
          margin: 0;
        }

        .link-container {
          margin-top: 20px;
          display: flex;
          gap: 20px;
          .link {
            text-decoration: none;

            padding: 10px 30px;
            font-size: 1.5rem;
            font-family: "Fredoka Medium";
            border-radius: 30px;
            min-width: 150px;

            &--login {
              color: white;
              background: #222;
            }
            &--register {
              color: #222;
              background: #eee;
            }
          }
        }

        @media (max-width: 768px) {
          padding: 50px;
          height: 50%;
          width: 100%;
          h1 {
            font-size: 3rem;
            color: white;
            margin: 0;
          }

          h2 {
            font-size: 1.5rem;
            color: white;
            margin: 0;
          }

          .link-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            .link {
              font-size: 1.2rem;
            }
          }
        }
      }
      .logo {
        filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4));
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
          img {
            width: 100px;
            padding: 0px 0;
          }
          height: 50%;
          width: 100%;
        }
      }
    }

    .wave {
      position: absolute;
      pointer-events: none;
      bottom: -50px;
      left: 0;
      object-fit: cover;
      width: 150%;
      animation: wave linear 40s infinite;
      @media (max-width: 768px) {
        bottom: -1px;
      }
      @keyframes wave {
        0% {
          transform: translateX(0);
        }

        50% {
          transform: translateX(-20%);
        }
        100% {
          transform: translateX(0%);
        }
      }
    }
  }

  .blocks {
    position: relative;
  }

  .image {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      width: 500px;
    }
  }
}
</style>
