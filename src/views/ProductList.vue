<template>
  <NavbarComponent />
  <div class="container lg:py-8 py-4 px-4 lg:px-40 min-w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4">
      <div class="lg:col-span-1 lg:block hidden border h-max">
        <FilterGroups icon="bx bx-slider" title="Filter">
          <Categorie />
        </FilterGroups>
        <FilterGroups icon="bx bx-chevron-right" title="Price">
          <div class="flex justify-center items-center flex-col p-4">
            <div class="flex items-center mb-3">
              <input
                type="range"
                v-model="rangeValues[0]"
                class="me-2 h-1"
                min="0"
                max="100"
              />
              <span class="text-sm px-3 border rounded">{{
                rangeValues[0]
              }}</span>
            </div>
            <div class="flex items-center">
              <input
                type="range"
                v-model="rangeValues[1]"
                class="me-2 h-1"
                min="0"
                max="100"
              />
              <span class="text-sm px-3 border rounded">{{
                rangeValues[1]
              }}</span>
            </div>
          </div>
        </FilterGroups>
        <FilterGroups icon="bx bx-slider" title="Colors">
          <div class="p-4 gap-4 flex flex-wrap">
            <span
              class="w-[30px] rounded-md block h-[30px] bg-slate-900"
            ></span>
            <span class="w-[30px] rounded-md block h-[30px] bg-pink-900"></span>
            <span
              class="w-[30px] rounded-md block h-[30px] bg-orange-900"
            ></span>
            <span class="w-[30px] rounded-md block h-[30px] bg-red-900"></span>
            <span class="w-[30px] rounded-md block h-[30px] bg-blue-900"></span>
            <span
              class="w-[30px] rounded-md block h-[30px] bg-purple-900"
            ></span>
            <span
              class="w-[30px] rounded-md block h-[30px] bg-indigo-900"
            ></span>
            <span class="w-[30px] rounded-md block h-[30px] bg-sky-900"></span>
            <span class="w-[30px] rounded-md block h-[30px] bg-rose-700"></span>
            <span
              class="w-[30px] rounded-md block h-[30px] bg-slate-900"
            ></span>
          </div>
        </FilterGroups>
        <FilterGroups icon="bx bx-slider" title="Dress Style">
          <Categorie />
        </FilterGroups>
      </div>
      <div class="lg:col-span-3 lg:px-8">
        <div class="flex justify-between items-center">
          <h1 class="lg:text-md text-sm">Womens Clothing</h1>
          <div class="lg:text-md text-sm">
            <router-link class="mx-2" to="/">New</router-link>
            <router-link class="mx-2" to="/">Recomendation</router-link>
          </div>
        </div>
        <div class="mt-8">
          <CardSlider
            :products="products"
            :wrap="screen < 548 ? false : true"
            :column="3"
            :icon="true"
            title="none"
            :price="true"
            :action="false"
          />
          <CardSlider
            :products="products"
            :wrap="screen < 548 ? false : true"
            :icon="true"
            :column="3"
            class="mt-3"
            title="none"
            :price="true"
            :action="false"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="mt-14">
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";
import FilterGroups from "@/components/filterGroups/FilterGroups.vue";
import Categorie from "@/components/atom/Categorie.vue";
import CardSlider from "@/components/card/CardSlider.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
export default {
  components: {
    NavbarComponent,
    FilterGroups,
    Categorie,
    CardSlider,
    FooterComponent,
  },
  data() {
    return {
      rangeValues: [0, 0],
      products: [
        {
          name: "Baju Kaos",
          price: "Rp. 300.000",
          image: require("../assets/images/image1.jpg"),
        },
        {
          name: "Knitted Joggers",
          price: "Rp. 200.000",
          image: require("../assets/images/image2.jpg"),
        },
        {
          name: "Full Sleeve",
          price: "Rp. 400.000",
          image: require("../assets/images/image3.jpg"),
        },
        {
          name: "Baju Kaos",
          price: "Rp. 300.000",
          image: require("../assets/images/image1.jpg"),
        },
        {
          name: "Knitted Joggers",
          price: "Rp. 200.000",
          image: require("../assets/images/image2.jpg"),
        },
        {
          name: "Full Sleeve",
          price: "Rp. 400.000",
          image: require("../assets/images/image3.jpg"),
        },
      ],
    };
  },
  name: "ProductDetails",
  props: {},
  computed: {
    screen() {
      return this.$store.state.screenSize;
    }
  },
  mounted() {
    document.title = "Product List";
    const screen = window.innerWidth;
    this.$store.commit('setScreenSize', screen);
  },
};
</script>

<style></style>
