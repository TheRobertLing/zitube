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
    class="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-neutral-900 transition-colors duration-300 border border-neutral-200 dark:border-neutral-800 cursor-pointer"
    @click="emit('clicked')"
  >
    <!-- Thumbnail + Duration + Level Tag -->
    <div class="relative aspect-video bg-gray-300 dark:bg-neutral-700">
      <img
        src="@/assets/placeholders/placeholder.jpg"
        alt="Video thumbnail"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <span
        class="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded"
      >
        {{ duration }}
      </span>
      <Tag v-if="level" :value="level" severity="secondary" class="absolute top-1 left-1 text-xs" />
    </div>

    <!-- Info Section -->
    <div class="flex gap-3 p-3">
      <div class="flex flex-col gap-1 overflow-hidden">
        <!-- Video Title -->
        <div :title="title" class="font-medium text-md line-clamp-2 break-words leading-snug">
          {{ title }}
        </div>

        <!-- Meta info (views, date, level) -->
        <div class="text-xs text-neutral-500 dark:text-neutral-400">
          <span>{{ channelName || 'Channel Name' }}</span>
          <br />
          <span>{{ views }}</span> • <span>{{ releaseTime }}</span>
        </div>

        <!-- Custom Tags Section -->
        <div v-if="tags" class="flex flex-wrap gap-2 mt-2">
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
  </div>
</template>

<style scoped>
</style>
