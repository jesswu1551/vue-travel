<template>
  <div class="goback">
    <button @click="goBack" class="goback-btn">⬅ Go Back</button>
  </div>
</template>

<script>
export default {
  name: "GoBack",
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
}
</script>

<style>
.goback-btn {
  padding: 4px 8px;
  position: fixed;
  /* top: 80px; */
  /* left: 24px; */
  top: 16px;
  right: 24px;
  color: #465767;
  border: 1px solid #465767;
  background-color: #fff;
  z-index: 1;
}

.goback-btn:hover,
.goback-btn:active {
  color: #f2994a;
  border: 1px solid #f2994a;
}
</style>
