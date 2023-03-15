<script setup>
    const {questionStatus, barPercentage} = defineProps(['questionStatus', 'barPercentage'])
</script>
<template>
    <header>
        <h4 class="font-semibold text-2xl">Question {{ questionStatus }}</h4>
            <div class="border-2 border-orange-300 h-10 w-72 mt-3 mb-5">
                <div class="bg-orange-300 h-full" :style="{width: barPercentage}">
                    
                </div>
            </div>
    </header>
</template>