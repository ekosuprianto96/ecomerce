<template>
  <span
    class="block lg:mb-8 mb-4 font-bold h-auto text-md border-l-4 lg:ps-6 ps-4 border-l-slate-700"
    >{{ title }}</span
  >
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      default: "Title Section",
    },
  },
};
</script>

<style></style>
