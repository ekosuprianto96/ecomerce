<template>
  <div class="flex justify-between items-center border py-2 px-4">
    <h3>{{ title }}</h3>
    <i v-if="icon" :class='icon'></i>
  </div>
  <slot></slot>
</template>

<script>
export default {
  name: 'FilterGroups',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>