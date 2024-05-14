<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import Button from 'primevue/button'

import TheProductCard from '@/components/TheProductCard.vue'
import TheProductDialog from '@/components/TheProductDialog.vue'

import { useAuthStore } from '@/store/auth.store'
import { useUserStore } from '@/store/user.store'
import { useProductStore } from '@/store/product.store'

const productStore = useProductStore()
const userStore = useUserStore()
const authStore = useAuthStore()
const router = useRouter()

const handleRedirectToCreateProduct = () => {
  router.push({ name: 'CreateProduct' })
}

onMounted(() => {
  productStore.getProducts()
})
</script>
<template>
  <div class="relative">
    <template v-if="false">
      <div class="button_new_product">
        <Button @click="handleRedirectToCreateProduct()"> Nuevo Producto </Button>
      </div>
    </template>
    <div class="products-container">
      <div class="product-card" v-for="product in productStore.products" :key="product.id">
        <TheProductCard
          :product="product"
          :hasPermission="userStore.isAdmin"
          @deleteProduct="productStore.deletePublishProduct"
          @addToCart="productStore.addToCart"
        />
      </div>
    </div>
    <TheProductDialog />
  </div>
</template>
