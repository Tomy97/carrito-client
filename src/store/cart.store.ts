import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Cart } from '@/types/cart'
import type { Product } from '@/types/product'

export const UseCartStore = defineStore('cart', () => {
  const cart = ref<Cart[]>([])

  const updateTotals = () => {
    const totalItems = parseFloat(
      cart.value.reduce((acc, item) => acc + item.quantity!, 0).toFixed(2)
    )
    const totalPrice = parseFloat(
      cart.value.reduce((acc, item) => acc + item.price * item.quantity!, 0).toFixed(2)
    )
    const shippingCost = totalItems * 5
    const grandTotal = parseFloat((totalPrice + shippingCost).toFixed(2))
    return { totalItems, totalPrice, shippingCost, grandTotal }
  }

  const handleAddToCart = (product: Product) => {
    const productExistInCart = cart.value.find((item) => item.id === product.id)
    if (productExistInCart) {
      if (productExistInCart.quantity! < productExistInCart.stock) {
        productExistInCart.quantity!++
      }
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
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

  const handleDeleteProduct = (id: number) => {
    return cart.value = cart.value.filter((product) => product.id !== id)
  }

  const totals = ref(updateTotals())

  watch(
    cart,
    () => {
      cart.value.forEach((product) => {
        product.disabledSum = product.quantity! >= product.stock
        product.disabledMinus = product.quantity! <= 1
      })
      totals.value = updateTotals()
    },
    { deep: true }
  )

  return {
    cart,
    totals,
    handleAddToCart,
    handleSumQuantity,
    handleMinusQuantity,
    handleDeleteProduct
  }
})
