<template>
  <div>
    <div class="img-group">
      <img :src="imgURL" alt="united kingdom">
      <p><span>United Kingdom</span> is island country located off the northwestern coast of mainland Europe. 
      The United Kingdom comprises the whole of the island of Great Britain—which contains England, Wales, and Scotland—as 
      well as the northern portion of the island of Ireland.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "United Kingdom",
  data () {
    return {
      imgURL: 'https://images.unsplash.com/photo-1622143166019-ab65343466e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
    }
  },
}
</script>
