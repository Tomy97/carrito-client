import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const isUserLogged = ref(false)
    const user = ref<User | null>(null)
    return {
      isUserLogged,
      user
    }
  },
  {
    persist: true
  }
)
