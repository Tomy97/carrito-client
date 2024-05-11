<script setup lang="ts">
import { defineRule } from 'vee-validate'
import { required, email } from '@vee-validate/rules'
import useInputField from '@/composable/useInputField'
import InputText from 'primevue/inputtext'

defineRule('required', required)
defineRule('email', email)

const props = withDefaults(
  defineProps<{
    label: string
    name: string
    modelValue: string
  }>(),
  {
    label: 'Email',
    name: 'email',
    modelValue: ''
  }
)

const $emit = defineEmits(['update:modelValue'])

const { input, errorMessage } = useInputField(props.name, props.label, {
  required: required,
  email: email
})
</script>
<template>
  <div class="flex flex-column gap-2">
    <label :for="props.name">{{ props.label }}</label>
    <InputText
      :id="props.name"
      v-model="input"
      aria-describedby="username-help"
      :value="props.modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <small id="username-help" class="text-red-700">{{ errorMessage }}</small>
  </div>
</template>
