<template>
  <NavbarComponent />
  <div class="container lg:py-8 lg:px-40 px-4 py-4 min-w-full">
    <BraedCrumb
      :path="[
        { name: 'Home', url: '/' },
        { name: 'Add To Cart', url: '/cart' },
      ]"
    />
    <p class="lg:w-1/2 text-sm mt-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias
      dolore labore architecto, amet aut qui distinctio exercitationem omnis
      necessitatibus!
    </p>
  </div>
  <div class="min-w-full border">
    <TableComponent />
  </div>
  <div class="lg:py-8 py-4 bg-slate-100 px-4 lg:px-40">
    <GridComponent :col="'lg:grid-cols-2 grid-cols-1'">
      <FlexComponent :direction="'column'" :gap="'gap-0'" :addClass="'order-2 lg:order-1'">
        <span class="font-bold text-md">Discount Codes</span>
        <span class="text-xs">Enter coupon code if your have</span>
        <div
          class="relative my-4 lg:my-8 flex border rounded-md overflow-hidden items-center"
        >
          <input type="text" class="" />
          <button
            class="text-[0.6em] bg-purple-500 px-3 text-slate-50 top-0 bottom-0 absolute right-0"
          >
            Add Coupon
          </button>
        </div>
        <ButtonComponent
          :text="'Continue Shooping'"
          :styleButton="'outline'"
          :fontSize="'0.8em'"
          :customClass="'bg-purple-500 rounded-md'"
        />
      </FlexComponent>
      <FlexComponent
        :direction="'column'"
        :justify="screen <= 540 ? 'center' : 'flex-start'"
        :align="screen <= 540 ? 'center' : 'flex-start'"
        :gap="'gap-0'"
        :addClass="'order-1 lg:order-2'"
      >
        <div class="lg:text-end text-start w-full">
          <span class="text-sm block mb-2">Sub Total : Rp. 600.000</span>
          <span class="text-sm block mb-2">Shipping : Rp. 0</span>
          <hr class="border-2 my-3 w-full" />
          <span class="text-sm font-bold block mb-2"
            >Grand Total : Rp. 600.000</span
          >
        </div>
        <hr />
      </FlexComponent>
    </GridComponent>
  </div>
  <div>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";
import GridComponent from "@/components/atom/GridComponent.vue";
import FlexComponent from "@/components/atom/FlexComponent.vue";
import BraedCrumb from "@/components/atom/BraedCrumb.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import TableComponent from "@/components/atom/TableComponent.vue";
import ButtonComponent from "@/components/atom/ButtonComponent.vue";
export default {
  name: "CartView",
  components: {
    NavbarComponent,
    BraedCrumb,
    FooterComponent,
    TableComponent,
    GridComponent,
    FlexComponent,
    ButtonComponent,
  },
  computed: {
    screen() {
      return this.$store.state.screenSize;
    }
  },
  mounted() {
    document.title = "Cart Product";
    const screen = window.innerWidth;
    this.$store.commit('setScreenSize', screen);
  },
};
</script>

<style>
td,
th {
  border: 1px solid;
}
</style>
