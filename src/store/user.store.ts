import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const isAdmin = computed<boolean>(() => {
    return user.value?.role === 'admin'
  })

  return {
    user,
    isAdmin
  }
})
