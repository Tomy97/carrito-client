import type { Cart } from '@/types/cart'
import type { Product } from '@/types/product'
import axios from 'axios'

export const getCartService = async (): Promise<Cart[]> => {
  const { data } = await axios.get<Cart[]>(import.meta.env.VITE_API_URL + '/cart')

  return data
}

export const addProductToCartService = async (product: Product): Promise<Cart> => {
    const { data } = await axios.post<Cart>(import.meta.env.VITE_API_URL + '/cart', product)
    
    return data
}