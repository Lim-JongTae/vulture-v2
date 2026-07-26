<template>
  <section class="max-w-[1200px] mx-auto py-16 px-6">
    <!-- Section Header -->
    <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
      <span class="inline-block text-[12px] font-bold text-ember uppercase tracking-widest bg-ember/10 px-3.5 py-1 rounded-full">
        FEATURED OBSERVATORY
      </span>
      <h2 class="text-[34px] sm:text-[44px] font-bold text-obsidian tracking-tight">
        독수리 주요 생태 포토 & 정보
      </h2>
      <p class="text-fog text-[15px] leading-relaxed">
        태화강을 찾는 몽골 철새 독수리의 주요 생태적 특징과 현장 아카이브 기록입니다.
      </p>
    </div>

    <!-- 1. Featured Eagle Images & 8 Main Key Info Cards (Grid Layout with Offset) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div 
        v-for="(item, idx) in spotlightList" 
        :key="item.id"
        :class="[
          'bg-white rounded-[32px] border border-black/10 overflow-hidden hover-lift group cursor-pointer shadow-sm',
          idx % 2 === 1 ? 'md:translate-y-8' : ''
        ]"
      >
        <div class="aspect-[16/10] overflow-hidden relative">
          <img 
            :src="item.image" 
            :alt="item.title"
            class="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
          />
          <!-- 불투명 유리 오버레이 효과 (마우스 오버 시 선명해짐) -->
          <div class="absolute inset-0 bg-white/10 backdrop-blur-md opacity-100 group-hover:opacity-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none"></div>
          <div class="absolute top-4 left-4 bg-[#09090b]/80 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm z-10 transition-all duration-300 group-hover:!bg-[#00DC82] group-hover:!text-[#18181b]">
            {{ item.tag }}
          </div>
        </div>

        <div class="p-7 space-y-3">
          <h3 class="text-[20px] font-bold text-obsidian group-hover:text-ember transition-colors">
            {{ item.title }}
          </h3>
          <p class="text-[14px] text-fog leading-relaxed">
            {{ item.desc }}
          </p>

          <!-- 8 Main Ecological Specs Pills -->
          <div class="pt-3 flex flex-wrap gap-2 border-t border-black/5">
            <span 
              v-for="spec in item.specs" 
              :key="spec"
              class="text-[11px] font-semibold bg-[#00DC82] text-[#09090b] px-2.5 py-1 rounded-md transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:bg-[#09090b] group-hover:!text-white dark:group-hover:bg-white dark:group-hover:!text-black cursor-default"
            >
              • {{ spec }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Manifesto Dark Promotional Banner (공보 문구 영역) -->
    <div class="bg-[#18181b] text-white rounded-[36px] p-8 sm:p-14 shadow-2xl relative overflow-hidden my-12">
      <!-- Background Subtle Glow -->
      <div class="absolute -right-16 -top-16 w-80 h-80 bg-ember/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <!-- 기하학 생태계 애니메이션 배경 -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-100 z-0">
        <!-- 순환하는 생태계 궤도 (동심원) -->
        <svg class="absolute -left-20 -bottom-20 w-[500px] h-[500px] text-[#00DC82]/30" style="animation: spinSlow 30s linear infinite;" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="0.8" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" stroke-width="0.3" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="0.3" />
        </svg>
        
        <!-- 비행하는 V자 대형 (Chevron) -->
        <svg class="absolute right-10 bottom-5 w-80 h-80 text-[#00DC82]/40" style="animation: floatGeo 8s ease-in-out infinite;" viewBox="0 0 100 100">
          <path d="M10,30 L30,50 L50,30" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M30,45 L50,65 L70,45" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85" />
          <path d="M50,60 L70,80 L90,60" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.6" />
        </svg>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 max-w-[960px] mx-auto w-full">
        <div class="lg:col-span-7 space-y-4 lg:pl-12">
          <h3 class="text-[32px] sm:text-[46px] font-extrabold leading-tight tracking-tight font-serif-kr text-[#00DC82]" style="text-shadow: 0 0 12px rgba(0, 220, 130, 0.6);">
            우리는 생명의<br />
            무게를 보존합니다.
          </h3>
        </div>

        <div class="lg:col-span-5 space-y-6">
          <p class="text-[16px] sm:text-[18px] text-[#00DC82] leading-relaxed font-normal" style="text-shadow: 0 0 8px rgba(0, 220, 130, 0.55);">
           수천 킬로미터를 날아왔지만, 겨울 들판엔 먹을 것이 없습니다. 울산 독수리 학교는 배고픈 독수리에게 먹이를 꾸준히 공급하여 몽골에서 건너온 겨울 철새 독수리들의 생존을 돕고, 인간과 자연이 공존하는 생태 교육의 장을 마련합니다.
          </p>

          <div>
            <button 
              @click="$emit('open-join')"
              class="bg-white text-obsidian text-[13px] font-extrabold tracking-wider px-7 py-3 rounded-full hover:bg-ember hover:text-white transition-all shadow-md uppercase"
            >
              함께해요
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineEmits(['open-join'])

// 운영자가 고정으로 관리 가능한 독수리 사진 및 8대 주요 정보 데이터
const spotlightList = ref([
  {
    id: 1,
    tag: 'GALLERY',
    title: '마른 논 밭 위, 낮은 활공',
    desc: '범서의 마른 논 둔치 위로 독수리 한 마리가 날개를 활짝 편 채 낮게 미끄러지듯 활공합니다. 겨울 바람을 타는 순간을 포착했습니다.',
    image: 'https://res.cloudinary.com/hoopoe/image/upload/v1785044624/nn_dzp1fl.jpg',
    specs: ['단독 활공', '저고도 비행']
  },
  {
    id: 2,
    tag: 'NATURE',
    title: '무리 속으로, 착지의 순간',
    desc: '넓게 펼친 날개로 속도를 늦추며 착지하는 독수리. 이미 자리 잡은 동료 무리 곁으로 합류하는 찰나의 균형 잡힌 날갯짓입니다.',
    image: 'https://res.cloudinary.com/hoopoe/image/upload/v1784886970/down2_avdlfq.jpg',
    specs: ['착지 동작', '군집 생활']
  },
  {
    id: 3,
    tag: 'NATURE',
    title: '들판을 뒤덮은 검은 무리',
    desc: '마른 겨울 들판 위, 수십 마리의 독수리가 한데 모여 앉은 진기한 광경입니다. 그 위로 한 마리가 무리를 살피듯 낮게 선회하고 있습니다.',
    image: 'https://res.cloudinary.com/hoopoe/image/upload/v1784886966/group_oqe8pq.jpg',
    specs: ['대규모 군집', '집단 취식 행동']
  },
  {
    id: 4,
    tag: 'SEASON',
    title: '날개를 세운 팽팽한 대치',
    desc: '먹이를 두고 두 독수리가 날개를 한껏 펼친 채 맞섭니다. 주변을 둘러싼 까마귀 떼는 그 결과를 조용히 지켜보고 있습니다.',
    image: 'https://res.cloudinary.com/hoopoe/image/upload/v1784886897/stock-4_qytzjc.jpg',
    specs: ['먹이 경쟁 행동', '까마귀와의 공존']
  },
    {
    id: 5,
    tag: 'SEASON',
    title: '독수리식당 후원의 집, 첫 걸음',
    desc: '범서회관식육식당이 독수리식당 후원의 집 1호로 함께합니다. 지역 상점과 시민들이 먹이 나눔에 동참하며 겨울 철새의 월동을 돕고 있습니다.',
    image: 'https://res.cloudinary.com/hoopoe/image/upload/v1784886971/frandship_ehfmak.jpg',
    specs: ['후원의 집 1호', '지역 상점 참여']
  },
   {
    id: 6,
    tag: 'SEASON',
    title: '독수리 보러 가자, 태화강 탐조 현장',
    desc: '2021 태화강흑두루미 독수리 탐조 행사에 참여한 시민들. 겨울 철새를 직접 관찰하며 생태 감수성을 키우는 현장 교육의 한 장면입니다.',
    image: 'https://res.cloudinary.com/hoopoe/image/upload/v1785044610/schol_m6fapm.jpg',
    specs: ['시민 탐조 행사', '현장 생태 교육 프로그램']
  },
  {
    id: 7,
    tag: 'SEASON',
    title: '함께 나선 겨울 탐조의 발걸음',
    desc: '마스크를 쓰고 모인 참가자들이 현수막을 펼쳐 든 채 기념 촬영. 코로나 시기에도 이어진 태화강 독수리 탐조 행사의 기록입니다.',
    image: 'https://res.cloudinary.com/hoopoe/image/upload/v1785044610/schol_m6fapm.jpg',
    specs: ['단체 탐조 활동', '방역 수칙 준수']
  },
  {
    id: 8,
    tag: 'RESEARCH',
    title: '몽골에서 태화강까지, 추적된 비행 경로',
    desc: 'GPS 위치 추적 장치로 기록된 독수리의 실제 이동 경로입니다. 몽골과 중국을 거쳐 한반도 태화강까지 이어지는 장거리 이주 항로를 시각화했습니다.',
    image: 'https://res.cloudinary.com/hoopoe/image/upload/v1785044606/path_dpwqcf.jpg',
    specs: ['GPS 위치 추적', '국제 이동 경로']
  }
])
</script>

<style scoped>
.font-serif-kr {
  font-family: 'Noto Serif KR', serif;
}
.text-ember {
  color: #ff5a00;
}
.bg-ember {
  background-color: #ff5a00;
}
.hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 35px -10px rgba(16, 185, 129, 0.3);
}
</style>

<style>
@keyframes floatGeo {
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(8deg); }
  100% { transform: translateY(0) rotate(0deg); }
}
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
