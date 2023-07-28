<template>
  <NavbarComponent />
  <div
    class="min-w-full lg:px-40 flex justify-center text-center items-center flex-col p-4 lg:py-14"
  >
    <img src="@/assets/images/notfound404.svg" class="mb-4 lg:w-[400px] w-[200px]" alt="Not Found" />
    <span class="block text-3xl mb-4">Oops! Page Not Found</span>
    <span class="block text-sm lg:w-[40%] w-full"
      >The page you are looking for might have been removed ortemporarily
      unavailable.</span
    >
  </div>
  <div class="mt-8">
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import ButtonComponent from "@/components/atom/ButtonComponent.vue";
import GridComponent from "@/components/atom/GridComponent.vue";
import FlexComponent from "@/components/atom/FlexComponent.vue";

export default {
  name: "NotFoundView",
  components: {
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    GridComponent,
    FlexComponent,
  },
};
</script>

<style></style>
