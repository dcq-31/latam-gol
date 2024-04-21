<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MailIcon from '@/components/icons/MailIcon.vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
</script>

<template>
  <footer class="w-full bg-gray-50 p-4 dark:bg-gray-800 sm:py-8 md:py-12">
    <div class="mx-auto max-w-screen-xl">
      <div class="lg:flex lg:justify-between">
        <!-- Website description -->
        <div class="mb-6 space-y-2 lg:mb-0">
          <RouterLink to="/" class="flex items-center">
            <img src="@/assets/images/logo.png" class="mr-3 w-10" alt="LATAM Gol Logo" />
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
              >LATAM Gol</span
            >
          </RouterLink>
          <h4 class="max-w-md text-gray-800 dark:text-gray-400">
            Tu fuente definitiva de resultados y estadísticas de fútbol en América Latina.
          </h4>
        </div>
        <!-- / Website description -->

        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <!-- Contact -->
          <div>
            <h2 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Contacto
            </h2>
            <ul class="text-gray-800 dark:text-gray-400">
              <li class="mb-4">
                <a href="https://wa.me/+573228365491" class="hover:underline-style">WhatsApp</a>
              </li>
            </ul>
          </div>
          <!-- / Contact -->

          <!-- Legal -->
          <div>
            <h2 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Información Legal
            </h2>
            <ul class="text-gray-800 dark:text-gray-400">
              <li class="mb-4">
                <RouterLink to="/" class="hover:underline-style">Pólitica de Privacidad</RouterLink>
              </li>
              <li>
                <RouterLink to="/" class="hover:underline-style"
                  >Términos &amp; Condiciones</RouterLink
                >
              </li>
            </ul>
          </div>
          <!-- / Legal -->

          <!-- Comunity -->
          <div class="col-span-2 mx-auto">
            <div class="mb-5 text-gray-800 dark:text-gray-400">
              Únete a nuestra comunidad para mantenerte actualizado.
            </div>
            <div class="flex flex-row items-center">
              <div class="relative">
                <div
                  class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5"
                >
                  <MailIcon class="text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  id="input-subscribe"
                  class="input input-blue"
                  placeholder="name@latamgol.com"
                />
              </div>
              <button type="button" class="btn btn-blue ml-3">Suscríbete</button>
            </div>
          </div>
          <!-- / Comunity -->
        </div>
      </div>

      <span class="mt-4 block text-center text-gray-800 dark:text-gray-400"
        >Web hosting by
        <a href="https://www.icdsoft.com" class="hover:underline-style">ICDSoft</a>.</span
      >

      <hr class="my-6 border-gray-300 dark:border-gray-700 sm:mx-auto lg:my-8" />

      <!-- Social media -->
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-gray-800 dark:text-gray-400 sm:text-center">© 2024 LATAM Gol. </span>
        <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <a href="#" class="text-gray-800 hover:text-gray-900 dark:hover:text-white">
            <FacebookIcon class="h-6 w-6" />
          </a>
        </div>
      </div>
      <!-- / Social media -->
    </div>
  </footer>
</template>
