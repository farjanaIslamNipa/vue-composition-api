<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode} from 'swiper';
import { computed, ref } from 'vue';
const modules = [FreeMode];

const readMoreSlider = ref([
  {
    id: 1,
    img:'/images/read-more-slide-1.svg',
    title:'London Express and Jatri Ticket Website are Together Now!',
    publishedAt: '12 Feb 2023',
    link: 'https://www.techinasia.com/jatri-pre-series-a-funding'
  },
  {
    id: 2,
    img:'/images/read-more-slide-2.svg',
    title:'Jeddah Express Jatri Ticket Website and are Together Now!',
    publishedAt: '12 Feb 2023',
    link: 'https://www.thedailystar.net/business/news/bus-owners-announce-jatri-dhakas-e-ticketing-partner-3170171'
  },
  {
    id: 3,
    img:'/images/read-more-slide-3.svg',
    title:'Green Line Jatri Ticket Website and Jeddah Express are Together Now!',
    publishedAt: '12 Feb 2023',
    link: 'https://today.thefinancialexpress.com.bd/metro-news/e-ticketing-for-all-mirpur-route-buses-from-today-1668268482?amp=true'
  },
  {
    id: 4,
    img:'/images/read-more-slide-4.png',
    title:'যাত্রী পার্টনার অ্যাপ: রেন্ট-এ-কার ব্যবসা খাতে নতুন সংযোজন !',
    publishedAt: '12 Feb 2023',
    link: 'https://www.dhakatribune.com/business/2023/01/10/bus-owners-association-and-jatri-to-bring-more-bus-companies-under-e-ticketing-system'
  },
  {
    id: 5,
    img:'/images/read-more-slide-2.svg',
    title:'Jeddah Express Jatri Ticket Website and are Together Now!',
    publishedAt: '12 Feb 2023',
    link: 'https://www.thedailystar.net/business/news/bus-owners-announce-jatri-dhakas-e-ticketing-partner-3170171'
  },
  {
    id: 6,
    img:'/images/read-more-slide-3.svg',
    title:'Green Line Jatri Ticket Website and Jeddah Express are Together Now!',
    publishedAt: '12 Feb 2023',
    link: 'https://today.thefinancialexpress.com.bd/metro-news/e-ticketing-for-all-mirpur-route-buses-from-today-1668268482?amp=true'
  }
]);

const firstElement = ref(false);
const lastElement = ref(false);

const swiperCarousel = ref(true)

const onSwiper = (swiper) => {
    swiperCarousel.value = swiper
    console.log(swiper, 'swiper');
  };

const slideNext = () => {
  swiperCarousel.value.slideTo(swiperCarousel.value.realIndex + 1)
  if(swiperCarousel.value.isEnd === true){
    lastElement.value = true
    firstElement.value = false
  }
}
const slidePrev = () => {
  swiperCarousel.value.slideTo(swiperCarousel.value.realIndex - 1)
  if(swiperCarousel.value.realIndex === 0){
    firstElement.value = true
    lastElement.value = false
  }
}

</script>
<template>
    <div class="bg-[#F7F7F7]">
      <div class="custom-container py-10">
        <div class="flex justify-between items-center lg:items-end mb-[22px] md:mb-8">
          <div>
            <h2 class="text-[28px] lg:text-[57px] text-dark font-semibold leading-9 lg:leading-[64px]">Read more about us</h2>
          </div>
          <div>
            <div class="flex gap-6 lg:gap-8 items-center">
              <button @click="slidePrev" class="h-[46px] lg:h-[60px] w-[46px] lg:w-[60px] flex justify-center items-center border border-[#DBDBDB] rounded-full">
                <img :class="firstElement ? 'opacity-30' : 'opacity-100'" class="h-[20px] w-[21px]" src="./assets/images/svg/arrow-prev.svg" alt="Previous Arrow">
              </button>
              <button @click="slideNext" class="h-[46px] lg:h-[60px] w-[46px] lg:w-[60px] flex justify-center items-center border border-[#DBDBDB] rounded-full">
                <img :class="lastElement ? 'opacity-30' : 'opacity-100'" class="h-[20px] w-[21px]" src="./assets/images/svg/arrow-next.svg" alt="Previous Arrow">
              </button>
            </div>
          </div>
        </div>
          <div class="mb-0 lg:mb-[48px] counter-section">
              <div class="full-width">
                <swiper
                  :breakpoints="{
                    320: {
                      slidesPerView: 1.2,
                      spaceBetween: 20
                    },
                    640: {
                      slidesPerView: 2.8,
                      spaceBetween: 20
                    },
                    1024: {
                      slidesPerView: 3.3,
                      spaceBetween: 20
                    },
                    1280: {
                      slidesPerView: 3.9,
                      spaceBetween: 25
                    }
                  }"
                  :spaceBetween="30"
                  :freeMode="true"
                  :modules="modules"
                  @swiper="onSwiper"
                  class="mySwiper"
                >
                  <swiper-slide v-for="slider in readMoreSlider" :key="slider.id" class="h-auto">
                    <div class="flex flex-col justify-between min-h-[342px] bg-white rounded-2xl py-4 px-4 h-full">
                      <div>
                        <div class="flex justify-center mb-4 slider-img">
                          <img class="rounded-2xl" :src="slider.img" alt="Feature Slider">
                        </div>
                        <p class="text-[#4D4D4F] text-sm leading-5 font-medium mb-2">{{ slider.publishedAt }}</p>
                        <h3 class="text-dark font-medium text-[20px] leading-7">{{ slider.title }}</h3>
                      </div>
                      <div>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
          </div>
      </div>
    </div>
</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
}
.slider-img {
  height: 220px;
  width: 100%;
}
.slider-img img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}


</style>