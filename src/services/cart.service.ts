import type { Cart } from '@/types/cart'
import type { Product } from '@/types/product'
import axios from 'axios'

export const getUserLoggedCartService = async (userId: number): Promise<Cart[]> => {
  console.log('se ejecuta getUserLoggedCartService')

  const { data } = await axios.get<Cart[]>(import.meta.env.VITE_API_URL + `/cart?userId=${userId}`)

  return data
}

export const addProductToCartService = async (
  userId?: number,
  product?: Product
): Promise<Cart> => {
  const { data } = await axios.post<Cart>(
    import.meta.env.VITE_API_URL + `/cart?userId=${userId}&productId=${product?.id}`
  )

  return data
}
