<template>
  <div class="card-full">
    <div
      class="min-h-[200px] px-6 py-4 relative overflow-hidden flex justify-start items-center border rounded w-full"
    >
      <img :src="image" class="absolute z-10 left-0 right-0 w-full" alt="" />
      <div
        class="text_card w-full flex justify-center relative z-20 flex-col"
        :class="position == 'left' ? 'items-start' : 'items-end'"
      >
        <h3 class="text-xl font-bold mb-3 text-slate-50">{{ title }}</h3>
        <span class="text-sm font-thin text-slate-50 mb-3">{{ subTitle }}</span>
        <span class="text-lg font-bold text-slate-50 mb-4">{{
          textDiscount
        }}</span>
        <span class="px-4 mb-3"
          ><i class="bx text-5xl bx-down-arrow-alt"></i
        ></span>
        <ButtonComponent
          colorText="text-slate-50"
          text="Shop Now"
          styleButton="outline"
          fontSize="0.8em"
          rounded="rounded-sm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../atom/ButtonComponent.vue";
export default {
  name: "CardFull",
  components: {
    ButtonComponent,
  },
  props: {
    position: {
      type: String,
      default: "left",
    },
    image: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "Sub Title",
    },
    title: {
      type: String,
      default: "Title",
    },
    textDiscount: {
      type: String,
      default: "UP TO 50% OFF",
    },
  },
};
</script>

<style></style>
