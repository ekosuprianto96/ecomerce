<template>
  <router-link
    :to="link"
    class="px-4 py-2"
    :style="`font-size: ${fontSize};`"
    :class="[
      rounded,
      colorText,
      styleButton == 'none-outline' ? '' : 'border',
      customClass,
      `font-${fontWeight}`,
    ]"
    >{{ text }}</router-link
  >
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
      default: "Button",
    },
    colorText: {
      type: String,
      default: "text-slate-50",
    },
    background: {
      type: String,
      default: "",
    },
    fontSize: {
      type: String,
      default: "1em",
    },
    fontWeight: {
      type: String,
      default: "bold",
    },
    styleButton: {
      type: String,
      default: "none-outline",
    },
    customClass: {
      type: String,
      default: "",
    },
    rounded: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style></style>
