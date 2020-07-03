<template>
  <div id="app">
    <webcam />
    <compliment />
  </div>
</template>

<script>
import Webcam from './components/Webcam.vue';
import Compliment from './components/Compliment.vue';

export default {
  name: 'App',
  components: {
    Webcam,
    Compliment,
  },
};
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
  font-family: Helvetica, sans-serif;
}
</style>
