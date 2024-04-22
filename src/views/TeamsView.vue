<script setup lang="ts">
import { ref, type Ref } from 'vue'
import TeamCard from '@/components/widget/teamCard.vue'
import type { Team } from '@/types/teams'

const teams: Ref<Team[]> = ref([
  {
    name: 'Bahia',
    img_url: 'https://media.api-sports.io/football/teams/118.png',
    year_founder: 1938,
    country: 'Brazil',
    stadium: 'Arena Fonte Nova',
    capacity: 56500
  },
  {
    name: 'Internacional',
    img_url: 'https://media.api-sports.io/football/teams/119.png',
    year_founder: 1909,
    country: 'Brazil',
    stadium: 'Estádio José Pinheiro Borda',
    capacity: 50128
  },
  {
    name: 'Botafogo',
    img_url: 'https://media.api-sports.io/football/teams/120.png',
    year_founder: 1904,
    country: 'Brazil',
    stadium: 'Estádio Nilton Santos',
    capacity: 46931
  },
  {
    name: 'Palmeiras',
    img_url: 'https://media.api-sports.io/football/teams/121.png',
    year_founder: 1914,
    country: 'Brazil',
    stadium: 'Allianz Parque',
    capacity: 43713
  },
  {
    name: 'Fluminense',
    img_url: 'https://media.api-sports.io/football/teams/124.png',
    year_founder: 1902,
    country: 'Brazil',
    stadium: 'Estadio Jornalista Mário Filho (Maracanã)',
    capacity: 78838
  }
])
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-10">
    <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
      <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Copa de Brazil - Temporada 2024
      </h2>
      <p class="text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
        El fútbol es parte integral de la cultura brasileña y la Copa Nacional es un reflejo
        vibrante de esta pasión por el deporte rey!
      </p>
    </div>
    <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:mb-16 xl:grid-cols-3">
      <TeamCard v-for="(team, i) in teams" :key="i" :team="team" class="mx-auto" />
    </div>
  </div>
</template>
