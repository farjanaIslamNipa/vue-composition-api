<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";
import { FreeMode, Navigation, EffectFade} from 'swiper';
import { onMounted, ref } from 'vue';
const modules = [FreeMode, Navigation, EffectFade];

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


const swiperIndex = ref(0);
const progressYear = ref(2019)

const swiperCarousel = ref(true)

const onSwiper = (swiper) => {
    swiperCarousel.value = swiper
    swiperIndex.value = swiper.activeIndex
  };

onMounted(() => {
  swiperCarousel.value.on('slideNextTransitionEnd',()=>{
    let progressBarFill = document.querySelector('.fill-color-bar');
    let yearProgressWrap = document.querySelector('.year-progress-wrap');
    let yearProgress = document.querySelector('.year-progress');
 
    let progressBarWidth = swiperIndex.value += 1
    if(progressBarWidth <= 4){
      progressBarFill.style.width = `${(25 * progressBarWidth)}%`
      yearProgress.style.width = `${((25 * progressBarWidth) + 3.5)}%`
      yearProgressWrap.style.margin = '0 24px'
      progressYear.value = progressYear.value += 1
    }
    let nodeElement = document.getElementsByClassName('circle-wrap')[0]
    let circle = nodeElement.children[progressBarWidth - 1]
    circle.classList.add('change-color')

  });

  swiperCarousel.value.on('slidePrevTransitionEnd',()=>{
    let progressBarFill = document.querySelector('.fill-color-bar');
    let yearProgressWrap = document.querySelector('.year-progress-wrap');
    let yearProgress = document.querySelector('.year-progress');

    let progressBarWidth = swiperIndex.value -= 1
    progressYear.value = progressYear.value -= 1
    if(progressBarWidth >= 0 && progressBarWidth <= 4){
      progressBarFill.style.width = `${(25 * progressBarWidth)}%`
      if(progressBarWidth === 0){
        yearProgress.style.width = '90px'
        yearProgressWrap.style.margin = '0'
      }else{
        yearProgress.style.width = `${((25 * progressBarWidth) + 3.5)}%`
      }
    }
    let nodeElement = document.getElementsByClassName('circle-wrap')[0]
    let circle = nodeElement.children[progressBarWidth]
    circle.classList.remove('change-color')
  });
})

</script>
<template> 
    <div class="bg-[#082743] py-[60px] text-white relative overflow-hidden custom-swiper-slider">
      <div class="custom-container">
        <h1 class="text-4xl font-medium leading-[44px]">A bumpy <br>yet enjoyable ride</h1>
          <div class="mt-14">
            <div class="">
              <swiper
                :effect="'fade'"
                :navigation="true"
                :freeMode="true"
                :modules="modules"
                @swiper="onSwiper"
                class="mySwiper"
              >
                <swiper-slide v-for="slider in readMoreSlider" :key="slider.id" class="h-auto">
                  <div class="flex justify-between h-full">
                    <div>
                      <p class="">'19</p>
                    </div>
                    <div>
                    <div>
                      <img src="/images/slider-1.png" alt="Journey of Jatri">
                    </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>

      <div class="mt-20 relative">
        <div class="year-progress-wrap">
          <div class="year-progress flex justify-end">
            <div>
              <div class="bg-[#F04935] text-white rounded-full font-semibold w-[90px] h-[44px] flex justify-center items-center">{{ progressYear }}</div>
              <div class="flex justify-center"><img src="../assets/images/svg/fill-arrow-down.svg" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2 relative">
        <div class="mx-6">
          <div class="progress-bar relative h-4 w-full bg-[#FDE5E2] rounded-[15px]">
            <div class="circle-wrap flex h-4 ">
              <div class="w-1/4"></div>
              <div class="w-1/4"></div>
              <div class="w-1/4"></div>
              <div class="w-1/4"></div>
            </div>
            <div class="fill-color-bar"></div>
          </div>
        </div>
      </div>
      </div>

    </div>
</template>

<style>

:root {
  --progressbar-width: 0%;
}

.year-progress{
width: 90px;
transition: all 0.3s ease;
margin-left: -15px;
}

.circle-wrap div {
  position: relative;
  z-index: 2;
  transition: color .3s ease-in-out;
}

.circle-wrap div:first-child::before, 
.circle-wrap div:nth-child(2)::before, 
.circle-wrap div:nth-child(3)::before, 
.circle-wrap div:last-child::before{
  content: "";
  position: absolute;
  z-index: -1;
  background: #d1170356;
  transition: .3s ease-in-out;
  transition-duration: 0ms;
  border-radius: 2rem;
  height: 16px;
  width: 16px;
  right: 0;
}
.circle-wrap div:first-child::after{
  content: "";
  position: absolute;
  z-index: -1;
  background: #F04935;
  transition: .3s ease-in-out;
  transition-duration: 0ms;
  border-radius: 2rem;
  height: 16px;
  width: 16px;
  left: 0;
}
.change-color::before{
  content: "";
  position: absolute;
  z-index: -1;
  height: 100%;
  transition: .3s ease-in-out;
  transition-duration: 0ms;
  border-radius: 2rem;
  height: 16px;
  width: 16px;
  right: 0;
  background-color: #D42410 !important;
}

/* ------------------------------ */

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

.fill-color-bar{
    position: absolute;
    background-color: rgba(240, 73, 53, 0.7);
    width: 16px;
    height: 16px;
    border-radius: 15px;
    transition: all 0.3s ease;
    transition-duration: 0ms;
    top: 0;
}

</style>