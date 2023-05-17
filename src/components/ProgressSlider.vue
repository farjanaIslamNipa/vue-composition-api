<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode} from 'swiper';
import { computed, onMounted, ref } from 'vue';
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
  }
]);

const firstElement = ref(false);
const lastElement = ref(false);
const swiperIndex = ref(0)

const swiperCarousel = ref(true)

const onSwiper = (swiper) => {
    swiperCarousel.value = swiper
    swiperIndex.value = swiper.activeIndex
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

onMounted(() => {
  swiperCarousel.value.on('slideNextTransitionEnd',()=>{
  let progressBarFill = document.querySelector('.color1');
  let progressBarWidth = swiperIndex.value += 1
  if(progressBarWidth <= 4){
    progressBarFill.style.width = `${(25 * progressBarWidth)}%`
  }

  });

  swiperCarousel.value.on('slidePrevTransitionEnd',()=>{
    let progressBarFill = document.querySelector('.color1');
    let progressBarWidth = swiperIndex.value -= 1
    if(progressBarWidth >= 0 && progressBarWidth <= 4){
      progressBarFill.style.width = `${(25 * progressBarWidth)}%`
    }
  });
})

</script>
<template>
    <div class="bg-[#F7F7F7]">
      <div class="custom-container py-10">
        <div class="flex justify-between items-center lg:items-end mb-[22px] md:mb-8">
          <div>
          <h1 class="text-center text-2xl">{{ swiperIndex }}</h1>
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

      <div class="mt-8 flex items-center">
        <div class="progress">
          <div class="circle-wrap">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="color1"></div>
        </div>
      </div>
      </div>

    </div>
</template>

<style scoped>
:root {
  --progressbar-width: 0%;
}
.progress-circle{
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: #F7A299;
}
.circle-wrap{
  height: 16px;
  position: relative;
  overflow: hidden;
  z-index: 0;
  display: flex;
  justify-content: center;
}

.circle-wrap div:first-child::before, .circle-wrap div:nth-child(2)::before, .circle-wrap div:nth-child(3)::before, .circle-wrap div:last-child::before{
  content: "";
  position: absolute;
  z-index: -1;
  height: 100%;
  background: #d1170356;
  transition: .3s ease-in-out;
  border-radius: 2rem;
  height: 16px;
  width: 16px;
  right: 0;
}
.circle-wrap div:first-child::after{
  content: "";
  position: absolute;
  z-index: -1;
  height: 100%;
  background: #d1170356;
  transition: .3s ease-in-out;
  border-radius: 2rem;
  height: 16px;
  width: 16px;
  left: 0;
}

.circle-wrap div:first-child, .circle-wrap div:nth-child(2), .circle-wrap div:nth-child(3), .circle-wrap div:last-child {
  width: 25%;
}

.circle-wrap div {
  position: relative;
  z-index: 2;
  text-align: center;
  transition: color .3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 16px;
  width: 16px;
  cursor: pointer;
  background: #F04935; */
  border-radius: 2rem;
}

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

.progress{
    position: relative;
    height: 16px;
    width: 100%;
    background-color: #FDE5E2;
    border-radius: 15px;
}
.color1, .color2, .color3, .color4{
    position: absolute;
    background-color: #d1170356;
    width: 16px;
    height: 16px;
    border-radius: 15px;
    transition: all 0.3s ease;
    top: 0;
    /* animation: progres 4s linear;     */
}
@keyframes progres{
    0%{
      width: 0%;
    }
    25%{
        width: 50%;
    }
    50%{
        width: 75%;
    }
    75%{
        width: 85%;
    }
    100%{
        width: 100%;
    }
};
</style>