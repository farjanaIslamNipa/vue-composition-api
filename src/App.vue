<template>
    <div class="container mx-auto mt-10">
        This is pop up <br>
        <button @click="showPopup = true" class="border p-4">Open Popup</button>
        <Popup v-show="showPopup" @close="closePopup" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Popup from './components/Popup.vue';

const showPopup = ref(false)

const closePopup = (name) => {
    showPopup.value = false
    console.log(name, 'emit')
}
</script>

<style scoped>
/* Only the scroll bar */
::-webkit-scrollbar {
    width: .5rem;
    height: .5rem;
}
::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,.15);
}
::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,.3);
}
</style>