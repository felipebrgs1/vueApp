<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 p-4" v-for="(card, index) in cards" :key="index">
                <div class="card" data-mdb-theme="light">
                    <div class="card-body">
                        <h5 class="card-title">{{ card.title }}</h5>
                        <img v-if="card.imageUrl" :src="card.imageUrl" :alt="card.title"
                            style="width: 100px; height: 100px; object-fit: cover;" />
                        <p class="card-text">{{ card.description }}</p>

                        <div class="d-flex justify-content-between align-items-center">
                            <p class="card-text">R$ {{ card.price.toFixed(2) }}</p>
                            <div class="d-flex flex-row-reverse ">
                                <button v-if="card.buttonText" type="button" class="button" @click="handleBuy(card)">
                                    {{ card.buttonText }}
                                </button>
                                <input type="number" class="form-control my-2" style="width: 20% ;"
                                    v-model="card.quantity" @input="card.quantity = Math.max(card.quantity, 1)" />
                            </div>


                        </div>



                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '../stores/productstore';
import { ref } from 'vue';

const emit = defineEmits(['item-selected']);
const products = useProductStore();
products.fetchProducts();
const cards = ref(products.allProducts);

const handleBuy = (card) => {
    emit('item-selected', card);
};
</script>