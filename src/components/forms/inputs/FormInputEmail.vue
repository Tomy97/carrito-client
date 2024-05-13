<script setup>
import { defineRule, useField } from 'vee-validate'
import { required, email } from '@vee-validate/rules'
import InputText from 'primevue/inputtext'

defineRule('required', required)
defineRule('email', email)

const props = defineProps({
  name: {
    type: String,
    default: 'email'
  },
  modelValue: {
    type: String
  }
})

const { errorMessage, value } = useField(props.name, {
  required,
  email
})

const $emit = defineEmits(['update:modelValue'])
const onUpdate = (event) => {
  $emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="flex flex-column gap-2 relative mb-5">
    <label :for="props.name">Email</label>
    <InputText :name="props.name" type="email" required v-model="value" @input="onUpdate" />
    <small class="text-red-700 absolute top-100">{{ errorMessage }}</small>
  </div>
</template>
