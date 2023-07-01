<template>
  <div class="grid" :class="[col, gap, addClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridComponent',
  props: {
    col: {
      type: String,
      default: 4
    },
    gap: {
      type: String,
      default: 'gap-4'
    },
    addClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>