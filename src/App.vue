<template>

  <NavbarC />

  <router-view></router-view>

  <FooterC />

</template>


<script setup>
import FooterC from './components/FooterC.vue'
import NavbarC from './components/NavbarC.vue'
</script>