<template>
  <NavbarComponent/>
  <div class="container min-w-full px-40 py-8">
    <BraedCrumb :path="[{name: 'Home', url: '/'}, {name: 'My Account', url: '/'}, {name: 'Personal Info', url: '/checkout'}]"/>
    <GridComponent :col="'grid-cols-4'">
      <div class="col-span-1">
        <SectionTitle class="mt-8 mb-1" :title="'Hello Eko Suprianto'" />
        <span class="block text-xs">Welcome to your account</span>
        <div class="mt-8">
          <ul class="w-full">
            <li class="min-w-full h-max">
              <router-link class="block hover:border-l-4 transition-all hover:border-l-slate-700 hover:bg-slate-300 pl-6 py-2 text-sm w-full h-full" to="/"><i class='bx bxs-shopping-bags me-1'></i> My Orders</router-link>
            </li>
            <li class="min-w-full h-max">
              <router-link class="block hover:border-l-4 transition-all hover:border-l-slate-700 hover:bg-slate-300 pl-6 py-2 text-sm w-full h-full" to="/"><i class='bx bx-heart me-1'></i> Wishlist</router-link>
            </li>
            <li class="min-w-full h-max">
              <router-link class="block hover:border-l-4 transition-all hover:border-l-slate-700 hover:bg-slate-300 pl-6 py-2 text-sm w-full h-full" to="/"><i class='bx bx-user me-1'></i> My Info</router-link>
            </li>
            <li class="min-w-full h-max">
              <router-link class="block hover:border-l-4 transition-all hover:border-l-slate-700 hover:bg-slate-300 pl-6 py-2 text-sm w-full h-full" to="/"><i class='bx bx-log-out me-1'></i> Sign Out</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-3">
        <span class="text-lg block font-bold mt-8">My Info</span>
        <span class="text-sm font-bold">Contact Details</span>
      </div>
    </GridComponent>
  </div>
</template>

<script>
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';
import FooterComponent from '@/components/footer/FooterComponent.vue';
import ButtonComponent from '@/components/atom/ButtonComponent.vue';
import GridComponent from '@/components/atom/GridComponent.vue';
import FlexComponent from '@/components/atom/FlexComponent.vue';
import SectionTitle from '@/components/atom/SectionTitle.vue';
import BraedCrumb from '@/components/atom/BraedCrumb.vue';
import TextInput from '@/components/atom/TextInput.vue';

export default {
  name: 'ConatctDetailsView',
  components:{
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    GridComponent,
    FlexComponent,
    SectionTitle,
    BraedCrumb,
    TextInput
  },
}
</script>

<style>

</style>