<template>
  <footer class="footer lg:px-40 lg:py-14 py-8 px-4 w-full bg-slate-900">
    <GridComponent :col="'lg:grid-cols-5 grid-cols-2'" :gap="'gap-4'">
      <div class="">
        <span class="text-slate-50 font-bold mb-4 block text-xs lg:text-lg"
          >Need Help</span
        >
        <ul class="">
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >Contact Us</router-link
            >
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >Tracks Order</router-link
            >
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >Return & Refunds</router-link
            >
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/">FAQ</router-link>
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >Career</router-link
            >
          </li>
        </ul>
      </div>
      <div class="">
        <span class="text-slate-50 font-bold mb-4 block text-xs lg:text-lg"
          >Need Help</span
        >
        <ul class="">
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >Contact Us</router-link
            >
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >Tracks Order</router-link
            >
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >Return & Refunds</router-link
            >
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/">FAQ</router-link>
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >Career</router-link
            >
          </li>
        </ul>
      </div>
      <div class="">
        <span class="text-slate-50 font-bold mb-4 block text-xs lg:text-lg"
          >Need Help</span
        >
        <ul class="">
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >Contact Us</router-link
            >
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >Tracks Order</router-link
            >
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >Return & Refunds</router-link
            >
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/">FAQ</router-link>
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >Career</router-link
            >
          </li>
        </ul>
      </div>
      <div class="lg:col-span-2">
        <span class="text-slate-50 font-bold mb-4 block text-xs lg:text-lg">Location</span>
        <ul class="">
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >ekhosaputra23@gmail.com</router-link
            >
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >Makassar Sulawesi-selatan</router-link
            >
          </li>
          <li class="my-2">
            <router-link class="text-slate-50 text-[0.6em] lg:text-sm" to="/"
              >+6281341439895</router-link
            >
          </li>
        </ul>
      </div>
    </GridComponent>
    <FlexComponent :addClass="'mt-8'" :justify="'center'" :align="'center'" :gap="'gap-4'">
      <span
        class="border w-[30px] h-[30px] flex justify-center items-center bg-slate-50 rounded-md"
      >
        <i class="bx bxl-facebook"></i>
      </span>
      <span
        class="border w-[30px] h-[30px] flex justify-center items-center bg-slate-50 rounded-md"
      >
        <i class="bx bxl-instagram"></i>
      </span>
      <span
        class="border w-[30px] h-[30px] flex justify-center items-center bg-slate-50 rounded-md"
      >
        <i class="bx bxl-twitter"></i>
      </span>
      <span
        class="border w-[30px] h-[30px] flex justify-center items-center bg-slate-50 rounded-md"
      >
        <i class="bx bxl-linkedin"></i>
      </span>
    </FlexComponent>
    <div class="text-center mt-8">
      <span class="text-slate-50 text-[0.6em] lg:text-sm"
        >&copy;Copy Right 2023 Eko Suprianto All Right Reserved</span
      >
    </div>
  </footer>
</template>

<script>
import GridComponent from "../atom/GridComponent.vue";
import FlexComponent from "../atom/FlexComponent.vue";
export default {
  name: "FooterComponent",
  components: {
    GridComponent,
    FlexComponent,
  },
};
</script>

<style></style>
