<template>
  <div class="card-full">
    <div class="min-h-[200px] px-6 py-4 rounded bg-slate-500 w-full">
      <div class="text card flex justify-center flex-col"
          :class="position == 'left' ? 'items-start' : 'items-end'">
        <h3 class="text-xl font-bold mb-3 text-slate-50">Hawaiian Shirts</h3>
        <span class="text-sm font-thin text-slate-50 mb-3">Dress up in summer vibe</span>
        <span class="text-lg font-bold text-slate-50 mb-4">UP TO 50% OFF</span>
        <span class="px-4 mb-3"><i class='bx text-5xl bx-down-arrow-alt'></i></span>
        <ButtonComponent colorText="text-slate-50" text="Shop Now" styleButton="outline" fontSize="0.8em" rounded="rounded-sm" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../atom/ButtonComponent.vue';
export default {
  name: 'CardFull',
  components: {
    ButtonComponent
  },
  props: {
    position: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style>

</style>