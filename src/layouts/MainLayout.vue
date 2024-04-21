<script setup lang="ts">
import MainNavbar from '../components/layout/MainNavbar.vue'
import MainFooter from '../components/layout/MainFooter.vue'
</script>

<template>
  <div>
    <MainNavbar />
    <main class="pt-12 bg-white dark:bg-gray-900">
      <slot></slot>
    </main>
    <MainFooter />
  </div>
</template>
