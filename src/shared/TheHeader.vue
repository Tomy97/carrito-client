<script setup lang="ts">
import Menubar from 'primevue/menubar'
import Badge from 'primevue/badge'
import { RouterLink, useRouter } from 'vue-router'
import { computed } from 'vue'
import { UseCartStore } from '../store/cart.store'
import { useAuthStore } from '@/store/auth.store'
import Button from 'primevue/button'
import TheDialogUserLogued from '../shared/components/TheDialogUserLogued.vue'
import { ref } from 'vue'

const store = UseCartStore()
const authStore = useAuthStore()

const router = useRouter()
const incrementBadge = computed(() => store.cart?.length ?? 0)

const onHandleRedirectToLogin = () => {
  router.push({ name: 'Login' })
}

const isOpenDialog = ref<boolean>(false)

const handleChangeDialogVal = () => {
  isOpenDialog.value = !isOpenDialog.value
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

          <template v-if="authStore.isUserLogged">
            <div @click="handleChangeDialogVal" class="flex flex-wrap flex-column text-center">
              <span>
                {{ authStore.user?.name }}
              </span>
              <span> Balance: ${{ authStore.user?.balance }} </span>
            </div>
            <template v-if="isOpenDialog">
              <TheDialogUserLogued
                :visible="isOpenDialog"
                :userData="{
                  name: authStore.user?.name ?? '',
                  balance: authStore.user?.balance ?? 0
                }"
                @closeDialog="handleChangeDialogVal"
                @handleLogout="authStore.logout"
              />
            </template>
          </template>
          <template v-else>
            <div class="flex">
              <Button @click="onHandleRedirectToLogin" class="w-full">
                <i class="pi pi-sign-in mr-2" />
                <span>Login</span>
              </Button>
            </div>
          </template>
        </div>
      </template>
    </Menubar>
  </div>
</template>
