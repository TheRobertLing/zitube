<script setup lang="ts">
import type { SortCondition, SortDuration } from '@/types/SortCondition'
import { ref, nextTick } from 'vue'

/**
 * =============================================================================
 *
 * PROPS AND EMITS
 *
 * =============================================================================
 */

defineProps<{
  sortCondition: SortCondition
  sortDuration: SortDuration
}>()

const emit = defineEmits<{
  changeCondition: [value: SortCondition]
  changeDuration: [value: SortDuration]
}>()

/**
 * =============================================================================
 *
 * VARIABLES AND OTHER DATA
 *
 * =============================================================================
 */
const filterActive = ref<boolean>(false)

const sortOptions: SortCondition[] = ['All', 'Most Viewed', 'Top Rated']
const durationOptions: SortDuration[] = [
  'All lengths',
  'Under 10 min',
  '10-30 min',
  '30-60 min',
  'Over 60 min',
]

// Expand transition
const onEnter = (el: Element): void => {
  const element = el as HTMLElement
  element.style.height = '0'
  nextTick(() => {
    element.style.height = element.scrollHeight + 'px'
  })
}

const onLeave = (el: Element): void => {
  const element = el as HTMLElement
  element.style.height = element.scrollHeight + 'px'
  nextTick(() => {
    element.style.height = '0'
  })
}
</script>

<template>
  <div class="p-4">
    <!-- Filter toggle button -->
    <div class="flex justify-between items-center flex-wrap gap-2">
      <h2 class="p-4 font-bold text-2xl">Your Search Results Returned:</h2>
      <button
        @click="filterActive = !filterActive"
        class="flex items-center gap-2 px-4 py-2 text-sm font-medium transition hover:cursor-pointer"
      >
        <i class="pi pi-filter"></i>
        Filters
        <i
          class="pi pi-chevron-down ml-1 transition-transform duration-300"
          :class="filterActive ? '-rotate-180' : 'rotate-0'"
        ></i>
      </button>
    </div>

    <!-- Filter Content Dropdown -->
    <Transition @enter="onEnter" @leave="onLeave">
      <div v-show="filterActive" class="overflow-hidden transition-all duration-300 ease-in-out">
        <div class="p-4 mt-4 space-y-6 border-t">
          <!-- Sorting -->
          <div class="flex flex-col sm:flex-row flex-wrap sm:items-center gap-3">
            <span class="text-sm font-semibold whitespace-nowrap">Sort by:</span>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="option in sortOptions"
                :key="option"
                @click="emit('changeCondition', option)"
                class="px-3 py-1 text-sm rounded transition hover:cursor-pointer"
                :class="
                  sortCondition === option
                    ? 'text-[var(--p-emerald-400)]'
                    : 'hover:text-[var(--p-emerald-300)]'
                "
              >
                {{ option }}
              </button>
            </div>
          </div>

          <!-- Duration -->
          <div class="flex flex-col sm:flex-row flex-wrap sm:items-center gap-3">
            <span class="text-sm font-semibold whitespace-nowrap">Video Length:</span>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="length in durationOptions"
                :key="length"
                @click="emit('changeDuration', length)"
                class="px-3 py-1 text-sm rounded transition hover:cursor-pointer"
                :class="
                  sortDuration === length
                    ? 'text-[var(--p-emerald-400)]'
                    : 'hover:text-[var(--p-emerald-300)]'
                "
              >
                {{ length }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
