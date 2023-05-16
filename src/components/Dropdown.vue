<template>
  <div class="bg-red-50">
      <div class="max-w-md mx-auto mt-20">
        <div class="relative inline-block text-left">
          <div>
            <button @click="isOpen = !isOpen" type="button"
              class="inline-flex justify-between items-center rounded-md px-5 py-3 text-sm font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none"
              id="menu-button" aria-expanded="true" aria-haspopup="true">
              {{ selectedLanguage }}
            </button>
          </div>
          <div v-if="isOpen" class="mt-6">
            <div class="absolute left-0 z-10 w-64 origin-top-right rounded-md bg-white focus:outline-none dropdown-box pb-4 custom-shadow"
              role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div @click="selectLanguage('English')" class="text-gray-500 hover:text-[#527ff6] px-5 border-l-2 border-l-white hover:border-l-[#527ff6] transition ease-out duration-200 cursor-pointer" role="none">
                <span class="tracking-widest border-b my-2 block py-4 text-sm capitalize">English</span>
              </div>
              <div @click="selectLanguage('Bangla')" class="text-gray-500 hover:text-[#527ff6] px-5 border-l-2 border-l-white hover:border-l-[#527ff6] transition ease-out duration-200 cursor-pointer" role="none">
                <span class="tracking-widest border-b my-2 block py-4 text-sm capitalize">Bangla</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false)
const selectedLanguage = ref('English')

const selectLanguage = (lang) => {
    selectedLanguage.value = lang
    isOpen.value = false
}
</script>

<style scoped>
.arrow-up {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}

.custom-shadow{
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
}

.dropdown-box::before{
  content: '';
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
  position: absolute;
  left: 15px;
  top: -10px;
}
</style>