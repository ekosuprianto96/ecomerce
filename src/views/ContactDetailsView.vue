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
        <span class="text-sm font-bold">Contact Details</span>
        <div class="w-full">
          <ul class="flex justify-center items-start flex-col">
            <li
              class="flex py-3 border-b border-b-slate-400 justify-between items-center w-full"
            >
              <div>
                <span class="text-sm block mb-2">Your Name</span>
                <span class="text-xs block">Eko suprianto</span>
              </div>
              <router-link to="/" class="text-xs">Change</router-link>
            </li>
            <li
              class="flex py-3 border-b border-b-slate-400 justify-between items-center w-full"
            >
              <div>
                <span class="text-sm block mb-2">Email Address</span>
                <span class="text-xs block">ekhosaputra23@gmail.com</span>
              </div>
              <router-link to="/" class="text-xs">Change</router-link>
            </li>
            <li
              class="flex py-3 border-b border-b-slate-400 justify-between items-center w-full"
            >
              <div>
                <span class="text-sm block mb-2">Phone Number</span>
                <span class="text-xs block">+6281349895</span>
              </div>
              <router-link to="/" class="text-xs">Change</router-link>
            </li>
            <li
              class="flex py-3 border-b border-b-slate-400 justify-between items-center w-full"
            >
              <div>
                <span class="text-sm block mb-2">Password</span>
                <span class="text-xs block">..........</span>
              </div>
              <router-link to="/" class="text-xs">Change</router-link>
            </li>
          </ul>
        </div>
        <span class="text-sm block my-6 font-bold">Address</span>
        <GridComponent :col="'lg:grid-cols-2'" :gap="'gap-4'">
          <FlexComponent
            :addClass="'border rounded-md p-4 bg-slate-400'"
            :direction="'column'"
          >
            <span class="text-sm">Eko suprianto</span>
            <span class="text-xs">081341345654</span>
            <span class="text-xs">Jln.Sultan Hasanuddin/Makassar</span>
            <div class="flex gap-3">
              <ButtonComponent
                :text="'Home'"
                :customClass="'px-2 py-1'"
                :styleButton="'outline'"
                :rounded="'rounded-md'"
                :fontWeight="'light'"
                :fontSize="'0.6em'"
              />
              <ButtonComponent
                :text="'Default billing address'"
                :styleButton="'outline'"
                :rounded="'rounded-md'"
                :fontWeight="'light'"
                :fontSize="'0.6em'"
              />
            </div>
            <div class="">
              <div>
                <router-link to="/" class="text-xs">Remove</router-link> |
                <router-link to="/" class="text-xs">Edit</router-link>
              </div>
            </div>
          </FlexComponent>
          <FlexComponent
            :addClass="'border rounded-md p-4 bg-slate-400'"
            :direction="'column'"
          >
            <span class="text-sm">Eko suprianto</span>
            <span class="text-xs">081341345654</span>
            <span class="text-xs">Jln.Sultan Hasanuddin/Makassar</span>
            <div class="flex gap-3">
              <ButtonComponent
                :text="'Home'"
                :customClass="'px-2 py-1'"
                :styleButton="'outline'"
                :rounded="'rounded-md'"
                :fontWeight="'light'"
                :fontSize="'0.6em'"
              />
            </div>
            <div class="">
              <div>
                <router-link to="/" class="text-xs">Remove</router-link> |
                <router-link to="/" class="text-xs">Edit</router-link> |
                <router-link to="/" class="text-xs">Set as default</router-link>
              </div>
            </div>
          </FlexComponent>
          <FlexComponent
            :addClass="'border rounded-md p-4 bg-slate-400'"
            :direction="'column'"
          >
            <span class="text-sm">Eko suprianto</span>
            <span class="text-xs">081341345654</span>
            <span class="text-xs">Jln.Sultan Hasanuddin/Makassar</span>
            <div class="flex gap-3">
              <ButtonComponent
                :text="'Office'"
                :customClass="'px-2 py-1'"
                :styleButton="'outline'"
                :rounded="'rounded-md'"
                :fontWeight="'light'"
                :fontSize="'0.6em'"
              />
            </div>
            <div class="">
              <div>
                <router-link to="/" class="text-xs">Remove</router-link> |
                <router-link to="/" class="text-xs">Edit</router-link> |
                <router-link to="/" class="text-xs">Set as default</router-link>
              </div>
            </div>
          </FlexComponent>
          <FlexComponent
            :addClass="'border rounded-md p-4 bg-slate-400'"
            :direction="'column'"
          >
            <span class="text-sm">Eko suprianto</span>
            <span class="text-xs">081341345654</span>
            <span class="text-xs">Jln.Sultan Hasanuddin/Makassar</span>
            <div class="flex gap-3">
              <ButtonComponent
                :text="'Home2'"
                :customClass="'px-2 py-1'"
                :styleButton="'outline'"
                :rounded="'rounded-md'"
                :fontWeight="'light'"
                :fontSize="'0.6em'"
              />
            </div>
            <div class="">
              <div>
                <router-link to="/" class="text-xs">Remove</router-link> |
                <router-link to="/" class="text-xs">Edit</router-link> |
                <router-link to="/" class="text-xs">Set as default</router-link>
              </div>
            </div>
          </FlexComponent>
        </GridComponent>
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
  name: "ConatctDetailsView",
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
