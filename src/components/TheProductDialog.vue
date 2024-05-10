<script setup lang="ts">
import { useProductStore } from '../store/product.store'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

const store = useProductStore()
const router = useRouter()

const handleRedirectToCart = () => {
  store.openModal = false
  router.push({ name: 'Cart' })
}
</script>
<template>
  <Dialog v-model:visible="store.openModal" modal header="Producto Agregado">
    <div class="flex justify-content-center">
      <img :src="store.productSelected?.imageFilename" :alt="store.productSelected?.name" class="img" />
      <div class="divider" />
      <div class="description pl-3">
        <h3 class="font-weight-bold text-center">Producto Agregado al Carrito</h3>
        <p><strong> Nombre del Producto: </strong> {{ store.productSelected?.name }}</p>
        <p><strong> Descripcion: </strong> {{ store.productSelected?.description }}</p>
        <p><strong> Precio: </strong> {{ store.productSelected?.price }}</p>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-content-between">
        <Button severity="contrast" @click="handleRedirectToCart()">Ir al Carrito</Button>
      </div>
    </template>
  </Dialog>
</template>
<style scoped>
.divider {
  border-left: 2px solid #000;
}
</style>
