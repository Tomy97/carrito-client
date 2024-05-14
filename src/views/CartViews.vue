<script setup lang="ts">
import { UseCartStore } from '@/store/cart.store'

import TheDataTableProductCard from '@/components/TheDataTableProductCard.vue'
import ThePurcheseSummaryCard from '@/components/ThePurcheseSummaryCard.vue'
import { onMounted } from 'vue'
import { watch } from 'vue'

const store = UseCartStore()

onMounted(async () => {
  store.cartList = await store.handleGetUserLoggedCart()
})
</script>
<template>
  <div class="cart-container">
    <div>
      <TheDataTableProductCard
        :cart="store.cartList"
        :totalPrice="store.totals.totalPrice"
        @deleteProduct="store.handleDeleteProduct($event)"
        @sumQuantity="store.handleSumQuantity($event)"
        @minusQuantity="store.handleMinusQuantity($event)"
      />
    </div>
    <div>
      <ThePurcheseSummaryCard
        :totalItems="store.totals.totalItems"
        :totalPrice="store.totals.totalPrice"
        :shippingCost="store.totals.shippingCost"
        :grandTotal="store.totals.grandTotal"
        :cart="store.cartList"
      />
    </div>
  </div>
</template>
