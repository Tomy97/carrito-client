<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from '@/store/product.store'
import TheProductCard from '@/components/TheProductCard.vue'
import TheProductDialog from '@/components/TheProductDialog.vue'

const store = useProductStore()

onMounted(() => {
  store.getProducts()
})
</script>
<template>
  <div class="products-container">
    <div class="product-card" v-for="product in store.products" :key="product.id">
      <TheProductCard
        :product="product"
        :hasPermission="store.hasPermission"
        @deleteProduct="store.deletePublishProduct"
        @addToCart="store.addToCart"
      />
    </div>
  </div>
  <TheProductDialog />
</template>
