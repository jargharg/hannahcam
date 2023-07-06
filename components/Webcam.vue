<template>
  <button
    class="block bg-black w-screen h-screen transition-transform duration-500 transform"
    :class="{ '-scale-x-100': !isFlipped }"
    @click="isFlipped = !isFlipped"
  >
    <video autoplay="true" ref="elStream" class="w-full h-full"></video>

    <div
      v-if="!isInitialised"
      class="absolute inset-0 bg-black text-white flex items-center justify-center"
    >
      Waiting for your webcam&hellip;
    </div>
  </button>
</template>

<script>
export default {
  setup() {
    const elStream = ref(null);
    const isFlipped = ref(false);
    const isInitialised = ref(false);

    onMounted(() => {
      if (!navigator.mediaDevices.getUserMedia) {
        console.error("No user media, go away");

        return;
      }

      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          elStream.value.srcObject = stream;
          isInitialised.value = true;
        })
        .catch(function (error) {
          console.error("Something went wrong!", error);
        });
    });

    return { elStream, isFlipped, isInitialised };
  },
};
</script>