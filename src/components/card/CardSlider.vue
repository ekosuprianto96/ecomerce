<template>
  <div class="w-full">
    <SectionTitle v-if="title != 'none'" :title="title" />
    <div class="w-full overflow-x-hidden lg:h-auto">
      <div class="w-full flex items-center h-auto">
        <div
          v-if="products.length > 0"
          :class="[wrap ? '' : (!isDrag ? 'hover:cursor-grab' : 'hover:cursor-grabbing'), wrap ? 'lg:flex-wrap' : '']"
          class="items_card w-full overflow-hidden transition-all flex gap-2 lg:gap-4"
          ref="scrollContainer"
          @mousedown="startDrag" 
          @mouseup="offDrag"
          @mousemove="drag"
        >
          <div
            v-for="(product, index) in products"
            :key="index"
            class="item_card relative h-max lg:min-h-[230px]"
            :class="column == 4 ? 'lg:min-w-[18.6%] min-w-[31.3%]' : 'lg:min-w-[31.5%] min-w-[31.3%]'"
          >
            <span
              v-if="icon"
              class="absolute rounded-full p-2 bg-slate-50 w-[10px] h-[10px] lg:w-[25px] lg:h-[25px] lg:top-3 lg:right-3 right-2 top-2 flex justify-center items-center"
            >
              <i class="bx text-[0.6em] bx-heart"></i>
            </span>
            <div
              class="lg:h-[230px] h-[100px] lg:mb-4 mb-2 rounded-md overflow-hidden flex justify-center items-center"
            >
              <img
                :src="product.image"
                class="w-full"
                :class="column >= 4 ? 'lg:max-w-[180px] max-w-[100px]' : 'lg:max-w-[220px] max-w-[100px]'"
                :alt="product.name"
              />
            </div>
            <div class="relative px-1 flex flex-col justify-center items-start">
              <span class="block font-bold text-[0.6em] order-1 lg:text-xs lg:mb-2">{{
                product.name
              }}</span>
              <span v-if="action || price" class="block order-3 font-[200] text-[0.6em] lg:text-[0.7em]"
                >Explore Now</span
              >
              <span v-if="price" class="lg:absolute order-2 text-[0.5em] lg:text-xs right-0">
                {{ product.price }}
              </span>
              <router-link
                v-if="action"
                class="absolute right-0"
                :to="{ name: 'product-details', params: { id: product.id } }"
                ><i class="bx bx-right-arrow-alt lg:text-2xl"></i
              ></router-link>
            </div>
          </div>
        </div>
        <div
          v-else
          class="items_card w-full flex gap-4 overflow-hidden"
          :class="wrap ? 'lg:flex-wrap' : ''"
        >
          <div
            class="item_card relative lg:min-h-[230px]"
            :class="column == 4 ? 'min-w-[18.6%]' : 'min-w-[31.5%]'"
          >
            <div
              class="lg:h-[230px] mb-4 bg-slate-200 animate-pulse rounded-md overflow-hidden flex justify-center items-center"
            ></div>
          </div>
          <div
            class="item_card relative min-h-[230px]"
            :class="column == 4 ? 'min-w-[18.6%]' : 'min-w-[31.5%]'"
          >
            <div
              class="lg:h-[230px] mb-4 bg-slate-200 animate-pulse rounded-md overflow-hidden flex justify-center items-center"
            ></div>
          </div>
          <div
            class="item_card relative min-h-[230px]"
            :class="column == 4 ? 'min-w-[18.6%]' : 'min-w-[31.5%]'"
          >
            <div
              class="h-[230px] mb-4 bg-slate-200 animate-pulse rounded-md overflow-hidden flex justify-center items-center"
            ></div>
          </div>
          <div
            class="item_card relative min-h-[230px]"
            :class="column == 4 ? 'min-w-[18.6%]' : 'min-w-[31.5%]'"
          >
            <div
              class="h-[230px] mb-4 bg-slate-200 animate-pulse rounded-md overflow-hidden flex justify-center items-center"
            ></div>
          </div>
          <div
            class="item_card relative min-h-[230px]"
            :class="column == 4 ? 'min-w-[18.6%]' : 'min-w-[31.5%]'"
          >
            <div
              class="h-[230px] mb-4 bg-slate-200 animate-pulse rounded-md overflow-hidden flex justify-center items-center"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../atom/SectionTitle.vue";
export default {
  name: "CardSlider",
  components: {
    SectionTitle,
  },
  props: {
    products: {
      type: Array,
      default: [],
    },
    action: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "Title",
    },
    wrap: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Number,
      default: 4,
    },
  },
  data(){
    return {
      isDrag: false,
      scrollLeft: 0,
      startX: 0,
      event: null,
    }
  },
  computed: {
    screen() {
      return this.$store.state.screenSize;
    }
  },
  mounted() {
      this.event = this.$refs.scrollContainer
  },
  methods: {
    startDrag(event) {
      if(!this.wrap) {
        this.isDrag = true;
        this.startX = event.pageX - this.event.offsetLeft;
        this.scrollLeft = this.event.scrollLeft;
      }
    },
    drag(event) {
      if(!this.wrap) {
        if (this.isDrag) {
          event.preventDefault();
          const deltaX = event.pageX - this.event.offsetLeft;
          const walk = (deltaX - this.startX) * 3;
          this.event.scrollLeft = this.scrollLeft - walk;
        }
      }
    },
    offDrag() {
      if(!this.wrap) {
        this.isDrag = false;
      }
    }
  }
};
</script>

<style></style>
