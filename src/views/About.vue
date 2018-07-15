<template>
  <div class="about main-content">
    <div class="left-content slideUp">
      <h1>About Me</h1>

      <p class="subtxt">I am a fullstack developer with over 20 years experience.</p>
      <p class="subtxt">I love shipping out softwares and learning new skills as I go...</p>

      <button><router-link to="/portfolio/one">Browse Work</router-link></button>
    </div>

    <div class="right-content img3">

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat alias, nesciunt placeat atque saepe laudantium aperiam commodi debitis earum ipsa inventore iure eveniet mollitia voluptates necessitatibus adipisci harum quam nisi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis quia recusandae est? Porro pariatur at ducimus ad incidunt, iure maiores veritatis nesciunt reiciendis ex eum nostrum exercitationem quasi explicabo?</p>

    </div>
  </div>
</template>

<style lang="scss" scoped>
  .left-content {
    background: #ffe476;
  }

  .right-content {
    background: #fff;
    padding: 50px;
    margin-top: 80px;
    display: block;
  }

  .subtxt {
    font-size: 1.5em;
    margin-top: 30px;
    font-weight: 300;
  }

  button {
    font-size: 1.5em;
    margin-top: 60px;
  }
</style>

