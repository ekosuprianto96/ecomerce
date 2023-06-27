<template>
  <span class="block mb-8 font-bold h-auto text-md border-l-4 ps-6 border-l-slate-700">{{ title }}</span>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: 'Title Section'
    }
  }
}
</script>

<style>

</style>