<template>
  <div 
    class="card-wrapper flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:border-zinc-400 dark:hover:border-zinc-600 cursor-pointer w-full" 
    @click="openSite"
  >
    <div class="flex flex-col h-full justify-between p-5 space-y-4">
      <!-- Image or Placeholder -->
      <div class="w-full h-[220px] bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative border-b border-zinc-200 dark:border-zinc-800">
        <img 
          v-if="data.urlToImage" 
          :src="data.urlToImage" 
          alt="뉴스 이미지" 
          class="w-full h-full object-cover transition-transform duration-[1250ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-105" 
          loading="lazy"
        />
        <div v-else class="w-full h-full flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-650">
          <UIcon name="i-heroicons-photo" class="w-10 h-10 mb-2 opacity-30" />
          <span class="text-[11px] font-sans tracking-widest uppercase">No Image</span>
        </div>     
      </div>

      <!-- Content Info -->
      <div class="flex flex-col space-y-3.5 flex-grow">
        <!-- Logo & Publisher -->
        <div class="flex items-center gap-2">
          <img 
            v-if="logo"
            :src="logo" 
            alt="언론사 로고" 
            class="w-5 h-5 bg-white border border-zinc-200 dark:border-zinc-850" 
            @error="(e) => e.target.style.display = 'none'"
          />
          <span class="text-[13px] font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider uppercase">{{ data.name || '언론사 정보 없음' }}</span>
        </div>

        <!-- Title: 라이트: 회색 투명도 배경 + 어두운 텍스트 / 다크: 어두운 회색 배경 + 연한 회색 텍스트 -->
        <h3 class="news-title text-[20px] font-medium leading-snug rounded-lg px-4 py-3.5 overflow-hidden text-ellipsis line-clamp-2 min-h-[52px] tracking-tight bg-zinc-500/10 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100">
          {{ data.title }}
        </h3>

        <!-- Content snippet: 가독성 강화를 위해 더 어둡고(밝고) 줄간격 확대 -->
        <p class="text-[17px] font-normal leading-relaxed text-zinc-800 dark:text-zinc-300 overflow-hidden text-ellipsis line-clamp-3 min-h-[58px]">
          {{ data.content }}
        </p>
      </div>

      <!-- Footer Info -->
      <div class="pt-4 border-t border-zinc-150 dark:border-zinc-800 flex items-center justify-between text-[15px] text-zinc-600 dark:text-zinc-400">
        <div class="flex items-center gap-1.5">
          <UIcon name="i-heroicons-user" class="w-4.5 h-4.5 opacity-80" />
          <span class="font-medium">{{ data.author || '기자' }}</span>
        </div>
        <span class="font-mono">{{ formattedDate }}</span>
      </div>
    </div>    
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NewsItem } from '~/types/my-types'

const props = defineProps<{
  data: NewsItem
}>()

const website = computed(() => {  
  try {
    if (!props.data.url) return ""
    return props.data.url.split("https://").pop()?.split("/")[0] || ""
  } catch (error) {
    console.error('Error parsing website URL:', error)
    return ""
  }
})

const logo = computed(() => {  
  if (!website.value) return ""
  return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${website.value}&size=16` 
})

// 날짜 포맷팅을 클라이언트 사이드에서 안전하게 수행 (Hydration mismatch 방지)
const formattedDate = computed(() => {
  if (!props.data.publishedAt) return ""
  try {
    const rawDate = props.data.publishedAt.trim();
    const date = new Date(rawDate);
    if (!isNaN(date.getTime())) {
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    }
    return rawDate.substring(0, 10);
  } catch (e) {
    return props.data.publishedAt;
  }
})

const openSite = () => {
  if (props.data.url) {
    window.open(props.data.url, '_blank')
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
.card-wrapper {
  will-change: transform;
}
@keyframes shake {
  0% { transform: translateX(0) rotate(0deg); }
  15% { transform: translateX(-4px) rotate(-1deg); }
  30% { transform: translateX(3px) rotate(0.8deg); }
  45% { transform: translateX(-2px) rotate(-0.6deg); }
  60% { transform: translateX(1px) rotate(0.4deg); }
  75% { transform: translateX(-0.5px) rotate(-0.1deg); }
  100% { transform: translateX(0) rotate(0deg); }
}
.card-wrapper:hover {
  animation: shake 1.00s cubic-bezier(0.19, 1, 0.22, 1) 1 forwards;
}
.news-title {
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
</style>
