<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Dropdown, initDropdowns } from 'flowbite'
import type { DropdownInterface } from 'flowbite'

/**
 * Types
 */

interface Language {
  name: string
  flag_url: string
}

/**
 * Data
 */
const languages: Ref<Language[]> = ref([
  { name: 'Español', flag_url: 'https://flagcdn.com/w20/es.png' },
  { name: 'Inglés', flag_url: 'https://flagcdn.com/w20/gb.png' },
  { name: 'Portugés', flag_url: 'https://flagcdn.com/w20/pt.png' }
])

const languageSelected: Ref<Language> = ref({
  name: 'Español',
  flag_url: 'https://flagcdn.com/w20/es.png'
})

/**
 * Flowbite
 */

// Dropdown
const languageDropdown: Ref<DropdownInterface | null> = ref(null)

/**
 * Methods
 */

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
  <nav
    class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      <!-- Home link -->
      <RouterLink to="/" class="flex items-center space-x-2 rtl:space-x-reverse">
        <img src="@/assets/images/logo.png" class="w-10" alt="Latam gol Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >LATAM Gol</span
        >
      </RouterLink>
      <!-- / Home link -->

      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <!-- Dropdown button -->
        <button
          id="dropdownLanguageSelectButton"
          data-dropdown-toggle="dropdownLanguageSelectMenu"
          class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-50 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="me-2"
            :src="languageSelected.flag_url"
            :alt="`language ${languageSelected.name}`"
          />
          {{ languageSelected.name }}
          <svg
            class="w-2.5 h-2.5 ms-3"
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
          class="z-10 hidden bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li
              v-for="(lang, i) in languages"
              :key="`main-navbar-language-${i}`"
              class="flex py-2 px-4 gap-x-2 cursor-pointer first:-mt-1 first:pt-3 last:-mb-1 last:pb-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
</template>
