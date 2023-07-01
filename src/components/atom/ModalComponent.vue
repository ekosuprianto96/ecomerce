<template>
  <div v-if="show" class="fixed flex transition-all top-0 bottom-0 justify-center items-center left-0 right-0 bg-opacity-90 z-50 bg-black">
    <div class="border w-[50%] rounded-md bg-white">
      <div class="w-full border-b-2 py-3 flex justify-between p-4 items-center">
        <span class="font-bold text-lg">{{ title }}</span>
        <span @click="closeModal" class="border w-[25px] hover:bg-red-500 transition-all flex justify-center items-center rounded-full h-[25px]">
          <i class="bx bx-x text-lg hover:text-slate-50"></i>
        </span>
      </div>
      <div class="p-4">
        <slot></slot>
      </div>
      <div class="text-end border-t-2 p-4">
        <button @click="closeModal" type="button" class="px-2 py-2 text-sm bg-red-500 text-slate-50 rounded-md">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
export default {
  name: 'ModalComponent',
  props: {
    title: {
      type: String,
      default: 'Modal Title'
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  components: {
    ButtonComponent
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>