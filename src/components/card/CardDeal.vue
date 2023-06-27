<template>
  <div class="w-full h-full rounded-2xl overflow-hidden" :style="`background-color: ${bg};`">
    <div class="w-full h-full px-4">
      <div class="flex flex-col justify-center px-6 py-8 items-start h-full">
        <span id="sub_title" class="font-bold text-sm mb-6 text-slate-50">{{ subTitle }}</span>
        <span id="title" class="font-bold text-2xl mb-6 text-slate-50">{{ title }}</span>
        <span id="title" class="font-bold text-light text-sm mb-6 text-slate-50">UPTO 50% OF</span>
        <span id="title" class="font-bold text-light text-sm">
          <router-link to="/home" class="underline text-slate-50">{{ textLink }}</router-link>
        </span>
      </div>
      <div>
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardDeal',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subTitle: {
      type: String,
      default: 'Sub Title'
    },
    discount: {
      type: String,
      default: 'UP TO DISCOUNT'
    },
    textLink: {
      type: String,
      default: 'Explore Item'
    },
    bg: {
      type: String,
      default: '#0A6EBD'
    }
  }
}
</script>

<style>

</style>