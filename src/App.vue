<template>
  <div class="d-flex flex-column min-vh-100">
    <NavbarC />

    <router-view></router-view>

    <FooterC />
  </div>
</template>


<script setup>
import FooterC from './components/FooterC.vue'
import NavbarC from './components/NavbarC.vue'
</script>