<template>
  <div class="bg-[#f6f5f0] text-[#18181b] selection:bg-[#ff5a00] selection:text-white min-h-screen font-sans scroll-smooth">
    
    <!-- Floating Navigation Capsule -->
    <nav class="fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[1080px] z-[100]">
      <div id="main-nav" class="glass-panel rounded-full px-6 py-3.5 flex items-center justify-between shadow-sm transition-all duration-300">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="w-9 h-9 rounded-full bg-obsidian text-white flex items-center justify-center font-cinzel font-bold text-[16px] group-hover:bg-ember transition-colors">
            U
          </div>
          <div>
            <span class="font-bold text-[15px] text-obsidian tracking-tight block leading-none">울산 독수리 학교</span>
            <span class="font-cinzel text-[10px] text-fog font-semibold tracking-widest block mt-0.5 uppercase">Ulsan Vulture School</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center gap-7">
          <a class="text-[13px] font-medium text-obsidian uppercase tracking-wider hover:text-ember transition-colors" href="#hero">Overview</a>
          <a class="text-[13px] font-medium text-fog hover:text-obsidian uppercase tracking-wider transition-colors" href="#impact">Statistics</a>
          <a class="text-[13px] font-medium text-fog hover:text-obsidian uppercase tracking-wider transition-colors" href="#anatomy">Ecological Guide</a>
          <a class="text-[13px] font-medium text-fog hover:text-obsidian uppercase tracking-wider transition-colors" href="#programs">Programs</a>
          <a class="text-[13px] font-medium text-fog hover:text-obsidian uppercase tracking-wider transition-colors" href="#gallery">Chronicles</a>
        </div>

        <!-- Action CTA -->
        <div class="flex items-center gap-3">
          <button @click="openModal('program')" class="hidden sm:inline-flex bg-cloud hover:bg-mist text-obsidian text-[12px] font-semibold tracking-wider px-4 py-2.5 rounded-full transition-colors">
            봉사·체험 신청
          </button>
          <button @click="openModal('donation')" class="bg-obsidian text-white text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-ember transition-colors shadow-sm">
            후원하기
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="w-full min-h-[92vh] bg-[#edece4] relative overflow-hidden rounded-b-[48px] mb-20 pt-28 pb-16 flex flex-col justify-center">
      <div class="max-w-[1240px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <!-- Left Editorial Text -->
        <div class="lg:col-span-7 z-10 space-y-7 pt-6">
          <div class="inline-flex items-center gap-2 bg-obsidian/5 border border-obsidian/10 px-4 py-1.5 rounded-full">
            <span class="w-2 h-2 rounded-full bg-ember animate-pulse"></span>
            <span class="text-[12px] font-semibold text-obsidian uppercase tracking-widest">2024-2025 Winter Sanctuary Issue No.01</span>
          </div>

          <h1 class="text-[44px] sm:text-[62px] lg:text-[76px] font-normal leading-[1.04] text-obsidian tracking-tight">
            ULSAN<br/>
            <span class="font-serif-kr font-bold tracking-normal">독수리 학교</span><br/>
            <span class="text-obsidian/60 italic font-serif text-[38px] sm:text-[54px] lg:text-[64px]">The Flight Sanctuary</span>
          </h1>

          <p class="text-[16px] sm:text-[18px] text-obsidian/80 leading-relaxed max-w-xl font-normal">
            몽골 고원에서 3,400km를 넘어온 겨울 철새 독수리(Cinereous Vulture)들의 고귀한 생존 여정. 태화강과 울주 생태 거점을 지키는 과학적 모니터링과 시민 생태 공동체의 기록입니다.
          </p>

          <!-- Status Indicator & Action CTA -->
          <div class="pt-4 flex flex-wrap items-center gap-4">
            <a href="#anatomy" class="inline-flex items-center gap-3 bg-obsidian text-white text-[14px] font-semibold px-7 py-4 rounded-full hover:bg-ember transition-all shadow-lg hover:shadow-xl">
              <span>생태 도감 & 비행 가이드</span>
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <button @click="openModal('program')" class="inline-flex items-center gap-2 border border-obsidian/30 text-obsidian text-[14px] font-medium px-6 py-4 rounded-full hover:bg-obsidian hover:text-white transition-all">
              <span class="material-symbols-outlined text-[18px]">volunteer_activism</span>
              <span>먹이주기 봉사 참가하기</span>
            </button>
          </div>

          <!-- Mini Live Stat Badge -->
          <div class="pt-6 border-t border-obsidian/10 flex items-center gap-8">
            <div>
              <div class="text-[24px] font-bold text-obsidian font-cinzel">420+</div>
              <div class="text-[12px] text-fog font-medium">월동 관측 개체수</div>
            </div>
            <div class="h-8 w-[1px] bg-obsidian/10"></div>
            <div>
              <div class="text-[24px] font-bold text-obsidian font-cinzel">3,400km</div>
              <div class="text-[12px] text-fog font-medium">몽골-울산 횡단거리</div>
            </div>
            <div class="h-8 w-[1px] bg-obsidian/10"></div>
            <div>
              <div class="text-[24px] font-bold text-obsidian font-cinzel">3.1m</div>
              <div class="text-[12px] text-fog font-medium">평균 윙스팬 (Wingspan)</div>
            </div>
          </div>
        </div>

        <!-- Right 3D Visual Observatory Canvas (Seamless Organic Boundary) -->
        <div class="lg:col-span-5 h-[460px] lg:h-[600px] relative w-full flex items-center justify-center">
          <div 
            class="w-full h-full bg-transparent relative" 
            style="-webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 98%); mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 98%);"
          >
            <!-- Three.js Target Canvas Container -->
            <div ref="heroThreeContainer" class="w-full h-full cursor-grab active:cursor-grabbing"></div>
          </div>
        </div>

      </div>
    </section>

    <!-- 1. Featured Observatory Gallery & 8 Key Spec & Manifesto Banner Component -->
    <FeaturedVultureGallery @open-join="openModal('program')" />

    <!-- 2. Recent Activity Blog & Event News Gallery Component -->
    <RecentActivityBlog />

    <!-- Impact & Ecological Statistics Section -->
    <section id="impact" class="max-w-[1200px] mx-auto py-12 px-6 mb-24">
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span class="inline-block text-[12px] font-bold text-ember uppercase tracking-widest bg-ember/10 px-3 py-1 rounded-full">Ecological Impact</span>
        <h2 class="text-[34px] sm:text-[44px] font-bold text-obsidian">숫자로 보는 울산 독수리 생태계</h2>
        <p class="text-fog text-[15px]">울산 독수리 학교는 야생동물 보호구역 지정과 시민 자원봉사를 통해 지속 가능한 생태 환경을 조성합니다.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Stat Card 1 -->
        <div class="bg-white p-8 rounded-[32px] border border-black/10 hover-lift group">
          <div class="w-12 h-12 rounded-2xl bg-ember/10 text-ember flex items-center justify-center mb-6 group-hover:bg-ember group-hover:text-white transition-colors">
            <span class="material-symbols-outlined text-[26px]">flight_takeoff</span>
          </div>
          <div class="text-[40px] font-extrabold text-obsidian font-cinzel tracking-tight mb-1">3,400<span class="text-[20px] font-bold text-fog ml-1">km</span></div>
          <h4 class="text-[16px] font-bold text-obsidian mb-2">몽골-울산 도해 여정</h4>
          <p class="text-[13px] text-fog leading-relaxed">매년 11월 몽골 혜산 산맥을 떠나 태화강 변으로 이어지는 비행 거리입니다.</p>
        </div>

        <!-- Stat Card 2 -->
        <div class="bg-white p-8 rounded-[32px] border border-black/10 hover-lift group">
          <div class="w-12 h-12 rounded-2xl bg-ember/10 text-ember flex items-center justify-center mb-6 group-hover:bg-ember group-hover:text-white transition-colors">
            <span class="material-symbols-outlined text-[26px]">pets</span>
          </div>
          <div class="text-[40px] font-extrabold text-obsidian font-cinzel tracking-tight mb-1">450<span class="text-[20px] font-bold text-fog ml-1">마리+</span></div>
          <h4 class="text-[16px] font-bold text-obsidian mb-2">최고 도래 개체 수</h4>
          <p class="text-[13px] text-fog leading-relaxed">울주군 범서읍과 태화강 일대에서 동계 안식처를 찾는 독수리 수입니다.</p>
        </div>

        <!-- Stat Card 3 -->
        <div class="bg-white p-8 rounded-[32px] border border-black/10 hover-lift group">
          <div class="w-12 h-12 rounded-2xl bg-ember/10 text-ember flex items-center justify-center mb-6 group-hover:bg-ember group-hover:text-white transition-colors">
            <span class="material-symbols-outlined text-[26px]">eco</span>
          </div>
          <div class="text-[40px] font-extrabold text-obsidian font-cinzel tracking-tight mb-1">12<span class="text-[20px] font-bold text-fog ml-1">톤+</span></div>
          <h4 class="text-[16px] font-bold text-obsidian mb-2">연간 친환경 먹이 공급</h4>
          <p class="text-[13px] text-fog leading-relaxed">탈진을 방지하고 겨울을 무사히 보낼 수 있도록 안전한 멸균 축산 부산물을 제공합니다.</p>
        </div>

        <!-- Stat Card 4 -->
        <div class="bg-white p-8 rounded-[32px] border border-black/10 hover-lift group">
          <div class="w-12 h-12 rounded-2xl bg-ember/10 text-ember flex items-center justify-center mb-6 group-hover:bg-ember group-hover:text-white transition-colors">
            <span class="material-symbols-outlined text-[26px]">diversity_3</span>
          </div>
          <div class="text-[40px] font-extrabold text-obsidian font-cinzel tracking-tight mb-1">15<span class="text-[20px] font-bold text-fog ml-1">년</span></div>
          <h4 class="text-[16px] font-bold text-obsidian mb-2">시민 수호대 모니터링</h4>
          <p class="text-[13px] text-fog leading-relaxed">2009년부터 축적해 온 깃털, 가락지 관측 데이터와 위치추적기 연구 데이터베이스입니다.</p>
        </div>
      </div>
    </section>

    <!-- Cinereous Vulture Interactive Guide (독수리 생태 백과) -->
    <section id="anatomy" class="max-w-[1200px] mx-auto py-12 px-6 mb-24">
      <div class="bg-white rounded-[32px] border border-black/10 p-8 sm:p-14 overflow-hidden relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Text Content -->
          <div class="lg:col-span-6 space-y-6">
            <div class="inline-block bg-obsidian text-white text-[12px] font-bold px-3 py-1 rounded-badge uppercase">SPECIES SPECS</div>
            <h2 class="text-[32px] sm:text-[44px] font-bold text-obsidian leading-tight">
              자연의 청소부,<br/>
              <span class="text-ember">독수리(Cinereous Vulture)</span> 생태 백과
            </h2>
            <p class="text-fog text-[15px] leading-relaxed">
              독수리(*Aegypius monachus*)는 독수리목 수리과의 대형 사체 먹이 조류입니다. 흔히 말하는 공격적인 수리(Eagle)와 달리 사냥을 하지 않고 사체만을 먹어 질병 확산을 막는 생태계의 소중한 파수꾼입니다.
            </p>

            <!-- Interactive Accordion / Feature List -->
            <div class="space-y-4 pt-2">
              <div 
                v-for="(acc, index) in accordions" 
                :key="index"
                @click="toggleAccordion(index)"
                class="border border-cloud rounded-2xl p-4 bg-[#f6f5f0]/50 cursor-pointer hover:bg-[#f6f5f0] transition-colors"
              >
                <div class="flex justify-between items-center font-bold text-obsidian text-[15px]">
                  <span class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-ember">{{ acc.icon }}</span> 
                    {{ acc.title }}
                  </span>
                  <span class="material-symbols-outlined">{{ activeAccordion === index ? 'expand_less' : 'expand_more' }}</span>
                </div>
                <p v-show="activeAccordion === index" class="text-[13px] text-fog mt-2 leading-relaxed">
                  {{ acc.content }}
                </p>
              </div>
            </div>

            <div class="pt-4">
              <button @click="openModal('guide')" class="inline-flex items-center gap-2 text-obsidian font-bold text-[14px] border-b-2 border-obsidian pb-1 hover:text-ember hover:border-ember transition-colors">
                <span>몽골~울산 이동 경로 및 깃털 데이터 자세히 보기</span>
                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          <!-- Right Interactive Wingspan Comparison Visual -->
          <div class="lg:col-span-6 bg-[#edece4] rounded-3xl p-8 border border-obsidian/10 relative text-center">
            <div class="text-[12px] font-bold text-obsidian/60 uppercase tracking-widest mb-4">Size Comparison Visual</div>
            
            <!-- Silhouette Illustration Container -->
            <div class="py-8 flex flex-col items-center justify-center space-y-6">
              <div class="w-full relative flex items-center justify-center">
                <!-- Eagle SVG Wingspan representation -->
                <svg class="w-full max-w-[380px] text-obsidian h-auto drop-shadow-md" viewBox="0 0 300 120" fill="currentColor">
                  <path d="M150 45 C120 10, 60 5, 10 35 C40 55, 90 60, 130 55 C140 55, 145 65, 150 70 C155 65, 160 55, 170 55 C210 60, 260 55, 290 35 C240 5, 180 10, 150 45 Z"/>
                </svg>
              </div>
              
              <div class="w-full bg-obsidian/10 h-[2px] relative flex items-center justify-between">
                <span class="text-[11px] font-mono font-bold text-obsidian bg-[#edece4] px-2">0m</span>
                <span class="text-[11px] font-mono font-bold text-ember bg-[#edece4] px-2">WingSpan 3.0m</span>
                <span class="text-[11px] font-mono font-bold text-obsidian bg-[#edece4] px-2">3.0m</span>
              </div>

              <!-- Comparison Human vs Eagle -->
              <div class="grid grid-cols-2 gap-4 w-full pt-4">
                <div class="bg-white p-3 rounded-xl border border-obsidian/10">
                  <span class="text-[11px] text-fog font-medium block">성인 인간 양팔 폭</span>
                  <span class="text-[18px] font-bold text-obsidian font-cinzel">~ 1.7 m</span>
                </div>
                <div class="bg-white p-3 rounded-xl border border-ember/30">
                  <span class="text-[11px] text-ember font-semibold block">독수리 양 날개 폭</span>
                  <span class="text-[18px] font-bold text-ember font-cinzel">~ 3.0 m</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Programs & Field Activities -->
    <section id="programs" class="max-w-[1200px] mx-auto py-12 px-6 mb-24">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <span class="inline-block bg-ember text-white text-[12px] font-bold px-3 py-1 rounded-badge mb-3">EXPERIENCE & EDUCATION</span>
          <h2 class="text-[34px] sm:text-[44px] font-bold text-obsidian">울산 독수리 학교 참여 프로그램</h2>
        </div>
        <button @click="openModal('program')" class="bg-obsidian text-white text-[13px] font-bold px-6 py-3 rounded-full hover:bg-ember transition-colors">
          전체 프로그램 신청하기
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Program Card 1 -->
        <div class="bg-white rounded-[32px] border border-black/10 overflow-hidden hover-lift flex flex-col justify-between">
          <div class="p-8 space-y-4">
            <div class="w-10 h-10 rounded-xl bg-obsidian text-white flex items-center justify-center font-bold text-[14px]">01</div>
            <h3 class="text-[20px] font-bold text-obsidian">주말 독수리 먹이주기 봉사</h3>
            <p class="text-fog text-[14px] leading-relaxed">월동 기간 동안 매주 토/일요일 오전에 진행되는 먹이 공급 자원봉사입니다. 안전 수칙 교육 후 직접 독수리 식당 부지에 신선한 먹이를 공급합니다.</p>
            <div class="pt-2 text-[12px] text-steel space-y-1">
              <div>• 기간: 11월 ~ 익년 3월 (매주 주말)</div>
              <div>• 장소: 울산 울주군 범서읍 독수리 식당</div>
            </div>
          </div>
          <div class="p-8 pt-0">
            <button @click="openModal('program')" class="w-full bg-[#f6f5f0] hover:bg-obsidian hover:text-white text-obsidian font-bold text-[13px] py-3 rounded-xl transition-colors border border-black/10">
              신청 접수하기
            </button>
          </div>
        </div>

        <!-- Program Card 2 -->
        <div class="bg-white rounded-[32px] border border-black/10 overflow-hidden hover-lift flex flex-col justify-between">
          <div class="p-8 space-y-4">
            <div class="w-10 h-10 rounded-xl bg-ember text-white flex items-center justify-center font-bold text-[14px]">02</div>
            <h3 class="text-[20px] font-bold text-obsidian">어린이·청소년 생태 탐조 교실</h3>
            <p class="text-fog text-[14px] leading-relaxed">전문 조류 생태학자와 함께 고성능 망원경으로 독수리의 비행과 행동을 관찰하고 생태 가치를 배우는 일일 아카데미 프로그램입니다.</p>
            <div class="pt-2 text-[12px] text-steel space-y-1">
              <div>• 대상: 초·중·고등학생 및 가족 단위</div>
              <div>• 준비물: 개인 쌍안경 (대여 가능)</div>
            </div>
          </div>
          <div class="p-8 pt-0">
            <button @click="openModal('program')" class="w-full bg-[#f6f5f0] hover:bg-obsidian hover:text-white text-obsidian font-bold text-[13px] py-3 rounded-xl transition-colors border border-black/10">
              신청 접수하기
            </button>
          </div>
        </div>

        <!-- Program Card 3 -->
        <div class="bg-white rounded-[32px] border border-black/10 overflow-hidden hover-lift flex flex-col justify-between">
          <div class="p-8 space-y-4">
            <div class="w-10 h-10 rounded-xl bg-obsidian text-white flex items-center justify-center font-bold text-[14px]">03</div>
            <h3 class="text-[20px] font-bold text-obsidian">시민 조류 모니터링단</h3>
            <p class="text-fog text-[14px] leading-relaxed">가락지 추적 및 독수리 개체 수 개별 식별 연구를 지원하는 정기 모니터링 팀입니다. 모니터링 장비 제공 및 연구 보고서 출간 참여 기회가 제공됩니다.</p>
            <div class="pt-2 text-[12px] text-steel space-y-1">
              <div>• 모집: 매년 10월 정기 모집</div>
              <div>• 혜택: 생태 봉사시간 인정 및 수료증</div>
            </div>
          </div>
          <div class="p-8 pt-0">
            <button @click="openModal('program')" class="w-full bg-[#f6f5f0] hover:bg-obsidian hover:text-white text-obsidian font-bold text-[13px] py-3 rounded-xl transition-colors border border-black/10">
              신청 접수하기
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Chronicles & Photo Gallery with Category Filters -->
    <section id="gallery" class="py-12 px-6 max-w-[1200px] mx-auto mb-24">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <span class="inline-block bg-obsidian text-white text-[12px] font-bold px-3 py-1 rounded-badge mb-3">GALLERY & CHRONICLES</span>
          <h2 class="text-[34px] sm:text-[44px] font-bold text-obsidian">생태 포토 아카이브</h2>
        </div>

        <!-- Category Filter Buttons -->
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'text-[12px] font-bold px-4 py-2 rounded-full transition-colors',
              activeCategory === cat.id ? 'bg-obsidian text-white' : 'bg-white text-fog hover:text-obsidian border border-black/10'
            ]"
          >
            {{ cat.name }}
          </button>
        </div>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="item in filteredGallery" 
          :key="item.id"
          @click="openLightbox(item)"
          class="bg-white rounded-[32px] border border-black/10 overflow-hidden group cursor-pointer hover-lift"
        >
          <div class="aspect-4/3 overflow-hidden relative">
            <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" :src="item.img" :alt="item.title"/>
            <div :class="['absolute top-3 left-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase', item.badgeBg]">
              {{ item.categoryUpper }}
            </div>
          </div>
          <div class="p-5">
            <h4 class="text-[16px] font-bold text-obsidian line-clamp-1">{{ item.title }}</h4>
            <p class="text-[12px] text-fog mt-1">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Membership & Conservation Manifesto (Dark Section) -->
    <section class="max-w-[1200px] mx-auto mb-24 px-6">
      <div class="bg-[#27272a] text-white rounded-[32px] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-2xl relative overflow-hidden">
        
        <!-- Decorative Glow -->
        <div class="absolute -right-20 -top-20 w-96 h-96 bg-ember/20 rounded-full filter blur-3xl pointer-events-none"></div>

        <div class="lg:col-span-7 space-y-6 relative z-10">
          <span class="inline-block bg-ember text-white text-[11px] font-bold px-3 py-1 rounded-badge uppercase tracking-wider">CONSERVATION MANIFESTO</span>
          <h2 class="text-[36px] sm:text-[52px] font-bold leading-tight tracking-tight">
            우리는 생명의 무거운 비행을<br/>
            지속 가능하게 보존합니다.
          </h2>
          <p class="text-[15px] opacity-80 leading-relaxed max-w-xl">
            울산 독수리 학교는 인간의 번영과 자연 생태의 평형이 함께 만나는 지점입니다. 매년 겨울 태화강을 찾는 독수리들이 안전하게 겨울을 보내고 다시 몽골 고원으로 힘차게 돌아갈 수 있도록 여러분의 소중한 후원과 관심이 필요합니다.
          </p>
          <div class="pt-4 flex flex-wrap gap-4">
            <button @click="openModal('donation')" class="bg-white text-obsidian text-[14px] font-bold px-8 h-[54px] rounded-full hover:bg-ember hover:text-white transition-all shadow-lg">
              정기 후원 회원 가입하기
            </button>
            <button @click="openModal('guide')" class="border border-white/30 text-white text-[14px] font-medium px-7 h-[54px] rounded-full hover:bg-white/10 transition-all">
              생태 헌장 읽기
            </button>
          </div>
        </div>

        <div class="lg:col-span-5 relative z-10 bg-[#18181b]/60 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
          <h4 class="text-[18px] font-bold text-white mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-ember">favorite</span> 후원금 사용 투명성 안내
          </h4>
          <ul class="space-y-3 text-[13px] text-white/70">
            <li class="flex items-start gap-2">
              <span class="text-ember font-bold">•</span>
              <span>독수리 멸균 쇠고기·축산 부산물 직구매 (65%)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-ember font-bold">•</span>
              <span>GPS 위치 추적기 및 가락지 모니터링 연구 (20%)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-ember font-bold">•</span>
              <span>어린이 생태 환경 교육자료 제작 및 탐조 장비 유지 (15%)</span>
            </li>
          </ul>
          <div class="mt-6 pt-4 border-t border-white/10 text-[11px] text-white/50 flex justify-between">
            <span>기부금 영수증 발급 가능 (지정기부금)</span>
            <span class="text-white font-bold">투명 공시 100%</span>
          </div>
        </div>

      </div>
    </section>

    <!-- Location & Visiting Guide Section -->
    <section class="max-w-[1200px] mx-auto py-12 px-6 mb-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Text & Rules -->
        <div class="lg:col-span-5 space-y-6">
          <span class="inline-block bg-obsidian/5 text-obsidian text-[12px] font-bold px-3 py-1 rounded-badge uppercase">LOCATION & ETIQUETTE</span>
          <h2 class="text-[32px] font-bold text-obsidian">찾아오시는 길 & 탐조 수칙</h2>
          
          <div class="space-y-4 text-[14px]">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-ember text-[22px]">location_on</span>
              <div>
                <div class="font-bold text-obsidian">울산 독수리 학교 탐조 센터</div>
                <div class="text-fog">울산광역시 울주군 범서읍 점촌6길 15 (태화강 생태 거점)</div>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-ember text-[22px]">schedule</span>
              <div>
                <div class="font-bold text-obsidian">운영 시간</div>
                <div class="text-fog">동계 시즌 (11월~3월): 09:00 - 17:00 (월요일 휴관)</div>
              </div>
            </div>
          </div>

          <!-- Etiquette Box -->
          <div class="bg-white p-5 rounded-2xl border border-black/10 space-y-2">
            <div class="font-bold text-obsidian text-[13px] flex items-center gap-1.5">
              <span class="material-symbols-outlined text-amber-500 text-[18px]">warning</span> 탐조 시 필수 에티켓
            </div>
            <p class="text-[12px] text-fog leading-relaxed">
              1. 독수리는 경계심이 강하므로 붉은색/원색 옷 착용을 자제해 주세요.<br/>
              2. 소리를 지르거나 드론을 날리는 행위는 엄격히 금지됩니다.<br/>
              3. 지정된 Observational Deck에서만 관찰 가능합니다.
            </p>
          </div>
        </div>

        <!-- Visual Map Card Placeholder -->
        <div class="lg:col-span-7 h-[380px] bg-white rounded-[32px] border border-black/10 relative overflow-hidden shadow-sm flex flex-col justify-between p-8">
          <div class="flex justify-between items-start z-10">
            <div>
              <span class="text-[12px] font-bold text-fog uppercase block">Map Location</span>
              <h3 class="text-[20px] font-bold text-obsidian">울산 태화강 독수리 식당 부지</h3>
            </div>
            <span class="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full">관측 가능 시즌</span>
          </div>

          <!-- Stylized Map Illustration Background -->
          <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none"></div>

          <div class="z-10 bg-obsidian text-white p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <div class="text-[13px]">
              <span class="font-bold block text-[15px]">대중교통 이용 안내</span>
              <span class="text-white/70">울산역(KTX)에서 버스 5002번 탑승 후 굴화주공 입구 하차</span>
            </div>
            <a href="https://map.naver.com" target="_blank" class="bg-ember text-white text-[12px] font-bold px-5 py-2.5 rounded-xl whitespace-nowrap hover:bg-[#e65100] transition-colors">
              지도 앱에서 열기
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-black/10 rounded-t-[40px] pt-16 pb-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <!-- Brand Column -->
          <div class="md:col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-obsidian text-white flex items-center justify-center font-cinzel font-bold text-[14px]">U</div>
              <span class="font-bold text-[18px] text-obsidian tracking-tight">울산 독수리 학교</span>
            </div>
            <p class="text-[13px] text-fog max-w-md leading-relaxed">
              울산 독수리 학교는 몽골에서 건너온 겨울 철새 독수리를 보호하고 인간과 자연이 공존하는 지속 가능한 생태 환경을 만들어가는 비영리 생태 단체입니다.
            </p>
            <div class="text-[12px] text-steel space-y-1">
              <p>울산광역시 울주군 범서읍 점촌6길 15 | Tel. 052-123-4567</p>
              <p>사업자등록번호: 123-82-00000 | 대표자: 홍길동</p>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="space-y-3">
            <h4 class="text-[13px] font-bold text-obsidian uppercase tracking-wider">Quick Navigation</h4>
            <ul class="space-y-2 text-[13px] text-fog">
              <li><a href="#hero" class="hover:text-obsidian transition-colors">생태 개요</a></li>
              <li><a href="#impact" class="hover:text-obsidian transition-colors">보존 통계</a></li>
              <li><a href="#anatomy" class="hover:text-obsidian transition-colors">독수리 생태 백과</a></li>
              <li><a href="#programs" class="hover:text-obsidian transition-colors">봉사 프로그램 신청</a></li>
            </ul>
          </div>

          <!-- Legal & Social -->
          <div class="space-y-3">
            <h4 class="text-[13px] font-bold text-obsidian uppercase tracking-wider">Legal & Social</h4>
            <ul class="space-y-2 text-[13px] text-fog">
              <li><a href="#" class="hover:text-obsidian transition-colors">개인정보 처리방침</a></li>
              <li><a href="#" class="hover:text-obsidian transition-colors">이용약관</a></li>
              <li><a href="#" class="hover:text-obsidian transition-colors">기부금 영수증 안내</a></li>
            </ul>
            <div class="flex gap-2 pt-2">
              <a href="#" class="w-8 h-8 rounded-full bg-[#f6f5f0] flex items-center justify-center text-obsidian hover:bg-obsidian hover:text-white transition-colors">
                <span class="material-symbols-outlined text-[16px]">public</span>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-[#f6f5f0] flex items-center justify-center text-obsidian hover:bg-obsidian hover:text-white transition-colors">
                <span class="material-symbols-outlined text-[16px]">share</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Copyright -->
        <div class="pt-8 border-t border-cloud flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-fog">
          <div>© 2024-2026 울산 독수리 학교 (Ulsan Vulture School). All rights reserved.</div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="font-mono">System Active • Winter Season Online</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- MODAL 1: Program Application Modal -->
    <div v-if="activeModal === 'program'" class="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-obsidian/60 backdrop-blur-md">
      <div class="bg-white rounded-[32px] max-w-lg w-full p-8 shadow-2xl relative animate-modal border border-black/10">
        <button @click="closeModal" class="absolute top-6 right-6 text-fog hover:text-obsidian transition-colors">
          <span class="material-symbols-outlined text-[24px]">close</span>
        </button>

        <span class="inline-block bg-ember/10 text-ember text-[11px] font-bold px-3 py-1 rounded-badge uppercase mb-2">Application Form</span>
        <h3 class="text-[24px] font-bold text-obsidian mb-1">울산 독수리 학교 프로그램 신청</h3>
        <p class="text-[13px] text-fog mb-6">원하시는 봉사/탐조 프로그램과 일정을 선택해 주세요.</p>

        <form @submit.prevent="handleFormSubmit('성공적으로 봉사 프로그램 신청이 완료되었습니다.')" class="space-y-4">
          <div>
            <label class="block text-[12px] font-bold text-obsidian mb-1">성함</label>
            <input type="text" required placeholder="홍길동" class="w-full px-4 py-3 rounded-xl border border-cloud focus:border-obsidian focus:ring-0 text-[14px]">
          </div>

          <div>
            <label class="block text-[12px] font-bold text-obsidian mb-1">연락처</label>
            <input type="tel" required placeholder="010-1234-5678" class="w-full px-4 py-3 rounded-xl border border-cloud focus:border-obsidian focus:ring-0 text-[14px]">
          </div>

          <div>
            <label class="block text-[12px] font-bold text-obsidian mb-1">참여 프로그램 선택</label>
            <select class="w-full px-4 py-3 rounded-xl border border-cloud focus:border-obsidian focus:ring-0 text-[14px]">
              <option>주말 독수리 먹이주기 봉사 (토/일)</option>
              <option>어린이·청소년 생태 탐조 교실</option>
              <option>시민 조류 모니터링단 지원</option>
            </select>
          </div>

          <div>
            <label class="block text-[12px] font-bold text-obsidian mb-1">희망 참여 인원</label>
            <input type="number" min="1" max="10" value="1" class="w-full px-4 py-3 rounded-xl border border-cloud focus:border-obsidian focus:ring-0 text-[14px]">
          </div>

          <button type="submit" class="w-full bg-obsidian text-white font-bold py-3.5 rounded-xl hover:bg-ember transition-colors text-[14px] mt-2">
            신청서 제출하기
          </button>
        </form>
      </div>
    </div>

    <!-- MODAL 2: Donation Modal -->
    <div v-if="activeModal === 'donation'" class="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-obsidian/60 backdrop-blur-md">
      <div class="bg-white rounded-[32px] max-w-lg w-full p-8 shadow-2xl relative animate-modal border border-black/10">
        <button @click="closeModal" class="absolute top-6 right-6 text-fog hover:text-obsidian transition-colors">
          <span class="material-symbols-outlined text-[24px]">close</span>
        </button>

        <span class="inline-block bg-obsidian text-white text-[11px] font-bold px-3 py-1 rounded-badge uppercase mb-2">Support Us</span>
        <h3 class="text-[24px] font-bold text-obsidian mb-1">생태 후원금 신청</h3>
        <p class="text-[13px] text-fog mb-6">후원금은 전액 독수리 멸균 축물 부산물 구매 및 생태 연구에 투명하게 사용됩니다.</p>

        <form @submit.prevent="handleFormSubmit('소중한 생태 후원이 정상 접수되었습니다.')" class="space-y-4">
          <div>
            <label class="block text-[12px] font-bold text-obsidian mb-1">후원자 성함 / 기업명</label>
            <input type="text" required placeholder="홍길동" class="w-full px-4 py-3 rounded-xl border border-cloud focus:border-obsidian focus:ring-0 text-[14px]">
          </div>

          <div>
            <label class="block text-[12px] font-bold text-obsidian mb-1">후원 방식</label>
            <div class="grid grid-cols-2 gap-3">
              <label class="border border-cloud p-3 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-[#f6f5f0]">
                <input type="radio" name="donationType" checked class="text-ember focus:ring-0">
                <span class="text-[13px] font-bold text-obsidian">정기 후원 (매월)</span>
              </label>
              <label class="border border-cloud p-3 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-[#f6f5f0]">
                <input type="radio" name="donationType" class="text-ember focus:ring-0">
                <span class="text-[13px] font-bold text-obsidian">일시 후원</span>
              </label>
            </div>
          </div>

          <div>
            <label class="block text-[12px] font-bold text-obsidian mb-1">후원 금액 선택</label>
            <div class="grid grid-cols-3 gap-2">
              <button type="button" class="border border-cloud py-2.5 rounded-xl text-[13px] font-bold hover:border-obsidian">10,000원</button>
              <button type="button" class="border border-obsidian bg-obsidian text-white py-2.5 rounded-xl text-[13px] font-bold">30,000원</button>
              <button type="button" class="border border-cloud py-2.5 rounded-xl text-[13px] font-bold hover:border-obsidian">50,000원</button>
            </div>
          </div>

          <button type="submit" class="w-full bg-ember text-white font-bold py-3.5 rounded-xl hover:bg-[#e65100] transition-colors text-[14px] mt-2">
            후원 결제 진행하기
          </button>
        </form>
      </div>
    </div>

    <!-- MODAL 3: Lightbox Modal for Gallery -->
    <div v-if="activeModal === 'lightbox' && selectedLightboxItem" class="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-lg" @click="closeModal">
      <div class="bg-white rounded-[32px] max-w-3xl w-full overflow-hidden shadow-2xl relative animate-modal" @click.stop>
        <button @click="closeModal" class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-obsidian/60 text-white flex items-center justify-center hover:bg-obsidian transition-colors">
          <span class="material-symbols-outlined text-[20px]">close</span>
        </button>
        <img class="w-full max-h-[500px] object-cover" :src="selectedLightboxItem.img" :alt="selectedLightboxItem.title"/>
        <div class="p-6">
          <h3 class="text-[20px] font-bold text-obsidian mb-2">{{ selectedLightboxItem.title }}</h3>
          <p class="text-[14px] text-fog leading-relaxed">{{ selectedLightboxItem.desc }}</p>
        </div>
      </div>
    </div>

    <!-- MODAL 4: Guide Modal -->
    <div v-if="activeModal === 'guide'" class="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-obsidian/60 backdrop-blur-md">
      <div class="bg-white rounded-[32px] max-w-xl w-full p-8 shadow-2xl relative animate-modal max-h-[85vh] overflow-y-auto">
        <button @click="closeModal" class="absolute top-6 right-6 text-fog hover:text-obsidian transition-colors">
          <span class="material-symbols-outlined text-[24px]">close</span>
        </button>
        <span class="inline-block bg-obsidian text-white text-[11px] font-bold px-3 py-1 rounded-badge uppercase mb-2">Ecological Research</span>
        <h3 class="text-[24px] font-bold text-obsidian mb-4">몽골~울산 독수리 생태 헌장 & 이동 보고서</h3>
        
        <div class="space-y-4 text-[14px] text-fog leading-relaxed">
          <p><strong class="text-obsidian">1. 몽골 고원에서 한반도 태화강까지:</strong> 어린 독수리들은 몽골에서 번식 후 겨울철 혹한과 먹이 부족을 피해 한반도 남쪽 울산 태화강 일대로 장거리 이동합니다.</p>
          <p><strong class="text-obsidian">2. 왜 울산인가?</strong> 울산 태화강과 울주군 범서읍은 넓은 평야와 상승기류, 무등산과 태화강 생태 공원이 어우러져 독수리가 바람을 타고 휴식을 취하기 최적의 환경입니다.</p>
          <p><strong class="text-obsidian">3. 시민 중심 보존:</strong> 독수리 학교는 인위적인 사냥 방식이 아닌 멸균 쇠고기 공급 시스템을 통해 인근 농가 및 도로 로드킬 2차 피해를 예방합니다.</p>
        </div>
        
        <div class="mt-6 pt-4 border-t border-cloud flex justify-end">
          <button @click="closeModal" class="bg-obsidian text-white font-bold px-6 py-2.5 rounded-xl text-[13px]">닫기</button>
        </div>
      </div>
    </div>

    <!-- TOAST NOTIFICATION -->
    <div v-if="toastVisible" class="fixed bottom-8 right-8 z-[300] bg-obsidian text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 animate-modal">
      <span class="material-symbols-outlined text-emerald-400 text-[22px]">check_circle</span>
      <span class="text-[14px] font-medium">{{ toastMessage }}</span>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

useHead({
  title: '울산 독수리 학교 | Ulsan Vulture School',
  meta: [
    {
      name: 'description',
      content: 'Curating the visual and scientific narratives of Mongolia\'s winter migrants over the Taehwa River.'
    }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Cinzel:wght@500;700;800&family=Noto+Serif+KR:wght@400;600;700&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
  ],
  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', defer: true }
  ]
})

// --- Refs & Reactive State ---
const heroThreeContainer = ref<HTMLDivElement | null>(null)
const activeModal = ref<string | null>(null)
const activeAccordion = ref<number | null>(0)
const activeCategory = ref<string>('all')
const selectedLightboxItem = ref<any>(null)
const toastVisible = ref<boolean>(false)
const toastMessage = ref<string>('')

// Accordion Content
const accordions = [
  {
    title: '압도적인 윙스팬 (Wingspan 2.5m ~ 3.1m)',
    icon: 'straighten',
    content: '날개를 모두 폈을 때 길이가 최대 3미터에 달하며, 상승 기류를 타고 날개짓을 거의 하지 않은 채 수십 킬로미터를 글라이딩 비행할 수 있습니다.'
  },
  {
    title: '뛰어난 시력과 두부 구조',
    icon: 'nest_cam_iq',
    content: '인간보다 약 4~8배 뛰어난 시력으로 수 킬로미터 상공에서도 먹이를 발견합니다. 머리 부분은 먹이를 먹을 때 깃털에 이물질이 묻지 않도록 솜털 형태로 이루어져 있습니다.'
  },
  {
    title: '위장 위생 및 면역 체계',
    icon: 'shield',
    content: '강력한 위산을 지니고 있어 탄저균, 식중독균 등 치명적인 세균을 완벽히 소화 및 사멸시켜 야생 환경의 바이러스 전염을 방지합니다.'
  }
]

// Gallery Data
const categories = [
  { id: 'all', name: '전체' },
  { id: 'nature', name: '생태 (Nature)' },
  { id: 'activity', name: '봉사 (Activity)' },
  { id: 'research', name: '연구 (Research)' }
]

const galleryItems = [
  {
    id: 1,
    category: 'nature',
    categoryUpper: 'Nature',
    badgeBg: 'bg-obsidian/80',
    title: '겨울 비행의 서막 : 첫 번째 정찰',
    subtitle: '태화강 상공 활공 모습',
    img: 'https://images.unsplash.com/photo-1574063413132-355dbfd83e0c?q=80&w=800',
    desc: '태화강 상공을 가르며 활공하는 몽골 독수리 군집의 우아한 비행 장면입니다.'
  },
  {
    id: 2,
    category: 'activity',
    categoryUpper: 'Activity',
    badgeBg: 'bg-ember',
    title: '제1회 먹이주기 봉사 현장',
    subtitle: '울주 범서읍 생태 부지',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800',
    desc: '울주군 범서읍 독수리 식당 부지에서 시민들과 자원봉사자들이 안전한 축산 부산물을 공급하는 모습입니다.'
  },
  {
    id: 3,
    category: 'research',
    categoryUpper: 'Research',
    badgeBg: 'bg-indigo-600',
    title: '깃털 표본 데이터베이스 구축',
    subtitle: '유전자 분석 및 가락지 추적',
    img: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=800',
    desc: '몽골 조류연구소와 협력하여 독수리 발목에 장착된 윙태그 및 가락지를 망원 카메라로 식별하는 과정입니다.'
  },
  {
    id: 4,
    category: 'nature',
    categoryUpper: 'Nature',
    badgeBg: 'bg-obsidian/80',
    title: '고요한 대지 위의 파수꾼',
    subtitle: '석양 속 휴식 중인 독수리',
    img: 'https://images.unsplash.com/photo-1611003265857-e328d49463d9?q=80&w=800',
    desc: '석양 무렵 태화강변 나무 위에서 휴식을 취하며 체온을 유지하는 독수리의 장엄한 자태입니다.'
  }
]

const filteredGallery = computed(() => {
  if (activeCategory.value === 'all') return galleryItems
  return galleryItems.filter(item => item.category === activeCategory.value)
})

// Modal Methods
const openModal = (name: string) => {
  activeModal.value = name
}

const closeModal = () => {
  activeModal.value = null
  selectedLightboxItem.value = null
}

const openLightbox = (item: any) => {
  selectedLightboxItem.value = item
  activeModal.value = 'lightbox'
}

const toggleAccordion = (index: number) => {
  if (activeAccordion.value === index) {
    activeAccordion.value = null
  } else {
    activeAccordion.value = index
  }
}

const handleFormSubmit = (msg: string) => {
  closeModal()
  toastMessage.value = msg
  toastVisible.value = true
  setTimeout(() => {
    toastVisible.value = false
  }, 3500)
}

// Three.js Lifecycle
let animFrameId: number | null = null

onMounted(() => {
  const init = () => {
    if (typeof (window as any).THREE !== 'undefined' && heroThreeContainer.value) {
      initThreeJs((window as any).THREE)
    }
  }

  // Check until THREE is available
  const checkThree = setInterval(() => {
    if (typeof (window as any).THREE !== 'undefined' && heroThreeContainer.value) {
      clearInterval(checkThree)
      setTimeout(init, 50)
    }
  }, 100)

  setTimeout(() => clearInterval(checkThree), 6000)
})

onBeforeUnmount(() => {
  if (animFrameId) {
    cancelAnimationFrame(animFrameId)
  }
})

function initThreeJs(THREE: any) {
  const container = heroThreeContainer.value
  if (!container) return

  // Clean previous canvas if any
  container.innerHTML = ''

  const scene = new THREE.Scene()
  let width = container.clientWidth || 500
  let height = container.clientHeight || 500

  const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000)
  camera.position.z = 6.5

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  // Enhanced Particle Swarm (Circle + Ellipse Mixed)
  const particleCount = 360
  const circleCount = 180
  const ellipseCount = 180

  const geometryCircle = new THREE.BufferGeometry()
  const geometryEllipse = new THREE.BufferGeometry()

  const posCircle = new Float32Array(circleCount * 3)
  const colCircle = new Float32Array(circleCount * 3)
  const posEllipse = new Float32Array(ellipseCount * 3)
  const colEllipse = new Float32Array(ellipseCount * 3)

  const velocities: Array<{x: number; y: number; z: number; phase: number; speed: number}> = []

  const colorEmber = new THREE.Color(0xff5a00)       // Vivid Flame Amber
  const colorDark = new THREE.Color(0x09090b)        // Sharp Obsidian
  const colorGold = new THREE.Color(0xca8a04)        // Rich Gold
  const colorBronze = new THREE.Color(0x9a3412)      // Deep Bronze
  const colorPalette = [colorEmber, colorDark, colorGold, colorBronze]

  for (let i = 0; i < particleCount; i++) {
    const px = (Math.random() - 0.5) * 11
    const py = (Math.random() - 0.5) * 9
    const pz = (Math.random() - 0.5) * 5

    const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)]

    if (i < circleCount) {
      posCircle[i * 3] = px
      posCircle[i * 3 + 1] = py
      posCircle[i * 3 + 2] = pz
      colCircle[i * 3] = chosenColor.r
      colCircle[i * 3 + 1] = chosenColor.g
      colCircle[i * 3 + 2] = chosenColor.b
    } else {
      const idx = i - circleCount
      posEllipse[idx * 3] = px
      posEllipse[idx * 3 + 1] = py
      posEllipse[idx * 3 + 2] = pz
      colEllipse[idx * 3] = chosenColor.r
      colEllipse[idx * 3 + 1] = chosenColor.g
      colEllipse[idx * 3 + 2] = chosenColor.b
    }

    velocities.push({
      x: (Math.random() - 0.5) * 0.025,
      y: (Math.random() - 0.5) * 0.025,
      z: (Math.random() - 0.5) * 0.015,
      phase: Math.random() * Math.PI * 2,
      speed: 0.8 + Math.random() * 0.8
    })
  }

  geometryCircle.setAttribute('position', new THREE.BufferAttribute(posCircle, 3))
  geometryCircle.setAttribute('color', new THREE.BufferAttribute(colCircle, 3))

  geometryEllipse.setAttribute('position', new THREE.BufferAttribute(posEllipse, 3))
  geometryEllipse.setAttribute('color', new THREE.BufferAttribute(colEllipse, 3))

  // Create Circle & Ellipse Textures
  const createCircleTexture = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.beginPath()
      ctx.arc(32, 32, 28, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.fill()
    }
    return new THREE.CanvasTexture(canvas)
  }

  const createEllipseTexture = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.beginPath()
      ctx.ellipse(32, 32, 28, 11, -Math.PI / 5, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.fill()
    }
    return new THREE.CanvasTexture(canvas)
  }

  const circleTexture = createCircleTexture()
  const ellipseTexture = createEllipseTexture()

  // Materials with 50% opacity
  const circleMaterial = new THREE.PointsMaterial({
    size: 0.32,
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    map: circleTexture,
    depthWrite: false,
    sizeAttenuation: true
  })

  const ellipseMaterial = new THREE.PointsMaterial({
    size: 0.36,
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    map: ellipseTexture,
    depthWrite: false,
    sizeAttenuation: true
  })

  const systemCircle = new THREE.Points(geometryCircle, circleMaterial)
  const systemEllipse = new THREE.Points(geometryEllipse, ellipseMaterial)
  scene.add(systemCircle)
  scene.add(systemEllipse)

  // Visible Flight Path Connection Lines
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0xff5a00,
    transparent: true,
    opacity: 0.25
  })

  const lineGeometry = new THREE.BufferGeometry()
  const linePositions = new Float32Array(particleCount * 6)
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
  const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial)
  scene.add(lineSegments)

  let mouseX = 0, mouseY = 0
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect()
    mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2
  })

  const clock = new THREE.Clock()

  function animate() {
    animFrameId = requestAnimationFrame(animate)
    const elapsedTime = clock.getElapsedTime()
    
    const posArrCircle = geometryCircle.attributes.position.array
    const posArrEllipse = geometryEllipse.attributes.position.array
    const linePosArray = lineGeometry.attributes.position.array

    for (let i = 0; i < particleCount; i++) {
      const vel = velocities[i]
      const isCircle = i < circleCount
      const targetPos = isCircle ? posArrCircle : posArrEllipse
      const idx = isCircle ? i * 3 : (i - circleCount) * 3

      targetPos[idx] += Math.sin(elapsedTime * 0.8 * vel.speed + vel.phase) * 0.012 + vel.x
      targetPos[idx + 1] += Math.cos(elapsedTime * 1.1 * vel.speed + vel.phase) * 0.018 + vel.y
      targetPos[idx + 2] += Math.sin(elapsedTime * 0.5 * vel.speed + vel.phase) * 0.008

      if (Math.abs(targetPos[idx]) > 8.5) vel.x *= -1
      if (Math.abs(targetPos[idx + 1]) > 7.0) vel.y *= -1

      if (i < particleCount - 1) {
        linePosArray[i * 6] = targetPos[idx]
        linePosArray[i * 6 + 1] = targetPos[idx + 1]
        linePosArray[i * 6 + 2] = targetPos[idx + 2]
        
        const nextIsCircle = (i + 1) < circleCount
        const nextPos = nextIsCircle ? posArrCircle : posArrEllipse
        const nextIdx = nextIsCircle ? (i + 1) * 3 : (i + 1 - circleCount) * 3
        
        linePosArray[i * 6 + 3] = nextPos[nextIdx]
        linePosArray[i * 6 + 4] = nextPos[nextIdx + 1]
        linePosArray[i * 6 + 5] = nextPos[nextIdx + 2]
      }
    }

    geometryCircle.attributes.position.needsUpdate = true
    geometryEllipse.attributes.position.needsUpdate = true
    lineGeometry.attributes.position.needsUpdate = true

    const rotY = elapsedTime * 0.08 + mouseX * 0.4
    const rotX = mouseY * 0.35

    systemCircle.rotation.y = rotY
    systemCircle.rotation.x = rotX
    systemEllipse.rotation.y = rotY
    systemEllipse.rotation.x = rotX
    lineSegments.rotation.y = rotY
    lineSegments.rotation.x = rotX

    renderer.render(scene, camera)
  }

  const handleResize = () => {
    if (!container) return
    width = container.clientWidth || 500
    height = container.clientHeight || 500
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

  window.addEventListener('resize', handleResize)
  animate()
}
</script>

<style scoped>
.font-serif-kr {
  font-family: 'Noto Serif KR', serif;
}
.font-cinzel {
  font-family: 'Cinzel', serif;
}
.glass-panel {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.hover-lift {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 30px -10px rgba(9, 9, 11, 0.08);
}
.text-obsidian {
  color: #09090b;
}
.bg-obsidian {
  background-color: #09090b;
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
.bg-cloud {
  background-color: #ececee;
}
.bg-mist {
  background-color: #d4d4d8;
}
@keyframes modalFadeIn {
  from { opacity: 0; transform: scale(0.96) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-modal {
  animation: modalFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
