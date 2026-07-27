import { defineStore } from 'pinia'
import type { NewsItem } from '~/types/my-types'

export const useNewsStore = defineStore('newsStore', {
  state: () => ({
    news: [] as NewsItem[],
    loading: true,
    error: null as any
  }),

  getters: {
    sortedNews: (state) => {
      // API에서 이미 내림차순(id desc)으로 가져오지만, 한 번 더 방어적으로 정렬
      return [...state.news].sort((a, b) => {
        const aId = typeof a.id === 'number' ? a.id : Number(a.id) || 0
        const bId = typeof b.id === 'number' ? b.id : Number(b.id) || 0
        return bId - aId
      })
    },
    newsCount: (state) => state.news.length
  },

  actions: {
    async fetchNews() {
      if (this.news.length > 0) return
      this.loading = true
      this.error = null

      try {
        const data = await $fetch<NewsItem[]>('/api/news')
        this.news = data
        console.log('News Loaded via API:', this.news.length, 'items')
      } catch (error: any) {
        console.error('News fetch error:', error)
        this.error = error.message || error
      } finally {
        this.loading = false
      }
    },
    async refreshNews() {
      this.news = []
      await this.fetchNews()
    }
  }
})
