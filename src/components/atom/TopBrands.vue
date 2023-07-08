<template>
  <div
    class="w-full border flex justify-center items-center p-4 rounded-md flex-col bg-slate-800"
  >
    <h1 class="my-3 font-bold text-slate-50 text-xl lg:text-2xl">TOP BRANDS DEAL</h1>
    <span class="lg:text-md text-xs lg:my-3 font-bold text-slate-50"
      >Up To 60% Of On Brnads</span
    >
    <div class="w-full flex justify-center gap-3 mt-4 items-center">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="rounded px-3 w-max h-[50px] lg:min-h-[70px] flex justify-center items-center bg-slate-50"
      >
        <img class="w-[100px]" :src="image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBrands",
  props: {
    images: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style></style>
