<template>
  <div class="flex p-3 flex-col rounded-md justify-center items-center min-w-[33.33%]">
    <div class="flex h-max w-full">
      <div class="w-1/2">
        <img :src="image" alt="">
      </div>
      <div class="w-1/2 flex flex-nowrap justify-end items-start h-full">
        <i v-for="feed in feedback" :key="feed" :class="feed.fill" class='bx bxs-star'></i>
      </div>
    </div>
    <div class="text-feedback mt-3 mb-2">
      <span class="text-md font-bold">Eko Suprianto</span>
      <p class="font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus modi cum adipisci, ipsum assumenda deleniti.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFeedback',
  props: {
    image: {
      type: Image,
      default: ''
    },
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