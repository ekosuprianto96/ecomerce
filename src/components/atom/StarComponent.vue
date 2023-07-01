<template>
  <i v-for="feed in feedback" :key="feed" :class="feed.fill" class='bx bxs-star'></i>
</template>

<script>
export default {
  name: 'StarComponent',
  props: {
    star: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      feedback: []
    }
  },
  mounted() {
    this.loopStarFeedback(this.star)
  },
  methods: {
    loopStarFeedback(parameter) {
      for(let i = 1; i <= 5; i++) {
        let fill = 'text-slate-500';
          if(i <= parameter) {
            fill = 'text-yellow-500'
          }
         const feedback = {count: i, fill: fill};
          this.feedback.push(feedback);
      }
    }
  }
}
</script>

<style>

</style>