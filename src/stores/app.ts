import { ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * Types
 */
type Pages = 'home' | 'player' | 'teams' | 'live-matches' | 'search'

export const useAppStore = defineStore('app', () => {
  const currentPage = ref<Pages>('home')

  return { currentPage }
})
