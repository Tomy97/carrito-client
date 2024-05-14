import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Cart } from '@/types/cart'
import { useAuthStore } from './auth.store'
import { getUserLoggedCartService, removeProductFromCartService } from '@/services/cart.service'

export const UseCartStore = defineStore('cart', () => {
  const store = useAuthStore()
  const cartList = ref<Cart[]>([])
  const authStore = useAuthStore()

  const updateTotals = () => {
    const totalItems = parseFloat(
      cartList.value.reduce((acc, item) => acc + item.quantity!, 0).toFixed(2)
    )
    const totalPrice = parseFloat(
      cartList.value.reduce((acc, item) => acc + item.price * item.quantity!, 0).toFixed(2)
    )
    const shippingCost = totalItems * 5
    const grandTotal = parseFloat((totalPrice + shippingCost).toFixed(2))
    return { totalItems, totalPrice, shippingCost, grandTotal }
  }

  const handleSumQuantity = (product: Cart) => {
    if (product.quantity! < product.stock) {
      product.quantity!++
    }
  }

  const handleMinusQuantity = (product: Cart) => {
    if (product.quantity! > 1) {
      product.quantity!--
    }
  }

  const handleDeleteProduct = async (id: number) => {
    await removeProductFromCartService(id)
    cartList.value = await getUserLoggedCartService(store.user?.id as number)

    return cartList.value
  }

  const handleGetUserLoggedCart = async () => {
    const cart = await getUserLoggedCartService(store.user?.id as number)
    cart.forEach((product) => {
      product.disabledSum = product.quantity! >= product.stock
      product.disabledMinus = product.quantity! <= 1
    })
    return cart
  }

  const totals = ref(updateTotals())

  watch(
    cartList,
    () => {
      cartList.value.forEach((product) => {
        product.disabledSum = product.quantity! >= product.stock
        product.disabledMinus = product.quantity! <= 1
      })
      totals.value = updateTotals()
    },
    { deep: true }
  )

  watch(
    () => authStore.isUserLogged,
    () => {
      if (authStore.isUserLogged) {
        handleGetUserLoggedCart()
      } else {
        cartList.value = []
      }
    }
  )

  return {
    cartList,
    totals,
    handleSumQuantity,
    handleMinusQuantity,
    handleDeleteProduct,
    handleGetUserLoggedCart
  }
})
