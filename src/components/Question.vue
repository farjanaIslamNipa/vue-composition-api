<script setup>
    const {question} = defineProps(['question'])
</script>
<template>
    <h3 class="text-2xl">{{ question.text }}</h3>
    <div v-for="option in question.options" :key="question.id" class="mt-3">
        <div class="flex items-center">
            <div class="h-10 w-10 bg-orange-200 flex justify-center items-center">
                <span class="font-semibold text-xl">{{ option.label }}</span>
            </div>
            <div class="bg-orange-50 w-1/2 h-10 flex items-center pl-5">
                {{ option.text }}
            </div>
        </div>
    </div>
</template>