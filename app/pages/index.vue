<template>
  <main class="min-h-screen bg-[#012624]">
    <HeroSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'

useHead({
  title: '울산독수리.com — 태화강 독수리 생태 보전 & 데이터 관측 플랫폼',
  meta: [
    {
      name: 'description',
      content: '울산 태화강 독수리 생태계 보호, 시민 참여 먹이주기 행사 신청 및 실시간 관측 데이터 아카이브'
    }
  ]
})
</script>
