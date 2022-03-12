<template>
  <div class="home">
    <div class="slider">
      <div class="slide">
        <h2 class="title">
          Conoce tus errores <br />
          en programación
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisscing elit. Duis ac
          cursus neque, quis accumsan nisi. Phasellus eleifend tincidunt massa.
          Aliquam in feugiat eros, a viverra erat. Pellentesque eu orci
          condimentum, fermentum neque nec, lacinia libero. Integer vestibulum
          vehicula elit, eu aliquet eros vulputate nec. Curabitur pharetra,
          dolor sit amet feugiat feugiat, nulla libero sodales enim, in
          malesuada risus tellus sed diam. Curabitur sapien magna, vulputate nec
          quam ac, condimentum egestas nisl. Praesent consequat faucibus leo, et
          ultricies leo. Mauris molestie egestas vulputate. Etiam varius erat
          risus, non varius purus pharetra id. Sed a ante id nunc vulputate
          bibendum. Aenean blandit ante vel fringilla pretium.
        </p>

        <p>
          Morbi consectetur massa non lobortis bibendum. Mauris eu tincidunt
          nibh. Vivamus hendrerit ac risus a pulvinar. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Pellentesque ut mollis nunc. Nam
          viverra interdum massa, vitae accumsan dolor fermentum ac. Nunc
          tristique massa at tellus cursus commodo. Cras dui leo, finibus a
          rutrum nec, dictum at ligula. Sed iaculis urna eget nisi finibus
          scelerisque. Etiam et risus massa. Nunc arcu eros, commodo non sem et,
          laoreet maximus felis. Curabitur gravida nisi vel tellus suscipit
          suscipit sit amet non urna. Mauris quis eleifend diam. Praesent sit
          amet est quis nibh suscipit consequat.
        </p>
      </div>
      <div class="slide"></div>
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
  height: fit-content;

  .slider {
    height: 100%;
    width: 100%;

    .slide {
      height: 100vh;
      width: 100%;
    }
  }
}
</style>
