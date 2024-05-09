<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'

import { UseCartStore } from '@/store/cart.store'

import TheDataTableProductCard from '@/components/TheDataTableProductCard.vue'
import ThePurcheseSummaryCard from '@/components/ThePurcheseSummaryCard.vue'

const store = UseCartStore()
</script>
<template>
  <div class="cart-container">
    <div>
      <TheDataTableProductCard
        :cart="store.cart"
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
        :cart="store.cart"
      />
    </div>
  </div>
</template>
