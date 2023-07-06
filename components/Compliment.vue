<template>
  <div class="compliment" ref="elCompliment">
    {{ activeWord }}
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  setup() {
    const elCompliment = ref(null);

    const words = [
      "beautiful",
      "gorgeous",
      "wow!!!",
      "incredible",
      "fab!",
      "nice",
      "I like it",
      "great eyes",
      "superstar",
      "stunning",
      "you are a star!!",
      "legend!!!",
      "so pretty :-)",
    ];
    const activeWord = ref(null);

    const animateRandomWord = () => {
      const { offsetWidth, offsetHeight } = document.documentElement;
      activeWord.value = getRandomWord();

      const { width, height } = elCompliment.value.getBoundingClientRect();

      gsap.set(elCompliment.value, {
        scale: 0,
        opacity: 1,
        x: Math.random() * (offsetWidth - width),
        y: Math.random() * (offsetHeight - height),
        transformOrigin: "center",
      });

      return gsap
        .timeline({ onComplete: animateRandomWord })
        .to(elCompliment.value, {
          rotation: -45 + Math.random() * 90,
          duration: 3,
          scale: 1.5,
          ease: "power1.in",
          delay: 2 + Math.random() * 3,
        })
        .to(elCompliment.value, { opacity: 0, duration: 0.7 }, "-=0.7");
    };

    const getRandomWord = () => {
      return words[Math.floor(Math.random() * words.length)];
    };

    onMounted(animateRandomWord);

    return { elCompliment, activeWord };
  },
};
</script>

<style scoped lang="scss">
.compliment {
  @apply absolute top-0 left-0;
  @apply font-bold text-[4rem] tracking-wider uppercase;
  @apply text-white mix-blend-difference;
}
</style>