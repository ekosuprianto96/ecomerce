<template>
  <div class="w-full">
    <SectionTitle v-if="title != 'none'" :title="title" />
    <div class="w-full overflow-x-hidden h-auto">
      <div class="w-full flex items-center h-auto">
        <div class="me-2" v-if="!wrap">
          <i class='bx bx-left-arrow-alt text-xl'></i>
        </div>
        <div class="items_card w-full flex gap-4 overflow-hidden" :class="wrap ? 'flex-wrap' : ''">
          <div v-for="(product, index) in products" :key="index" class="item_card relative min-h-[230px]" :class="column == 4 ? 'min-w-[18.6%]' : 'min-w-[31.5%]'">
            <span v-if="icon" class="absolute rounded-full p-2 bg-slate-50 w-[25px] h-[25px] top-3 right-3 flex justify-center items-center">
              <i class='bx bx-heart'></i>
            </span>
            <div class="h-[230px] mb-4 rounded-md overflow-hidden flex justify-center items-center">
              <img :src="product.image" class="w-full" :class="column >= 4 ? 'max-w-[180px]' : 'max-w-[220px]'" :alt="product.name">
            </div>
            <div class="relative flex flex-col justify-center items-start">
              <span class="block font-bold text-xs mb-2">{{ product.name }}</span>
              <span v-if="action || price" class="block font-[200] text-[0.7em]">Explore Now</span>
              <span v-if="price" class="absolute text-xs right-0">
                {{ product.price }}
              </span>
              <router-link v-if="action" class="absolute right-0" to="/home"><i class='bx bx-right-arrow-alt text-2xl'></i></router-link>
            </div>
          </div>
        </div>
        <div class="ms-2" v-if="!wrap">
          <i class='bx bx-right-arrow-alt text-xl'></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../atom/SectionTitle.vue'
export default {
  name: 'CardSlider',
  components: {
    SectionTitle
  },
  props: {
    products: {
      type: Array,
      default: []
    },
    action: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: 'Title'
    },
    wrap: {
      type: Boolean,
      default: true
    },
    icon: {
      type: Boolean,
      default: false
    },
    price: {
      type: Boolean,
      default: false
    },
    column: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style>

</style>