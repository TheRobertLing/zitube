<script setup lang="ts">
import SearchFiltersComponent from '@/components/search/SearchFiltersComponent.vue'
import SearchResultsFeedComponent from '@/components/search/SearchResultsFeedComponent.vue'
import type { SortCondition, SortDuration } from '@/types/SortCondition'
import type { VideoCardInterface } from '@/types/VideoCardInterface'
import { getVideoDataFakeAPI, getVideoDataForDifferentCategoryFakeAPI } from '@/utils/FakeApiCalls'
import { ProgressSpinner } from 'primevue'
import { onBeforeMount, onMounted, ref, useTemplateRef, watch } from 'vue'

/**
 * =============================================================================
 *
 * VARIABLES AND OTHER DATA
 *
 * =============================================================================
 */

const loadMoreTrigger = useTemplateRef('loadMoreTrigger')
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !isLoadingMoreVideos.value && !isAtEndOfFeed.value) {
      fetchMoreVideoData()
    }
  })
})

const isVideoFeedDataLoading = ref<boolean>(true)
const isLoadingMoreVideos = ref<boolean>(false)
const isAtEndOfFeed = ref<boolean>(false)
const videoData = ref<VideoCardInterface[]>([])
const sortCondition = ref<SortCondition>('All')
const sortDuration = ref<SortDuration>('All lengths')

/**
 * =============================================================================
 *
 * FUNCTIONS
 *
 * =============================================================================
 */

const fetchVideoData = async (): Promise<void> => {
  isVideoFeedDataLoading.value = true
  // Use getVideoDataForDifferentCategoryFakeAPI() to reset the fake api counter
  videoData.value = await getVideoDataForDifferentCategoryFakeAPI()
  isVideoFeedDataLoading.value = false
}

const fetchMoreVideoData = async (): Promise<void> => {
  isLoadingMoreVideos.value = true
  const extraVideoData: VideoCardInterface[] = await getVideoDataFakeAPI()

  if (extraVideoData.length === 0) {
    isAtEndOfFeed.value = true
  } else {
    videoData.value.push(...extraVideoData)
  }

  isLoadingMoreVideos.value = false
}

/**
 * =============================================================================
 *
 * WATCHERS
 *
 * =============================================================================
 */

watch(() => sortCondition.value, async () => {
  await fetchVideoData()
  console.log(`sortCondition: ${sortCondition.value}, sortDuration: ${sortDuration.value}`)
})

watch(() => sortDuration.value, async () => {
  await fetchVideoData()
  console.log(`sortCondition: ${sortCondition.value}, sortDuration: ${sortDuration.value}`)
})


/**
 * =============================================================================
 *
 * LIFECYCLE HOOKS
 *
 * =============================================================================
 */

onMounted(async () => {
  fetchVideoData()

  if (loadMoreTrigger.value) {
    observer.observe(loadMoreTrigger.value)
  }
})

onBeforeMount(() => {
  if (loadMoreTrigger.value) {
    observer.unobserve(loadMoreTrigger.value)
  }
})
</script>

<template>
  <div>
    <!-- Filters -->
    <SearchFiltersComponent
      :sortCondition="sortCondition"
      :sortDuration="sortDuration"
      @change-condition="(condition: SortCondition) => (sortCondition = condition)"
      @change-duration="(duration: SortDuration) => (sortDuration = duration)"
    />

    <!-- Vertical Feed -->
    <div
      class="w-full h-[calc(100vh-8.75rem)] flex justify-center items-center"
      v-if="isVideoFeedDataLoading"
    >
      <ProgressSpinner />
    </div>
    <SearchResultsFeedComponent :videoData="videoData" v-else />

    <!-- Trigger Region To Load More Videos -->
    <div ref="loadMoreTrigger" class="w-full flex justify-center items-center m-4"></div>
    <div class="w-full flex justify-center items-center m-4" v-show="isLoadingMoreVideos">
      <ProgressSpinner />
    </div>

    <!-- End of Content -->
    <div class="flex justify-center" v-if="isAtEndOfFeed">
      <p
        class="text-md text-neutral-500 border-neutral-200 dark:border-neutral-700 pt-6 pb-6 px-4 text-center animate-fade-in"
      >
        You've reached the end of the feed. More content on the way.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
