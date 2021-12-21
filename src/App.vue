<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/travel">Travel</router-link>
    </div>
    <GoBack />
    <router-view />
  </div>
</template>

<script>
import GoBack from "@/components/GoBack.vue";

export default {
  components: {
    GoBack,
  },
};
</script>

<style>
body,
html {
  margin: 0;
  height: 100%;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

#nav a {
  padding: 4px;
  margin: 0 4px;
  font-size: 14px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #f2994a;
}
</style>
