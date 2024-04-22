<script setup lang="ts">
import MainNavbar from '@/components/layout/MainNavbar.vue'
import MainFooter from '@/components/layout/MainFooter.vue'
import NavbarWithIcons from '@/components/navigation/NavbarWithIcons.vue'
</script>

<template>
  <div class="pb-20 md:pb-0">
    <MainNavbar class="hidden md:block" />
    <main class="bg-white pt-12 dark:bg-gray-900">
      <slot></slot>
    </main>
    <NavbarWithIcons class="md:hidden" />
    <MainFooter />
  </div>
</template>
