export interface VideoCardInterface {
  id: string
  thumbnail?: string // Thumbnail URL
  level?: string // HSK1-9 level or some classification
  duration: string
  title: string
  channelName: string
  views: string
  releaseTime: string
  tags?: string[]
}
