<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
import CategorySliderComponent from '@/components/home/CategorySliderComponent.vue'
import VideoFeedComponent from '@/components/home/VideoFeedComponent.vue'
import {
  getCategoriesFakeAPI,
  getVideoDataFakeAPI,
  getVideoDataForDifferentCategoryFakeAPI,
} from '@/utils/FakeApiCalls'
import type { VideoCardInterface } from '@/types/VideoCardInterface'
import { ProgressSpinner, Skeleton } from 'primevue'

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

const isCategorySliderDataLoading = ref<boolean>(true)
const isVideoFeedDataLoading = ref<boolean>(true)
const isLoadingMoreVideos = ref<boolean>(false)
const isAtEndOfFeed = ref<boolean>(false)

const selectedCategory = ref<string>('All')
const categories = ref<string[]>([])
const videoData = ref<VideoCardInterface[]>([])

/**
 * =============================================================================
 *
 * FUNCTIONS
 *
 * =============================================================================
 */

const handleCategoryChange = (chip: string): void => {
  selectedCategory.value = chip
  fetchVideoDataForDifferentCategory()
}

const fetchCategoryData = async (): Promise<void> => {
  categories.value = await getCategoriesFakeAPI()
  isCategorySliderDataLoading.value = false
}

const fetchVideoData = async (): Promise<void> => {
  videoData.value = await getVideoDataFakeAPI()
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

const fetchVideoDataForDifferentCategory = async (): Promise<void> => {
  isVideoFeedDataLoading.value = true
  isAtEndOfFeed.value = false
  const extraVideoData: VideoCardInterface[] = await getVideoDataForDifferentCategoryFakeAPI()

  if (extraVideoData.length === 0) {
    isAtEndOfFeed.value = true
  } else {
    videoData.value = extraVideoData
  }

  isVideoFeedDataLoading.value = false
}

/**
 * =============================================================================
 *
 * LIFECYCLE HOOKS
 *
 * =============================================================================
 */

onMounted(async () => {
  fetchCategoryData()
  fetchVideoData()

  if (loadMoreTrigger.value) {
    observer.observe(loadMoreTrigger.value)
  }
})

onBeforeUnmount(() => {
  if (loadMoreTrigger.value) {
    observer.unobserve(loadMoreTrigger.value)
  }
})
</script>

<template>
  <!-- Category Slider -->
  <Skeleton
    width="w-full"
    height="2.5rem"
    class="m-4"
    v-if="isCategorySliderDataLoading"
  ></Skeleton>
  <CategorySliderComponent
    :selectedCategory="selectedCategory"
    :categories="categories"
    @category-change="handleCategoryChange"
    v-else
  />

  <!-- Video Feed -->
  <div
    class="w-full h-[calc(100vh-8.75rem)] flex justify-center items-center"
    v-if="isVideoFeedDataLoading"
  >
    <ProgressSpinner />
  </div>
  <VideoFeedComponent :category="selectedCategory" :videoData="videoData" v-else />

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
</template>

<style scoped></style>
