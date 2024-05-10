<script setup lang="ts">
import type { Product } from '../types/product'
import Card from 'primevue/card'
import Button from 'primevue/button'

defineProps<{
  product: Product
  hasPermission: boolean
}>()

const $emit = defineEmits(['deleteProduct', 'addToCart'])
</script>
<template>
  <Card class="h-full">
    <template #header>
      <img :alt="product.name" :src="product.imageFilename" class="card-img" />
    </template>
    <template #title>
      {{ product.name }}
    </template>
    <template #subtitle>
      <p class="m-0">
        {{ product.description }}
      </p>
    </template>
    <template #content>
      <div class="text-right">
        <span> ${{ product.price }} </span>
      </div>
    </template>
    <template #footer>
      <div class="flex flex-wrap gap-2 mt-1">
        <Button
          label="Eliminar Producto"
          severity="danger"
          outlined
          class="w-full mb-2"
          v-if="hasPermission"
          @click="$emit('deleteProduct', product.id)"
        />
        <Button label="Agregar al carrito" class="w-full" @click="$emit('addToCart', product)" />
      </div>
    </template>
  </Card>
</template>
<style scoped>
.card-img {
  width: 100%;
  min-height: 550px;
  height: 550px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
</style>
