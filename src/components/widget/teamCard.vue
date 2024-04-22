<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAppStore, type Pages } from '@/stores/app'
import type { Team } from '@/types/team'
import { ROUTES } from '@/router/names'

/**
 * Props
 */
defineProps<{ team: Team }>()

/**
 * Data
 */
const $router = useRouter()
const { currentPage } = storeToRefs(useAppStore())

const LINKS = [
  { label: 'Jugadores', to: ROUTES.PLAYER },
  { label: 'Calendario', to: ROUTES.HOME },
  { label: 'Estadísticas', to: ROUTES.HOME }
]

/**
 * Methods
 */

function toPage(name: string) {
  // not navigate to empty views
  if (name != ROUTES.SEARCH && name != ROUTES.LIVE_MATCHES) {
    $router.push({ name })
  }
  currentPage.value = name as Pages
}
</script>

<template>
  <div
    class="w-full max-w-sm transform rounded-lg bg-white p-4 transition duration-500 hover:scale-[1.02] hover:shadow dark:bg-gray-800 sm:flex sm:max-w-md sm:flex-col sm:justify-between"
  >
    <div class="flex w-full flex-col gap-y-2 sm:flex-row">
      <!-- Image and name -->
      <div class="flex flex-row items-center py-2">
        <img class="w-24 sm:w-36 md:w-28" :src="team.img_url" :alt="`${team.name} team`" />
        <h3
          class="ml-4 break-all text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:hidden"
        >
          {{ team.name }}
        </h3>
      </div>

      <div class="py-2 tracking-tight">
        <!-- Name at sm and above -->
        <h3
          class="mb-2 hidden break-all text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:block"
        >
          {{ team.name }}
        </h3>

        <!-- Description -->
        <div class="space-y-1 px-4">
          <p class="text-gray-700 dark:text-gray-400">Año de Fundado: {{ team.year_founder }}</p>
          <p class="text-gray-700 dark:text-gray-400">País: {{ team.country }}</p>
          <p class="text-gray-700 dark:text-gray-400">Estadio: {{ team.stadium }}</p>
          <p class="text-gray-700 dark:text-gray-400">Capacidad: {{ team.capacity }}</p>
        </div>

        <!-- Links -->
        <div class="mt-4 flex justify-center gap-x-4 sm:hidden">
          <RouterLink v-for="(link, i) in LINKS" :key="`team-card-link-${i}`" :to="link.to">
            <button type="button" class="text-link font-medium">
              {{ link.label }}
            </button>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Links at sm and above -->
    <div class="mt-2 hidden justify-center gap-x-5 sm:flex sm:flex-row">
      <button
        v-for="(link, i) in LINKS"
        :key="`team-card-link-${i}`"
        type="button"
        class="btn text-link hover:underline-style"
        @click="toPage(link.to)"
      >
        {{ link.label }}
      </button>
    </div>
  </div>
</template>
