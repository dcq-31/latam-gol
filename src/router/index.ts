import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TeamsView from '@/views/TeamsView.vue'
import PlayerView from '@/views/PlayerView.vue'
import SearchView from '@/views/SearchView.vue'
import LeaguesView from '@/views/LeaguesView.vue'
import LiveMatchesView from '@/views/LiveMatchesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsView
    },
    {
      path: '/player',
      name: 'player',
      component: PlayerView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/leagues',
      name: 'leagues',
      component: LeaguesView
    },
    {
      path: '/live-matches',
      name: 'live-matches',
      component: LiveMatchesView
    }
  ]
})

export default router
