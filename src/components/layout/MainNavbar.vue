<script setup lang="ts">
import { type Ref, ref, onMounted } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { type DropdownInterface, Dropdown, initDropdowns } from 'flowbite'
import { useAppStore } from '@/stores/app'
/**
 * Types
 */

interface Language {
  name: string
  flag_url: string
}

interface Link {
  label: string
  to: string
}

/**
 * Data
 */

const $router = useRouter()
const { currentPage } = storeToRefs(useAppStore())

const languages: Ref<Language[]> = ref([
  { name: 'Español', flag_url: 'https://flagcdn.com/w20/es.png' },
  { name: 'Inglés', flag_url: 'https://flagcdn.com/w20/gb.png' },
  { name: 'Portugés', flag_url: 'https://flagcdn.com/w20/pt.png' }
])

const languageSelected: Ref<Language> = ref({
  name: 'Español',
  flag_url: 'https://flagcdn.com/w20/es.png'
})

const LINKS: Link[] = [
  { label: 'Inicio', to: 'home' },
  { label: 'Partidos en Vivo', to: 'live-matches' },
  { label: 'Equipos', to: 'player' },
  { label: 'Ligas', to: 'teams' }
]

const languageDropdown: Ref<DropdownInterface | null> = ref(null)

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

function setLanguage(lang: Language) {
  languageSelected.value = lang
  if (languageDropdown.value) languageDropdown.value.hide()
}

/**
 * Lifecycle
 */
onMounted(() => {
  initDropdowns()

  // Language dropdown properties
  const $targetLanguageDropdown = document.getElementById('dropdownLanguageSelectMenu')
  const $triggerLanguageDropdown = document.getElementById('dropdownLanguageSelectButton')

  languageDropdown.value = new Dropdown(
    $targetLanguageDropdown,
    $triggerLanguageDropdown,
    {},
    { id: 'dropdownLanguageSelectMenu', override: true }
  )
})
</script>

<template>
  <header>
    <nav class="border-b border-gray-200 bg-white px-4 py-1 dark:bg-gray-800 lg:px-6 lg:py-2.5">
      <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <!-- Home link -->
        <RouterLink to="/" class="flex items-center space-x-2 rtl:space-x-reverse">
          <img src="@/assets/images/logo.png" class="w-10" alt="Latam gol Logo" />
          <span
            class="self-center whitespace-nowrap text-xl font-semibold text-slate-800 dark:text-white"
            >LATAM Gol</span
          >
        </RouterLink>
        <!-- / Home link -->

        <div class="flex h-full w-auto flex-row items-center justify-between">
          <ul class="flex flex-row font-medium">
            <li v-for="(link, i) in LINKS" :key="`main-navbar-link-${i}`">
              <button
                type="button"
                class="-my-2 block border-b px-6 py-3 font-normal lg:-my-3 lg:py-4"
                :class="
                  currentPage == link.to
                    ? 'border-b-blue-600  text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-600'
                    : 'border-b-transparent text-gray-500 hover:text-gray-700 dark:text-white    dark:hover:text-gray-100'
                "
                @click="toPage(link.to)"
              >
                {{ link.label }}
              </button>
            </li>
          </ul>
        </div>

        <div class="flex space-x-3 rtl:space-x-reverse">
          <!-- Dropdown button -->
          <button
            id="dropdownLanguageSelectButton"
            type="button"
            data-dropdown-toggle="dropdownLanguageSelectMenu"
            class="inline-flex items-center px-4 py-2 text-center text-sm font-normal text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-100"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="me-2"
              :src="languageSelected.flag_url"
              :alt="`language ${languageSelected.name}`"
            />
            {{ languageSelected.name }}
            <svg
              class="ms-3 h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <!-- / Dropdown button -->

          <!-- Dropdown content -->
          <div
            id="dropdownLanguageSelectMenu"
            class="z-10 hidden rounded-lg bg-white shadow dark:bg-gray-700"
          >
            <ul class="py-1 text-sm text-gray-500 dark:text-gray-200">
              <li
                v-for="(lang, i) in languages"
                :key="`main-navbar-language-${i}`"
                class="flex cursor-pointer gap-x-2 px-4 py-2 first:-mt-1 first:pt-3 last:-mb-1 last:pb-3 hover:text-gray-700 dark:hover:text-white"
                @click="setLanguage(lang)"
              >
                <img :src="lang.flag_url" :alt="`language ${lang.name}`" />
                <div :class="{ 'text-blue-500': languageSelected.name == lang.name }">
                  {{ lang.name }}
                </div>
              </li>
            </ul>
          </div>
          <!-- / Dropdown content -->
        </div>
      </div>
    </nav>
  </header>
</template>
