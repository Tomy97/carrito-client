<script setup lang="ts">
import { defineRule } from 'vee-validate'
import { required, min, confirmed } from '@vee-validate/rules'

import useInputField from '../../../composable/useInputField'

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
    label: 'Contraseña',
    name: 'password',
    modelValue: ''
  }
)

const $emit = defineEmits(['update:modelValue'])

const { input, errorMessage } = useInputField(props.name, 'contraseña', {
  required: required,
  min: min(8, 'La contraseña debe tener al menos 8 caracteres')
})
</script>
<template>
  <div class="flex flex-column gap-2">
    <label :for="props.name">{{ props.label }}</label>
    <Password
      v-model="input"
      :inputId="props.name"
      toggleMask
      strongLabel="La contraseña es valida"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <small id="username-help" class="text-red-700">{{ errorMessage }}</small>
  </div>
</template>
