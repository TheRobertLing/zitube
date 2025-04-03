<script setup lang="ts">
import { Tag } from 'primevue'

const emit = defineEmits<{
  clicked: []
}>()

defineProps<{
  title: string
  duration: string
  level?: string
  thumbnail?: string
  channelName: string
  views: string
  releaseTime: string
  tags?: string[]
}>()
</script>

<template>
  <div
    class="flex flex-col sm:flex-row rounded-xl overflow-hidden shadow-sm cursor-pointer"
    @click="emit('clicked')"
  >
    <!-- Thumbnail -->
    <div class="relative aspect-video w-full sm:w-1/3 overflow-hidden">
      <img
        :src="thumbnail || '@/assets/placeholders/placeholder.jpg'"
        alt="Video thumbnail"
        class="w-full h-full object-cover sm:rounded-xl rounded-b-none"
        loading="lazy"
      />
      <span
        class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded"
      >
        {{ duration }}
      </span>
      <Tag v-if="level" :value="level" severity="secondary" class="absolute top-2 left-2 text-xs" />
    </div>

    <!-- Info Section -->
    <div class="w-full sm:w-2/3 flex flex-col gap-2 p-4 sm:pl-4 sm:pt-0">
      <!-- Title -->
      <div :title="title" class="font-medium text-lg line-clamp-2 break-words leading-snug">
        {{ title }}
      </div>

      <!-- Channel + Views + Time -->
      <div class="text-xs text-neutral-500 dark:text-neutral-400">
        <span>{{ channelName }}</span
        ><br />
        <span>{{ views }}</span> • <span>{{ releaseTime }}</span>
      </div>

      <!-- Tags -->
      <div v-if="tags?.length" class="flex flex-wrap gap-2 mt-1">
        <Tag
          v-for="(tag, index) in tags"
          :key="index"
          :value="tag"
          severity="secondary"
          rounded
          class="text-xs"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
