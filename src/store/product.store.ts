import type { Product } from '@/types/product'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { getProductsService } from '@/services/products.service'
import { addProductToCartService } from '@/services/cart.service'
import { useAuthStore } from './auth.store'
import { UseCartStore } from './cart.store'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const productSelected = ref<Product | null>(null)
  const cartList = ref<Product[]>([])
  const hasPermission = ref<boolean>(false)
  const openModal = ref<boolean>(false)

  const store = useAuthStore()
  const cartStore = UseCartStore()

  const getProducts = async () => {
    products.value = await getProductsService()
  }

  const addToCart = async (product: Product) => {
    openModal.value = true
    productSelected.value = product
    const res = await addProductToCartService(store.user?.id, product)
    cartStore.cartList.push(res)
  }

  const deletePublishProduct = (id: number) => {
    // Delete product from list
    products.value = products.value.filter((p) => p.id !== id)
  }

  // Cargar inicialmente el carrito de localStorage
  const loadCart = () => {
    const storedCart = localStorage.getItem('cartList')
    if (storedCart) {
      cartList.value = JSON.parse(storedCart)
    }
  }

  // Establecer un watcher para persistir los cambios en el carrito
  watch(
    cartList,
    (newCart) => {
      localStorage.setItem('cartList', JSON.stringify(newCart))
    },
    { deep: true }
  )

  loadCart()
  return {
    products,
    getProducts,
    addToCart,
    deletePublishProduct,
    hasPermission,
    openModal,
    productSelected,
    cartList
  }
})
