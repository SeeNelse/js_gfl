<template>
  <div id="app">
    <router-link to="/">Index</router-link>
    <router-link to="/shop">Shop</router-link>
    <router-link to="/cart">Cart</router-link>
    <router-link to="/sho34dsgp">404</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #42b983;
}
</style>
