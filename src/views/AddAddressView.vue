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
      <div class="col-span-1 lg:block hidden">
        <SectionTitle class="mt-8 mb-1" :title="'Hello Eko Suprianto'" />
        <span class="block text-xs">Welcome to your account</span>
        <SideBarMenu />
      </div>
      <div class="col-span-3">
        <span class="text-lg block font-bold mt-8">My Info</span>
        <span class="text-sm font-bold">Add Address</span>
        <div class="mt-6">
          <GridComponent :col="'grid-cols-2'" :addClass="'mt-6'">
            <TextInput
              :placeholder="'First Name'"
              :required="true"
              :label="'First Name'"
            />
            <TextInput
              :placeholder="'Last Name'"
              :required="true"
              :label="'Last Name'"
            />
            <TextInput
              :placeholder="'Country/Region'"
              :required="true"
              :label="'Country/Region'"
            />
            <TextInput :placeholder="'Company Name'" :label="'Company Name'" />
            <TextInput
              :placeholder="'Street Address'"
              :label="'Address'"
              :required="true"
            />
            <TextInput
              :placeholder="'apartment, suite, unit, etc'"
              :label="'Apt, Suit, Unit'"
            />
          </GridComponent>
          <GridComponent :col="'grid-cols-3'" :addClass="'mt-6'">
            <TextInput :placeholder="'City'" :required="true" :label="'City'" />
            <TextInput
              :placeholder="'State'"
              :required="true"
              :label="'State'"
            />
            <TextInput
              :placeholder="'Postal Code'"
              :required="true"
              :label="'Postal Code'"
            />
          </GridComponent>
          <div class="flex flex-col mt-3">
            <label for="description" class="text-sm mb-2"
              >Delivery Instrucion</label
            >
            <textarea
              name=""
              id=""
              class="border rounded-md text-xs focus:outline-none focus:border-2 p-3"
              rows="4"
            >
Deliveri instruction</textarea
            >
          </div>
          <div class="mt-4">
            <span class="flex items-center mb-2">
              <input
                id="default_shipping_address"
                class="me-2"
                type="checkbox"
              />
              <label for="default_shipping_address" class="text-xs"
                >Set as default shipping address</label
              >
            </span>
            <span class="flex items-center">
              <input
                id="default_shipping_address"
                class="me-2"
                type="checkbox"
              />
              <label for="default_shipping_address" class="text-xs"
                >Set as default billing address</label
              >
            </span>
          </div>
          <div class="mt-8">
            <button
              @click="show_confirmed = true"
              type="button"
              class="px-3 py-2 text-sm bg-purple-500 me-3 text-slate-50 rounded-md"
            >
              Save
            </button>
            <button
              type="button"
              class="px-3 py-2 text-sm border text-slate-900 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </GridComponent>
  </div>
  <div class="mt-8">
    <FooterComponent />
  </div>
  <ModalComponent
    :show="show_confirmed"
    @close="show_confirmed = false"
    :title="'Order Confirmed'"
  >
    <div class="w-full relative flex justify-center items-center">
      <img
        src="@/assets/images/order-confirmed.svg"
        class="w-[500px]"
        alt=""
      />
      <router-link
        to="/"
        class="px-3 py-2 bg-purple-500 text-xs rounded-md text-slate-50 absolute whitespace-nowrap top-60"
        style="left: 340px"
        >Continue Shopping</router-link
      >
    </div>
  </ModalComponent>
</template>

<script>
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import ButtonComponent from "@/components/atom/ButtonComponent.vue";
import GridComponent from "@/components/atom/GridComponent.vue";
import FlexComponent from "@/components/atom/FlexComponent.vue";
import SectionTitle from "@/components/atom/SectionTitle.vue";
import BraedCrumb from "@/components/atom/BraedCrumb.vue";
import TextInput from "@/components/atom/TextInput.vue";
import SideBarMenu from "@/components/sideBarMenu/SideBarMenu.vue";
import ModalComponent from "@/components/atom/ModalComponent.vue";

export default {
  name: "AddAddressView",
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
    ModalComponent,
  },
  data() {
    return {
      show_confirmed: false,
    };
  },
  methods: {
    handleModal() {
      if (!this.show_confirmed) {
        this.show_confirmed = true;
      }
    },
  },
};
</script>

<style></style>
