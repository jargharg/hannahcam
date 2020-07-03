<template>
  <div class='webcam'>
    <video
      autoplay="true"
      class="stream"
      ref="stream"
    >
    </video>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!navigator.mediaDevices.getUserMedia) {
      console.error('no user media, go away');

      return;
    }

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        this.$refs.stream.srcObject = stream;
      })
      .catch(function(error) {
        console.error('Something went wrong!', error);
      });
  },
};
</script>

<style scoped lang="scss">
.stream {
  width: 100vw;
  height: 100vh;
  background-color: black;
  transform: rotateY(180deg);
}
</style>
