import type { CarRespose, Cart } from '@/types/cart'
import type { Product } from '@/types/product'
import axios from 'axios'

export const getUserLoggedCartService = async (userId: number): Promise<Cart[]> => {
  const { data } = await axios.get<CarRespose>(
    import.meta.env.VITE_API_URL + `/cart?userId=${userId}`
  )

  return data.products
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

export const removeProductFromCartService = async (id: number) => {
  await axios.delete(import.meta.env.VITE_API_URL + `/cart?productId=${id}`)
}
