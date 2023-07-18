<template>
    <div class="container mx-auto pt-5 pb-10">
        <form @submit.prevent="submitForm" class="w-1/3">
            <div>
                {{ JSON.stringify(formValue, null, 2) }}
            </div>
            <div class="mt-5 mb-4">
                <label for="" class="block">Name</label>
                <input type="text" v-model.trim="formValue.name" class="border w-full">
            </div>
            <div class="mb-4">
                <label for="" class="block">Profile Summary</label>
                <textarea cols="3" type="text" v-model="formValue.profileSummary" class="border w-full"></textarea>
            </div>
            <div class="mb-4">
                <label for="" class="block">Country</label>
                <select v-model="formValue.country" class="border w-full">
                    <option value="">Select a country</option>
                    <option value="bangladesh">Bangladesh</option>
                    <option value="thailand">Thailand</option>
                    <option value="japan">Japan</option>
                </select>
            </div>
            <div class="mb-4">
                <label for="" class="block">Job Location</label>
                <select v-model="formValue.jobLocation" multiple class="border w-full">
                    <option value="bangladesh">Bangladesh</option>
                    <option value="thailand">Thailand</option>
                    <option value="japan">Japan</option>
                </select>
            </div>
            <div class="mb-4">
                <input type="checkbox" name="remoteWork" id="remoteWork" v-model="formValue.remoteWork" true-value="yes" false-value="no" class="mr-2">
                <label for="remoteWork">Open to remote work?</label>
              
            </div>
            <div class="mb-4">
                <label for="html" class="block mb-2">Skill set</label>
                <div class="flex gap-4">
                    <div>
                        <input type="checkbox" id="html" name="skillSet" value="html" v-model="formValue.skillSet" class="mr-1">
                        <label for="html">HTML</label>
                    </div>
                    <div>
                        <input type="checkbox" id="css" name="skillSet" value="css" v-model="formValue.skillSet" class="mr-1">
                        <label for="css">CSS</label>
                    </div>
                    <div>
                        <input type="checkbox" id="javascript" name="skillSet" value="javascript" v-model="formValue.skillSet" class="mr-1">
                        <label for="javascript">Javascript</label>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <label for="" class="block mb-2">Years of experience</label>
                <div class="flex gap-4">
                    <div>
                        <input type="radio" name="yearsOfExperience" id="0-2" value="0-2" v-model="formValue.yearsOfExperience">
                        <label for="0-2" class="ml-1">0-2</label>
                    </div>
                    <div>
                        <input type="radio" name="yearsOfExperience" id="3-5" value="3-5" v-model="formValue.yearsOfExperience">
                        <label for="3-5" class="ml-1">3-5</label>
                    </div>
                    <div>
                        <input type="radio" name="5yearsOfExperience" id="5-10" value="5-10" v-model="formValue.yearsOfExperience">
                        <label for="5-10" class="ml-1">5-10</label>
                    </div>
                    <div>
                        <input type="radio" name="yearsOfExperience" id="10+" value="10+" v-model="formValue.yearsOfExperience">
                        <label for="10+" class="ml-1">10+</label>
                    </div>
                </div>
            </div>
            <div class="text-end">
                <button @keyup.enter="submitForm" class="bg-green-800 text-white font-medium px-5 py-2 rounded-md">Submit</button>
            </div>
        </form>
    </div>
    </template>
    
    <script setup>
    import { ref } from 'vue';
    
    const formValue = ref({
        name: '',
        profileSummary:'',
        country: '',
        jobLocation: [],
        remoteWork: 'no',
        skillSet: [],
        yearsOfExperience: ''
    })
    
    const submitForm = () => {
        console.log(formValue.value, 'value')
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