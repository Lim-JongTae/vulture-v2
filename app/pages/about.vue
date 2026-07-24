<template>
  <main class="min-h-screen bg-[#012624] text-white pt-24 pb-16 px-6 max-w-[1440px] mx-auto font-matter">
    <!-- Header Title -->
    <div class="mb-12 text-center">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003734]/80 border border-[#edfffe]/20 text-[12px] uppercase tracking-wider text-[#edfffe] mb-4">
        REALTIME DATA ARCHIVE
      </div>
      <h1 class="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-4">
        실시간 독수리 생태 관측 데이터
      </h1>
      <p class="text-[#bbc7c6] text-base max-w-2xl mx-auto">
        울산 태화강 독수리 서식지의 온도, 습도, 개체 이동 경로 및 실시간 모니터링 아카이브 데이터입니다.
      </p>
    </div>

    <!-- Content Placeholder Card -->
    <div class="p-8 sm:p-12 rounded-2xl bg-[#003734]/40 border border-[#edfffe]/15 backdrop-blur-md max-w-3xl mx-auto text-center">
      <h2 class="text-2xl font-semibold text-[#fde9ff] mb-4">생태 아카이브 통합 대시보드</h2>
      <p class="text-[#bbc7c6] leading-relaxed mb-8">
        실시간 IoT 센서와 카메라 모듈을 연결하여 수집된 월동독수리 데이터 아카이브입니다.
      </p>
      <NuxtLink to="/" class="inline-flex items-center gap-2 px-6 py-3 bg-[#cbfffc] text-[#012624] font-bold text-sm rounded-md transition-all hover:scale-105">
        <span>← 메인으로 돌아가기</span>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: '실시간 생태 관측 데이터 — 울산독수리.com'
})
</script>
