<template>
  <div>
    <div class="img-group">
      <img :src="imgURL" alt="greenland">
      <p><span>Greenland</span> is the world’s largest island, lying in the North Atlantic Ocean. 
      Greenland is noted for its vast tundra and immense glaciers.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Greenland",
  data () {
    return {
      imgURL: 'https://images.unsplash.com/photo-1573996987033-47fd3a4ca35e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
    }
  },
}
</script>
