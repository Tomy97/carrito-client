<script setup lang="ts">
import { defineRule, useField } from 'vee-validate'
import { required, min, confirmed } from '@vee-validate/rules'
import useInputField from '../../../composable/useInputField'

defineRule('required', required)
defineRule('min', min)
defineRule('confirmed', confirmed)

const props = withDefaults(
  defineProps<{
    label: string
    name: string
  }>(),
  {
    label: 'Confirmar Contraseña',
    name: 'password-confirm'
  }
)

const { input, errorMessage } = useInputField(props.name, props.label, {
  required: required,
  min: min(8, 'La contraseña debe tener al menos 8 caracteres'),
  confirmed: '@password'
})
</script>
<template>
  <FloatLabel>
    <Password v-model="input" :inputId="props.name" />
    <label :for="props.name">{{ props.label }}</label>
    <small id="password-help">{{ errorMessage }}</small>
  </FloatLabel>
</template>
