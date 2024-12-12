<!-- LoadingSpinner.vue -->
<template>
    <div v-if="isLoading"
        class="loading-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
        style="background-color: rgba(255, 255, 255, 0.7); z-index: 9999;">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Define as props para controlar o loading
const props = defineProps({
    isLoading: {
        type: Boolean,
        default: false
    }
})

// Opcional: Definir uma função para mostrar/esconder o loading
const emit = defineEmits(['update:loading'])
</script>

<style scoped>
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>