<template>
  <div class="jumbotron w-full h-[600px] bg-gray-400 overflow-hidden">
    <div class="wrapper-banner w-full relative h-full">
      <FlexComponent :addClass="'w-full px-40 h-full'" :align="'center'">
        <img src="../../assets/images/Banner.jpg" class="z-10 top-0 bottom-0 left-0 right-0 absolute" alt="">
        <div class="text-banner relative z-30 min-w-[50%] max-w-[50%] h-max">
          <h1 class="font-bold text-6xl text-slate-50 mb-4">Summer Value Pack</h1>
          <p class="font-semibold text-md mb-14 text-slate-50 text-justify tracking-wide">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quo nulla nemo unde ducimus harum.</p>
          <ButtonComponent text="Shop Now" :customClass="'bg-slate-50'" :colorText="'text-slate-900'" fontSize="1em" fontWeight="semibold" rounded="rounded"/>
        </div>
      </FlexComponent>
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
    FlexComponent
  },
  name: "BannerSlideComponent",
  data() {
    return {
      images: ''
    };
  },
};
</script>
