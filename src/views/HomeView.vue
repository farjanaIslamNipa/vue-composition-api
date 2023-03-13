<script setup>
import { ref, watch } from 'vue';

  const showModal = ref(false);
  const newNote = ref("");
  const notes = ref([])
  const error = ref("")


  const getRandomColor = () => {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  }

  const addNote = () => {
    if(newNote.value.length <= 9){
      return error.value = "Note should be more than 10 characters";
      
    }else{
      notes.value.push({
      id: Math.floor(Math.random() * 1000000),
      text: newNote.value,
      date: new Date(),
      backgroundColor: getRandomColor()
      });
      showModal.value = false;
      newNote.value = "";
      error.value = ""
    }
  }

  watch(newNote, (currentNewNote) => {
   if(currentNewNote.length > 9){
    error.value = ""
   }
});
</script>

<template>
  <div v-if="showModal" class="overlay bg-gray-900/75 z-10 absolute flex justify-center items-center h-screen w-full">
    <div class="bg-white w-1/3 rounded-md p-6 relative">
      <textarea v-model.trim="newNote" name="note" id="note" rows="3" class="rounded-md border w-full"></textarea>
      <p v-if="error" class="text-red-600">{{ error }}</p>
      <div class="text-end mt-3">
        <button @click="addNote" class="bg-blue-900 rounded-md px-4 py-2 text-white font-semibold">Add Note</button>
        <button @click="showModal = false" class="bg-gray-500 rounded-md px-4 py-2 text-white font-semibold ml-2">Close</button>
      </div>
    </div>
  </div>
  <div class="container mx-auto mt-5">
    <div class="flex justify-between items-center">
      <h1 class="text-gray-700 text-3xl font-bold">Notes</h1>
      <button @click="showModal = true" class="bg-gray-800 rounded-full h-10 w-10 flex justify-center items-center text-white text-3xl leading-none p-0 pb-1">+</button>
    </div>
    <div class="mt-8 flex flex-wrap gap-5">
      <div v-for="note in notes" :key="note.id" :style="{backgroundColor: note.backgroundColor}" class="rounded-md p-4 flex flex-col justify-between h-48 w-48">
        <p>{{ note.text }}</p>
        <p>{{ note.date.toLocaleDateString() }}</p>
      </div>
    </div>
  </div>
</template>
