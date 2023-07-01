<template>
  <div class="flex p-3 flex-col rounded-md justify-center items-center min-w-[33.33%]">
    <div class="flex h-max w-full">
      <div class="w-1/2">
        <img :src="image" alt="">
      </div>
      <div class="w-1/2 flex flex-nowrap justify-end items-start h-full">
        <StarComponent :star="star"/>
      </div>
    </div>
    <div class="text-feedback mt-3 mb-2">
      <span class="text-md font-bold">Eko Suprianto</span>
      <p class="font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus modi cum adipisci, ipsum assumenda deleniti.</p>
    </div>
  </div>
</template>

<script>
import StarComponent from '../atom/StarComponent.vue';
export default {
  name: 'CardFeedback',
  components: {
    StarComponent
  },
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
  
}
</script>

<style>

</style>