<template>
<div id="app">
  <Header />
</div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
#app {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>
