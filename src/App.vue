<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode} from 'swiper';
import { ref } from 'vue';
const modules = [FreeMode];

const swiperBtn = ref(true)

const onSwiper = (swiper) => {
  swiperBtn.value = swiper
        console.log(swiperBtn.value, 'true');
      };
const onSlideChange = () => {
  console.log('slide change');
};

const slideNext = () => {
  swiperBtn.value.slideTo(swiperBtn.value.realIndex++)
}
</script>
<template>
    <div class="custom-container pt-10">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h2 class="text-[57px] text-dark font-semibold leading-64px">We got featured</h2>
        </div>
        <div>
          <div class="flex gap-8 items-center">
            <button class="h-[60px] w-[60px] flex justify-center items-center border border-[#DBDBDB] rounded-full">
              <img class="h-[20px] w-[21px]" src="./assets/images/svg/arrow-prev.svg" alt="Previous Arrow">
            </button>
            <button class="h-[60px] w-[60px] flex justify-center items-center border border-[#DBDBDB] rounded-full">
              <img class="h-[20px] w-[21px]" src="./assets/images/svg/arrow-next.svg" alt="Previous Arrow">
            </button>
          </div>
        </div>
      </div>
        <div class="mb-0 lg:mb-[48px] counter-section">

            <div class="full-width">
              <swiper
                :breakpoints="{
                  320: {
                    slidesPerView: 1
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  1024: {
                    slidesPerView: 3.5,
                    spaceBetween: 30
                  }
                }"
                :spaceBetween="30"
                :freeMode="true"
                :modules="modules"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                class="mySwiper"
              >
              <button @click="slideNext()">Slide to the next slide</button>
                <swiper-slide>
                  <div class="flex flex-col justify-between min-h-[500px] bg-[#FEF2F0] rounded-2xl py-6 px-6">
                    <div>
                      <div class="flex justify-center mb-4">
                        <img class="rounded-2xl" src="./assets/images/svg/slider-img-1.svg" alt="Feature Slider">
                      </div>
                      <h3 class="text-dark font-medium text-2xl leading-8">Bangladeshi transport app secures $1.2m to fuel national expansion</h3>
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio debitis incidunt? Dignissimos dolores molestiae odio officiis, delectus incidunt eaque vitae voluptatum, praesentium quis numquam veniam, nisi aliquid et autem.
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center">
                    <div>
                      <div class="min-h-[120px] flex justify-center items-end">
                        <img src="./assets/images/svg/counter-2.svg"  alt="Counter" class="" >
                      </div>
                      <div class="mt-4">
                        <div class="text-center relative z-20">
                          <p class="text-dark text-[28px] lg:text-[38px] xl:text-[45px] font-bold mb-[2px] xl:mb-[8px] leading-[36px] lg:leading-[52px]">100 millions+</p>
                          <p class="text-body text-[16px] xl:text-[20px] font-medium leading-[24px] lg:leading-[28px]">Tickets served</p>
                        </div>
                        <img src="./assets/images/svg/small-device-gray-shape-bg.svg" class="small-device-gray-shape-img z-10" alt="">
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center">
                    <div>
                      <div class="min-h-[120px] flex justify-center items-end">
                        <img src="./assets/images/svg/counter-3.svg"  alt="Counter" class="" >
                      </div>
                      <div class="mt-4">
                        <div class="text-center relative z-20">
                          <p class="text-dark text-[28px] lg:text-[38px] xl:text-[45px] font-bold mb-[2px] xl:mb-[8px] leading-[36px] lg:leading-[52px]">100K+</p>
                          <p class="text-body text-[16px] xl:text-[20px] font-medium leading-[24px] lg:leading-[28px]">Rental partners</p>
                        </div>
                        <img src="./assets/images/svg/small-device-gray-shape-bg.svg" class="small-device-gray-shape-img z-10" alt="">
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center">
                    <div>
                      <div class="min-h-[120px] flex justify-center items-end">
                        <img src="./assets/images/svg/counter-3.svg"  alt="Counter" class="" >
                      </div>
                      <div class="mt-4">
                        <div class="text-center relative z-20">
                          <p class="text-dark text-[28px] lg:text-[38px] xl:text-[45px] font-bold mb-[2px] xl:mb-[8px] leading-[36px] lg:leading-[52px]">100K+</p>
                          <p class="text-body text-[16px] xl:text-[20px] font-medium leading-[24px] lg:leading-[28px]">Rental partners</p>
                        </div>
                        <img src="./assets/images/svg/small-device-gray-shape-bg.svg" class="small-device-gray-shape-img z-10" alt="">
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
}


.gray-shape-bg{
    margin-top: -55px;
}
.small-device-gray-shape{
  margin-top: -40px;
}
.small-device-gray-shape-img{
  height: 75px !important;
  width: 390px !important;
  margin-top: -40px;
}

@media(max-width:1280px){
  .gray-shape-bg{
    margin-top: -45px;
  }
}
@media(max-width:1280px){
  .gray-shape-bg{
    margin-top: -45px;
  }
}
</style>