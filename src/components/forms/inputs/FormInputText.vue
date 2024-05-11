<script setup lang="ts">
import { defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'

import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import useInputField from '@/composable/useInputField'

defineRule('required', required)

const props = defineProps<{
  label: string
  name: string
}>()

const { input, errorMessage } = useInputField(props.name, props.label, {
  required: required
})
</script>
<template>
  <FloatLabel>
    <InputText :id="props.name" v-model="input" />
    <label :for="props.name">{{ props.label }}</label>
    <small id="username-help">{{ errorMessage }}</small>
  </FloatLabel>
</template>
