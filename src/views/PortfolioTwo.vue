<template>
  <div class="home main-content">
    <div class="left-content slideUp">

      <router-link to="/portfolio/one"><img src="../assets/arrow-up.svg" class="arrow arrow-up" alt=""></router-link>

      <h1>APP Dev</h1>

      <p class="subtxt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, aperiam!</p>
      <p class="subtxt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem optio enim. Esse pariatur, sequi ab dolore beatae incidunt debitis.</p>

      <router-link to="/portfolio/three"><img src="../assets/arrow-down.svg" class="arrow arrow-down" alt=""></router-link>

    </div>

    <div class="right-content img2">
      <!--<img src="../assets/logo.svg" alt="logo">-->
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

$page_color: #48b886;

h1 {
  color: $page_color !important;
}
  .img2 {
    background: url('../assets/phone.jpg') 50% / cover;

    img {width: 50%;}
  }

</style>

