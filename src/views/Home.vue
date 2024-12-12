<template>
    <div>
        <div v-if="isLoading" class="spinner-border" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>
        <div v-else>
            <div class="container mt-4">
                <h1 class="mb-4">Loja de Produtos</h1>
                <div v-for="product in products" :key="product.id">
                    <CardName :title="product.name" :imageUrl="product.pic" :description="product.description"
                        :price="product.price" buttonText="Comprar" @button-click="addToCart(product)" />
                </div>

                <!-- Carrinho -->
                <div class="card mt-4">
                    <div class="card-header">
                        <h2>Carrinho de Compras</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group" v-if="cart.length > 0">
                            <li v-for="item in cart" :key="item.id"
                                class="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>{{ item.name }}</strong>
                                    <small class="ml-2 text-muted">
                                        R$ {{ item.price.toFixed(2) }}
                                    </small>
                                </div>

                                <button @click="removeFromCart(item)" class="btn btn-danger btn-sm">
                                    Remover
                                </button>
                            </li>
                        </ul>
                        <p v-else class="text-center text-muted">
                            Carrinho vazio
                        </p>
                    </div>
                    <div class="card-footer" v-if="cart.length > 0">
                        <div class="d-flex justify-content-between">
                            <strong>Total:</strong>
                            <strong class="text-success">
                                R$ {{ cartTotal.toFixed(2) }}
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { faker } from '@faker-js/faker'
import CardName from '../components/CardName.vue'

const products = ref([])
const cart = ref([])
const isLoading = ref(true)

const generateProducts = async (count) => {
    return Array.from({ length: count }, () => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        pic: faker.image.url()
    }))
}

onMounted(async () => {
    try {
        isLoading.value = true

        // Usando setTimeout com Promise
        await new Promise(resolve => setTimeout(resolve, 2000))

        products.value = await generateProducts(5)
    } catch (error) {
        console.error(error)
        products.value = []
        alert('Ocorreu um erro ao carregar os produtos. Por favor, tente novamente.')
    } finally {
        isLoading.value = false
    }
})

const addToCart = (product) => {
    const existingProduct = cart.value.find(item => item.id === product.id)

    if (!existingProduct) {
        cart.value.push(product)
    }
}

const removeFromCart = (product) => {
    cart.value = cart.value.filter(item => item.id !== product.id)
}

const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => total + item.price, 0)
})
</script>