<script setup lang="ts">
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

const props = defineProps<{
  visible: boolean
  userData: {
    name: string
    balance: number
  }
}>()

const $emit = defineEmits(['closeDialog', 'handleLogout'])
</script>
<template>
  <Dialog
    v-model:visible="props.visible"
    position="topright"
    :style="{ width: '25rem' }"
    :modal="true"
    :draggable="false"
    @update:visible="$emit('closeDialog')"
  >
    <div class="mb-2">
      <span class="text-700">Bienvenido {{ userData.name }}</span>
    </div>
    <div class="mb-3">
      <span class="text-700">Balance: ${{ userData.balance }}</span>
    </div>

    <div class="flex">
      <Button label="Logout" class="p-button-danger w-full" @click="$emit('handleLogout')" />
    </div>
  </Dialog>
</template>
