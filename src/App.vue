<template>
<div id="app">
  <Header />
  <Banner />
  <About />
  <Services />
  <Gallery />
</div>
</template>

<script>
import Header from './components/Header.vue';
import Banner from './components/Banner.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Gallery from './components/Gallery.vue';


export default {
  name: 'App',
  components: {
    Header,
    Banner,
    About,
    Services,
    Gallery,
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>
