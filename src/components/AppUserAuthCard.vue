<script setup lang="ts">
import Card from 'primevue/card'

const props = defineProps({
  title: String
})
</script>
<template>
  <Card>
    <template #title>
      <div class="text-center">
        <h3>{{ title }}</h3>
      </div>
    </template>
    <template #content>
      <slot />
    </template>
  </Card>
</template>
