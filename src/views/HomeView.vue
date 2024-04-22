<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAppStore, type Pages } from '@/stores/app'
import { ROUTES } from '@/router/names'

/**
 * Data
 */

const $router = useRouter()
const { currentPage } = storeToRefs(useAppStore())

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
  <div class="mx-auto max-w-screen-xl p-4 lg:px-6 lg:py-8">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
      <div class="max-w-screen-md">
        <h2
          class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl"
        >
          LATAM Gol Demo
        </h2>
        <p class="mb-8 text-lg font-light text-gray-500 dark:text-gray-400 sm:text-2xl">
          Desarrollada con <span class="font-medium text-gray-700">Vue.js + Tailwind CSS</span> .
          <br />
          Aplicación web progresiva (PWA).
        </p>

        <p class="mb-2 text-lg font-light text-gray-500 dark:text-gray-400">Páginas disponibles:</p>
        <div class="flex w-fit flex-col space-y-4 sm:w-auto sm:flex-row sm:space-x-4 sm:space-y-0">
          <button type="button" class="text-link" @click="toPage(ROUTES.HOME)">Inicio</button>
          <button type="button" class="text-link" @click="toPage(ROUTES.PLAYER)">Jugador</button>
          <button type="button" class="text-link" @click="toPage(ROUTES.TEAMS)">Equipos</button>
        </div>
      </div>
    </div>
  </div>
</template>
