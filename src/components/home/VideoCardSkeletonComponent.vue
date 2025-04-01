<script setup lang="ts">
import { Skeleton } from 'primevue'
</script>

<template>
  <div
    class="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-neutral-900 transition-colors duration-300 border border-neutral-200 dark:border-neutral-800"
  >
    <!-- Thumbnail Skeleton -->
    <div class="relative aspect-video bg-gray-300 dark:bg-neutral-700">
      <Skeleton class="w-full h-full" />
    </div>

    <!-- Info Section -->
    <div class="flex gap-3 p-3">
      <div class="flex flex-col gap-1 w-full">
        <!-- Title -->
        <Skeleton height="1rem" class="mb-1" />
        <Skeleton width="80%" height="1rem" class="mb-2" />

        <!-- Meta -->
        <Skeleton width="60%" height="0.75rem" class="mb-3" />

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-2">
          <Skeleton width="3rem" height="1.25rem" class="rounded" />
          <Skeleton width="3rem" height="1.25rem" class="rounded" />
          <Skeleton width="3rem" height="1.25rem" class="rounded" />
        </div>
      </div>
    </div>
  </div>
</template>
