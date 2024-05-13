<script setup lang="ts">
import { defineRule, useField } from 'vee-validate'
import { required } from '@vee-validate/rules'

import InputText from 'primevue/inputtext'

defineRule('required', required)

const props = defineProps<{
  label: string
  name: string
  modelValue: string
}>()

const { errorMessage, value } = useField<string>(props.name, {
  required
})

const $emit = defineEmits(['update:modelValue'])
const onUpdate = (event: any) => {
  $emit('update:modelValue', event.target.value)
}
</script>
<template>
  <div class="flex flex-column gap-2 relative">
    <label :for="props.name">{{ props.label }}</label>
    <InputText :name="props.name" type="text" required v-model="value" @input="onUpdate" />
    <small class="text-red-700 absolute top-100">{{ errorMessage }}</small>
  </div>
</template>
