<template>
  <div class="container border overflow-hidden min-w-full min-h-max px-40">
    <NavbarComponent />
    <BannerSlideComponent />
    <div class="grid grid-cols-2 gap-4 mt-14">
      <div class="min-h-[250px]">
        <CardDeal title="High Coziness" subTitle="Low Price" discount="UP TO 50% OF" />
      </div>
      <div class="min-h-[250px]">
        <CardDeal title="Breezy Summer Style" :bg="bg" subTitle="Beyoung Presents" discount="UP TO 50% OF"/>
      </div>
    </div>
    <div class="mt-14">
      <CardSlider :wrap="false" title="New Arrival" :action="false"/>
    </div>
    <div class="mt-14">
      <SectionTitle title="Big Saving Zone" />
      <div class="flex justify-between items-center gap-4 flex-wrap">
        <CardFull class="grow min-w-[30%]" />
        <CardFull class="grow min-w-[30%]"/>
        <CardFull class="grow min-w-[30%]" :position="`right`" />
        <CardFull class="grow min-w-[30%]" />
        <CardFull class="grow min-w-[30%]" />
      </div>
    </div>
    <div class="mt-14">
      <CardSlider :wrap="true"  title="Categories Men" :action="true"/>
    </div>
    <div class="mt-14">
      <CardSlider :wrap="false" title="Categories Woman" :action="true"/>
    </div>
    <div class="mt-14">
      <TopBrands :images="images" />
    </div>
    <div class="mt-14">
      <CardSlider :wrap="false" :icon="true" title="Categories Woman" :price="true" :action="false"/>
    </div>
    <div class="mt-14 overflow-hidden">
      <SectionTitle title="Feedback" />
      <div class="flex gap-4 justify-start items-center flex-nowrap">
        <CardFeedback v-for="(image, index) in imageFeedback" :image="image" :key="index" :star="index" class="border" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";
import BannerSlideComponent from "@/components/jumboTron/BannerSlideComponent.vue";
import CardDeal from "@/components/card/CardDeal.vue";
import CardSlider from "@/components/card/CardSlider.vue";
import SectionTitle from "@/components/atom/SectionTitle.vue";
import CardFull from '@/components/card/CardFull.vue';
import TopBrands from '@/components/atom/TopBrands.vue';
import CardFeedback from "@/components/card/CardFeedback.vue";
// Image
import image1 from '../assets/images/image 18.jpg'
import image2 from '../assets/images/image 19.jpg'
import image3 from '../assets/images/image 20.jpg'
import image4 from '../assets/images/image 21.jpg'
import feedback1 from '../assets/images/feedback1.png'
import feedback2 from '../assets/images/feedback2.png'
import feedback3 from '../assets/images/feedback3.png'
import feedback4 from '../assets/images/feedback4.png'
import feedback5 from '../assets/images/feedback5.png'

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
    CardFeedback
  },
  data() {
    return {
      bg: '#FFA41B',
      images: [image1, image2, image3, image4],
      imageFeedback: [feedback1, feedback2, feedback3, feedback4, feedback5]
    }
  }
};
</script>
