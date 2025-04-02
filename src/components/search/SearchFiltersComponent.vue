<script setup lang="ts">
import { ref, nextTick } from 'vue'

const filterActive = ref(false)

// Selected filters
const selectedSort = ref('All')
const selectedDuration = ref('All lengths')

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

// const handleFilter = (): void => {
//   // Write this later
// }
</script>

<template>
  <div class="p-4">
    <!-- Filter toggle button -->
    <div class="flex justify-between items-center">
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
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-sm font-semibold">Sort by:</span>
            <button
              v-for="option in ['All', 'Most Viewed', 'Top Rated']"
              :key="option"
              @click="selectedSort = option"
              class="px-3 py-1 text-sm rounded transition hover:cursor-pointer"
              :class="
                selectedSort === option
                  ? 'text-[var(--p-emerald-400)]'
                  : 'hover:text-[var(--p-emerald-300)]'
              "
            >
              {{ option }}
            </button>
          </div>

          <!-- Duration -->
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-sm font-semibold">Video Length:</span>
            <button
              v-for="length in [
                'All lengths',
                'Under 10 min',
                '10-30 min',
                '30-60 min',
                'Over 60 min',
              ]"
              :key="length"
              @click="selectedDuration = length"
              class="px-3 py-1 text-sm rounded transition hover:cursor-pointer"
              :class="
                selectedDuration === length
                  ? 'text-[var(--p-emerald-400)]'
                  : 'hover:text-[var(--p-emerald-300)]'
              "
            >
              {{ length }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
