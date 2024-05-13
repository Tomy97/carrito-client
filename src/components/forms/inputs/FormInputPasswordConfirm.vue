<script setup lang="ts">
import { defineRule, useField } from 'vee-validate'
import { required, min, confirmed } from '@vee-validate/rules'
import Password from 'primevue/password'

defineRule('required', required)
defineRule('min', min)
defineRule('confirmed', confirmed)

const props = withDefaults(
  defineProps<{
    label: string
    name: string
    modelValue: string
  }>(),
  {
    label: 'Confirmar Contraseña',
  }
)

const { errorMessage, value } = useField<string>(props.name, {
  required,
  min: 4,
  confirmed: ':password'
})

const $emit = defineEmits(['update:modelValue'])
const onUpdate = (event: any) => {
  $emit('update:modelValue', event.target.value)
}
</script>
<template>
  <div class="flex flex-column gap-2 relative mb-6">
    <label :for="props.name">{{ props.label }}</label>
    <Password v-model="value" :inputId="props.name" toggleMask class="w-full" @input="onUpdate" />
    <small class="text-red-700 absolute top-100">{{ errorMessage }}</small>
  </div>
</template>
