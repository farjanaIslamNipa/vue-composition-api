<script setup>

</script>

<template>
  <div class="custom-container pb-120">
    <div class="bg-[#F7F7F7] rounded-3xl">
      <div class="flex flex-wrap flex-row-reverse md:flex-row w-full justify-center items-center">
        <div class="w-full md:w-[60%] px-4 sm:px-10 lg:px-20 xl:px-[106px] order-2 md:order-1 pt-6 md:pt-0 pb-5 md:pb-0">
          <p class="uppercase text-body text-[16px] leading-6 font-medium mb-1">jatri Partner App</p>
            <h3 class="text-dark text-2xl lg:text-3xl leading-[24px] font-medium mb-4">Drive forward with Jatri</h3>
            <p class="text-[#4D4D4F] text-sm lg:text-[16px] leading-6">Add a new dimension to your car or microbus rental business by digitizing every trip. With exciting trip deals, flexible bookings and competitive pricing, you'll never go back to the old manual rental system again</p>
            <div class="mt-4 lg:mt-6 flex gap-4">
              <router-link to="#" class="bg-[#EDEDED] h-[46px] w-[158px] flex justify-center items-center text-dark md:text-sm lg:text-[16px] leading-6 font-medium rounded-full">Download app</router-link>
              <router-link to="#" class="bg-[#EDEDED] h-[46px] w-[135px] flex justify-center items-center text-dark md:text-sm lg:text-[16px] leading-6 font-medium rounded-full">Learn more</router-link>
            </div>
        </div>
        <div class="h-[250px] md:h-[280px] lg:h-[350px] xl:h-[420px] w-full md:w-[40%] order-1 md:order-2">
          <img class="h-full w-full object-cover rounded-3xl rounded-tl-3xl md:rounded-tl-none rounded-bl-none rounded-tr-3xl rounded-br-none md:rounded-br-3xl" src="../assets/images/svg/partner-app.svg" alt="Jatri Partner App">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
}
</style>