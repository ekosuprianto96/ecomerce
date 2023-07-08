<template>
  <div class="w-full h-full border lg:rounded-2xl overflow-hidden">
    <div class="w-full h-full relative flex justify-start items-center px-4">
      <img :src="image" class="absolute z-10 left-0 right-0" alt="" />
      <div
        class="flex flex-col justify-center relative z-20 py-4 px-[3px] lg:px-6 lg:py-8 items-start h-full"
      >
        <span id="sub_title" class="font-bold text-[0.5em] lg:text-sm lg:mb-6 text-slate-50">{{
          subTitle
        }}</span>
        <span id="title" class="font-bold text-xs mb-2 lg:text-2xl lg:mb-6 text-slate-50">{{
          title
        }}</span>
        <span id="title" class="font-bold text-light mb-2 text-[0.6em] lg:text-sm lg:mb-6 text-slate-50"
          >UPTO 50% OF</span
        >
        <span id="title" class="font-bold text-light text-[0.6em] lg:text-sm">
          <router-link to="/home" class="underline text-slate-50">{{
            textLink
          }}</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDeal",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    subTitle: {
      type: String,
      default: "Sub Title",
    },
    discount: {
      type: String,
      default: "UP TO DISCOUNT",
    },
    textLink: {
      type: String,
      default: "Explore Item",
    },
    bg: {
      type: String,
      default: "#0A6EBD",
    },
    image: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
