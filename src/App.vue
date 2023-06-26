<template>
<!-- <ExampleDashboard /> -->
    <CareerHeader />
</template>

<script setup>
import CareerHeader from './components/CareerHeader.vue';

// import ExampleDashboard from './views/ExampleDashboard.vue';

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