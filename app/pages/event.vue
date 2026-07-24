<template>
  <main class="min-h-screen bg-[#012624] text-white pt-24 pb-16 px-6 max-w-[1440px] mx-auto font-matter">
    <!-- Header Title -->
    <div class="mb-12 text-center">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003734]/80 border border-[#edfffe]/20 text-[12px] uppercase tracking-wider text-[#edfffe] mb-4">
        CIVIC ENGAGEMENT · ULSAN VULTURE
      </div>
      <h1 class="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
        독수리 먹이주기 봉사 & 체험 행사 신청
      </h1>
      <p class="text-[#bbc7c6] text-base max-w-2xl mx-auto">
        태화강을 찾아오는 멸종위기 독수리를 위해 안전하고 무공해한 먹이를 공급하고 생태를 관측하는 독수리 보호 프로그램입니다.
      </p>
    </div>

    <!-- Content Placeholder Card -->
    <div class="p-8 sm:p-12 rounded-2xl bg-[#003734]/40 border border-[#edfffe]/15 backdrop-blur-md max-w-3xl mx-auto text-center">
      <h2 class="text-2xl font-semibold text-[#fde9ff] mb-4">2026 동계 먹이주기 행사 일정 및 안내</h2>
      <p class="text-[#bbc7c6] leading-relaxed mb-8">
        일시: 매주 토요일 오전 10시 ~ 12시 <br />
        장소: 울산 태화강 독수리 생태 관측 구역 <br />
        문의 및 안내: 울산독수리 보전위원회 (052-XXX-XXXX)
      </p>
      <NuxtLink to="/" class="inline-flex items-center gap-2 px-6 py-3 bg-[#cbfffc] text-[#012624] font-bold text-sm rounded-md transition-all hover:scale-105">
        <span>← 메인으로 돌아가기</span>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: '먹이주기 행사 신청 — 울산독수리.com'
})
</script>
