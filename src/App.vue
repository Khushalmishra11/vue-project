<template>
  <div class="flex">
    <SiteNavigation />
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteNavigation from './components/SiteNavigation.vue'
</script>

<style src="./assets/tailwind.css" />
