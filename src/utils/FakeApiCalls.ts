import type { VideoCardInterface } from '@/types/VideoCardInterface'
import { randTime } from './RandValue'

/**
 * Mock fetching user category preferences
 *
 * @returns A list of categories that a user might want to search for
 */
const getCategoriesFakeAPI = async (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const learnerCategories: string[] = [
        'All',
        'Recently Translated',
        'Dramas',
        'Variety Shows',
        'Podcasts',
        'Technology and Science',
        'Gaming',
        'Learning',
        'Fashion and Beauty',
        'Animation',
        'Food & Travel',
        'Movies',
        'Vlogs',
        'Podcasts',
        'Pop Music',
        'Nature',
        'Education',
        'Culture and Lifestyle',
      ]
      resolve(learnerCategories)
    }, randTime())
  })
}

// Mock the number of times videos can be fetched before running out
let fetchableTimes: number = 10

/**
 * Mock fetching video data
 *
 * @returns
 */
const getVideoDataFakeAPI = async (): Promise<VideoCardInterface[]> => {
  return new Promise((resolve) => {
    if (fetchableTimes <= 0) {
      resolve([])
      return
    }

    fetchableTimes--

    setTimeout(() => {
      const videoData: VideoCardInterface[] = [
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
        {
          id: '10',
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
        {
          id: '11',
          title: 'Essential Chinese Measure Words — Stop Guessing!',
          duration: '6 min',
          level: 'Beginner',
          tags: ['grammar', 'measure words', 'essentials'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Fluent Panda',
          views: '198K views',
          releaseTime: '6 days ago',
        },
        {
          id: '12',
          title: 'Ordering at a Chinese Restaurant — Dialogue Practice with Subtitles',
          duration: '8 min',
          level: 'Intermediate',
          tags: ['food', 'ordering', 'dialogue', 'subtitled'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Mandarin Munchies',
          views: '303K views',
          releaseTime: '2 weeks ago',
        },
        {
          id: '13',
          title: 'Chinese Survival Phrases for Tourists ✈️',
          duration: '5 min',
          level: 'Beginner',
          tags: ['travel', 'phrases', 'tourist', 'beginner'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'JetSet Mandarin',
          views: '421K views',
          releaseTime: '4 days ago',
        },
        {
          id: '14',
          title: 'Can You Pass This Listening Test? Native Speed Chinese Sentences 🔊',
          duration: '9 min',
          level: 'Advanced',
          tags: ['listening', 'challenge', 'native speed'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'ListenLikeLocal',
          views: '380K views',
          releaseTime: '1 week ago',
        },
        {
          id: '15',
          title: 'Top 20 Chinese Idioms You’ll Actually Use (With Examples)',
          duration: '11 min',
          level: 'Intermediate',
          tags: ['idioms', 'vocabulary', 'examples'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Daily Mandarin Dose',
          views: '512K views',
          releaseTime: '3 days ago',
        },
        {
          id: '16',
          title: 'How I Passed HSK 6 — Study Routine + Resource Breakdown',
          duration: '13 min',
          level: 'Advanced',
          tags: ['hsk', 'study tips', 'advanced', 'test prep'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Mandarin Marathon',
          views: '142K views',
          releaseTime: '2 weeks ago',
        },
        {
          id: '17',
          title: 'Breaking Down a Chinese Pop Song 🎶 (Line by Line Translation)',
          duration: '10 min',
          level: 'Intermediate',
          tags: ['music', 'translation', 'listening', 'pop culture'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Lyrics Lab 中文',
          views: '298K views',
          releaseTime: '1 week ago',
        },
        {
          id: '18',
          title: 'Chinese Body Language & Gestures You Should Know',
          duration: '7 min',
          level: 'All Levels',
          tags: ['body language', 'culture', 'gestures'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Mandarin Moments',
          views: '187K views',
          releaseTime: '5 days ago',
        },
        {
          id: '19',
          title: 'Learning Chinese with Movie Clips 🎬 — Context Makes It Stick!',
          duration: '9 min',
          level: 'Intermediate',
          tags: ['movies', 'contextual learning', 'listening', 'fun'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Cinema Chinese',
          views: '390K views',
          releaseTime: '3 weeks ago',
        },
        {
          id: '20',
          title: 'Chinese Street Food Names You’ll Actually Hear (With Pronunciation)',
          duration: '6 min',
          level: 'Beginner',
          tags: ['food', 'street food', 'pronunciation'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Taste Mandarin',
          views: '249K views',
          releaseTime: '4 days ago',
        }
      ]
      resolve(videoData)
    }, randTime())
  })
}

const getVideoDataForDifferentCategory = async (): Promise<VideoCardInterface[]> => {
  // Reset fetchables
  fetchableTimes = 10

  return new Promise((resolve) => {
    if (fetchableTimes <= 0) {
      resolve([])
      return
    }

    fetchableTimes--

    setTimeout(() => {
      const videoData: VideoCardInterface[] = [
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
        {
          id: '10',
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
        {
          id: '11',
          title: 'Essential Chinese Measure Words — Stop Guessing!',
          duration: '6 min',
          level: 'Beginner',
          tags: ['grammar', 'measure words', 'essentials'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Fluent Panda',
          views: '198K views',
          releaseTime: '6 days ago',
        },
        {
          id: '12',
          title: 'Ordering at a Chinese Restaurant — Dialogue Practice with Subtitles',
          duration: '8 min',
          level: 'Intermediate',
          tags: ['food', 'ordering', 'dialogue', 'subtitled'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Mandarin Munchies',
          views: '303K views',
          releaseTime: '2 weeks ago',
        },
        {
          id: '13',
          title: 'Chinese Survival Phrases for Tourists ✈️',
          duration: '5 min',
          level: 'Beginner',
          tags: ['travel', 'phrases', 'tourist', 'beginner'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'JetSet Mandarin',
          views: '421K views',
          releaseTime: '4 days ago',
        },
        {
          id: '14',
          title: 'Can You Pass This Listening Test? Native Speed Chinese Sentences 🔊',
          duration: '9 min',
          level: 'Advanced',
          tags: ['listening', 'challenge', 'native speed'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'ListenLikeLocal',
          views: '380K views',
          releaseTime: '1 week ago',
        },
        {
          id: '15',
          title: 'Top 20 Chinese Idioms You’ll Actually Use (With Examples)',
          duration: '11 min',
          level: 'Intermediate',
          tags: ['idioms', 'vocabulary', 'examples'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Daily Mandarin Dose',
          views: '512K views',
          releaseTime: '3 days ago',
        },
        {
          id: '16',
          title: 'How I Passed HSK 6 — Study Routine + Resource Breakdown',
          duration: '13 min',
          level: 'Advanced',
          tags: ['hsk', 'study tips', 'advanced', 'test prep'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Mandarin Marathon',
          views: '142K views',
          releaseTime: '2 weeks ago',
        },
        {
          id: '17',
          title: 'Breaking Down a Chinese Pop Song 🎶 (Line by Line Translation)',
          duration: '10 min',
          level: 'Intermediate',
          tags: ['music', 'translation', 'listening', 'pop culture'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Lyrics Lab 中文',
          views: '298K views',
          releaseTime: '1 week ago',
        },
        {
          id: '18',
          title: 'Chinese Body Language & Gestures You Should Know',
          duration: '7 min',
          level: 'All Levels',
          tags: ['body language', 'culture', 'gestures'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Mandarin Moments',
          views: '187K views',
          releaseTime: '5 days ago',
        },
        {
          id: '19',
          title: 'Learning Chinese with Movie Clips 🎬 — Context Makes It Stick!',
          duration: '9 min',
          level: 'Intermediate',
          tags: ['movies', 'contextual learning', 'listening', 'fun'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Cinema Chinese',
          views: '390K views',
          releaseTime: '3 weeks ago',
        },
        {
          id: '20',
          title: 'Chinese Street Food Names You’ll Actually Hear (With Pronunciation)',
          duration: '6 min',
          level: 'Beginner',
          tags: ['food', 'street food', 'pronunciation'],
          thumbnail: '../../src/assets/placeholders/placeholder.jpg',
          channelName: 'Taste Mandarin',
          views: '249K views',
          releaseTime: '4 days ago',
        },
      ]
      resolve(videoData)
    }, randTime())
  })
}

export { getCategoriesFakeAPI, getVideoDataFakeAPI, getVideoDataForDifferentCategory }
