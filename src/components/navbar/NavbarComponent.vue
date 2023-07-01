<template>
  <nav class="py-6 px-40 sticky top-0 z-40 bg-slate-50 shadow-md">
    <GridComponent :col="'grid-cols-2'">
      <FlexComponent>
        <FlexComponent :direction="`row`">
          <div class="logo me-8">
            <h1 class="font-bold text-2xl">TokoKu</h1>
          </div>
          <nav class="">
            <ul class="flex items-center">
              <li class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer">
                <router-link class="font-semibold text-sm" to="/">Shop</router-link>
              </li>
              <li class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer">
                <router-link class="font-semibold text-sm" to="/product-list">Mens</router-link>
              </li>
              <li class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer">
                <router-link class="font-semibold text-sm" to="/product-list">Womens</router-link>
              </li>
              <li class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer">
                <router-link class="font-semibold text-sm" to="/home">Combos</router-link>
              </li>
              <li class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer">
                <router-link class="font-semibold text-sm" to="/home">Joggers</router-link>
              </li>
            </ul>
          </nav>
        </FlexComponent>
      </FlexComponent>
      <FlexComponent :align="'center'" :direction="`row`" :wrap="`nowrap`">
        <FlexComponent :align="'center'" :addClass="'search_bar w-[50%] h-full relative'">
          <i class='bx bx-search absolute left-3'></i>
          <input type="text" class="border-2 text-sm focus:outline-none focus:border-2 py-2 ps-8 w-full rounded" placeholder="Cari barang anda..." />
        </FlexComponent>
        <FlexComponent :gap="'gap-3'" :addClass="'w-[50%]'" :justify="'flex-end'" :align="'center'">
          <router-link class="px-2 py-1 bg-slate-400 rounded" to="/home"><i class='bx bx-heart' ></i></router-link>
          <router-link class="px-2 py-1 bg-slate-400 rounded" to="/home"><i class='bx bx-user'></i></router-link>
          <router-link class="px-2 py-1 me-0 bg-slate-400 rounded" to="/home"><i class='bx bx-cart-alt' ></i></router-link>
        </FlexComponent>
      </FlexComponent>
    </GridComponent>
  </nav>
</template>

<script>
import ButtonComponent from '../atom/ButtonComponent.vue';
import FlexComponent from '../atom/FlexComponent.vue';
import GridComponent from '../atom/GridComponent.vue';
export default {
    components: { ButtonComponent, FlexComponent, GridComponent }
}
</script>

<style>

</style>