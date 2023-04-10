<script setup>

</script>
<template>
    <div class="relative">
      <div class="custom-container py-10">
        <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-6 bg-corporate rounded-none lg:rounded-[32px] lg:rounded-tr-none lg:rounded-br-none relative order-2 lg:order-1">
          <div class="hidden lg:block">
            <div class="curve">
              <svg height="100%" viewBox="0 0 144 572" fill="none" preserveAspectRatio="xMinYMin" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 571.995C13.9853 561.628 27.2718 550.188 39.73 537.73C106.493 470.967 144 380.417 144 286C144 191.583 106.493 101.033 39.73 34.27C27.2718 21.8118 13.9853 10.3723 0 0.00514693V571.995Z" fill="#f04935"></path>
              </svg>
            </div>
          </div>
          <div class="block lg:hidden">
            <div class="curve-mobile">
              <svg width="100%" viewBox="0 0 375 33" fill="none" preserveAspectRatio="xMinYMin" xmlns="http://www.w3.org/2000/svg">
                  <path d="M375 31.6325V33H0V31.2873C59.6132 10.7621 122.751 -9.39742e-05 187 -0.000100361C251.608 -0.000106784 315.093 10.8828 375 31.6325Z" fill="#f04935"></path>
                </svg>
            </div>
          </div>
          <!-- <div class="absolute right-[-106px]">
            <img src="./assets/images/svg/yellow-ellipse.svg" alt="Jatri Career">
          </div> -->
          <!-- <div class="absolute bottom-0 left-0">
            <img class="rounded-bl-[32px]" src="./assets/images/svg/red-ellipse.svg" alt="Jatri Career">
          </div> -->
          <div class="flex items-center justify-center text-white h-full mx-10 lg:mx-0 pl-0 lg:pl-10 xl:pl-20 py-20 lg:py-0">
          <div class="relative">
            <h3 class="text-[40px] xl:text-[45px] font-semibold leading-[52px] mb-6">Join the winning team!</h3>
            <p class="text-[16px] leading-6 font-medium">Join our exciting team in the quest of empowering Bangladesh to travel better!</p>
            <div class="mt-12">
              <router-link class="bg-white text-corporate text-[16px] font-medium h-[46px] w-[145px] flex justify-center items-center rounded-full" to="#">Join Jatri</router-link>
            </div>
          </div>
        </div>
        </div>

        <div class="col-span-12 lg:col-span-6 career-img order-1 lg:order-2">
          <img class="hidden lg:block rounded-[32px] rounded-tl-none rounded-bl-none" src="./assets/images/svg/carrer-banner.svg" alt="Jatri Career">
          <img class="block lg:hidden" src="./assets/images/svg/career-banner.jpg" alt="Jatri Career">
        </div>
        </div>
      </div>

      <!-- <div class="thing"></div> -->
    </div>
</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
}
.career-img{
  height: 440px !important;
  width: auto;
}
.career-img img{
  height: 100% !important;
  width: 100%;
  object-fit: cover;
}
.curve{
  display: block;
  height: 100%;
  width: auto;
  position: absolute;
  right: 1px;
  top: 0;
  -webkit-transform: translateX(100%);
}
.curve-mobile{
  height: auto;
    width: 100%;
    position: absolute;
    right: 0;
    top: 1px;
    -webkit-transform: translateY(-99%);
}
.thing {
  width: 400px;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.thing::before,
.thing::after {
  content: '';
  z-index: 1;  
  position: absolute;
}

/* .thing::before {
  border-top: 2px solid black;
  left: 0;
  right: 0;
  top: 0;
  height: 2px;  
} */

.thing::after {
  border-radius: 60%;
  left: 20px;
  right: 20px;
  height: 300px;
  top: -234px;
  background-color: red;
}


</style>