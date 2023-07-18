<template>
    <div class="container p-28">
        <div class="border mt-5 p-10">
            This is child component <br>
            <button @click="$emit('close', 'nipa')" class="border p-2">Close popup</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>