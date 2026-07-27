import { defineEventHandler } from 'h3'
import { prisma } from '../utils/prisma'
import type { NewsItem } from '../../types/my-types'

export default defineEventHandler(async (event) => {
  try {
    const news = await prisma.news.findMany({
      orderBy: {
        id: 'desc'
      }
    })
    
    console.log('News Loaded from DB:', news.length, 'items')
    
    return news.map(item => ({
      id: item.id,
      title: item.title,
      url: item.url,
      name: item.name ?? undefined,
      author: item.author ?? undefined,
      description: item.description ?? undefined,
      urlToImage: item.urlToImage ?? undefined,
      publishedAt: item.publishedAt ?? undefined,
      content: item.content ?? undefined
    }))
  } catch (error) {
    console.error('Failed to fetch news from database:', error)
    return []
  }
})
