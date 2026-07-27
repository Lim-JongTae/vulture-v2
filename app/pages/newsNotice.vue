<template>
  <div class="bg-[#f6f5f0] text-[#18181b] dark:bg-[#18181b] dark:text-[#ffffff] min-h-screen font-sans scroll-smooth transition-colors duration-500 pb-20">
    <!-- Floating Navigation Capsule -->
    <GlobalHeader />

    <!-- Main Content Container -->
    <main class="max-w-[1240px] mx-auto px-6 pt-36">
      <!-- Title Section -->
      <div class="mb-12 text-left space-y-4">
        <div class="inline-flex items-center gap-2 bg-zinc-900/5 dark:bg-white/5 border border-zinc-900/10 dark:border-white/10 px-4 py-1.5 rounded-full">
          <span class="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white animate-pulse"></span>
          <span class="text-[12px] font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-widest">VULTURE ECO NEWS</span>
        </div>
        
        <h1 class="text-[36px] sm:text-[48px] font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
          독수리 뉴스
        </h1>
        <p class="text-[15px] text-zinc-500 dark:text-zinc-400 max-w-xl font-normal leading-relaxed">
          국내 독수리 생태 보고서 및 울산독수리학교의 최신 동향과 생태계 보호 관련 언론 보도 아카이브입니다.
        </p>
      </div>

      <!-- Loading View -->
      <div v-if="newsStore.loading" class="flex flex-col items-center justify-center py-24 space-y-4">      
        <div class="w-10 h-10 border-2 border-zinc-900 dark:border-white border-t-transparent animate-spin rounded-none"></div>
        <p class="text-[14px] text-zinc-500 dark:text-zinc-400 font-sans tracking-wide uppercase">뉴스를 불러오는 중입니다...</p>
      </div>

      <!-- Error View -->
      <div v-else-if="newsStore.error" class="text-center py-20 text-zinc-500 max-w-md mx-auto space-y-4">
        <UIcon name="i-heroicons-exclamation-triangle" class="w-12 h-12 text-zinc-400 opacity-60" />
        <p class="text-[15px] font-normal">데이터를 로드하는 중 에러가 발생했습니다.</p>
        <p class="text-[13px] text-zinc-400">{{ newsStore.error }}</p>
      </div>

      <!-- Empty View -->
      <div v-else-if="!currentNews.length" class="text-center py-24 text-zinc-400 space-y-3">
        <UIcon name="i-heroicons-inbox-open" class="w-12 h-12 text-zinc-300 opacity-50" />
        <p class="text-[15px]">등록된 독수리 뉴스가 없습니다.</p>
      </div>

      <!-- News Grid List -->
      <div v-else class="space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">       
          <AppNews v-for="article in currentNews" :key="article.id" :data="article" />      
        </div>

        <!-- Pagination Section -->
        <div class="flex justify-center pt-12 mt-16 pb-8 border-t border-zinc-200 dark:border-zinc-800">      
          <UPagination 
            v-model:page="page" 
            :items-per-page="pageSize" 
            :total="total" 
            size="lg"
            variant="ghost"
            active-color="primary"
            color="primary"
            class="pagination-custom"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useNewsStore } from '~/stores/useNews'

useHead({
  title: '독수리 뉴스 | 울산 독수리 학교',
  meta: [
    {
      name: 'description',
      content: '국내 독수리 생태 보존과 관련된 뉴스 아카이브 및 울산독수리학교 소식입니다.'
    }
  ]
})

const newsStore = useNewsStore()
const { sortedNews, newsCount } = storeToRefs(newsStore)

const page = ref(1)
const pageSize = ref(9) // 3컬럼 매칭
const total = computed(() => newsCount.value)

const currentNews = computed(() => {
  const start = (page.value - 1) * pageSize.value
  return sortedNews.value.slice(start, start + pageSize.value)
})

const isTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 페이지가 변경될 때 상단으로 스크롤 이동
watch(page, () => {
  isTop()
})

onMounted(() => {
  newsStore.fetchNews()
})

if (import.meta.dev) {
  watch(sortedNews, (newValue) => {
    console.log('📊 Total news items in store:', newValue.length)
  })
}
</script>

<style scoped>
/* Nuxt UI Pagination 흑백 Monochrome 커스텀 스타일링 */
.pagination-custom :deep(button) {
  border-radius: 75px !important; /* 버튼 75px 법칙 적용 */
  font-family: inherit;
  color: #18181b !important;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  padding: 0.6rem 1.1rem !important; /* 패딩 확대 */
  font-size: 0.95rem !important; /* 폰트 크기 확대 */
  margin: 0 4px !important; /* 버튼 간 간격 추가 */
  cursor: pointer !important; /* 마우스 호버 시 포인터 변경 */
}
.pagination-custom :deep(button:hover:not([disabled])) {
  color: #00504b !important; /* 진한 녹색 */
  background-color: rgba(0, 80, 75, 0.08) !important; /* 연한 녹색 틴트 배경 */
}
.pagination-custom :deep(button[aria-current="page"]),
.pagination-custom :deep(button[data-active]),
.pagination-custom :deep(button.bg-primary) {
  background-color: #00504b !important; /* 활성화 시 진한 녹색 배경 */
  color: #ffffff !important; /* 흰색 글자 */
}
.dark .pagination-custom :deep(button) {
  color: #ffffff !important;
}
.dark .pagination-custom :deep(button:hover:not([disabled])) {
  color: #cbfffc !important; /* 다크 모드용 밝은 민트/녹색 */
  background-color: rgba(203, 255, 252, 0.08) !important;
}
.dark .pagination-custom :deep(button[aria-current="page"]),
.dark .pagination-custom :deep(button[data-active]),
.dark .pagination-custom :deep(button.bg-primary) {
  background-color: #cbfffc !important; /* 다크 모드 활성화 시 민트/녹색 배경 */
  color: #012624 !important; /* 어두운 녹색 글자 */
}
.pagination-custom :deep(button[disabled]) {
  opacity: 0.4;
}
</style>
