<template>
  <NavbarComponent />
  <div class="container py-8 px-40 min-w-full">
    <GridComponent :gap="'gap-4'" :addClass="'overflow-hidden'" :col="'grid-cols-2'">
      <FlexComponent :gap="'gap-0'" :addClass="'h-[500px] bg-slate-100 overflow-hidden'">
        <div class="w-[20%] h-full">
          <FlexComponent :gap="'gap-0'" :addClass="'w-full h-full'" :justify="'center'" :align="'center'" :direction="'column'">
            <FlexComponent :justify="'center'" :align="'center'" :addClass="'w-[50px] h-[50px] mb-2 border overflow-hidden rounded-lg'">
              <img src="../assets/images/image1.jpg" alt="">
            </FlexComponent>
            <FlexComponent :justify="'center'" :align="'center'" :addClass="'w-[50px] h-[50px] mb-2 border overflow-hidden rounded-lg'">
              <img src="../assets/images/image2.jpg" alt="">
            </FlexComponent>
            <FlexComponent :justify="'center'" :align="'center'" :addClass="'w-[50px] h-[50px] mb-2 border overflow-hidden rounded-lg'">
              <img src="../assets/images/image3.jpg" alt="">
            </FlexComponent>
          </FlexComponent>
        </div>
        <div class="w-[80%] p-3 h-full overflow-hidden">
          <FlexComponent :justify="'center'" :align="'center'" :addClass="'w-full h-full overflow-hidden'">
            <img class="h-full" :src="product.image" alt="">
          </FlexComponent>
        </div>
      </FlexComponent>
      <FlexComponent :direction="'column'" :addClass="'px-4'">
        <BraedCrumb :path="[{name: 'Home', url: '/'}, {name: 'Product', url: '/product-details'}, {name: 'Test', url: '/'}]"/>
        <h1 class="font-bold text-2xl pr-14">{{ product.name }}</h1>
        <FlexComponent gap="gap-0" :addClass="'my-2'" :align="'center'">
            <StarComponent :star="4"/>
            <span class="mx-2 text-sm">4.0</span>
            <i class='bx bx-comment-detail'></i>
            <span class="ms-2 text-sm">120 comment</span>
        </FlexComponent>
        <FlexComponent :align="'center'">
          <span class="font-bold text-sm">Select Size</span>
          <span class="text-slate-400 text-sm">Size Guide</span>
          <i class='bx bx-right-arrow-alt text-xl'></i>
        </FlexComponent>
        <FlexComponent :align="'center'">
          <span class="text-slate-400 text-sm uppercase rounded-md py-1 px-2 border">xl</span>
          <span class="text-slate-400 text-sm uppercase rounded-md py-1 px-2 border">m</span>
          <span class="text-slate-400 text-sm uppercase rounded-md py-1 px-2 border">s</span>
        </FlexComponent>
        <FlexComponent :align="'start'" :direction="'column'">
          <span class="font-bold text-sm">Colors Available</span>
          <FlexComponent>
            <span class="text-slate-400 text-sm uppercase rounded-full w-[20px] h-[20px]" style="background-color: blue;"></span>
            <span class="text-slate-400 text-sm uppercase rounded-full w-[20px] h-[20px]" style="background-color: black;"></span>
            <span class="text-slate-400 text-sm uppercase rounded-full w-[20px] h-[20px]" style="background-color: red;"></span>
          </FlexComponent>
        </FlexComponent>
        <FlexComponent :addClass="'mt-4'">
          <ButtonComponent text="Add To Cart" :fontWeight="'light'" :rounded="'rounded-md'" :fontSize="'0.8em'" :colorText="'text-slate-50'" :customClass="'bg-indigo-700'"/>
          <ButtonComponent :text="product.price" :styleButton="'outline'" :colorText="'text-slate-900'" :fontWeight="'light'" :rounded="'rounded-md'" :fontSize="'0.8em'"/>
        </FlexComponent>
        <FlexComponent :addClass="'py-4 w-full border-t-2'" :wrap="'wrap'">
          <span class="flex items-center min-w-1/2 text-sm">
            <i class='bx bx-credit-card-front me-2' ></i>
            Secure Payment
          </span>
          <span class="flex items-center min-w-1/2 text-sm">
            <i class='bx bxs-t-shirt me-2'></i>
            Size & Fit
          </span>
          <span class="flex items-center min-w-1/2 text-sm">
            <i class='bx bxs-truck me-2'></i>
            Free Shipping
          </span>
          <span class="flex items-center min-w-1/2 text-sm">
            <i class='bx bx-sync me-2'></i>
            Free Shipping & Returns
          </span>
        </FlexComponent>
      </FlexComponent>
    </GridComponent>
  </div>
  <div class="mt-14 px-40">
    <SectionTitle :title="'Product Descriptions'"/>
    <GridComponent :col="'grid-cols-2'">
      <div>
        <ul class="flex">
          <li v-for="(tab, index) in tabs" :key="index" :class="[index == 0 ? 'pl-0 border-b-2' : '', `tab`]" class="py-2 px-3 border-slate-500" @click="handleTab(index, $event)">{{ tab }}</li>
        </ul>
        <div v-if="tab1" class="py-4">
          <p class="text-sm text-justify">100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</p>
          <table class="mt-4 border">
            <tr class=" bg-slate-400 border-slate-500 border">
              <td class="p-4 text-sm border-slate-500 border"><strong class="block">Fabric</strong> Bio-washen cottom</td>
              <td class="p-4 text-sm border-slate-500 border"><strong class="block">Fabric</strong> Bio-washen cottom</td>
              <td class="p-4 text-sm border-slate-500 border"><strong class="block">Fabric</strong> Bio-washen cottom</td>
            </tr>
            <tr class=" bg-slate-400 border-slate-500 border">
              <td class="p-4 text-sm border-slate-500 border"><strong class="block">Fabric</strong> Bio-washen cottom</td>
              <td class="p-4 text-sm border-slate-500 border"><strong class="block">Fabric</strong> Bio-washen cottom</td>
              <td class="p-4 text-sm border-slate-500 border"><strong class="block">Fabric</strong> Bio-washen cottom</td>
            </tr>
            <tr class=" bg-slate-400 border-slate-500 border">
              <td class="p-4 text-sm border-slate-500 border"><strong class="block">Fabric</strong> Bio-washen cottom</td>
              <td class="p-4 text-sm border-slate-500 border"><strong class="block">Fabric</strong> Bio-washen cottom</td>
              <td class="p-4 text-sm border-slate-500 border"><strong class="block">Fabric</strong> Bio-washen cottom</td>
            </tr>
          </table>
        </div>
        <div v-if="tab2">
          Tab 2
        </div>
        <div v-if="tab3">
          Tab 3
        </div>
      </div>
      <FlexComponent :addClass="'p-4'" :justify="'center'" :align="'center'">
        <div class="w-[350px] h-[200px] rounded-md bg-slate-500">

        </div>
      </FlexComponent>
    </GridComponent>
  </div>
  <div class="px-40 mt-8">
    <CardSlider :products="products" :wrap="true" :title="'Similar Product'" :icon="true"/>
  </div>
  <div class="mt-14">
    <FooterComponent/>
  </div>
</template>

<script>
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';
import FooterComponent from '@/components/footer/FooterComponent.vue';
import GridComponent from '@/components/atom/GridComponent.vue';
import FlexComponent from '@/components/atom/FlexComponent.vue';
import BraedCrumb from '@/components/atom/BraedCrumb.vue';
import StarComponent from '@/components/atom/StarComponent.vue';
import ButtonComponent from '@/components/atom/ButtonComponent.vue';
import SectionTitle from '@/components/atom/SectionTitle.vue';
import CardSlider from '@/components/card/CardSlider.vue';
import TabsComponent from '@/components/atom/TabsComponent.vue';

export default {
  name: 'ProductDetails',
  components: {
    FooterComponent,
    GridComponent,
    FlexComponent,
    BraedCrumb,
    StarComponent,
    ButtonComponent,
    SectionTitle,
    CardSlider,
    TabsComponent,
    NavbarComponent
},
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Baju Kaos',
          price: 'Rp. 300.000',
          image: require('../assets/images/image1.jpg')
        },
        {
          id: 2,
          name: 'Knitted Joggers',
          price: 'Rp. 200.000',
          image: require('../assets/images/image2.jpg')
        },
        {
          id: 3,
          name: 'Full Sleeve',
          price: 'Rp. 400.000',
          image: require('../assets/images/image3.jpg')
        },
        {
          id: 4,
          name: 'Baju Kaos',
          price: 'Rp. 300.000',
          image: require('../assets/images/image1.jpg')
        },
        {
          id: 5,
          name: 'Knitted Joggers',
          price: 'Rp. 200.000',
          image: require('../assets/images/image2.jpg')
        },
        {
          id: 6,
          name: 'Full Sleeve',
          price: 'Rp. 400.000',
          image: require('../assets/images/image3.jpg')
        },
      ],
      tabs: ['Descriptions', 'Comments', 'Feddback'],
      tab1: true,
      tab2: false,
      tab3: false,
      product: []
    }
  },
  mounted() {
    document.title = 'Product Detail';
    setTimeout(() => {
      this.getProduct();
    }, 3000)
    console.log(this.$route.params)
  },
  methods: {
    getProduct() {
      this.products.filter(prod => {
        if(prod.id == this.$route.params.id) {
          this.product = prod
        }
      });
    },
    handleTab(index, event) {
      const tabs = document.querySelectorAll(`.tab`)
      tabs.forEach(el => {
        el.classList.remove('border-b-2')
      })
      event.target.classList.toggle('border-b-2')
      if(index == 0) {
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
      }else if(index == 1) {
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = false;
      }else {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = true;
      }
    }
  }
}
</script>

<style>

</style>