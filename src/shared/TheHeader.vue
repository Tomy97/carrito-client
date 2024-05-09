<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import Badge from 'primevue/badge'
import Avatar from 'primevue/avatar'
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import { UseCartStore } from '../store/cart.store'
const badge = ref<number>(0)
const store = UseCartStore()
const incrementBadge = computed(() => store.cart?.length ?? 0)

</script>
<template>
  <div class="card">
    <Menubar>
      <template #start>
        <RouterLink :to="{ name: 'Home' }" class="no-underline text-700">
          <h3>
            Carrito Shop
          </h3>
        </RouterLink>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <RouterLink :to="{ name: 'Cart' }" class="flex align-items-center no-underline text-700">
            <i class="pi pi-shopping-cart" />
            <template v-if="incrementBadge > 0">
              <Badge :value="incrementBadge" />
            </template>
          </RouterLink>
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            shape="circle"
          />
        </div>
      </template>
    </Menubar>
  </div>
</template>
