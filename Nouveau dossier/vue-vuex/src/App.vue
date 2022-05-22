<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
   
   <FirstExample />
   <SecondExample />

   <br>

   <button @click="increment">Inc</button>

</template>

<script>
import FirstExample from './components/FirstExample'
import SecondExample from './components/SecondExample'
export default {
  components: {
    FirstExample,
    SecondExample,
  },
  methods: {
    increment() {
      this.$store.dispatch('counter/increment', {data: 2})
    }
  },
}
</script>

<style>
    
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
