<template>
  <NavbarComponent />
  <div class="container min-w-full lg:px-40 lg:py-8 p-4">
    <BraedCrumb
      :path="[
        { name: 'Home', url: '/' },
        { name: 'My Account', url: '/' },
        { name: 'Personal Info', url: '/checkout' },
      ]"
    />
    <GridComponent :col="'lg:grid-cols-4'">
      <div class="lg:col-span-1 lg:block hidden">
        <SectionTitle class="mt-8 mb-1" :title="'Hello Eko Suprianto'" />
        <span class="block text-xs">Welcome to your account</span>
        <SideBarMenu />
      </div>
      <div class="lg:col-span-3">
        <span class="text-lg block font-bold mt-8">Wishlist</span>
        <div class="w-full h-max mt-6">
          <div class="flex flex-col lg:flex-row lg:items-center mb-2 h-full py-3 gap-4">
            <i class="bx text-xl bx-x"></i>
            <img
              src="@/assets/images/image1.jpg"
              class="lg:h-[80px] w-[30px] rounded-sm"
              alt=""
            />
            <div class="w-[50%] ms-3 h-[80px]">
              <span class="block text-xs mb-2 font-bold"
                >Baju Kaos Murah Terjangkau</span
              >
              <span class="block text-xs mb-2 font-bold"
                >Color: <span class="text-slate-500 ms-2">Red</span></span
              >
              <span class="block text-xs font-bold"
                >Quantity: <span class="text-slate-500 ms-2">1</span></span
              >
            </div>
            <span class="text-xs">Rp. 200.000</span>
            <div class="text-end w-[20%]">
              <button
                class="bg-purple-500 px-3 py-2 text-xs text-slate-50 rounded-md"
              >
                Add to cart
              </button>
            </div>
          </div>
          <div class="flex items-center mb-2 h-full py-3 gap-4">
            <i class="bx text-xl bx-x"></i>
            <img
              src="@/assets/images/image2.jpg"
              class="h-[80px] rounded-sm"
              alt=""
            />
            <div class="w-[50%] ms-3 h-[80px]">
              <span class="block text-xs mb-2 font-bold"
                >Baju Kaos Murah Terjangkau</span
              >
              <span class="block text-xs mb-2 font-bold"
                >Color: <span class="text-slate-500 ms-2">Red</span></span
              >
              <span class="block text-xs font-bold"
                >Quantity: <span class="text-slate-500 ms-2">1</span></span
              >
            </div>
            <span class="text-xs">Rp. 200.000</span>
            <div class="text-end w-[20%]">
              <button
                class="bg-purple-500 px-3 py-2 text-xs text-slate-50 rounded-md"
              >
                Add to cart
              </button>
            </div>
          </div>
          <div class="flex items-center mb-2 h-full py-3 gap-4">
            <i class="bx text-xl bx-x"></i>
            <img
              src="@/assets/images/image3.jpg"
              class="h-[80px] rounded-sm"
              alt=""
            />
            <div class="w-[50%] ms-3 h-[80px]">
              <span class="block text-xs mb-2 font-bold"
                >Baju Kaos Murah Terjangkau</span
              >
              <span class="block text-xs mb-2 font-bold"
                >Color: <span class="text-slate-500 ms-2">Red</span></span
              >
              <span class="block text-xs font-bold"
                >Quantity: <span class="text-slate-500 ms-2">1</span></span
              >
            </div>
            <span class="text-xs">Rp. 200.000</span>
            <div class="text-end w-[20%]">
              <button
                class="bg-purple-500 px-3 py-2 text-xs text-slate-50 rounded-md"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </GridComponent>
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
import SectionTitle from "@/components/atom/SectionTitle.vue";
import BraedCrumb from "@/components/atom/BreadCrumb.vue";
import TextInput from "@/components/atom/TextInput.vue";
import SideBarMenu from "@/components/sideBarMenu/SideBarMenu.vue";

export default {
  name: "WishlistView",
  components: {
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    GridComponent,
    FlexComponent,
    SectionTitle,
    BraedCrumb,
    TextInput,
    SideBarMenu,
  },
};
</script>

<style></style>
