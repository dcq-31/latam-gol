import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ROUTES } from '@/router/names'

/**
 * Types
 */
export type Pages = ROUTES.HOME | ROUTES.PLAYER | ROUTES.TEAMS | ROUTES.LIVE_MATCHES | ROUTES.SEARCH

export const useAppStore = defineStore('app', () => {
  const currentPage = ref<Pages>(ROUTES.HOME)

  return { currentPage }
})
