<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from '@/store/product.store'
import { UseCartStore } from '@/store/cart.store'
import TheProductCard from '@/components/TheProductCard.vue'
import TheProductDialog from '@/components/TheProductDialog.vue'

const productStore = useProductStore()
const cartStore = UseCartStore()

onMounted(() => {
  productStore.getProducts()
})
</script>
<template>
  <div class="products-container">
    <div class="product-card" v-for="product in productStore.products" :key="product.id">
      <TheProductCard
        :product="product"
        :hasPermission="productStore.hasPermission"
        @deleteProduct="productStore.deletePublishProduct"
        @addToCart="cartStore.handleAddToCart"
      />
    </div>
  </div>
  <TheProductDialog />
</template>
