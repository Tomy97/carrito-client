<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Tag from 'primevue/tag'

import type { Cart } from '../types/cart'

const props = defineProps({
  cart: {
    type: Array as () => Cart[],
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
})

const $emit = defineEmits(['deleteProduct', 'sumQuantity', 'minusQuantity'])
</script>
<template>
  <Card>
    <template #content>
      <DataTable :value="props.cart">
        <Column field="imageFilename" header="">
          <template #body="{ data }">
            <div class="text-center">
              <img :src="data.imageFilename" alt="Producto" style="width: 50px" />
            </div>
          </template>
        </Column>
        <Column field="name">
          <template #header>
            <div class="flex justify-content-center w-full">
              <span>Nombre del Producto</span>
            </div>
          </template>
          <template #body="{ data }">
            <div class="text-center">
              <span>{{ data.name }}</span>
            </div>
          </template>
        </Column>
        <Column>
          <template #header>
            <div class="flex justify-content-center w-full">
              <span>Cantidad</span>
            </div>
          </template>
          <template #body="{ data }">
            <div class="text-center">
              <span>
                {{ data.quantity }}
              </span>
            </div>
          </template>
        </Column>
        <Column>
          <template #header>
            <div class="flex justify-content-center w-full">
              <span>Estado</span>
            </div>
          </template>
          <template #body="{ data }">
            <div class="text-center">
              <Tag :value="data.stock > 0 ? 'Hay Stock' : 'No hay Stock'" />
            </div>
          </template>
        </Column>
        <Column :exportable="false">
          <template #body="{ data }">
            <div class="flex justify-content-between align-items-center">
              <Button
                icon="pi pi-minus"
                outlined
                rounded
                severity="secondary"
                @click="$emit('minusQuantity', data)"
                :disabled="data.disabledMinus"
              />
              {{ data.quantity }}
              <Button
                icon="pi pi-plus"
                outlined
                rounded
                @click="$emit('sumQuantity', data)"
                :disabled="data.disabledSum"
              />
            </div>
            <span class="text-center">
              <p class="text-sm m-0 mt-2">Stock: {{ data.stock }}</p>
            </span>
          </template>
        </Column>
        <Column>
          <template #header>
            <div class="flex justify-content-center w-full">
              <span>Precio</span>
            </div>
          </template>
          <template #body>
            <div class="text-center">
              <span class="text-center font-bold"> ${{ totalPrice }} </span>
            </div>
          </template>
        </Column>
        <Column :exportable="false">
          <template #body="{ data }">
            <div class="text-center">
              <Button
                icon="pi pi-trash"
                outlined
                rounded
                severity="danger"
                @click="$emit('deleteProduct', data.id)"
              />
            </div>
          </template>
        </Column>
        <template #empty>
          <h5 class="text-center">Carrito Vacio</h5>
        </template>
      </DataTable>
    </template>
  </Card>
</template>
