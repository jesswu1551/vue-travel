<template>
  <div>
    <div class="img-group">
      <img :src="imgURL" alt="spain sevilla">
      <p><span>Czech</span> Republic, also called Czechia, country located in central Europe. 
        It comprises the historical provinces of Bohemia and Moravia.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Czech",
  data () {
    return {
      imgURL: 'https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', 
    }
  },
}
</script>
