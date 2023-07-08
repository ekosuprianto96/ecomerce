<template>
  <div class="w-full">
    <label for="" class="text-xs mb-2 block"
      >{{ label }} {{ required ? "*" : "" }}</label
    >
    <div class="relative w-full flex items-center">
      <input
        :type="type"
        :required="required ? true : false"
        :style="`background-color: ${background};`"
        :placeholder="`${placeholder}`"
        @input="$emit('input', $event.target.value)"
        @keyup="$emit('keyup')"
        class="w-full border focus:outline-none focus:border-2 h-10 rounded-md bg-inherit text-xs px-3 py-1"
      />
      <i v-if="type == 'password'" class="bx bx-show absolute right-2"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    background: {
      type: String,
      default: "white",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "Label",
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {},
};
</script>

<style></style>
