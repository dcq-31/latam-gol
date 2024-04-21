<script setup lang="ts">
import MainNavbar from '../components/layout/MainNavbar.vue'
import MainFooter from '../components/layout/MainFooter.vue'
</script>

<template>
  <div>
    <MainNavbar />
    <main class="bg-white pt-12 dark:bg-gray-900">
      <slot></slot>
    </main>
    <MainFooter />
  </div>
</template>
