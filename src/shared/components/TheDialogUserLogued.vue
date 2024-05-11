<script setup lang="ts">
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

const props = defineProps<{
    visible: boolean
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
    <span>
      <i class="pi pi-user" style="font-size: 2rem" />
      <span class="text-700">Te logueaste correctamente</span>
    </span>

    <div class="flex">
      <Button
        label="Logout"
        icon="pi pi-times"
        class="p-button-danger"
        @click="$emit('handleLogout')"
      />
    </div>
  </Dialog>
</template>
