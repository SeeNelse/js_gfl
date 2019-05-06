<template>
  <div id="app">
    <router-link to="/shop">Shop</router-link>
    <router-link to="/asdfasd">404</router-link>
    <router-link to="/users">Users</router-link>
    <router-view/>
  </div>
</template>

<script>
import EventBus from './EventBus';

export default {
  name: 'App',
  created() {
    EventBus.$on('userName', this.printName);
  },
  methods: {
    printName(name) {
      console.log(name);
    }
  }
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
</style>
