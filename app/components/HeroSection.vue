<template>
  <section class="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#012624] text-white pt-20 pb-12 px-4 sm:px-8 md:px-16 font-matter select-none">
    <!-- Ambient Radial Glows (Taehwa River Night Sky & Aurora Sheen) -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,_rgba(0,130,124,0.4)_0%,_transparent_70%)] pointer-events-none z-0 blur-3xl"></div>
    <div class="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(250,209,255,0.18)_0%,_transparent_70%)] pointer-events-none z-0 blur-3xl"></div>

    <!-- Centered Hero Stack -->
    <div class="relative z-10 max-w-[1440px] w-full mx-auto flex-1 flex flex-col items-center text-center pt-6">
      
      <!-- Eyebrow Tag -->
      <div class="hero-anim-item inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#003734]/80 border border-[#edfffe]/20 backdrop-blur-md mb-6 shadow-lg">
        <span class="w-2.5 h-2.5 rounded-full bg-[#cbfffc] animate-pulse"></span>
        <span class="text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] uppercase text-[#edfffe]">
          TAEHWA RIVER ECO-ZONE · ULSAN VULTURE ARCHIVE
        </span>
      </div>

      <!-- Main Headline (Korean Ecological Theme) -->
      <h1 class="hero-anim-item text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-medium leading-[1.08] tracking-[-0.035em] text-white max-w-5xl mb-6">
        하늘의 제왕, 태화강 독수리의 <br class="hidden sm:inline" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#cbfffc] via-[#edfffe] to-[#fde9ff]">
          생태와 데이터가 만나는 공간
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="hero-anim-item text-base sm:text-lg md:text-xl text-[#bbc7c6] max-w-2xl font-normal leading-relaxed mb-8">
        울산 태화강을 찾는 멸종위기 독수리 보호를 위해 실시간 생태 관측 데이터와 시민 참여 먹이주기 행사를 결합한 통합 생태 아카이브 플랫폼입니다.
      </p>

      <!-- CTA Action Buttons -->
      <div class="hero-anim-item flex flex-wrap items-center justify-center gap-4 mb-6 z-20">
        <NuxtLink 
          to="/event" 
          class="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#cbfffc] via-[#edfffe] to-[#fad1ff] text-[#012624] font-bold text-sm sm:text-base rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(203,255,252,0.5)] cursor-pointer"
        >
          <span>먹이주기 봉사 신청</span>
          <UIcon name="i-heroicons-arrow-up-right" class="w-5 h-5" />
        </NuxtLink>

        <NuxtLink 
          to="/about" 
          class="inline-flex items-center gap-2 px-7 py-4 rounded-md border border-[#edfffe]/25 bg-[#003734]/50 text-[#edfffe] text-sm sm:text-base font-semibold hover:bg-[#003734]/80 hover:border-[#edfffe]/50 transition-all duration-300 backdrop-blur-md cursor-pointer"
        >
          <span>실시간 생태 관측 데이터</span>
          <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
        </NuxtLink>
      </div>

      <!-- Soaring Vulture & River Wind Particle Canvas Visual -->
      <div class="relative w-full max-w-5xl h-[360px] sm:h-[460px] my-2 flex justify-center items-center">
        <canvas ref="vultureCanvas" class="w-full h-full pointer-events-none z-10"></canvas>
        <div class="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] text-[#bbc7c6]/60 z-20">
          Soaring Vulture & Bioluminescent River Wind Motion
        </div>
      </div>

      <!-- Ecological Statistics Row (Bento Lift Cards) -->
      <div class="hero-anim-item w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-[#003734]/60 border border-[#edfffe]/15 backdrop-blur-md shadow-2xl z-20 mt-2">
        <div class="flex flex-col text-center">
          <span class="text-3xl sm:text-4xl lg:text-[50px] font-bold tracking-tight text-[#fde9ff] leading-none mb-2">
            1,250+
          </span>
          <span class="text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-[#edfffe] font-medium">
            올해 관측 독수리 개체 수
          </span>
        </div>

        <div class="flex flex-col text-center border-t sm:border-t-0 sm:border-l border-[#edfffe]/15 pt-4 sm:pt-0 sm:pl-4">
          <span class="text-3xl sm:text-4xl lg:text-[50px] font-bold tracking-tight text-[#fde9ff] leading-none mb-2">
            98.4%
          </span>
          <span class="text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-[#edfffe] font-medium">
            서식지 안전 관측 비율
          </span>
        </div>

        <div class="flex flex-col text-center border-t sm:border-t-0 sm:border-l border-[#edfffe]/15 pt-4 sm:pt-0 sm:pl-4">
          <span class="text-3xl sm:text-4xl lg:text-[50px] font-bold tracking-tight text-[#fde9ff] leading-none mb-2">
            24,500kg
          </span>
          <span class="text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-[#edfffe] font-medium">
            누적 무공해 먹이 공급량
          </span>
        </div>
      </div>

    </div>

    <!-- Bottom Location & Eco Metadata Bar -->
    <div class="relative z-10 w-full max-w-[1440px] mx-auto pt-6 mt-8 flex justify-between items-center text-[11px] sm:text-[12px] text-[#bbc7c6]/70 uppercase tracking-widest border-t border-[#edfffe]/10">
      <span>TAEHWA RIVER ECO-ZONE · ULSAN</span>
      <span class="hidden sm:inline">LAT 35.5384° N, LONG 129.3114° E</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const vultureCanvas = ref<HTMLCanvasElement | null>(null)
let animationId: number | null = null

// Soaring Vulture Silhouette & Particle Wind Canvas Engine
const initVultureAnimation = () => {
  const canvas = vultureCanvas.value
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

  // Floating Bioluminescent Feather & Wind Particles
  const numParticles = 120
  const particles: Array<{
    x: number
    y: number
    radius: number
    vx: number
    vy: number
    alpha: number
    color: string
  }> = []

  const colors = ['#cbfffc', '#edfffe', '#00827c', '#fde9ff']

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.8,
      vx: (Math.random() - 0.5) * 0.8 + 0.5, // Flowing right like river wind
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.7 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }

  let time = 0

  // Draw Soaring Vulture Silhouette Path
  const drawVulture = (centerX: number, centerY: number, scale: number, wingFlap: number) => {
    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.scale(scale, scale)

    // Wings Flapping Math Curve
    const flapAngle = Math.sin(wingFlap) * 0.18

    ctx.beginPath()

    // Left Wing
    ctx.moveTo(0, 0)
    ctx.bezierCurveTo(
      -60, -40 + flapAngle * 120,
      -140, -50 + flapAngle * 180,
      -220, -10 + flapAngle * 220
    )
    ctx.bezierCurveTo(
      -160, 20 + flapAngle * 100,
      -90, 25,
      0, 15
    )

    // Right Wing
    ctx.bezierCurveTo(
      90, 25,
      160, 20 + flapAngle * 100,
      220, -10 + flapAngle * 220
    )
    ctx.bezierCurveTo(
      140, -50 + flapAngle * 180,
      60, -40 + flapAngle * 120,
      0, 0
    )

    // Vulture Head & Tail Accents
    ctx.moveTo(0, -10)
    ctx.arc(0, -18, 7, 0, Math.PI * 2)

    // Glowing Bioluminescent Cyan Outline & Fill
    ctx.fillStyle = 'rgba(203, 255, 252, 0.85)'
    ctx.shadowColor = 'rgba(203, 255, 252, 0.9)'
    ctx.shadowBlur = 25
    ctx.fill()

    // Inner Feather Stream Lines
    ctx.strokeStyle = 'rgba(237, 255, 254, 0.6)'
    ctx.lineWidth = 1.5
    ctx.stroke()

    ctx.restore()
  }

  const render = () => {
    ctx.clearRect(0, 0, width, height)
    time += 0.03

    // 1. Draw River Wind Particles
    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy + Math.sin(time + p.x * 0.01) * 0.3

      if (p.x > width) p.x = 0
      if (p.x < 0) p.x = width
      if (p.y > height) p.y = 0
      if (p.y < 0) p.y = height

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = p.alpha
      ctx.fill()
    })

    // 2. Draw Soaring Vulture 1 (Center Large Main Vulture)
    const v1X = width * 0.5 + Math.sin(time * 0.7) * 40
    const v1Y = height * 0.45 + Math.cos(time * 0.5) * 20
    drawVulture(v1X, v1Y, 0.75, time * 1.2)

    // 3. Draw Soaring Vulture 2 (Background Smaller Companion Vulture)
    const v2X = width * 0.32 + Math.sin(time * 0.8 + 1) * 30
    const v2Y = height * 0.35 + Math.cos(time * 0.6 + 1) * 15
    drawVulture(v2X, v2Y, 0.45, time * 1.5 + 1.2)

    // 4. Draw Soaring Vulture 3 (Background Distance Vulture)
    const v3X = width * 0.68 + Math.cos(time * 0.6 + 2) * 30
    const v3Y = height * 0.38 + Math.sin(time * 0.7 + 2) * 15
    drawVulture(v3X, v3Y, 0.38, time * 1.3 + 2.4)

    animationId = requestAnimationFrame(render)
  }

  render()
}

onMounted(() => {
  initVultureAnimation()
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

@keyframes heroFadeInUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
