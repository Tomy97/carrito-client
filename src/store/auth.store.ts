import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const isUserLogged = ref(false)
    const user = ref<User | null>(null)

    const logout = () => {
      isUserLogged.value = false
      user.value = null
    }
    return {
      isUserLogged,
      user,
      logout
    }
  },
  {
    persist: true
  }
)
