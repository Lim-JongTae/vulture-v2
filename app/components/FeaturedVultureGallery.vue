<template>
  <section class="max-w-[1200px] mx-auto py-16 px-6">
    <!-- Section Header -->
    <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
      <span class="inline-block text-[12px] font-bold text-ember uppercase tracking-widest bg-ember/10 px-3.5 py-1 rounded-full">
        FEATURED OBSERVATORY
      </span>
      <h2 class="text-[34px] sm:text-[44px] font-bold text-obsidian tracking-tight">
        운영자 픽 • 독수리 주요 생태 포토 & 8대 정보
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
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute top-4 left-4 bg-obsidian/80 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
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
              class="text-[11px] font-semibold bg-[#f6f5f0] text-obsidian px-2.5 py-1 rounded-md"
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

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div class="lg:col-span-7 space-y-4">
          <h3 class="text-[32px] sm:text-[46px] font-extrabold leading-tight tracking-tight font-serif-kr">
            우리는 생명의<br />
            무게를 보존합니다.
          </h3>
        </div>

        <div class="lg:col-span-5 space-y-6">
          <p class="text-[14px] sm:text-[15px] opacity-80 leading-relaxed font-normal">
            울산 독수리 학교는 몽골에서 건너온 겨울 철새 독수리들의 생존을 돕고, 인간과 자연이 공존하는 생태 교육의 장을 마련합니다. 매년 겨울, 수천 킬로미터를 날아온 이 고귀한 생명체들에게 안전한 쉼터를 제공하는 구의 사명입니다.
          </p>

          <div>
            <button 
              @click="$emit('open-join')"
              class="bg-white text-obsidian text-[13px] font-extrabold tracking-wider px-7 py-3 rounded-full hover:bg-ember hover:text-white transition-all shadow-md uppercase"
            >
              JOIN US
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
    title: '겨울 비행의 서막 : 첫 번째 정찰',
    desc: '몽골 혜산 산맥에서 한반도 태화강까지 3,400km를 단 한 번의 비행 상승기류를 타고 수송되는 장엄한 독수리 군집의 활공 순간입니다.',
    image: 'https://images.unsplash.com/photo-1574063413132-355dbfd83e0c?q=80&w=800',
    specs: ['비행거리 3,400km', '상승 기류 글라이딩']
  },
  {
    id: 2,
    tag: 'NATURE',
    title: '고요한 대지 위의 파수꾼',
    desc: '독수리는 공격적인 수리(Eagle)와 달리 사냥을 하지 않고 자연의 사체만을 먹어 세균과 바이러스 전염을 방지하는 생태계 위생 파수꾼입니다.',
    image: 'https://images.unsplash.com/photo-1611003265857-e328d49463d9?q=80&w=800',
    specs: ['자연 청소부 (Vulture)', '바이러스 사멸 위산']
  },
  {
    id: 3,
    tag: 'RESEARCH',
    title: '태화강의 겨울 손님들',
    desc: '매년 11월부터 익년 3월까지 태화강변과 울주군 범서읍 평야 지대에서 동계 월동을 보내는 450여 마리의 멸종위기 야생생물 II급 보호 조류입니다.',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=800',
    specs: ['멸종위기 II급', '월동 개체 450+']
  },
  {
    id: 4,
    tag: 'SEASON',
    title: '자연의 순환, 그 경이로운 순간',
    desc: '울산 독수리 학교는 안전하게 소독된 멸균 축산 부산물 먹이를 공급하여 겨울철 탈진사 및 로드킬 등 2차 사고를 방지합니다.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800',
    specs: ['안전 멸균 먹이 공급', '시민 수호대 모니터링']
  }
])
</script>

<style scoped>
.font-serif-kr {
  font-family: 'Noto Serif KR', serif;
}
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
