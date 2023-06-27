<template>
  <nav class="py-6">
    <div class="grid grid-cols-2 px-40">
      <div class="flex items-center">
        <div class="logo me-8">
          <h1 class="font-bold text-2xl">TokoKu</h1>
        </div>
        <nav class="">
          <ul class="flex items-center">
            <li class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer">
              <router-link class="font-semibold text-sm" to="/home">Shop</router-link>
            </li>
            <li class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer">
              <router-link class="font-semibold text-sm" to="/home">Mens</router-link>
            </li>
            <li class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer">
              <router-link class="font-semibold text-sm" to="/home">Womens</router-link>
            </li>
            <li class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer">
              <router-link class="font-semibold text-sm" to="/home">Combos</router-link>
            </li>
            <li class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer">
              <router-link class="font-semibold text-sm" to="/home">Joggers</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex items-center">
        <div class="search_bar w-[50%] h-full flex items-center relative">
          <i class='bx bx-search absolute left-3'></i>
          <input type="text" class="border-2 text-sm focus:outline-none focus:border-2 py-2 ps-8 w-full h-full rounded" placeholder="Cari barang anda..." />
        </div>
        <nav class="flex justify-end items-center w-[50%]">
          <router-link class="px-2 py-1 mx-2 bg-slate-400 rounded" to="/home"><i class='bx bx-heart' ></i></router-link>
          <router-link class="px-2 py-1 mx-2 bg-slate-400 rounded" to="/home"><i class='bx bx-user'></i></router-link>
          <router-link class="px-2 py-1 mx-2 me-0 bg-slate-400 rounded" to="/home"><i class='bx bx-cart-alt' ></i></router-link>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script>
import ButtonComponent from '../atom/ButtonComponent.vue';
export default {
    components: { ButtonComponent }
}
</script>

<style>

</style>