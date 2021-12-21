<template>
  <div class="home">
    <div class="hero-image">
      <h1 class="hero-text">Let's Travel.</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.home {
  width: 100%;
  height: calc(100% - 58px);
}

.hero-image {
  height: 100%;
  position: relative;
  background-image: url("../../src/assets/travel.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-text {
  position: absolute;
  top: 35%;
  left: 50%;
  margin: 0;
  font-size: 64px;
  color: #fff;
  font-family: "Caveat", cursive;
  text-align: center;
  text-shadow: 3px 2px 3px rgba(0, 0, 0, 0.1);
  transform: translate(-50%, -100%);
}
</style>
