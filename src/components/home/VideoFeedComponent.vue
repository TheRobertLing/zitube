<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import VideoCardComponent from './VideoCardComponent.vue'
import VideoCardSkeletonComponent from './VideoCardSkeletonComponent.vue'
import type { VideoCardInterface } from '@/types/VideoCardInterface'
import { useRouter } from 'vue-router'

const props = defineProps<{
  category: string
}>()

const router = useRouter()
const isLoading = ref<boolean>(true)

const mockVideoData = ref<VideoCardInterface[]>([
  {
    id: '1',
    title: 'Mastering Mandarin Tones',
    duration: '4 min',
    level: 'Beginner',
    tags: ['tones', 'pronunciation', 'beginner'],
    thumbnail: '../../src/assets/placeholders/placeholder.jpg',
    channelName: 'SpeakEasy Chinese',
    views: '234K views',
    releaseTime: '3 days ago',
  },
  {
    id: '2',
    title: 'Top 10 Chinese Greetings',
    duration: '5 min',
    level: 'Beginner',
    tags: ['greetings', 'conversation', 'speaking'],
    thumbnail: '../../src/assets/placeholders/placeholder.jpg',
    channelName: 'Chinese With Clara',
    views: '1.1M views',
    releaseTime: '1 week ago',
  },
  {
    id: '3',
    title: 'Analyzing & Reacting to 200cc World Records in Mario Kart Wii!',
    duration: '6 min',
    level: 'Intermediate',
    tags: ['food', 'travel', 'dialogue'],
    thumbnail: '../../src/assets/placeholders/placeholder.jpg',
    channelName: 'Mandarin Motion',
    views: '659K views',
    releaseTime: '2 weeks ago',
  },
  {
    id: '4',
    title: 'How to Order Bubble Tea in Chinese (With Real-life Examples and Slang!)',
    duration: '7 min',
    level: 'Beginner',
    tags: ['food', 'slang', 'culture', 'street talk', 'ordering', 'listening', 'drinks'],
    thumbnail: '../../src/assets/placeholders/placeholder.jpg',
    channelName: 'TeaTime Chinese',
    views: '87K views',
    releaseTime: '5 days ago',
  },
  {
    id: '5',
    title:
      '【LONG FORM】Full Chinese Interview with English Subtitles — Advanced Listening Challenge!',
    duration: '28 min',
    level: 'Advanced',
    tags: ['interview', 'advanced', 'listening', 'native speed', 'challenge'],
    thumbnail: '../../src/assets/placeholders/placeholder.jpg',
    channelName: 'LearnHub 中文',
    views: '322K views',
    releaseTime: '3 weeks ago',
  },
  {
    id: '6',
    title: 'The Fastest Way to Learn 100+ Chinese Characters (With Visual Mnemonics)',
    duration: '10 min',
    level: 'Intermediate',
    tags: ['characters', 'reading', 'mnemonics', 'visual', 'memory', 'hacks'],
    thumbnail: '../../src/assets/placeholders/placeholder.jpg',
    channelName: 'Visual Mandarin',
    views: '412K views',
    releaseTime: '2 days ago',
  },
  {
    id: '7',
    title: 'Learn Chinese Through Memes 😂 — Viral Phrases Explained!',
    duration: '8 min',
    level: 'Beginner',
    tags: ['memes', 'internet slang', 'culture', 'modern chinese'],
    thumbnail: '../../src/assets/placeholders/placeholder.jpg',
    channelName: 'Mandarin Pop',
    views: '768K views',
    releaseTime: '1 month ago',
  },
  {
    id: '8',
    title:
      '【EXTREME LENGTH TEST】This is a very long video title just to see how it wraps and whether it breaks the layout or not and continues on and on and on until we say stop — will it survive?',
    duration: '12 min',
    level: 'All Levels',
    tags: ['layout test', 'ui', 'stress test', 'overflow', 'long title'],
    thumbnail: '../../src/assets/placeholders/placeholder.jpg',
    channelName: 'DevLingua',
    views: '2.3K views',
    releaseTime: '6 hours ago',
  },
  {
    id: '9',
    title:
      'Reacting to Chinese Street Interviews: What Locals Really Think of Foreigners Learning Mandarin',
    duration: '9 min',
    level: 'Intermediate',
    tags: [
      'street interviews',
      'reaction',
      'culture',
      'real chinese',
      'native speakers',
      'intermediate listening',
    ],
    thumbnail: '../../src/assets/placeholders/placeholder.jpg',
    channelName: 'StreetSpeak 中文',
    views: '510K views',
    releaseTime: '4 weeks ago',
  },
])

const fetchData = async (): Promise<void> => {
  // Simulate fetching data for now
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}

const redirectToVideo = (id: string): void => {
  router.push({ name: 'video', params: { id } })
}

watch(
  () => props.category,
  async (): Promise<void> => {
    await fetchData()
  },
)

onMounted(async (): Promise<void> => {
  // Simulate API call
  await fetchData()
})
</script>

<template>
  <div
    class="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
  >
    <template v-if="isLoading">
      <VideoCardSkeletonComponent v-for="i in 10" :key="i" />
    </template>

    <template v-else>
      <VideoCardComponent
        v-for="(item, index) in mockVideoData"
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
    </template>
  </div>

  <div class="flex justify-center" v-if="!isLoading">
    <p
      class="text-md text-neutral-500 border-neutral-200 dark:border-neutral-700 pt-6 pb-6 px-4 text-center animate-fade-in"
    >
      You've reached the end of the feed. More content on the way.
    </p>
  </div>
</template>

<style scoped></style>
