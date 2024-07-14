<template>
<div id="app">
  <Header />
  <Banner />
  <About />
</div>
</template>

<script>
import Header from './components/Header.vue';
import Banner from './components/Banner.vue';
import About from './components/About.vue';

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    About,
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>
