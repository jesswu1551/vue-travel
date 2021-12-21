<template>
  <div>
    <div class="img-group">
      <img :src="imgURL" alt="spain">
      <p><span>Spain</span> is a country located in Southwestern Europe. 
      The coastlines include the Bay of Biscay, Mediterranean Sea, and 
      Northern Atlantic Ocean.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spain",
  data () {
    return {
      imgURL: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', 
    }
  },
}
</script>
