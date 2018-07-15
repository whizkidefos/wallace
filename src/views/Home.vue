<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>20+ YEARS Development Experience</h1>

      <p class="subtxt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, aperiam!</p>
      <p class="subtxt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ratione? Dolore magnam voluptates nobis sunt sequi, odio quasi? Ad, cumque?</p>
    </div>

    <div class="right-content img1">
      <button><router-link to="/portfolio/one">Browse Work</router-link></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
  .img1 {
    background: url('../assets/wallace-bg.jpg') center no-repeat / cover;
  }
</style>