<template>
  <nav class="lg:py-6 lg:px-40 md:py-6 py-3 px-3 sticky top-0 z-40 bg-slate-50 shadow-md">
    <GridComponent :col="'lg:grid-cols-2 grid-cols-4'" :addClass="'items-center'">
      <FlexComponent :addClass="'col-span-1'">
        <FlexComponent :direction="`row`">
          <div class="logo lg:me-8">
            <h1 class="font-bold lg:text-2xl">TokoKu</h1>
          </div>
          <nav v-if="auth" class="lg:block hidden">
            <ul class="flex items-center">
              <li
                class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer"
              >
                <router-link class="font-semibold text-sm" to="/"
                  >Shop</router-link
                >
              </li>
              <li
                class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer"
              >
                <router-link class="font-semibold text-sm" to="/product-list"
                  >Mens</router-link
                >
              </li>
              <li
                class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer"
              >
                <router-link class="font-semibold text-sm" to="/product-list"
                  >Womens</router-link
                >
              </li>
              <li
                class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer"
              >
                <router-link class="font-semibold text-sm" to="/home"
                  >Combos</router-link
                >
              </li>
              <li
                class="px-3 py-1 hover:bg-slate-400 hover:rounded-md transition-all duration-300 hover:cursor-pointer"
              >
                <router-link class="font-semibold text-sm" to="/home"
                  >Joggers</router-link
                >
              </li>
            </ul>
          </nav>
        </FlexComponent>
      </FlexComponent>
      <FlexComponent :align="'center'" :addClass="'col-span-2 lg:col-span-1'" :direction="`row`" :wrap="`nowrap`">
        <FlexComponent
          :align="'center'"
          :addClass="'search_bar w-full lg:w-[50%] h-full relative'"
        >
          <i class="bx bx-search absolute left-3"></i>
          <input
            type="text"
            class="border-2 lg:text-sm text-xs focus:outline-none focus:border-2 py-2 ps-8 w-full rounded"
            placeholder="Cari barang anda..."
          />
        </FlexComponent>
        <FlexComponent v-if="authenticated"
          :gap="'gap-3'"
          :addClass="'w-[50%] lg:flex hidden'"
          :justify="'flex-end'"
          :align="'center'"
        >
          <router-link class="px-2 py-1 bg-slate-400 rounded" to="/wishlist"
            ><i class="bx bx-heart"></i
          ></router-link>
          <router-link class="px-2 py-1 bg-slate-400 rounded" to="/contact-details"
            ><i class="bx bx-user"></i
          ></router-link>
          <router-link class="px-2 py-1 me-0 bg-slate-400 rounded" to="/cart"
            ><i class="bx bx-cart-alt"></i
          ></router-link>
        </FlexComponent>
        <FlexComponent v-if="!authenticated"
          :gap="'gap-3'"
          :addClass="'w-[50%] lg:flex hidden'"
          :justify="'flex-end'"
          :align="'center'"
        >
          <router-link class="px-4 py-2 text-xs text-slate-900 border rounded" to="/login">Sign In</router-link>
          <router-link class="px-4 py-2 text-xs text-slate-50 bg-purple-500 rounded" to="/register">Sign Up</router-link>
        </FlexComponent>
      </FlexComponent>
      <div class="w-full lg:hidden flex justify-end text-center py-2 col-span-1">
        <div class="border w-[40px] h-[40px] rounded-md flex flex-col justify-between py-2 px-1 items-center">
          <span class="w-full h-[3px] bg-slate-900 rounded-full"></span>
          <span class="w-full h-[3px] bg-slate-900 rounded-full"></span>
          <span class="w-full h-[3px] bg-slate-900 rounded-full"></span>
        </div>
      </div>
    </GridComponent>
  </nav>
</template>

<script>
import ButtonComponent from "../atom/ButtonComponent.vue";
import FlexComponent from "../atom/FlexComponent.vue";
import GridComponent from "../atom/GridComponent.vue";
export default {
  components: { ButtonComponent, FlexComponent, GridComponent },
  props: {
    
  },
  data() {
    return {
      auth: false
    }
  },
  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    }
  },
  mounted() {
    this.auth = this.authenticated;
  }
};
</script>

<style></style>
