<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Team } from '@/types/team'

/**
 * Props
 */
defineProps<{ team: Team }>()

/**
 * Data
 */
const LINKS = [
  { label: 'Jugadores', to: '/' },
  { label: 'Calendario', to: '/' },
  { label: 'Estadísticas', to: '/' }
]
</script>

<template>
  <div
    class="p-4 max-w-sm w-full sm:max-w-md bg-white rounded-lg border border-gray-200 shadow sm:flex sm:flex-col sm:justify-between dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="flex flex-col gap-y-2 w-full sm:flex-row">
      <!-- Image and name -->
      <div class="flex flex-row items-center py-2">
        <img class="w-24 sm:w-36 md:w-28" :src="team.img_url" :alt="`${team.name} team`" />
        <h3
          class="text-3xl ml-4 font-bold tracking-tight break-all sm:hidden text-gray-900 dark:text-white"
        >
          {{ team.name }}
        </h3>
      </div>

      <div class="tracking-tight py-2">
        <!-- Name at sm and above -->
        <h3
          class="text-3xl mb-2 text-center font-bold tracking-tight break-all hidden sm:block text-gray-900 dark:text-white"
        >
          {{ team.name }}
        </h3>

        <!-- Description -->
        <div class="px-4 space-y-1">
          <p class="text-gray-700 dark:text-gray-400">Año de Fundado: {{ team.year_founder }}</p>
          <p class="text-gray-700 dark:text-gray-400">País: {{ team.country }}</p>
          <p class="text-gray-700 dark:text-gray-400">Estadio: {{ team.stadium }}</p>
          <p class="text-gray-700 dark:text-gray-400">Capacidad: {{ team.capacity }}</p>
        </div>

        <!-- Links -->
        <div class="mt-4 flex justify-center gap-x-4 sm:hidden">
          <RouterLink v-for="(link, i) in LINKS" :key="`team-card-link-${i}`" :to="link.to">
            <button type="button" class="font-medium text-link">
              {{ link.label }}
            </button>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Links at sm and above -->
    <div class="mt-2 justify-center gap-x-5 hidden sm:flex sm:flex-row">
      <RouterLink v-for="(link, i) in LINKS" :key="`team-card-link-${i}`" :to="link.to">
        <button type="button" class="font-medium text-link">
          {{ link.label }}
        </button>
      </RouterLink>
    </div>
  </div>
</template>
