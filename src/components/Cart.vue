<template>
    <div class="cart container bg-gray text-white">
        <h2>Carrinho</h2>
        <div v-if="cart.length === 0" class="empty-cart">
            <p>Seu carrinho está vazio</p>
        </div>
        <ul v-else class="cart-items">
            <li v-for="(item, index) in cart" :key="item.id" class="cart-item d-flex align-items-center my-2">
                <span class="item-name me-2">{{ item.title }}</span>
                <span class="item-price me-2">R$ {{ item.price.toFixed(2) }}</span>
                <input type="number" style="width: 15%;" class="item-quantity form-control mx-2" v-model="item.quantity"
                    @input="item.quantity = Math.max(item.quantity, 1)" />
                <button @click="cartStore.removeItem(cart[index])" class="remove-btn btn btn-danger mx-2">
                    Remover
                </button>
            </li>
        </ul>
        <div class="cart-total" v-if="cartStore.cartLength > 0">
            <strong>Total:</strong>
            <span>R$ {{ cartStore.totalPrice.toFixed(2) }}</span>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
const cart = computed(() => cartStore.items);

</script>
