<script setup lang="ts">
import type { VideoCardInterface } from '@/types/VideoCardInterface'
import WideVideoCardComponent from './WideVideoCardComponent.vue'
import { useRouter } from 'vue-router';

/**
 * =============================================================================
 *
 * PROPS AND EMITS
 *
 * =============================================================================
 */

defineProps<{
  videoData: VideoCardInterface[] // All video data for a search result
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
  <!-- Vertical Video Feed -->
  <div class="flex flex-col gap-4 p-4">
    <!-- Search Result Placeholder -->
    <WideVideoCardComponent
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
