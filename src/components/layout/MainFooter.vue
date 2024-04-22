<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MailIcon from '@/components/icons/MailIcon.vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
</script>

<template>
  <footer class="w-full bg-slate-900 pb-24 pt-4 text-white sm:pt-8 md:pb-8 md:pt-12">
    <div class="mx-auto max-w-screen-xl">
      <div class="lg:flex lg:justify-between lg:gap-x-5">
        <!-- Website description -->
        <div class="mb-6 space-y-2 px-2 lg:mb-0">
          <RouterLink to="/" class="flex items-center">
            <img src="@/assets/images/logo.png" class="mr-3 w-12 lg:w-16" alt="LATAM Gol Logo" />
            <span class="self-center whitespace-nowrap text-xl font-semibold">LATAM Gol</span>
          </RouterLink>
          <h4 class="max-w-xs">
            Tu fuente definitiva de resultados y estadísticas de fútbol en América Latina.
          </h4>
        </div>
        <!-- / Website description -->

        <div class="grid grid-cols-2 gap-8 px-4 md:grid-cols-4">
          <!-- Contact -->
          <div>
            <h2 class="mb-4 text-sm font-semibold uppercase">Contacto</h2>
            <ul>
              <li class="mb-4">
                <a href="https://wa.me/+573228365491" class="hover:underline-style">WhatsApp</a>
              </li>
            </ul>
          </div>
          <!-- / Contact -->

          <!-- Legal -->
          <div>
            <h2 class="mb-4 text-sm font-semibold uppercase">Información Legal</h2>
            <ul>
              <li class="mb-4">
                <RouterLink to="/" class="hover:underline-style">Política de Privacidad</RouterLink>
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
            <div class="mb-5">Únete a nuestra comunidad para mantenerte actualizado.</div>
            <div class="flex flex-row items-center">
              <div class="relative">
                <div
                  class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5"
                >
                  <MailIcon class="text-blue-600" />
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

      <span class="mt-6 block text-center lg:mt-8"
        >Web hosting by
        <a href="https://www.icdsoft.com" class="hover:underline-style">ICDSoft</a>.</span
      >

      <hr class="my-4 border-gray-300 dark:border-gray-700 sm:mx-auto lg:my-8" />

      <!-- Social media -->
      <div class="flex items-center justify-between px-5">
        <span class="text-center">© 2024 LATAM Gol. </span>
        <div class="flex justify-center space-x-6">
          <a href="https://facebook.com/latamgol" class="hover:text-blue-500">
            <FacebookIcon class="h-6 w-6" />
          </a>
        </div>
      </div>
      <!-- / Social media -->
    </div>
  </footer>
</template>
