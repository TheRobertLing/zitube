<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Carousel, ProgressSpinner, type CarouselResponsiveOptions } from 'primevue'
import RecommendationCardComponent from '@/components/home/RecommendationCardComponent.vue'

const mockVideoData = ref<Record<string, string | string[]>[]>([
  {
    name: 'Mastering Mandarin Tones',
    duration: '4 min',
    description: 'Learn to identify and pronounce the 4 Mandarin tones through real-life examples.',
    level: 'Beginner',
    tags: ['tones', 'pronunciation', 'beginner'],
    thumbnail: '../../src/assets/placeholders/placeholder.jpg',
  },
  {
    name: 'Top 10 Chinese Greetings',
    duration: '5 min',
    description:
      'A quick guide to the most common greetings in Chinese, with audio and example sentences.',
    level: 'Beginner',
    tags: ['greetings', 'conversation', 'speaking'],
    thumbnail: '../../src/assets/placeholders/placeholder.jpg',
  },
  {
    name: 'Analyzing & Reacting to 200cc World Records in Mario Kart Wii!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    duration: '6 min',
    description:
      'Practice a full restaurant conversation scenario, from seating to paying the bill.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    level: 'Intermediate',
    tags: ['food', 'travel', 'dialogue'],
    thumbnail: '../../src/assets/placeholders/placeholder.jpg',
  },
])

const responsiveOptions = ref<CarouselResponsiveOptions[]>([
  {
    breakpoint: '1280px', // xl
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '1024px', // lg
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '768px', // md
    numVisible: 1,
    numScroll: 1,
  },
])

const isLoading = ref<boolean>(true)

onMounted(() => {
  // Simulate API call
  setTimeout(() => {
    // if API doesn't return any data, add some padded data information
    if (mockVideoData.value.length < 6) {
      // Need at least 6 for the circular to work properly
      for (let i = 0, n = 6 - mockVideoData.value.length; i < n; i++) {
        mockVideoData.value.push({
          name: 'New Video Soon!',
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
        })
      }
    }

    isLoading.value = false
  }, 1000)
})
</script>

<template>
  <div>
    <h2></h2>

    <div class="card">
      <div v-if="isLoading" class="flex justify-center items-center h-64">
        <ProgressSpinner />
      </div>

      <Carousel
        v-else
        :value="mockVideoData"
        :numVisible="4"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        :autoplayInterval="3000"
        pt:indicatorButton="hidden"
      >
        <template #item="{ data }">
          <RecommendationCardComponent
            :name="data.name"
            :duration="data.duration"
            :type="data.type"
            :description="data.description"
            :tags="data.tags"
            :level="data.level"
            :thumbnail="data.thumbnail"
            @click="console.log('STUBBED')"
          />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped></style>
