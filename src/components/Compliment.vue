<template>
  <div
    class="compliment"
    ref="compliment"
  >
    {{word}}
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  data() {
    return {
      words: [
        'beautiful',
        'gorgeous',
        'wow!!!',
        'incredible',
        'fab!',
        'nice',
        'i like it',
        'great eyes',
        'superstar',
      ],
      word: null,
    };
  },
  mounted() {
    this.windowWidth = document.documentElement.offsetWidth;
    this.windowHeight = document.documentElement.offsetHeight;

    this.animateRandomWord();
  },
  methods: {
    animateRandomWord() {
      const { compliment } = this.$refs;
      const { width, height } = compliment.getBoundingClientRect();

      this.word = this.getRandomWord();

      gsap.set(compliment, {
        scale: 0,
        opacity: 1,
        x: Math.random() * (this.windowWidth - width),
        y: Math.random() * (this.windowHeight - height),
        transformOrigin: 'center',
      });

      return gsap
        .timeline({ onComplete: this.animateRandomWord })
        .to(null, { duration: 2 + Math.random() * 10 })
        .to(compliment, {
          rotation: -45 + Math.random() * 90,
          duration: 2,
          scale: 1,
          ease: 'power1.in',
        })
        .to(compliment, { opacity: 0, duration: 0.7 }, '-=0.7');
    },
    getRandomWord() {
      return this.words[Math.floor(Math.random() * this.words.length)];
    },
    getRandomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
  },
};
</script>

<style scoped lang="scss">
.compliment {
  position: absolute;
  color: white;
  mix-blend-mode: difference;
  top: 0;
  left: 0;
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
</style>