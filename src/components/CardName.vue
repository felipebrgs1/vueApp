<template>
    <div class="col-md-5 p-4">
        <div class="card" data-mdb-theme="light">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <img v-if="imageUrl" :src="imageUrl" :alt="title"
                    style="width: 100px; height: 100px; object-fit: cover;">
                <p class="card-text">{{ description }}</p>
                <p class="card-text">R$ {{ price.toFixed(2) }}</p>
                <button v-if="buttonText" type="button" class="btn btn-primary" data-mdb-ripple-init
                    @click="$emit('button-click')">
                    {{ buttonText }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    title: String,
    imageUrl: String,
    price: Number,
    description: String,
    buttonText: String
})

</script>