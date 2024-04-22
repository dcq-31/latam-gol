<script setup lang="ts">
import type { Component } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import HomeIcon from '@/components/icons/HomeIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import WorldIcon from '@/components/icons/WorldIcon.vue'
import UserGroupIcon from '@/components/icons/UserGroup.vue'
import LayoutIcon from '@/components/icons/LayoutIcon.vue'

/**
 * Types
 */

interface Link {
  label: string
  label_sr: string
  icon: Component
  to: string
}

/**
 * Data
 */

const $router = useRouter()
const { currentPage } = storeToRefs(useAppStore())

const LINKS: Link[] = [
  { label: 'Inicio', label_sr: 'Inicio', icon: HomeIcon, to: 'home' },
  { label: 'Buscar', label_sr: 'Buscar', icon: SearchIcon, to: 'search' },
  { label: 'Vivo', label_sr: 'Partidos en vivo', icon: WorldIcon, to: 'live-matches' },
  { label: 'Equipos', label_sr: 'Equipos', icon: UserGroupIcon, to: 'player' },
  { label: 'Ligas', label_sr: 'Ligas', icon: LayoutIcon, to: 'teams' }
]

/**
 * Methods
 */
function toPage(name: string) {
  // not navigate to empty views
  if (name != 'search' && name != 'live-matches') {
    $router.push({ name })
  }
  currentPage.value = name
}
</script>

<template>
  <div
    class="fixed bottom-4 left-1/2 z-50 h-16 w-full max-w-lg -translate-x-1/2 rounded-full border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"
  >
    <div class="mx-auto grid h-full max-w-lg grid-cols-5 gap-x-5">
      <button
        v-for="(link, i) in LINKS"
        :key="`navbar-with-icons-${i}`"
        type="button"
        class="mx-auto w-full first:rounded-s-full last:rounded-e-full"
        @click="toPage(link.to)"
      >
        <div
          class="bottom-0 inline-flex flex-col items-center justify-center rounded-2xl p-2.5 text-gray-500 transition-[bottom] duration-200 hover:text-gray-700"
          :class="{ active: currentPage == link.to }"
        >
          <Component :is="link.icon" class="h-6 w-6" />
          <div class="text-xs" :class="{ hidden: currentPage == link.to }">{{ link.label }}</div>
          <span class="sr-only">{{ link.label_sr }}</span>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply relative bottom-5 bg-blue-600 text-white;
}
</style>
