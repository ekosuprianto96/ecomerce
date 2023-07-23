<template>
  <NavbarComponent />
  <div class="container lg:px-40 lg:py-8 p-4 min-w-full">
    <BraedCrumb
      :path="[
        { name: 'Home', url: '/' },
        { name: 'My Account', url: '/' },
        { name: 'Checkout', url: '/checkout' },
      ]"
    />
    <SectionTitle class="lg:mt-8 mt-4" :title="'Checkout'" />
    <GridComponent :col="'lg:grid-cols-3'">
      <div class="lg:col-span-2 lg:order-1 order-2">
        <span class="font-bold text-sm block">Billing Details</span>
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
          <TextInput :placeholder="'State'" :required="true" :label="'State'" />
          <TextInput
            :placeholder="'Postal Code'"
            :required="true"
            :label="'Postal Code'"
          />
        </GridComponent>
        <TextInput class="mt-6" :placeholder="'Phone'" :label="'Phone'" />
        <div class="mt-6">
          <ButtonComponent
            :text="'Continue to deliver'"
            :customClass="'bg-purple-700 rounded'"
            :fontSize="'0.8em'"
            :colorText="'text-slate-50'"
          />
          <div class="mt-4">
            <input type="checkbox" class="me-3" />
            <span class="text-sm"
              >Save for information for a faster checkout</span
            >
          </div>
        </div>
        <div class="mt-6">
          <span class="font-bold block text-md mb-2">Shipping Address</span>
          <span class="text-xs block"
            >Select the address that matches you card or payment method</span
          >
          <div class="bg-slate-400 mt-6 p-4 rounded-md">
            <div class="flex items-center py-3 border-b-2">
              <input type="radio" id="shipping_address" class="me-2" />
              <label for="shipping_address" class="text-sm"
                >Same as billing address</label
              >
            </div>
            <div class="flex items-center py-3">
              <input type="radio" id="shipping_address" class="me-2" />
              <label for="shipping_address" class="text-sm"
                >Use different shipping address</label
              >
            </div>
          </div>
        </div>
        <div class="mt-6">
          <span class="font-bold block text-md mb-2">Shipping Address</span>
          <div class="bg-slate-400 mt-6 p-4 rounded-md">
            <div class="flex items-center py-3 border-b-2">
              <label for="shipping_address" class="text-sm"
                >Arrives by monday, 7 june</label
              >
              <input type="hidden" id="shipping_address" class="me-2" />
            </div>
            <div class="flex items-center justify-between py-3">
              <input type="hidden" id="shipping_address" class="me-2" />
              <label for="shipping_address" class="text-sm"
                >Delivery charges</label
              >
              <span class="text-sm">Rp. 20.000</span>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <span class="font-bold block text-md mb-2">Payment Method</span>
          <span class="text-xs block"
            >All transaction are secure and encrypted</span
          >
          <div class="bg-slate-400 mt-6 p-4 rounded-md">
            <div class="flex flex-col py-3 border-b-2">
              <div class="flex items-center">
                <input type="radio" id="shipping_address" class="me-2" />
                <span class="flex flex-col">
                  <label for="shipping_address" class="text-sm"
                    >Credit card</label
                  >
                  <span class="block text-[0.6em]"
                    >We accept all major credit cards</span
                  >
                </span>
              </div>
              <div class="flex flex-col gap-3 mt-4 px-5 justify-start">
                <div class="flex justify-start gap-3 items-center">
                  <span class="border text-xs px-3 py-1 rounded-md"
                    >Google</span
                  >
                  <span class="border text-xs px-3 py-1 rounded-md"
                    >PayPal</span
                  >
                  <span class="border text-xs px-3 py-1 rounded-md"
                    >Google</span
                  >
                </div>
                <GridComponent :col="'grid-cols-2'" :addClass="'mt-4'">
                  <TextInput
                    :label="'Card Number'"
                    :placeholder="'card number'"
                  />
                  <TextInput
                    :label="'Name Of Card'"
                    :placeholder="'name of card'"
                  />
                  <TextInput
                    :label="'Expiration Date (MM/YY)'"
                    :placeholder="'card number'"
                  />
                  <TextInput
                    :label="'Security Code'"
                    type="password"
                    :placeholder="'security ode'"
                  />
                </GridComponent>
              </div>
            </div>
            <div class="flex items-center py-3 border-b-2">
              <input type="radio" id="shipping_address" class="me-2" />
              <label for="shipping_address" class="text-sm"
                >Cash on delivery</label
              >
            </div>
            <div class="flex items-center py-3 border-b-2">
              <input type="radio" id="shipping_address" class="me-2" />
              <label for="shipping_address" class="text-sm">PayPal</label>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <ButtonComponent
            :text="'Pay Now'"
            :customClass="'bg-purple-700 rounded'"
            :fontSize="'0.8em'"
            :colorText="'text-slate-50'"
          />
        </div>
      </div>
      <div class="lg:col-span-1 p-4 lg:order-2 order-1 bg-white border h-max rounded-md">
        <span class="font-bold text-sm block">Order Summary</span>
        <FlexComponent
          :gap="'gap-0'"
          :addClass="'w-full mt-6'"
          :direction="'column'"
        >
          <FlexComponent
            :gap="'gap-0'"
            :addClass="'w-full py-3 px-3 border-t-2'"
            :justify="'space-between'"
            :align="'center'"
          >
            <img
              src="../assets/images/image1.jpg"
              class="h-[70px] rounded-md"
              alt=""
            />
            <div class="h-[70px]">
              <span class="text-xs font-bold block"
                >Pakian Wanita Murah
                <span class="text-slate-400 ms-1">1x</span></span
              >
              <span class="text-xs"><strong>Color: </strong> Lavendar</span>
            </div>
            <div class="h-[70px] flex justify-center items-center">
              <span class="lg:text-xs text-[0.6em] whitespace-nowrap">Rp. 200.000</span>
            </div>
          </FlexComponent>
          <FlexComponent
            :addClass="'w-full py-3 px-3 border-t-2'"
            :justify="'space-between'"
            :align="'center'"
          >
            <img
              src="../assets/images/image2.jpg"
              class="h-[70px] rounded-md"
              alt=""
            />
            <div class="h-[70px]">
              <span class="text-xs font-bold block"
                >Pakian Wanita Murah
                <span class="text-slate-400 ms-1">1x</span></span
              >
              <span class="text-xs"><strong>Color: </strong> Lavendar</span>
            </div>
            <div class="h-[70px] flex justify-center items-center">
              <span class="lg:text-xs text-[0.6em] whitespace-nowrap">Rp. 200.000</span>
            </div>
          </FlexComponent>
          <FlexComponent
            :addClass="'w-full py-3 px-3 border-t-2'"
            :justify="'space-between'"
            :align="'center'"
          >
            <img
              src="../assets/images/image3.jpg"
              class="h-[70px] rounded-md"
              alt=""
            />
            <div class="h-[70px]">
              <span class="text-xs font-bold block"
                >Pakian Wanita Murah
                <span class="text-slate-400 ms-1">1x</span></span
              >
              <span class="text-xs"><strong>Color: </strong> Lavendar</span>
            </div>
            <div class="h-[70px] flex justify-center items-center">
              <span class="lg:text-xs text-[0.6em] whitespace-nowrap">Rp. 200.000</span>
            </div>
          </FlexComponent>
        </FlexComponent>
        <FlexComponent
          :addClass="'w-full py-3 px-3 border-t-2'"
          :direction="'column'"
          :justify="'space-between'"
          :align="'center'"
        >
          <div class="flex justify-between items-center w-full">
            <span class="font-bold text-sm"
              >Sub Total <span class="text-xs">(3 items)</span></span
            >
            <span class="font-semibold text-sm">Rp. 600.000</span>
          </div>
          <div class="flex justify-between items-center w-full">
            <span class="font-bold text-sm">Savings</span>
            <span class="font-semibold text-sm">Rp. -600.000</span>
          </div>
          <div class="flex justify-between items-center w-full">
            <span class="font-bold text-sm">Shipping</span>
            <span class="font-semibold text-sm">Rp. 600.000</span>
          </div>
          <div class="flex justify-between mt-4 items-center w-full">
            <span class="font-bold text-sm">Total</span>
            <span class="font-semibold text-sm">Rp. 600.000</span>
          </div>
        </FlexComponent>
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
import BraedCrumb from "@/components/atom/BraedCrumb.vue";
import TextInput from "@/components/atom/TextInput.vue";

export default {
  name: "CheckoutView",
  components: {
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    GridComponent,
    FlexComponent,
    SectionTitle,
    BraedCrumb,
    TextInput,
  },
  mounted() {
    document.title = "Checkout Products";
  },
};
</script>

<style></style>
