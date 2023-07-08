<template>
  <div class="lg:block hidden">
    <ul
      class="flex lg:px-40 px-4 justify-between items-center py-2 text-sm text-slate-50 bg-slate-900"
    >
      <li class="w-[20%]">Product Details</li>
      <li class="w-[17%] text-center">Price</li>
      <li class="w-[17%] text-center">Quantity</li>
      <li class="w-[17%] text-center">Shipping</li>
      <li class="w-[17%] text-center">Sub Total</li>
      <li class="w-[4%] text-center">Action</li>
    </ul>
    <div class="lg:px-40 px-4 py-6">
      <ul
        class="flex border-b-2 py-4 border-b-slate-200 justify-between items-center text-sm"
      >
        <li class="w-[20%]">
          <span class="flex gap-3">
            <img
              src="../../assets/images/image1.jpg"
              class="h-[80px] rounded-md"
              alt=""
            />
            <span>
              <span class="font-bold block text-sm">T-shirt</span>
              <span class="block text-xs mb-2">Cottom</span>
              <span class="block text-xs border text-center rounded">XL</span>
            </span>
          </span>
        </li>
        <li class="text-sm w-[17%] text-center">Rp. 200.000</li>
        <li class="text-sm w-[17%] text-center">
          <div
            class="max-w-full w-[50%] mx-auto flex justify-center items-center relative"
          >
            <i class="bx bx-minus left-1 absolute"></i>
            <input
              type="text"
              value="1"
              class="rounded text-center text-xs bg-slate-300 border w-full"
            />
            <i class="bx bx-plus right-1 absolute"></i>
          </div>
        </li>
        <li class="text-sm w-[17%] text-center">FREE</li>
        <li class="text-sm w-[17%] text-center">Rp. 200.000</li>
        <li class="text-sm w-[4%] text-center">
          <i class="bx bxs-trash text-red-500"></i>
        </li>
      </ul>
      <ul
        class="flex border-b-2 py-4 border-b-slate-200 justify-between items-center text-sm"
      >
        <li class="w-[20%]">
          <span class="flex gap-3">
            <img
              src="../../assets/images/image2.jpg"
              class="h-[80px] rounded-md"
              alt=""
            />
            <span>
              <span class="font-bold block text-sm">T-shirt</span>
              <span class="block text-xs mb-2">Cottom</span>
              <span class="block text-xs border text-center rounded">XL</span>
            </span>
          </span>
        </li>
        <li class="text-sm w-[17%] text-center">Rp. 200.000</li>
        <li class="text-sm w-[17%] text-center">
          <div
            class="max-w-full w-[50%] mx-auto flex justify-center items-center relative"
          >
            <i class="bx bx-minus left-1 absolute"></i>
            <input
              type="text"
              value="1"
              class="rounded text-center text-xs bg-slate-300 border w-full"
            />
            <i class="bx bx-plus right-1 absolute"></i>
          </div>
        </li>
        <li class="text-sm w-[17%] text-center">FREE</li>
        <li class="text-sm w-[17%] text-center">Rp. 200.000</li>
        <li class="text-sm w-[4%] text-center">
          <i class="bx bxs-trash text-red-500"></i>
        </li>
      </ul>
      <ul
        class="flex border-b-2 py-4 border-b-slate-200 justify-between items-center text-sm"
      >
        <li class="w-[20%]">
          <span class="flex gap-3">
            <img
              src="../../assets/images/image3.jpg"
              class="h-[80px] rounded-md"
              alt=""
            />
            <span>
              <span class="font-bold block text-sm">T-shirt</span>
              <span class="block text-xs mb-2">Cottom</span>
              <span class="block text-xs border text-center rounded">XL</span>
            </span>
          </span>
        </li>
        <li class="text-sm w-[17%] text-center">Rp. 200.000</li>
        <li class="text-sm w-[17%] text-center">
          <div
            class="max-w-full w-[50%] mx-auto flex justify-center items-center relative"
          >
            <i class="bx bx-minus left-1 absolute"></i>
            <input
              type="text"
              value="1"
              class="rounded text-center text-xs bg-slate-300 border w-full"
            />
            <i class="bx bx-plus right-1 absolute"></i>
          </div>
        </li>
        <li class="text-sm w-[17%] text-center">FREE</li>
        <li class="text-sm w-[17%] text-center">Rp. 200.000</li>
        <li class="text-sm w-[4%] text-center">
          <i class="bx bxs-trash text-red-500"></i>
        </li>
      </ul>
    </div>
  </div>
  <div class="py-2 gap-3 flex flex-col w-full items-start px-4">
    <div class="flex w-full">
      <div class="flex justify-center items-center">
        <img
            src="../../assets/images/image3.jpg"
            class="h-[150px] rounded-md"
            alt=""
          />
      </div>
      <div class="min-h-full w-[70%] py-2 flex justify-between items-start flex-col px-3">
        <span class="flex flex-col items-start gap-3 mb-3">
          <span class="font-bold block text-sm">T-shirt</span>
          <span class="block text-xs mb-2">Cottom</span>
          <span class="block text-xs border w-max px-3 text-center rounded">XL</span>
          <span class="text-xs">Rp. 200.000</span>
        </span>
        <div
            class="w-[100px] flex justify-center items-center relative"
          >
            <i class="bx bx-minus left-1 absolute"></i>
            <input
              type="text"
              value="1"
              class="rounded text-center text-xs bg-slate-300 border w-full"
            />
            <i class="bx bx-plus right-1 absolute"></i>
          </div>
      </div>
    </div>
  <div class="flex w-full">
      <div class="flex justify-center items-center">
        <img
            src="../../assets/images/image3.jpg"
            class="h-[150px] rounded-md"
            alt=""
          />
      </div>
      <div class="min-h-full w-[70%] py-2 flex justify-between items-start flex-col px-3">
        <span class="flex flex-col items-start gap-3 mb-3">
          <span class="font-bold block text-sm">T-shirt</span>
          <span class="block text-xs mb-2">Cottom</span>
          <span class="block text-xs border w-max px-3 text-center rounded">XL</span>
          <span class="text-xs">Rp. 200.000</span>
        </span>
        <div
            class="w-[100px] flex justify-center items-center relative"
          >
            <i class="bx bx-minus left-1 absolute"></i>
            <input
              type="text"
              value="1"
              class="rounded text-center text-xs bg-slate-300 border w-full"
            />
            <i class="bx bx-plus right-1 absolute"></i>
          </div>
      </div>
    </div>
  <div class="flex w-full">
      <div class="flex justify-center items-center">
        <img
            src="../../assets/images/image3.jpg"
            class="h-[150px] rounded-md"
            alt=""
          />
      </div>
      <div class="min-h-full w-[70%] py-2 flex justify-between items-start flex-col px-3">
        <span class="flex flex-col items-start gap-3 mb-3">
          <span class="font-bold block text-sm">T-shirt</span>
          <span class="block text-xs mb-2">Cottom</span>
          <span class="block text-xs border w-max px-3 text-center rounded">XL</span>
          <span class="text-xs">Rp. 200.000</span>
        </span>
        <div
            class="w-[100px] flex justify-center items-center relative"
          >
            <i class="bx bx-minus left-1 absolute"></i>
            <input
              type="text"
              value="1"
              class="rounded text-center text-xs bg-slate-300 border w-full"
            />
            <i class="bx bx-plus right-1 absolute"></i>
          </div>
      </div>
    </div>
  <div class="flex w-full">
      <div class="flex justify-center items-center">
        <img
            src="../../assets/images/image3.jpg"
            class="h-[150px] rounded-md"
            alt=""
          />
      </div>
      <div class="min-h-full w-[70%] py-2 flex justify-between items-start flex-col px-3">
        <span class="flex flex-col items-start gap-3 mb-3">
          <span class="font-bold block text-sm">T-shirt</span>
          <span class="block text-xs mb-2">Cottom</span>
          <span class="block text-xs border w-max px-3 text-center rounded">XL</span>
          <span class="text-xs">Rp. 200.000</span>
        </span>
        <div
            class="w-[100px] flex justify-center items-center relative"
          >
            <i class="bx bx-minus left-1 absolute"></i>
            <input
              type="text"
              value="1"
              class="rounded text-center text-xs bg-slate-300 border w-full"
            />
            <i class="bx bx-plus right-1 absolute"></i>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
