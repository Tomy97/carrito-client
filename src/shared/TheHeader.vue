<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import Badge from 'primevue/badge'
import Avatar from 'primevue/avatar'
import { RouterLink, useRouter } from 'vue-router'
import { computed } from 'vue'
import { UseCartStore } from '../store/cart.store'
import { useAuthStore } from '@/store/auth.store'
import Button from 'primevue/button'

const store = UseCartStore()
const authStore = useAuthStore()

const router = useRouter()
const incrementBadge = computed(() => store.cart?.length ?? 0)

const onHandleRedirectToLogin = () => {
  router.push({ name: 'Login' })
}

</script>
<template>
  <div class="card">
    <Menubar>
      <template #start>
        <RouterLink :to="{ name: 'Home' }" class="no-underline text-700">
          <h3>Carrito Shop</h3>
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

          <template v-if="authStore.isUserLogged"> Te logueaste correctamente </template>
          <template v-else>
            <Button @click="onHandleRedirectToLogin">
              <i class="pi pi-sign-in mr-2" />
              <span>Login</span>
            </Button>
          </template>
        </div>
      </template>
    </Menubar>
  </div>
</template>
