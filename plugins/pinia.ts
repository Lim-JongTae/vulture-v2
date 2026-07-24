import { defineNuxtPlugin, type NuxtApp } from 'nuxt/app'
import { createPinia, setActivePinia } from 'pinia'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  const pinia = createPinia()
  nuxtApp.vueApp.use(pinia)
  nuxtApp.provide('pinia', pinia)
  setActivePinia(pinia)

  if (import.meta.server) {
    nuxtApp.payload.pinia = pinia.state.value
  } else if (nuxtApp.payload?.pinia) {
    pinia.state.value = nuxtApp.payload.pinia as Record<string, any>
  }
})
