<template>
  <div
    class="flex"
    :class="[gap, addClass]"
    :style="`justify-content: ${justify};align-items: ${align};flex-wrap: ${wrap};flex-direction: ${direction}`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FlexComponent",
  props: {
    gap: {
      type: String,
      default: "gap-4",
    },
    justify: {
      type: String,
      default: "flex-start",
    },
    wrap: {
      type: String,
      default: "nowrap",
    },
    addClass: {
      type: String,
      default: "",
    },
    direction: {
      type: String,
      default: "row",
    },
    align: {
      type: String,
      default: "start",
    },
  },
};
</script>

<style></style>
