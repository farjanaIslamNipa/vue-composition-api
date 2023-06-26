<template>
    <div class="custom-container mx-auto mt-10 relative h-96">
        <transition-group name="slide">
            <ul v-for="slide in sliderItems" :key="slide.id" class="">
                <li class="slide-item absolute"><img :src="slide.img" alt="" class="h-96 w-96 object-cover"></li>
            </ul>
        </transition-group>
    </div>
</template>

<script setup>
import {onBeforeMount, onMounted, onUnmounted, ref} from 'vue'

const sliderItems = ref([
  {
    "id": 0,
    "img": "/images/img-4.jpg"
  },
  {
    "id": 1,
    "img": "/images/img-3.jpg"
  },
  {
    "id": 2,
    "img": "/images/img-2.jpg"
  },
  {
    "id": 3,
    "img": "/images/img-1.jpg"
  }
])
</script>

<style scoped>
.slide-item:first-child{
    height: 50px !important;
}
</style>