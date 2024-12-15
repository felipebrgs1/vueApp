<template>
    <div>
        <div v-if="isLoading" class="spinner-border" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>
        <div v-else>
            <div class="container mt-4">
                <h1 class="mb-4">Loja de Produtos</h1>
                <CardName @item-selected="handleAddToCart" />
                <Cart :cart="cart" @remove-from-cart="handleRemoveFromCart" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CardName from '../../components/CardName.vue';
import Cart from '../../components/Cart.vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '../../stores/cart';

const cartStore = useCartStore();
const cart = storeToRefs(cartStore);
const isLoading = ref(true);

onMounted(async () => {
    try {
        isLoading.value = true;
        await new Promise((resolve) => setTimeout(resolve, 300)); // Simula carregamento
    } catch (error) {
        console.error(error);
        alert('Ocorreu um erro ao carregar os produtos. Por favor, tente novamente.');
    } finally {
        isLoading.value = false;
    }
});

// Função para adicionar item no carrinho
const handleAddToCart = (item) => {
    cartStore.addItem(item);
};

// Função para remover item do carrinho
const handleRemoveFromCart = (item) => {
    cartStore.removeItem(item);
};
</script>
