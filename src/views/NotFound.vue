<template>
  <div>
    <h1>Page Not Found</h1>
    <p>Please check the URL.</p>
    <!-- method 1 -->
    <!-- <router-link :to="{ name: 'Home' }">Go Home</router-link> -->
    <!-- method 2 -->
    <button @click="goHome" class="home-btn">Go Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      return this.$router.push({ path: "/" }); // push({ name: "Home" })
    },
  },
};
</script>

<style>
.home-btn {
  padding: 4px 8px;
  border: 1px solid #2c3e50;
  background-color: #fff;
  z-index: 1;
}

.home-btn:hover,
.home-btn:active {
  color: #f2994a;
  border: 1px solid #f2994a;
}
</style>
