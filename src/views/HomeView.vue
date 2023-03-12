<script setup>
import { ref } from 'vue';

  const showModal = ref(false);
</script>

<template>
  <div v-if="showModal" class="overlay bg-gray-900/75 z-10 absolute flex justify-center items-center h-screen w-full">
    <div class="bg-white w-1/3 rounded-md p-6 relative">
      <textarea name="" id="" rows="3" class="rounded-md border w-full"></textarea>
      <div class="text-end mt-3">
        <button class="bg-blue-900 rounded-md px-4 py-2 text-white font-semibold">Add Note</button>
        <button class="bg-gray-500 rounded-md px-4 py-2 text-white font-semibold ml-2">Close</button>
      </div>
    </div>
  </div>
  <div class="container mx-auto mt-5">
    <div class="flex justify-between items-center">
      <h1 class="text-gray-700 text-3xl font-bold">Notes</h1>
      <button @click="showModal = true" class="bg-gray-800 rounded-full h-10 w-10 flex justify-center items-center text-white text-3xl leading-none p-0 pb-1">+</button>
    </div>
    <div class="mt-8 flex flex-wrap gap-5">
      <div class="bg-purple-300 rounded-md p-4 flex flex-col justify-between h-48 w-48">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur.</p>
        <p class="font-semibold">Date: 12-03-31</p>
      </div>
      <div class="bg-purple-300 rounded-md p-4 flex flex-col justify-between h-48 w-48">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur.</p>
        <p class="font-semibold">Date: 12-03-31</p>
      </div>
    </div>
  </div>
</template>
