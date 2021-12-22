<template>
  <div class="travel">
    <p class="title">Best Holiday Destinations</p>
    <div class="router-group">
      <router-link to="/travel/greece">Greece</router-link>
      <router-link to="/travel/united_kingdom">United Kingdom</router-link>
      <router-link to="/travel/greenland">Greenland</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Travel",
};
</script>

<style>
.travel {
  width: 80%;
  margin: auto;
}

.travel > .title {
  margin: 0;
  padding: 36px 0;
}

.router-group {
  margin-bottom: 16px;
}

.router-group a {
  display: inline-block;
  margin: 0 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.router-group a.router-link-exact-active {
  background-color: #f3c9a5;
}

.img-group {
  width: 800px;
  margin: auto;
}

.img-group > img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.img-group p {
  text-align: left;
  line-height: 1.5;
}

.img-group p > span {
  padding-right: 4px;
  font-size: 24px;
  font-weight: bold;
}
</style>
