<template>
  <FlexComponent :gap="'gap-0'">
    <router-link :style="`color: ${color};`" :class="addClass" class="text-sm hover:cursor-pointer flex items-center" v-for="(p, index) in path" :key="p.name" :to="p.url">{{ p.name }} <i v-if="index < (path.length - 1)" class='bx mx-2 bx-chevron-right'></i></router-link>
  </FlexComponent>
</template>

<script>
import FlexComponent from './FlexComponent.vue';
export default {
  name: 'BreadCrumb',
  components: {
    FlexComponent
  },
  props: {
    path: {
      type: Array,
      default: [
        {
          name: 'URL',
          url: '/'
        }
      ]
    },
    addClass: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'blue'
    }
  }
}
</script>

<style>

</style>