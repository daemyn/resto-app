<template>

  <v-img
    src="/banner.jpg"
    aspect-ratio="3"
  >
    <span class="resto-title">
      Welcome To MyResto
    </span>
  </v-img>

</template>

<style scoped>
.v-image {
  box-shadow: -2px 2px 2px 2px #333333 !important;
}
.v-image .v-responsive__content {
  position: relative;
}
.resto-title {
  color: #ff9800;
  font-weight: bold;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5em;
  text-align: center;
  text-shadow: 2px 2px #111111;
}

@media only screen and (max-width: 1200px) {
  .resto-title {
    font-size: 3em;
  }
}

@media only screen and (max-width: 720px) {
  .resto-title {
    font-size: 2em;
  }
}
</style>

<script>
export default {
  name: 'site-banner',
}
</script>
