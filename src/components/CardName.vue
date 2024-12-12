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
                        <p class="card-text">R$ {{ card.price.toFixed(2) }}</p>
                        <button v-if="card.buttonText" type="button" class="btn btn-primary" @click="handleBuy(card)">
                            {{ card.buttonText }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { faker } from '@faker-js/faker';
import { ref } from 'vue';
const emit = defineEmits(['item-selected']);
const cards = ref(
    Array.from({ length: 10 }, () => ({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        imageUrl: faker.image.url(),
        price: parseFloat(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        buttonText: 'Comprar',
    }))
);

// Emite o evento com os dados do card selecionado
const handleBuy = (card) => {
    emit('item-selected', card);
};
</script>