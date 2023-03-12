<script setup>
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";

    const date = ref();
    const username = ref('');
    const items = ref([]);
    const itemsArr = ref(['gmail', 'yahoo', 'hotmail']);
    const toast = useToast();
    const show = (event) => {
        toast.add({severity:"success", summary: 'Success', detail: 'Message Content', life: 3000})
    }
    const search = (event) => {
        items.value = itemsArr.value.map((item) =>  event.query + '@' + item + '.com');
    }
    const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>

<template>
    <Toast />
    <div class="py-20 bg-gradient-to-r from-[#667eea] to-[#764ba2]">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold mb-2 text-white">Tutorial List</h2>
            <h3 class="text-2xl mb-8 text-gray-200">Monitor your health vitals smartly anywhere you go.</h3>
            <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                Pre Order
            </button>
        </div>
    </div>
    <div class="container mx-auto py-10">
        <div class="flex items-cen space-x-2">
            <div>
                <span class="p-float-label">
                    <InputText id="user_name" v-model="username" />
                    <label for="user_name">Username</label>
                </span>
            </div>
            <div><Button @click="show()" label="Submit" severity="secondary" icon="pi pi-check" iconPos="right" /></div>
        </div>
        <div class="card flex justify-content-center mt-6">
            <AutoComplete v-model="value" :suggestions="items" @complete="search" />
        </div>
        <div class="card flex justify-content-center mt-6">
            <Calendar v-model="date" showIcon />
        </div>
        <div class="card flex justify-content-center my-6">
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
    </div>
    </div>
    <div class="container mx-auto mt-10 border">
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                    <thead
                        class="bg-white font-medium dark:bg-neutral-600">
                        <tr>
                        <th scope="col" class="px-6 py-4">#</th>
                        <th scope="col" class="px-6 py-4">First</th>
                        <th scope="col" class="px-6 py-4">Last</th>
                        <th scope="col" class="px-6 py-4">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        class="bg-neutral-100 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td class="whitespace-nowrap px-6 py-4">Mark</td>
                        <td class="whitespace-nowrap px-6 py-4">Otto</td>
                        <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                        </tr>
                        <tr
                        class="bg-white dark:bg-neutral-600">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                        <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                        <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                        <td class="whitespace-nowrap px-6 py-4">@fat</td>
                        </tr>
                        <tr
                        class="bg-neutral-100 dark:bg-neutral-700">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                        <td
                            colspan="2"
                            class="whitespace-nowrap px-6 py-4 text-center">
                            Larry the Bird
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
