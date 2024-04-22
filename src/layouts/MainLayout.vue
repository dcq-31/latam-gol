<script setup lang="ts">
import MainNavbar from '@/components/layout/MainNavbar.vue'
import MainFooter from '@/components/layout/MainFooter.vue'
import NavbarWithIcons from '@/components/navigation/NavbarWithIcons.vue'
</script>

<template>
  <div>
    <MainNavbar class="hidden md:block" />
    <main class="bg-gray-50 dark:bg-gray-900 md:pt-4">
      <slot></slot>
    </main>
    <NavbarWithIcons class="md:hidden" />
    <MainFooter />
  </div>
</template>
