<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBarComponent from './components/navbar/NavBarComponent.vue';
import FooterComponent from './components/footer/FooterComponent.vue';
</script>

<template>
  <NavBarComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped>
</style>
