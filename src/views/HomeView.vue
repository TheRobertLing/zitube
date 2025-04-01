<script setup lang="ts">
import { ref } from 'vue'
import CategorySliderComponent from '@/components/home/CategorySliderComponent.vue'
import VideoFeedComponent from '@/components/home/VideoFeedComponent.vue'

const selectedCategory = ref<string>('All')

const handleChipSelect = (chip: string): void => {
  selectedCategory.value = chip
}

</script>

<template>
  <CategorySliderComponent :category="selectedCategory" @chipSelect="handleChipSelect"></CategorySliderComponent>
  <VideoFeedComponent :category="selectedCategory"></VideoFeedComponent>
</template>

<style scoped></style>
