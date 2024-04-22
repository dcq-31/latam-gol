import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from './names'
import HomeView from '@/views/HomeView.vue'
import TeamsView from '@/views/TeamsView.vue'
import PlayerView from '@/views/PlayerView.vue'
import SearchView from '@/views/SearchView.vue'
import LiveMatchesView from '@/views/LiveMatchesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTES.HOME,
      component: HomeView
    },
    {
      path: '/teams',
      name: ROUTES.TEAMS,
      component: TeamsView
    },
    {
      path: '/player',
      name: ROUTES.PLAYER,
      component: PlayerView
    },
    {
      path: '/search',
      name: ROUTES.SEARCH,
      component: SearchView
    },
    {
      path: '/live-matches',
      name: ROUTES.LIVE_MATCHES,
      component: LiveMatchesView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
