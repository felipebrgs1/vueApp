<template>
    <div>
        <p>Contagem: {{ count }}</p>
        <button @click="increment">Incrementar</button>
        <button @click="incrementBy(5)">Incrementar por 5</button>
    </div>
</template>

<script setup>
import { useCounterStore } from '../../../stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()

const { count } = storeToRefs(counterStore)

</script>