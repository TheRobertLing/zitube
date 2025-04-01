<script setup lang="ts">
import Tag from 'primevue/tag'

defineProps<{
  name: string
  duration?: string
  tags?: string[]
  level?: string
  thumbnail: string
}>()

const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <div
    class="w-full cursor-pointer transition-shadow duration-200 hover:shadow-md p-2"
    @click="emit('click')"
  >
    <div>
      <!-- Thumbnail with duration and level tag -->
      <div class="relative rounded-lg overflow-hidden aspect-[16/9] bg-gray-200">
        <img :src="thumbnail" alt="Thumbnail" class="w-full h-full object-cover" />
        <span
          v-if="duration"
          class="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded"
        >
          {{ duration }}
        </span>
        <Tag
          v-if="level"
          :value="level"
          severity="secondary"
          class="absolute top-1 left-1 text-xs"
        />
      </div>

      <!-- Title -->
      <div class="mt-2 font-semibold text-sm leading-tight line-clamp-2">
        {{ name }}
      </div>

      <!-- Tags -->
      <div v-if="tags?.length" class="flex flex-wrap gap-2 mt-2">
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

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  display: box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
}
</style>
