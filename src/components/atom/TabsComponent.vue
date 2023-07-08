<template>
  <ul class="flex border">
    <li
      v-for="(tab, index) in tabs"
      :key="index"
      class="py-2 px-3"
      @click="handleTab(index)"
    >
      {{ tab }}
    </li>
  </ul>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsComponent",
  props: {
    tabs: {
      type: Array,
      default: ["Tab 1", "Tab 2", "Tab 3"],
    },
  },
  methods: {
    handleTab(tab) {
      console.log(tab);
    },
  },
};
</script>

<style></style>
