<template>
    <div>
        <div v-if="isLoading" class="spinner-border" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>
        <div v-else>
            <div class="container mt-4">
                <h1 class="mb-4">Loja de Produtos</h1>
                <CardName @item-selected="addToCart" />

                <h2>Carrinho</h2>
                <ul>
                    <li v-for="(item, index) in cart" :key="index">
                        {{ item.title }} - R$ {{ item.price.toFixed(2) }}
                    </li>
                </ul>
                <p><strong>Total:</strong> R$ {{ cartTotal.toFixed(2) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import CardName from '../components/CardName.vue';

const cart = ref([]);
const isLoading = ref(true);

onMounted(async () => {
    try {
        isLoading.value = true;
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula carregamento
    } catch (error) {
        console.error(error);
        alert('Ocorreu um erro ao carregar os produtos. Por favor, tente novamente.');
    } finally {
        isLoading.value = false;
    }
});

const addToCart = (item) => {
    cart.value.push(item); // Adiciona o produto ao carrinho
};

const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => total + item.price, 0); // Calcula o total do carrinho
});
</script>