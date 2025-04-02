<script setup lang="ts">
import VideoCardComponent from './VideoCardComponent.vue'
import type { VideoCardInterface } from '@/types/VideoCardInterface'
import { useRouter } from 'vue-router'

/**
 * =============================================================================
 *
 * PROPS AND EMITS
 *
 * =============================================================================
 */

defineProps<{
  category: string // Category of videos to show
  videoData: VideoCardInterface[] // All video data
}>()

/**
 * =============================================================================
 *
 * VARIABLES AND OTHER DATA
 *
 * =============================================================================
 */

const router = useRouter()

/**
 * =============================================================================
 *
 * FUNCTIONS
 *
 * =============================================================================
 */

const redirectToVideo = (id: string): void => {
  router.push({ name: 'video', params: { id } })
}
</script>

<template>
  <div
    class="m-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
  >
    <VideoCardComponent
      v-for="(item, index) in videoData"
      :key="index"
      :title="item.title"
      :duration="item.duration"
      :level="item.level"
      :thumbnail="item.thumbnail"
      :channel-name="item.channelName"
      :views="item.views"
      :release-time="item.releaseTime"
      :tags="item.tags"
      @clicked="redirectToVideo(item.id)"
    />
  </div>
</template>

<style scoped></style>
