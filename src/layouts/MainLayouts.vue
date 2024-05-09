<script setup lang="ts">
import TheHeader from '../shared/TheHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <TheHeader />
    <RouterView />
  </div>
</template>
