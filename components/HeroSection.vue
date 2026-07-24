<template>
  <section class="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#012624] text-white pt-24 pb-12 px-6 md:px-16 lg:px-24">
    <!-- Background Bioluminescent Particle Canvas -->
    <canvas ref="particleCanvas" class="absolute inset-0 w-full h-full opacity-50 pointer-events-none z-0"></canvas>
    
    <!-- Ambient Radial Glows -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(0,130,124,0.35)_0%,_transparent_70%)] pointer-events-none z-0 blur-3xl"></div>
    <div class="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[radial-gradient(circle,_rgba(250,209,255,0.15)_0%,_transparent_70%)] pointer-events-none z-0 blur-3xl"></div>

    <!-- Container -->
    <div class="relative z-10 max-w-[1440px] w-full mx-auto flex-1 flex flex-col justify-center py-12">
      <!-- Eyebrow Tag -->
      <div class="hero-anim-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003734]/80 border border-[#edfffe]/20 backdrop-blur-md mb-8 w-fit shadow-lg">
        <span class="w-2.5 h-2.5 rounded-full bg-[#cbfffc] animate-pulse"></span>
        <span class="text-[11px] md:text-[12px] font-semibold tracking-[0.15em] uppercase text-[#edfffe]">
          AUROS · ECOBEST ULSAN VULTURE
        </span>
      </div>

      <!-- Main Title -->
      <h1 class="hero-anim-item text-4xl sm:text-6xl md:text-7xl lg:text-[86px] font-medium leading-[1.05] tracking-[-0.04em] text-white max-w-5xl mb-6 drop-shadow-md">
        울산독수리 생태 보전 <br class="hidden sm:inline" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#cbfffc] via-[#edfffe] to-[#fde9ff]">
          & 데이터 관측 플랫폼
        </span>
      </h1>

      <!-- Description -->
      <p class="hero-anim-item text-base md:text-xl text-[#bbc7c6] max-w-2xl font-normal leading-relaxed mb-10">
        태화강 생태계와 멸종위기 독수리 보호를 위해 실시간 생태 관측 데이터와 시민 참여 먹이주기 행사를 결합한 딥-테크 아카이브입니다.
      </p>

      <!-- CTA Action Buttons -->
      <div class="hero-anim-item flex flex-wrap items-center gap-5 mb-16">
        <NuxtLink 
          to="/event" 
          class="inline-flex items-center gap-2.5 px-7 py-4 bg-gradient-to-r from-[#cbfffc] via-[#edfffe] to-[#fad1ff] text-[#012624] font-bold text-base rounded-[6px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,209,255,0.5)] cursor-pointer"
        >
          <span>먹이주기 행사 신청</span>
          <UIcon name="i-heroicons-arrow-up-right" class="w-5 h-5" />
        </NuxtLink>

        <NuxtLink 
          to="/about" 
          class="inline-flex items-center gap-2 px-6 py-4 rounded-[6px] border border-[#edfffe]/30 bg-[#003734]/50 text-[#edfffe] text-base font-semibold hover:bg-[#003734]/90 hover:border-[#edfffe]/60 transition-all duration-300 backdrop-blur-md cursor-pointer"
        >
          <span>보존 현황 데이터 보기</span>
          <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
        </NuxtLink>
      </div>

      <!-- Statistics Bar (Bento Lift Card) -->
      <div class="hero-anim-item grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-[16px] bg-[#003734]/60 border border-[#edfffe]/20 backdrop-blur-md max-w-4xl shadow-2xl">
        <div class="flex flex-col">
          <span class="text-4xl md:text-[52px] font-bold tracking-tight text-[#fde9ff] leading-none mb-2">
            {{ displayCounter1.toLocaleString() }}+
          </span>
          <span class="text-[12px] uppercase tracking-[0.12em] text-[#edfffe] font-medium">
            월간 월동 독수리 개체 수
          </span>
        </div>

        <div class="flex flex-col border-t sm:border-t-0 sm:border-l border-[#edfffe]/15 pt-4 sm:pt-0 sm:pl-6">
          <span class="text-4xl md:text-[52px] font-bold tracking-tight text-[#fde9ff] leading-none mb-2">
            {{ displayCounter2 }}%
          </span>
          <span class="text-[12px] uppercase tracking-[0.12em] text-[#edfffe] font-medium">
            서식지 안전 관측 비율
          </span>
        </div>

        <div class="flex flex-col border-t sm:border-t-0 sm:border-l border-[#edfffe]/15 pt-4 sm:pt-0 sm:pl-6">
          <span class="text-4xl md:text-[52px] font-bold tracking-tight text-[#fde9ff] leading-none mb-2">
            {{ displayCounter3.toLocaleString() }}kg
          </span>
          <span class="text-[12px] uppercase tracking-[0.12em] text-[#edfffe] font-medium">
            누적 무공해 먹이 공급량
          </span>
        </div>
      </div>
    </div>

    <!-- Bottom Wave Decorator Accent -->
    <div class="relative z-10 w-full max-w-[1440px] mx-auto pt-6 flex justify-between items-center text-[12px] text-[#bbc7c6] uppercase tracking-wider border-t border-[#edfffe]/10">
      <span>TAEHWA RIVER ECO-ZONE · ULSAN</span>
      <span class="hidden sm:inline">LAT 35.5384° N, LONG 129.3114° E</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const particleCanvas = ref<HTMLCanvasElement | null>(null)

const displayCounter1 = ref(1250)
const displayCounter2 = ref(98.4)
const displayCounter3 = ref(24500)

let animationId: number | null = null

// Particle System setup
const initParticleCanvas = () => {
  const canvas = particleCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
  let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

  const handleResize = () => {
    if (!canvas) return
    width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
    height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight
  }

  window.addEventListener('resize', handleResize)

  const particles: Array<{
    x: number
    y: number
    radius: number
    color: string
    vx: number
    vy: number
    alpha: number
  }> = []

  const colors = ['#00827c', '#cbfffc', '#edfffe', '#fde9ff']

  for (let i = 0; i < 85; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.8 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      alpha: Math.random() * 0.7 + 0.3
    })
  }

  const render = () => {
    ctx.clearRect(0, 0, width, height)

    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0) p.x = width
      if (p.x > width) p.x = 0
      if (p.y < 0) p.y = height
      if (p.y > height) p.y = 0

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = p.alpha
      ctx.fill()
    })

    // Draw thin connector lines for bioluminescent web effect
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 130) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = '#00827c'
          ctx.globalAlpha = (1 - dist / 130) * 0.3
          ctx.lineWidth = 0.7
          ctx.stroke()
        }
      }
    }

    animationId = requestAnimationFrame(render)
  }

  render()
}

onMounted(() => {
  initParticleCanvas()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
.hero-anim-item {
  animation: heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-anim-item:nth-child(1) { animation-delay: 0.1s; }
.hero-anim-item:nth-child(2) { animation-delay: 0.25s; }
.hero-anim-item:nth-child(3) { animation-delay: 0.4s; }
.hero-anim-item:nth-child(4) { animation-delay: 0.55s; }
.hero-anim-item:nth-child(5) { animation-delay: 0.7s; }

@keyframes heroFadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
