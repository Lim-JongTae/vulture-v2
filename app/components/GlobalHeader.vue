<script setup lang="ts">
defineEmits<{
  (e: 'open-modal', modalType: 'program' | 'donation'): void
}>()
</script>

<template>
  <!-- Floating Navigation Capsule -->
  <nav class="fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[1080px] z-[100]">
    <div id="main-nav" class="glass-panel rounded-full px-6 py-3.5 flex items-center justify-between shadow-[0_4px_30px_rgba(0,220,130,0.15)] dark:shadow-[0_4px_30px_rgba(0,220,130,0.25)] transition-all duration-300">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <NuxtImg src="/logo.png" alt="울산 독수리 학교 로고" class="w-11 h-11 rounded-full object-cover" />
        <div class="flex flex-col justify-center">
          <span class="font-bold text-[25px] text-obsidian tracking-tight block leading-none">울산 독수리 학교</span>
          <span class="font-cinzel text-[12px] text-fog font-semibold tracking-widest block mt-1.5 uppercase">Ulsan Vulture School</span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <DesktopNavigation />

      <!-- Action CTA -->
      <div class="flex items-center gap-3">
        <ColorModeButton />
        <button @click="$emit('open-modal', 'program')" class="hidden sm:inline-flex bg-cloud hover:bg-mist text-obsidian text-[12px] font-semibold tracking-wider px-4 py-2.5 rounded-full transition-colors">
          봉사·체험 신청
        </button>
        <button @click="$emit('open-modal', 'donation')" class="bg-obsidian text-white text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-ember transition-colors shadow-sm">
          후원하기
        </button>
      </div>
    </div>
  </nav>
</template>
