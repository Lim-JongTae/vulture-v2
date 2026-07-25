<template>
  <section class="max-w-[1200px] mx-auto py-12 px-6">
    <!-- Header with Section Title & Arrow Navigation -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
      <div>
        <span class="inline-block bg-ember text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
          LATEST UPDATES
        </span>
        <h2 class="text-[34px] sm:text-[44px] font-bold text-obsidian tracking-tight">
          최근 활동 소식
        </h2>
      </div>

      <!-- Arrow Buttons -->
      <div class="flex gap-2">
        <button 
          @click="prevSlide"
          class="w-11 h-11 flex items-center justify-center bg-white border border-black/10 rounded-xl hover:bg-[#f6f5f0] transition-colors shadow-sm text-obsidian"
        >
          <span class="material-symbols-outlined text-[20px]">chevron_left</span>
        </button>
        <button 
          @click="nextSlide"
          class="w-11 h-11 flex items-center justify-center bg-white border border-black/10 rounded-xl hover:bg-[#f6f5f0] transition-colors shadow-sm text-obsidian"
        >
          <span class="material-symbols-outlined text-[20px]">chevron_right</span>
        </button>
      </div>
    </div>

    <!-- Activity Blog Grid Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
      <div 
        v-for="card in blogList" 
        :key="card.id"
        class="bg-white rounded-[28px] border border-black/10 overflow-hidden group cursor-pointer hover-lift shadow-sm flex flex-col justify-between"
      >
        <div class="aspect-square overflow-hidden relative">
          <img 
            :src="card.image" 
            :alt="card.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div class="p-6 space-y-2">
          <span class="text-[11px] font-semibold text-fog uppercase tracking-wider block">
            {{ card.date }} | {{ card.category }}
          </span>
          <h4 class="text-[17px] font-bold text-obsidian group-hover:text-ember transition-colors line-clamp-2 leading-snug">
            {{ card.title }}
          </h4>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-center items-center gap-4 text-[14px]">
      <button 
        v-for="page in pages" 
        :key="page"
        @click="currentPage = page"
        :class="[
          'w-8 h-8 rounded-lg font-bold transition-colors flex items-center justify-center',
          currentPage === page ? 'bg-obsidian text-white' : 'text-fog hover:text-obsidian'
        ]"
      >
        {{ page }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(1)
const pages = [1, 2, 3, '...', 12]

const blogList = ref([
  {
    id: 1,
    date: '2024.11.02',
    category: 'ACTIVITY',
    title: '제1회 먹이주기 봉사 현장',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
  },
  {
    id: 2,
    date: '2024.10.28',
    category: 'EDUCATION',
    title: '생태 전문가 초청 강연',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=800'
  },
  {
    id: 3,
    date: '2024.10.15',
    category: 'RESEARCH',
    title: '깃털 표본 데이터베이스 구축',
    image: 'https://images.unsplash.com/photo-1611003265857-e328d49463d9?q=80&w=800'
  },
  {
    id: 4,
    date: '2024.10.01',
    category: 'NOTICE',
    title: '탐조 구역 환경 개선 안내',
    image: 'https://images.unsplash.com/photo-1574063413132-355dbfd83e0c?q=80&w=800'
  }
])

const prevSlide = () => {
  if (currentPage.value > 1 && typeof currentPage.value === 'number') {
    currentPage.value--
  }
}

const nextSlide = () => {
  if (typeof currentPage.value === 'number' && currentPage.value < 12) {
    currentPage.value++
  }
}
</script>

<style scoped>
.text-obsidian {
  color: #09090b;
}
.text-fog {
  color: #71717a;
}
.text-ember {
  color: #ff5a00;
}
.bg-ember {
  background-color: #ff5a00;
}
.hover-lift {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 30px -10px rgba(9, 9, 11, 0.08);
}
</style>
