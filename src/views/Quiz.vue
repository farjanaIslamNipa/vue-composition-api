<script setup>
    import q from '../data/quizes.json'
    import {ref, watch} from "vue"
    import Card from '../components/Card.vue'

    const quizes = ref(q)
    const search = ref("")

    watch(search, () => {
        quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
    })
</script>

<template>
    <div class="container mx-auto">
        <div class="mt-6">
            <header>
                <div class="flex gap-4 items-center">
                    <h1 class="font-bold text-xl">Quizes</h1>
                    <input v-model.trim="search" type="text" class="border rounded-sm py-1 px-2 mt-3 shadow-sm" placeholder="Search...">
                </div>
            </header>
            <div class="main mt-8">
                <div class="grid grid-cols-4 gap-x-6 items-center">
                    <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
                </div>
            </div>
        </div>
    </div>
</template>