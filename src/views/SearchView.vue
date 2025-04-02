<script setup lang="ts">
import SearchFiltersComponent from '@/components/search/SearchFiltersComponent.vue'
import SearchResultsFeedComponent from '@/components/search/SearchResultsFeedComponent.vue'
</script>

<template>
  <div>
    <!-- Filters -->
    <SearchFiltersComponent />

    <!-- Vertical Feed -->
    <SearchResultsFeedComponent />
  </div>
</template>

<style scoped></style>
