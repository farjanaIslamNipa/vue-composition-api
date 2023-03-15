<script setup>
    const {quiz} = defineProps(['quiz'])
</script>
<template>
    <router-link :to="{name:'QuizCategory', params:{id:quiz.id}}" class="block bg-white rounded-md shadow-md p-4">
        <img :src="quiz.img" alt="" class="rounded-t-md">
        <p class="font-semibold text-capitalize text-lg mt-4">{{ quiz.name }}</p>
        <p class="text-capitalize">{{ quiz.questions.length }} Questions</p>
    </router-link>
</template>