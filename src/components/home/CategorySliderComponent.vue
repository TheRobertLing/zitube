<script setup lang="ts">
import { Button, Chip } from 'primevue'
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

/**
 * =============================================================================
 *
 * PROPS AND EMITS
 *
 * =============================================================================
 */

defineProps<{
  selectedCategory: string // The currently selected category
  categories: string[] // Defines the categories of videos a user sees
}>()

const emit = defineEmits<{
  categoryChange: [value: string]
}>()

/**
 * =============================================================================
 *
 * VARIABLES AND OTHER DATA
 *
 * =============================================================================
 */

const scrollContainer = useTemplateRef('scrollContainer')

const leftOverlayActive = ref<boolean>(false)
const rightOverlayActive = ref<boolean>(false)

const scrollAmount: number = 500

const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
  for (const entry of entries) {
    const el = entry.target as HTMLElement
    updateOverlay(el)
  }
})

/**
 * =============================================================================
 *
 * FUNCTIONS
 *
 * =============================================================================
 */

const handleLeftClick = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }
}

const handleRightClick = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}

const handleScroll = () => {
  if (scrollContainer.value) {
    updateOverlay(scrollContainer.value)
  }
}

const updateOverlay = (el: HTMLElement) => {
  console.log(el.scrollWidth)
  console.log(el.clientWidth)
  console.log(el.scrollLeft)
  if (el.scrollWidth <= el.clientWidth) {
    leftOverlayActive.value = false
    rightOverlayActive.value = false
  } else if (el.scrollLeft === 0) {
    leftOverlayActive.value = false
    rightOverlayActive.value = true
  } else if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
    leftOverlayActive.value = true
    rightOverlayActive.value = false
  } else {
    leftOverlayActive.value = true
    rightOverlayActive.value = true
  }
}

/**
 * =============================================================================
 *
 * LIFECYCLE HOOKS
 *
 * =============================================================================
 */

onMounted(async () => {
  if (scrollContainer.value) {
    updateOverlay(scrollContainer.value)
    resizeObserver.observe(scrollContainer.value)
  }
})

onBeforeUnmount(() => {
  if (resizeObserver && scrollContainer.value) {
    resizeObserver.unobserve(scrollContainer.value)
  }
})
</script>

<template>
  <div class="relative w-full mt-4">
    <!-- Left Overlay Arrow -->
    <div
      ref="leftOverlay"
      class="absolute left-0 top-0 bottom-0 flex justify-start items-center aspect-2/1"
      :class="{ hidden: !leftOverlayActive }"
    >
      <div class="w-1/2 h-full bg-white dark:bg-[#121212]">
        <Button
          icon="pi pi-chevron-left"
          variant="text"
          rounded
          aria-label="Filter"
          pt:root="!w-full !h-full"
          @click="handleLeftClick"
        ></Button>
      </div>

      <div class="w-1/2 h-full bg-gradient-to-r from-white to-transparent dark:from-[#121212]">
        <!-- Fading background -->
      </div>
    </div>

    <!-- Scroll Container -->
    <div
      ref="scrollContainer"
      class="flex flex-nowrap overflow-x-auto whitespace-nowrap scrollbar-hide gap-2 m-4"
      @scroll="handleScroll"
    >
      <Chip
        v-for="(item, index) in categories"
        :label="item"
        :key="index"
        pt:root="hover:cursor-pointer transition"
        :class="{ selected: item === selectedCategory }"
        @click="emit('categoryChange', item)"
      />
    </div>

    <!-- Right overlay Arrow -->
    <div
      ref="rightOverlay"
      class="absolute right-0 top-0 bottom-0 flex justify-end items-center aspect-2/1"
      :class="{ hidden: !rightOverlayActive }"
    >
      <div class="w-1/2 h-full bg-gradient-to-r from-transparent to-white dark:to-[#121212]">
        <!-- Used for the fading background  -->
      </div>

      <div class="w-1/2 h-full bg-white dark:bg-[#121212]">
        <Button
          icon="pi pi-chevron-right"
          variant="text"
          rounded
          aria-label="Filter"
          pt:root="!w-full !h-full"
          @click="handleRightClick"
        ></Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none; /*IE/Edge */
  scrollbar-width: none; /* Firefox */
}

.selected {
  background-color: var(--p-emerald-400);
}
</style>
