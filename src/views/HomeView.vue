<template>
  <NavbarComponent />
  <div class="min-w-full min-h-max">
    <BannerSlideComponent :datas="banners" />
  </div>
  <div class="container overflow-hidden min-w-full min-h-max px-4 lg:px-40">
    <GridComponent col="grid-cols-2" addClass="lg:mt-8 mt-4">
      <div class="lg:min-h-[250px]">
        <CardDeal
          :image="require(`@/assets/images/image2.png`)"
          title="High Coziness"
          subTitle="Low Price"
          discount="UP TO 50% OF"
        />
      </div>
      <div class="lg:min-h-[250px]">
        <CardDeal
          :image="require('../assets/images/image3.png')"
          title="Breezy Summer Style"
          :bg="bg"
          subTitle="Beyoung Presents"
          discount="UP TO 50% OF"
        />
      </div>
    </GridComponent>
    <div class="lg:mt-14 mt-4">
      <CardSlider
        :products="products"
        :wrap="false"
        :column="4"
        title="New Arrival"
        :action="false"
      />
    </div>
    <div class="lg:mt-14 mt-4">
      <SectionTitle title="Big Saving Zone" />
      <FlexComponent :wrap="'wrap'">
        <CardFull
          :title="'Hawaiian Shirt'"
          :subTitle="'Dress up in summer vibe'"
          :image="require('../assets/images/image11.jpg')"
          class="grow lg:min-w-[30%] min-w-[50%]"
        />
        <CardFull
          :title="'Printed T-Shirt'"
          :position="`right`"
          :subTitle="'New design every week'"
          :image="require('../assets/images/image12.jpg')"
          class="grow lg:min-w-[30%] min-w-[50%]"
        />
        <CardFull
          :title="'Cargo Joggers'"
          :subTitle="'Move with style comfort'"
          :image="require('../assets/images/image13.jpg')"
          class="grow lg:min-w-[30%] min-w-[50%]"
          :position="`right`"
        />
        <CardFull
          :title="'Urban Shirts'"
          :subTitle="'Live in confort'"
          :image="require('../assets/images/image14.jpg')"
          class="grow lg:min-w-[30%] min-w-[50%]"
          :position="`right`"
        />
        <CardFull
          :title="'Urban Shirts'"
          :subTitle="'Live in confort'"
          :image="require('../assets/images/image15.jpg')"
          class="grow lg:min-w-[30%] min-w-[50%]"
          :position="`right`"
        />
      </FlexComponent>
    </div>
    <div class="lg:mt-14 mt-4">
      <CardSlider
        :products="products"
        :wrap="screen < 548 ? false : true"
        title="Categories Men"
        :action="true"
      />
    </div>
    <div class="mt-14">
      <CardSlider
        :products="products"
        :wrap="false"
        :column="4"
        title="Categories Woman"
        :action="true"
      />
    </div>
    <div class="lg:mt-14 mt-4">
      <TopBrands :images="images" />
    </div>
    <div class="mt-14">
      <CardSlider
        :products="products"
        :wrap="false"
        :column="4"
        :icon="true"
        title="Categories Woman"
        :price="true"
        :action="false"
      />
    </div>
    <div class="mt-14 overflow-hidden">
      <SectionTitle title="Feedback" />
      <div class="flex gap-4 justify-start items-center flex-nowrap">
        <CardFeedback
          v-for="(image, index) in imageFeedback"
          :image="image"
          :key="index"
          :star="index"
          class="border min-w-full lg:min-w-[32%]"
        />
      </div>
    </div>
  </div>
  <div class="mt-14">
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";
import BannerSlideComponent from "@/components/jumboTron/BannerSlideComponent.vue";
import CardDeal from "@/components/card/CardDeal.vue";
import CardSlider from "@/components/card/CardSlider.vue";
import SectionTitle from "@/components/atom/SectionTitle.vue";
import CardFull from "@/components/card/CardFull.vue";
import TopBrands from "@/components/atom/TopBrands.vue";
import CardFeedback from "@/components/card/CardFeedback.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import GridComponent from "@/components/atom/GridComponent.vue";
import FlexComponent from "@/components/atom/FlexComponent.vue";
// Image
import image1 from "@/assets/images/image 18.jpg";
import image2 from "@/assets/images/image 19.jpg";
import image3 from "@/assets/images/image 20.jpg";
import image4 from "@/assets/images/image 21.jpg";
import feedback1 from "@/assets/images/feedback1.png";
import feedback2 from "@/assets/images/feedback2.png";
import feedback3 from "@/assets/images/feedback3.png";
import feedback4 from "@/assets/images/feedback4.png";
import feedback5 from "@/assets/images/feedback5.png";
export default {
  name: "HomeView",
  components: {
    BannerSlideComponent,
    NavbarComponent,
    CardDeal,
    CardSlider,
    SectionTitle,
    CardFull,
    TopBrands,
    CardFeedback,
    FooterComponent,
    GridComponent,
    FlexComponent,
  },
  data() {
    return {
      bg: "#FFA41B",
      banners: [
        {
          title: 'Summer Value Pack',
          subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quo nulla nemo unde ducimus harum',
          image: require('../assets/images/Banner.jpg')
        },
        {
          title: 'Barang Baru Promo Terbatas',
          subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quo nulla nemo unde ducimus harum',
          image: require('../assets/images/image1.png')
        },
        {
          title: 'Barang Baru Promo Terbatas',
          subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quo nulla nemo unde ducimus harum',
          image: require('../assets/images/image1.jpg')
        },
      ],
      products: [
        {
          id: 1,
          name: "Baju Kaos",
          price: "Rp. 300.000",
          image: require("../assets/images/image1.jpg"),
        },
        {
          id: 2,
          name: "Knitted Joggers",
          price: "Rp. 200.000",
          image: require("../assets/images/image2.jpg"),
        },
        {
          id: 3,
          name: "Full Sleeve",
          price: "Rp. 400.000",
          image: require("../assets/images/image3.jpg"),
        },
        {
          id: 4,
          name: "Baju Kaos",
          price: "Rp. 300.000",
          image: require("../assets/images/image1.jpg"),
        },
        {
          id: 5,
          name: "Knitted Joggers",
          price: "Rp. 200.000",
          image: require("../assets/images/image2.jpg"),
        },
        {
          id: 6,
          name: "Full Sleeve",
          price: "Rp. 400.000",
          image: require("../assets/images/image3.jpg"),
        },
      ],
      images: [image1, image2, image3, image4],
      imageFeedback: [feedback1, feedback2, feedback3, feedback4, feedback5],
    };
  },
  computed: {
    screen() {
      return this.$store.state.screenSize;
    }
  },
  mounted() {
    document.title = "Home";
    const screen = window.innerWidth;
    this.$store.commit('setScreenSize', screen);
  },
};
</script>
