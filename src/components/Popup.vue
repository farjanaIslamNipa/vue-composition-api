<template>
    <div class="container p-28">
        <p>Slot page content</p>
        <slot name="header" :text="name">
            <div class="">child slot</div>
        </slot>
        <slot></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('Mahveer Nawshad')
</script>

<style scoped>

</style>