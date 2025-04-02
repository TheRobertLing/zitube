<script setup lang="ts">
import WideVideoCardComponent from './WideVideoCardComponent.vue';


</script>

<template>
  <!-- Vertical Video Feed -->
  <div class="flex flex-col space-y-4 p-4">
    <!-- Search Result Placeholder -->
    <WideVideoCardComponent v-for="i in 5" :key="i" />
  </div>

</template>

<style scoped>
</style>
