<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  shippingCost: {
    type: Number,
    required: true
  },
  grandTotal: {
    type: Number,
    required: true
  },
  cart: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <Card title="Resumen de Compra" class="h-full">
    <template #title>
      <h4 class="text-center">Resumen de Compra</h4>
      <hr />
    </template>
    <template #content>
      <div>
        <div class="flex flex-wrap flex-row justify-content-between mb-2">
          <span>Productos ({{ props.totalItems }})</span>
          <span>${{ props.totalPrice }} </span>
        </div>
        <div class="flex flex-wrap flex-row justify-content-between mb-3">
          <span>Envio</span>
          <span>${{ props.shippingCost }}</span>
        </div>
        <div class="flex flex-wrap flex-row justify-content-between mb-3 font-bold text-lg">
          <span>Total</span>
          <span>${{ props.grandTotal }}</span>
        </div>
      </div>
      <Button label="Continuar compra" class="w-full" :disabled="!props.cart.length" />
    </template>
  </Card>
</template>
