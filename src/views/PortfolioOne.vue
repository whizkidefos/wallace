<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>WordPress Dev</h1>

      <p class="subtxt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, aperiam!</p>
      <p class="subtxt">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <router-link to="/portfolio/two"><img src="../assets/arrow-down.svg" class="arrow arrow-down" alt=""></router-link>
    </div>

    <div class="right-content img2">
      <img src="../assets/logo.svg" alt="logo">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'portfolio-one',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>

$page_color: #625B7E;

h1 {
  color: $page_color !important;
}
  .img2 {
    background: $page_color;

    img {width: 50%;}
  }
</style>

