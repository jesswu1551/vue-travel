<template>
  <div class="home">
    <div class="hero-image">
      <div class="hero-text">
        <h1>Let's Travel.</h1>
      </div>
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
  height: calc(100% - 56px);
}

.hero-image {
  background-image: url("../../src/assets/travel.jpeg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 3rem;
  font-family: "Caveat", cursive;
  text-align: center;
  text-shadow: 3px 2px 3px rgba(255, 255, 255, 0.2);
  color: white;
  transform: translate(-50%, -100%);
}
</style>
