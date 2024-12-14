<template>
    <div class="container mt-4 bg-secondary text-white rounded">
        <h1 class="text-center p-2">Carrinho</h1>
        <ul class="list-group" v-if="cartStore.items.length > 0">
            <li class='list-group-item my-2 rounded' v-for="item in cartStore.items" :key="item.id">
                <h3>{{ item.title }}</h3>
                <img :src="item.imageUrl" :alt="item.title" style="width: 100px; height: 100px; object-fit: cover;" />
                <p>R$ {{ item.price.toFixed(2) }}</p>
                <input type="number" class="w-25 mx-2" v-model="item.quantity"
                    @input="item.quantity = Math.max(item.quantity, 1)" />
                <button class="btn btn-danger" @click="cartStore.removeItem(item)">Remover</button>
            </li>
        </ul>
        <p v-else>O carrinho está vazio!</p>
        <p class="fw-bold fs-4 my-2 text-center">Total: R$ {{ cartStore.totalPrice.toFixed(2) }}</p>
        <div class="d-flex justify-content-center">
            <router-link to="/" class="btn btn-success my-2">Voltar para os Produtos</router-link>
        </div>

    </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';


const cartStore = useCartStore();

</script>