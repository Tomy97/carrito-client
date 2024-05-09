import type { Product } from '@/types/product'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const UseCartStore = defineStore(
  'cart',
  () => {
    const cart = ref((localStorage.getItem('product') as string) || null)

    return {
      cart
    }
  },
  {
    persist: true
  }
)
