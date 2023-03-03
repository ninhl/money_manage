<template>
  <nav-bar/>
  <router-view/>
</template>

<script>
import NavBar from "./components/Nav.vue"
export default {
  name: 'App',
  components: {
    NavBar,
  },
  data(){
    return {
      transactions: null
    }
  },

  mounted(){
    console.log('App mounted')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
