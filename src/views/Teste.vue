<template>
    <div>
        <p>Contagem atual: {{ counter.count }}</p>
        <p>Contagem dobrada: {{ counter.doubleCount }}</p>

        <button @click="counter.increment()">Incrementar</button>
        <button @click="counter.incrementBy(5)">Incrementar por 5</button>
    </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'
const counter = useCounterStore()
const { count, doubleCount } = storeToRefs(counter)
</script>