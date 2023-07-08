<template>
  <div class="mt-8">
    <ul class="w-full">
      <li class="min-w-full h-max">
        <router-link
          class="block hover:border-l-4 transition-all hover:border-l-slate-700 hover:bg-slate-300 pl-6 py-2 text-sm w-full h-full"
          to="/"
          ><i class="bx bxs-shopping-bags me-1"></i> My Orders</router-link
        >
      </li>
      <li class="min-w-full h-max">
        <router-link
          class="block hover:border-l-4 transition-all hover:border-l-slate-700 hover:bg-slate-300 pl-6 py-2 text-sm w-full h-full"
          to="/"
          ><i class="bx bx-heart me-1"></i> Wishlist</router-link
        >
      </li>
      <li class="min-w-full h-max">
        <router-link
          class="block hover:border-l-4 transition-all hover:border-l-slate-700 hover:bg-slate-300 pl-6 py-2 text-sm w-full h-full"
          to="/"
          ><i class="bx bx-user me-1"></i> My Info</router-link
        >
      </li>
      <li class="min-w-full h-max">
        <router-link
          class="block hover:border-l-4 transition-all hover:border-l-slate-700 hover:bg-slate-300 pl-6 py-2 text-sm w-full h-full"
          to="/"
          ><i class="bx bx-log-out me-1"></i> Sign Out</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBarMenu",
};
</script>

<style></style>
