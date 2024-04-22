<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import type { Player } from '@/types/player'

/**
 * Types
 */

interface PlayerSummary {
  league: string
  league_image_url: string
  title: string
  position: string
  alignments: number
  minutes: number
  rating: number
  goals: number
  assists: number
  yellow_cards: number
  red_cards: number
}

interface League {
  name: string
  image_url: string
}

/**
 * Data
 */
const player: Ref<Player> = ref({
  name: 'Roberto Carlos Alvarado Hernández',
  image_url: 'https://media.api-sports.io/football/players/2879.png',
  age: 26,
  date_of_birth: '1998-09-07',
  place_of_birth: 'Irapuato',
  country_of_birth: 'México',
  nationality: 'México',
  height: 176,
  weight: 70
})

const summaries: Ref<PlayerSummary[]> = ref([
  {
    league: 'Liga MX',
    league_image_url: 'https://media.api-sports.io/football/leagues/262.png',
    title: 'Guadalajara Chivas',
    position: 'Attacker',
    alignments: 30,
    minutes: 2652,
    rating: 7.4,
    goals: 9,
    assists: 6,
    yellow_cards: 8,
    red_cards: 0
  },
  {
    league: 'Leagues Cup',
    league_image_url: 'https://media.api-sports.io/football/leagues/772.png',
    title: 'Guadalajara Chivas',
    position: 'Attacker',
    alignments: 30,
    minutes: 2652,
    rating: 7.4,
    goals: 9,
    assists: 6,
    yellow_cards: 8,
    red_cards: 0
  },
  {
    league: 'Friendlies',
    league_image_url: 'https://media.api-sports.io/football/leagues/10.png',
    title: 'Guadalajara Chivas',
    position: 'Attacker',
    alignments: 30,
    minutes: 2652,
    rating: 7.4,
    goals: 9,
    assists: 6,
    yellow_cards: 8,
    red_cards: 0
  }
])

/**
 * Computed
 */
const leagues = computed<League[]>(() =>
  summaries.value.map((summary) => {
    return { name: summary.league, image_url: summary.league_image_url }
  })
)

const selected_summary = ref(summaries.value[0])

/**
 * Methods
 */

function setSelectedSummary(league: League) {
  const result = summaries.value.find((s) => s.league == league.name)

  if (result) selected_summary.value = result
}
</script>
<template>
  <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
    <div class="flex flex-col justify-around gap-5 xl:grid xl:grid-cols-5">
      <!-- Player information -->
      <div
        class="mx-auto w-full max-w-lg flex-1 space-y-4 rounded-b-lg rounded-t-3xl bg-white p-2 dark:border-gray-700 dark:bg-gray-800 xl:col-span-2"
      >
        <div class="h-40 rounded-b-xl rounded-t-3xl bg-blue-500">
          <img
            :src="player.image_url"
            :alt="`profile image of ${player.name}`"
            class="relative -bottom-16 mx-auto w-full max-w-36 rounded-full"
          />
        </div>

        <div class="p-5 pt-12">
          <h5 class="text-center text-xl font-medium text-gray-800 dark:text-white">
            {{ player.name }}
          </h5>

          <ul role="list">
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="min-w-0 flex-1">
                  <p class="truncate text-gray-500 dark:text-white">Edad</p>
                </div>
                <div class="font-medium text-gray-800 dark:text-white">
                  {{ player.age }}
                </div>
              </div>
            </li>

            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="min-w-0 flex-1">
                  <p class="truncate text-gray-500 dark:text-white">Fecha de nacimiento</p>
                </div>
                <div class="font-medium text-gray-800 dark:text-white">
                  {{ player.date_of_birth }}
                </div>
              </div>
            </li>

            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="min-w-0 flex-1">
                  <p class="truncate text-gray-500 dark:text-white">Lugar de nacimiento</p>
                </div>
                <div class="text-base font-medium text-gray-800 dark:text-white">
                  {{ player.place_of_birth }}
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="min-w-0 flex-1">
                  <p class="truncate text-gray-500 dark:text-white">País de nacimiento</p>
                </div>
                <div class="text-base font-medium text-gray-800 dark:text-white">
                  {{ player.country_of_birth }}
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="min-w-0 flex-1">
                  <p class="truncate text-gray-500 dark:text-white">Nacionalidad</p>
                </div>
                <div class="text-base font-medium text-gray-800 dark:text-white">
                  {{ player.nationality }}
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="min-w-0 flex-1">
                  <p class="truncate text-gray-500 dark:text-white">Altura</p>
                </div>
                <div class="font-medium text-gray-800 dark:text-white">{{ player.height }} cm</div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="min-w-0 flex-1">
                  <p class="truncate text-gray-500 dark:text-white">Peso</p>
                </div>
                <div class="text-base font-medium text-gray-800 dark:text-white">
                  {{ player.weight }} kg
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- / Player information -->

      <div class="flex flex-col gap-5 md:w-full md:flex-row md:items-start xl:col-span-3">
        <!-- Leagues -->
        <div
          class="mx-auto w-full max-w-sm rounded-lg bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6"
        >
          <h5 class="mb-3 text-lg font-medium text-gray-800 dark:text-white">Ligas</h5>

          <ul class="my-4 space-y-3">
            <li v-for="(league, i) in leagues" :key="`player-view-league-${i}`">
              <div
                class="flex cursor-pointer items-center rounded-lg p-3 dark:text-white"
                :class="
                  league.name == selected_summary.league
                    ? 'bg-blue-500 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-500'
                    : ' text-gray-500 hover:text-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500'
                "
                @click="setSelectedSummary(league)"
              >
                <img :src="league.image_url" :alt="`${league.name} league`" class="w-8" />
                <span class="ms-3 flex-1 whitespace-nowrap">{{ league.name }}</span>
              </div>
            </li>
          </ul>
        </div>
        <!-- / Leagues -->

        <!-- League summary -->
        <div class="flex-1 rounded-lg bg-white py-4">
          <div class="mx-auto flex w-fit flex-row items-center gap-x-4">
            <img
              :src="selected_summary.league_image_url"
              :alt="`${selected_summary.league} league`"
              class="w-8"
            />
            <h5 class="text-lg font-medium text-gray-800 dark:text-white">
              {{ selected_summary.league }}
            </h5>
          </div>

          <div class="mb-8 grid grid-cols-2 dark:bg-gray-800">
            <!-- Position -->
            <div
              class="flex flex-col items-center justify-center rounded-tl-lg bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 class="font-medium text-gray-800 dark:text-white">Posición</h3>
              <p class="my-2 text-gray-500">{{ selected_summary.position }}</p>
            </div>
            <!-- / Position  -->

            <!-- Alignments -->
            <div
              class="flex flex-col items-center justify-center rounded-t-lg bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 class="font-medium text-gray-800 dark:text-white">Alineaciones</h3>
              <p class="my-2 text-gray-500">{{ selected_summary.alignments }}</p>
            </div>
            <!-- / Alignments -->

            <!-- Minutes -->
            <div
              class="flex flex-col items-center justify-center rounded-tl-lg bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 class="font-medium text-gray-800 dark:text-white">Minutos</h3>
              <p class="my-2 text-gray-500">{{ selected_summary.minutes }}</p>
            </div>
            <!-- / Minutes -->

            <!-- Rating -->
            <div
              class="flex flex-col items-center justify-center bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 class="font-medium text-gray-800 dark:text-white">Calificación</h3>
              <p class="my-2 text-gray-500">{{ selected_summary.rating }}</p>
            </div>
            <!-- / Rating -->

            <!-- Second block -->
            <!-- Position -->
            <div
              class="flex flex-col items-center justify-center rounded-tl-lg bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 class="font-medium text-gray-800 dark:text-white">Posición</h3>
              <p class="my-2 text-gray-500">{{ selected_summary.position }}</p>
            </div>
            <!-- / Position  -->

            <!-- Alignments -->
            <div
              class="flex flex-col items-center justify-center bg-white p-2 text-center dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 class="font-medium text-gray-800 dark:text-white">Alineaciones</h3>
              <p class="my-2 text-gray-500">{{ selected_summary.alignments }}</p>
            </div>
            <!-- / Alignments -->

            <!-- Minutes -->
            <div
              class="flex flex-col items-center justify-center rounded-bl-lg bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 class="font-medium text-gray-800 dark:text-white">Minutos</h3>
              <p class="my-2 text-gray-500">{{ selected_summary.minutes }}</p>
            </div>
            <!-- / Minutes -->

            <!-- Rating -->
            <div
              class="rounded-br-lgbg-white flex flex-col items-center justify-center rounded-t-none p-4 text-center dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 class="font-medium text-gray-800 dark:text-white">Calificación</h3>
              <p class="my-2 text-gray-500">{{ selected_summary.rating }}</p>
            </div>
            <!-- / Rating -->
          </div>
        </div>
        <!-- League summary -->
      </div>
    </div>
  </div>
</template>
