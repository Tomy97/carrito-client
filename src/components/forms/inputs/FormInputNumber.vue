<script setup lang="ts">
import { defineRule, useField } from 'vee-validate'
import { required, numeric } from '@vee-validate/rules'
import InputNumber from 'primevue/inputnumber'

defineRule('required', required)
defineRule('numeric', numeric)

const props = defineProps<{
  label: string
  name: string
  modelValue: number
}>()

const { errorMessage, value } = useField<number>(props.name, {
  required,
  numeric
})

const $emit = defineEmits(['update:modelValue'])
</script>
<template>
  <div class="flex flex-column gap-2 relative">
    <label :for="props.name">{{ props.label }}</label>
    <InputNumber
      :name="props.name"
      type="number"
      required
      v-model="value"
      @input="$emit('update:modelValue', $event.value)"
    />
    <small class="text-red-700 absolute top-100">{{ errorMessage }}</small>
  </div>
</template>
