<template>
  <div class="jumbotron w-full h-[210px] lg:h-[600px] bg-gray-400 overflow-hidden">
    <div class="wrapper-banner w-full h-full">
      <div class="slider-banner relative flex items-center h-full w-full">
        <i class="bx bx-chevron-left absolute left-2 z-30 text-[2em]" @click="prevSlide"></i>
        <i class="bx bx-chevron-right absolute right-2 z-30 text-[2em]" @click="nextSlide"></i>
        <div class="absolute z-30 bottom-0 h-max flex gap-2 justify-center items-center py-2 w-full">
          <span v-for="(banner, i) in datas" :key="i" :class="index == i ? 'bg-red-400' : 'bg-slate-50'" class="rounded-full w-[8px] h-[8px] block"></span>
        </div>
        <div class="content-slide min-w-full flex flex-nowrap h-full transition-all duration-200" :style="`transform: translateX(-${position}px)`">
          <FlexComponent v-for="(banner, i) in datas" :key="i" :addClass="'min-w-full item-slider relative lg:px-40 h-full'" :align="'center'">
            <img
              :src="banner.image"
              class="z-10 w-full h-full lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 absolute"
              alt=""
            />
            <div class="text-banner min-w-[80%] px-4 lg:px-0 relative z-30 lg:min-w-[50%] max-w-[50%] h-max">
              <h1 class="font-bold lg:text-6xl text-md mb-2 text-slate-50 lg:mb-4">
                {{ banner.title }}
              </h1>
              <p
                class="lg:font-semibold font-light text-xs mb-4 lg:text-base lg:mb-14 text-slate-50 text-justify tracking-wide"
              >
                {{ banner.subTitle }}
              </p>
              <ButtonComponent
                text="Shop Now"
                :customClass="'bg-slate-50'"
                :colorText="'text-slate-900'"
                :fontSize="screen <= 540 ? '0.6em' : '1em'"
                fontWeight="semibold"
                rounded="rounded"
              />
            </div>
          </FlexComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonComponent from "../atom/ButtonComponent.vue";
import FlexComponent from "../atom/FlexComponent.vue";
// import Banner1 from "";
export default {
  components: {
    ButtonComponent,
    FlexComponent,
  },
  props: {
    datas: {
      type: Array,
      default: []
    }
  },
  name: "BannerSlideComponent",
  data() {
    return {
      images: "",
      position: 0,
      index: 0,
      items: null,
    };
  },
  computed: {
    screen() {
      return this.$store.state.screenSize;
    }
  },
  mounted() {
    this.items = document.querySelectorAll('.item-slider');
    const screen = window.innerWidth;
    this.$store.commit('setScreenSize', screen);
    this.slideBanner()
  },
  methods: {
    slideBanner() {
      setInterval(() => this.nextSlide(), 3000)
    },
    nextSlide(event) {
      if(this.items != null) {
        if(this.index >= (this.datas.length - 1)) {
          this.position = 0;
          this.index = 0;
        }else {
          this.position += this.items[this.index].offsetWidth;
          this.index++;
        }
      }
    },
    prevSlide(event) {
      if(this.index > 0) {
        this.position -= this.screen;
        this.index--;
      }
    }
  }
};
</script>
