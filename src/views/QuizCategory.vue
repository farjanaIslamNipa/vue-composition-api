<template>
    <div class="container mx-auto">
        <div class="mt-6">
            <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
            <Question :question="quiz.questions[currentQuestionIndex]" />
            <div class="mt-4">
                <button @click="currentQuestionIndex++" class="rounded-md bg-slate-700 text-white px-4 py-2">Next Question</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import QuizHeader from '../components/QuizHeader.vue'
import Question from '../components/Question.vue'
import {useRoute} from 'vue-router'
import quizes from '../data/quizes.json'
import { ref, computed } from 'vue';

const route = useRoute()

const quizId = parseInt(route.params.id)

const quiz = quizes.find(q => q.id === quizId)

const currentQuestionIndex = ref(0)

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)

const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`)


</script>