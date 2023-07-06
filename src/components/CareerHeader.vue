<template>
    <div class=" py-10 md:py-14 xl:py-20 mt-10">
        <div class="custom-container">

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import careerData from '../data/career.js';
console.log(careerData, 'value');
const openedRoles = ref([])

openedRoles.value = careerData

</script>

<style scoped>

</style>