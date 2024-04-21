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
    class="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex sm:max-w-md sm:flex-col sm:justify-between"
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
      <RouterLink v-for="(link, i) in LINKS" :key="`team-card-link-${i}`" :to="link.to">
        <button type="button" class="text-link font-medium">
          {{ link.label }}
        </button>
      </RouterLink>
    </div>
  </div>
</template>
