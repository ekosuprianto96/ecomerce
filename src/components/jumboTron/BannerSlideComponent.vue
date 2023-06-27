<template>
  <div class="jumbotron w-full h-[400px] bg-gray-400 overflow-hidden">
    <div class="wrapper-banner w-full h-full">
      <div class="item-banner px-32 flex justify-start items-center w-full h-full">
        <div class="text-banner min-w-[50%] h-max">
          <h1 class="font-bold text-4xl mb-4">Summer Value Pack</h1>
          <p class="font-semibold text-md mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, veniam?</p>
          <ButtonComponent text="Shop Now" fontSize="0.8em" fontWeight="semibold" rounded="rounded"/>
        </div>
        <div class="image min-w-[50%] p-3">
          <img src="../../assets/images/image1.png" class="w-full" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonComponent from "../atom/ButtonComponent.vue";
// import Banner1 from "";
export default {
  components: {
    ButtonComponent
  },
  name: "BannerSlideComponent",
  data() {
    return {
      images: ''
    };
  },
};
</script>
