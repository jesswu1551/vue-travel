<template>
  <div>
    <div class="img-group">
      <img :src="imgURL" alt="greece" />
      <p>
        <span>Greece</span> officially the Hellenic Republic, is a country
        located in Southeastern Europe. Athens is its largest and capital city,
        followed by Thessaloniki.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Greece",
  data() {
    return {
      imgURL:
        "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    };
  },
};
</script>
