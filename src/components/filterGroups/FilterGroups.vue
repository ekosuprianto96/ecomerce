<template>
  <FlexComponent :addClass="'border py-2 px-4'" :justify="'space-between'">
    <h3>{{ title }}</h3>
    <i v-if="icon" :class="icon"></i>
  </FlexComponent>
  <slot></slot>
</template>

<script>
import FlexComponent from "../atom/FlexComponent.vue";
export default {
  name: "FilterGroups",
  components: { FlexComponent },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
