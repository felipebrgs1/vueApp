<template>
    <div class="container">
        <div class="row">
            <CardName v-for="product in products" :key="product.id" :title="product.name" :imageUrl="product.pic"
                :description="product.description" buttonText="Ver detalhes"
                @button-click="handleButtonClick(product.id)" />
        </div>
    </div>
</template>


<script setup>
import CardName from '../components/CardName.vue'
import Footer from '../components/FooterC.vue'
import Navbar from '../components/NavbarC.vue'
import { ref, onMounted } from 'vue'
import { faker } from '@faker-js/faker'

const products = ref([])

const generateProducts = (count) => {
    return Array.from({ length: count }, () => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        pic: faker.image.url()
    }))
}

onMounted(() => {
    products.value = generateProducts(5)
})

</script>
<style scoped>
html {
    overflow-x: hidden;
}
</style>