<template>
    <div class="container mx-auto mt-10 text-center">
        <form @submit.prevent="createPost" action="">
            <label for="userId">Post user id</label> <br>
            <input type="text" v-model="formData.userId" class="mb-3 border"> <br>
            <label for="userId">Post Title</label> <br>
            <input type="text" v-model="formData.title" class="mb-3 border"> <br>
            <label for="userId">Post Body</label> <br>
            <input type="text" v-model="formData.body" class="mb-3 border"> <br>
            <button>Create Post</button>
        </form>

        <button @click="loadPosts" class="border py-2 font-semibold px-5 bg-sky-700 text-white rounded-md">Load posts</button>
        <div v-for="post in posts" :key="post.id" class="text-start">
            <h3 class="font-medium text-2xl">{{ post.title }}</h3>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from "axios";

const posts = ref([])
const formData = ref({
    userId: '',
    title: '',
    body: ''
})

const loadPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            posts.value = res.data
            console.log(res.data, 'data')
        })  
        .catch(err => console.log(err)) 
}

const createPost = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', formData.value)
        .then(res => {
            console.log(res.data, 'data')
        })  
        .catch(err => console.log(err)) 
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