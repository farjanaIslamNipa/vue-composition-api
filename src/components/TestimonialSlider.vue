<template>
 <section class="my-20 pl-4 md:pl-20 lg:pl-[100px] flex justify-between flex-wrap lg:flex-nowrap gap-8 xl:gap-16">
        <div class="w-full lg:w-2/5 pr-4 lg:pr-0 flex xl:flex-col gap-5 justify-between lg:justify-center">
            <h4 class="primary-heading">Don’t just believe our words</h4>
            <div class="flex items-center gap-4 xl:gap-6">
              <button
                  v-if="tempSliderItems.length === sliderItems.length"
                  class="rounded-full border border-[#DBDBDB] w-[46px] lg:w-[60px] h-[46px] lg:h-[60px] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" class="w-4 lg:w-[22px] transform rotate-0">
                  <path d="M5.43734 9.66673H21.6667V12.3334H5.43734L12.5893 19.4854L10.704 21.3707L0.333336 11.0001L10.704 0.629395L12.5893 2.51473L5.43734 9.66673Z" fill="#8D8D8F"/>
                </svg>
              </button>
                <button
                    v-else
                    @click="prevSlide()"
                    style="transform: rotate(180deg)"
                    class="rounded-full border border-[#DBDBDB] w-[46px] lg:w-[60px] h-[46px] lg:h-[60px] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" class="w-4 lg:w-[22px] transform rotate-180">
                      <path d="M5.43734 9.66673H21.6667V12.3334H5.43734L12.5893 19.4854L10.704 21.3707L0.333336 11.0001L10.704 0.629395L12.5893 2.51473L5.43734 9.66673Z" fill="#151414"/>
                    </svg>
                </button>

                <button
                    @click="nextSlide()" class="rounded-full border border-[#DBDBDB] w-[46px] lg:w-[60px] h-[46px] lg:h-[60px] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" class="w-4 lg:w-[22px] transform rotate-180">
                        <path d="M5.43734 9.66673H21.6667V12.3334H5.43734L12.5893 19.4854L10.704 21.3707L0.333336 11.0001L10.704 0.629395L12.5893 2.51473L5.43734 9.66673Z" fill="#151414"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="w-full lg:w-3/5 overflow-x-hidden flex gap-6 xl:gap-10">
            <div class="w-full flex gap-6 xl:gap-10">
              <transition-group name="slide">
                <div
                    v-for="(item, index) in tempSliderItems" :key="item.id"
                    class="testimonial-slider-item" :style="{'background-color': item.bg}">
                    <div>
                        <img :src="item.img" alt="Rasel Shuvo img" class="border-8 border-[#FCD7D3] rounded-full">
                        <p class="mt-6 xl:mt-8 text-xl xl:text-2xl font-semibold text-secondaryDark">
                          {{item.message}}
                        </p>
                    </div>
                    <div>
                        <h5 class="text-base font-semibold">Khandaker Enayet Ullah</h5>
                        <p class="text-sm text-secondaryDark mt-1">Secretary General (DSPMS)</p>
                    </div>
                </div>
              </transition-group>
            </div>
        </div>
    </section>
</template>

<script setup>
import {onBeforeMount, onMounted, onUnmounted, ref} from 'vue'

const sliderItems = ref([
  {
    "id": 0,
    "message": "slide item 1",
    "img": "~/assets/images/svg/enayet.svg",
    "bg": "#FEF2F0"
  },
  {
    "id": 1,
    "message": "slide item 2",
    "img": "~/assets/images/svg/mitu.svg",
    "bg": "#EFF7FD"
  },
  {
    "id": 2,
    "message": "slide item 3",
    "img": "~/assets/images/svg/jakir.svg",
    "bg": "#F1F9F1"
  },
  {
    "id": 3,
    "message": "slide item 4",
    "img": "~/assets/images/svg/enayet.svg",
    "bg": "#EFF7FD"
  },
  {
    "id": 4,
    "message": "slide item 5",
    "img": "~/assets/images/svg/mitu.svg",
    "bg": "#F1F9F1"
  },
])
const tempSliderItems = ref([])
onBeforeMount(() => tempSliderItems.value = [...sliderItems.value])
// const currentSlide = ref({})
const autoSlideInterVal = ref(null)
// const sliderInterval = ref(null)
// const activeProgress = ref(0)

const nextSlide = () => {
  // console.log("End--->", autoSlideInterVal.value)
  clearInterval(autoSlideInterVal.value)
  if (tempSliderItems.value.length > 0) {
    tempSliderItems.value.shift();
  }
  if (tempSliderItems.value.length === 0) {
    tempSliderItems.value = [...sliderItems.value]
  }
  startInterval()
}

const prevSlide = () => {
  // clearInterval(sliderInterval.value)
  clearInterval(autoSlideInterVal.value)
  const imidiatePrev = sliderItems.value.find(s => s.id === tempSliderItems.value[0].id - 1);
  tempSliderItems.value = [imidiatePrev, ...tempSliderItems.value]
  startInterval()
}

const startInterval = () => {
  autoSlideInterVal.value = setInterval(() => {
    nextSlide()
  }, 3000)
}

onMounted(() => {
  startInterval()

  window.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState === "visible") {
      console.log("Active", autoSlideInterVal.value)
      startInterval()
    } else {
      console.log("InActive", autoSlideInterVal.value)
      clearInterval(autoSlideInterVal.value)
    }
  });
})
onUnmounted(() => clearInterval(autoSlideInterVal.value))
</script>

<style scoped>
.slide-enter {
  opacity: 0;
}

.slide-move {
  transition: transform 1s;
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
}

.slide-leave-active {
  position: absolute;
  animation: slide-out 0.5s ease-out forwards;
  transition: opacity 0.5s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    opacity: 50%;
    transform: translateX(100px) scale(0.5);
  }
  80%  {
    opacity: 90%;
  }
  to {
    opacity: 100%;
    transform: scale(1);
  }
}

@keyframes slide-out {
  from {
    transform: scale(1);
    opacity: 80%;
  }

  to {
    opacity: 50%;
    transform: scale(.8);
  }
}
.testimonial-slider-item {
  @apply w-[348px] lg:w-[400px] rounded-3xl p-6 xl:p-8 flex flex-col justify-between flex-shrink-0 gap-8 xl:gap-10
}
/* .testimonial-slider-item:first-child {
  @apply bg-[#FEF2F0]
}
.testimonial-slider-item:nth-child(2) {
  @apply bg-[#EFF7FD]
}
.testimonial-slider-item:nth-child(3) {
  @apply bg-[#F1F9F1]
}
.testimonial-slider-item:nth-child(4) {
  @apply bg-[#F2F0FE]
}
.testimonial-slider-item:last-child {
  @apply bg-[#F1F9F1]
} */
</style>