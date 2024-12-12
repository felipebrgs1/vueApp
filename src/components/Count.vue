<template>
    <div class="container">
        <div class="text-center">
            <h1>Teste</h1>
            <button @click="count++" class="btn btn-dark">Count is: {{ count }}</button>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
const count = ref(0)
</script>
