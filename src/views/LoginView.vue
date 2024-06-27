<template>
  <NavbarComponent :authenticated="auth"/>
  <div class="container lg:px-40 px-4 min-w-full lg:min-h-max min-h-[90vh] flex justify-center items-center overflow-hidden">
    <GridComponent :col="'lg:grid-cols-2'" :addClass="'content-center lg:content-start w-full h-full'" :gap="'gap-0'">
      <div class="w-full lg:flex hidden justify-center items-center h-[600px] overflow-hidden">
        <img class="min-w-full" src="@/assets/images/bg-login.jpg" alt="">
      </div>
      <div class="flex flex-col justify-evenly p-6 border shadow-md lg:border-none lg:shadow-none rounded-md lg:rounded-none bg-white w-full">
        <h1 class="font-bold lg:text-start mb-3 lg:mb-0 text-center text-2xl">Sign In Page</h1>
        <div class="mb-4 lg:mb-0">
          <router-link class="border w-full text-center flex justify-center items-center text-sm py-2 rounded-md mb-3" to="/">
            <img src="@/assets/images/Google.png" class="w-[17px] me-2" alt="">  Continue With Google
          </router-link>
          <router-link class="border w-full text-center flex justify-center items-center text-sm py-2 rounded-md" to="/">
            <img src="@/assets/images/twitter.png" class="w-[17px] me-2" alt="">  Continue With Twitter
          </router-link>
        </div>
        <div class="">
          <div class="mb-3">
            <label for="email" class="block text-sm mb-2">Email</label>
            <input type="text" class="focus:outline-none px-3 text-sm border h-[35px] rounded w-full focus:border-2">
          </div>
          <div class="mb-3">
            <label for="password" class="block text-sm mb-2">Password</label>
            <input type="password" class="focus:outline-none px-3 text-sm border h-[35px] rounded w-full focus:border-2">
          </div>
          <div class="mt-6">
            <button class="px-4 py-2 bg-purple-500 text-xs text-slate-50 rounded-md">Sign In</button>
          </div>
          <span class="text-xs">Don’t have an account? <router-link class="text-blue-500" to="/register">Sign up</router-link></span>
        </div>
      </div>
    </GridComponent>
  </div>
</template>

<script>
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import GridComponent from "@/components/atom/GridComponent.vue";
import FlexComponent from "@/components/atom/FlexComponent.vue";
import BraedCrumb from "@/components/atom/BreadCrumb.vue";
import StarComponent from "@/components/atom/StarComponent.vue";
import ButtonComponent from "@/components/atom/ButtonComponent.vue";
import SectionTitle from "@/components/atom/SectionTitle.vue";
import CardSlider from "@/components/card/CardSlider.vue";
import TabsComponent from "@/components/atom/TabsComponent.vue";

export default {
  name: "LoginView",
  components: {
    FooterComponent,
    GridComponent,
    FlexComponent,
    BraedCrumb,
    StarComponent,
    ButtonComponent,
    SectionTitle,
    CardSlider,
    TabsComponent,
    NavbarComponent,
  },
  data() {
    return {
      auth: false
    }
  }
}
</script>

<style>

</style>