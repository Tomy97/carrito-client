import type { Product } from '@/types/product'
import axios from 'axios'

export const getProductsService = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(import.meta.env.VITE_API_URL + '/products')

  return data
}

export const deleteProductService = async (id: string): Promise<void> => {
  await axios.delete(import.meta.env.VITE_API_URL + '/products/' + id)

  return
}

export const addProductService = async (form: FormData, file?: File) => {
  const { data } = await axios.post<Product>(import.meta.env.VITE_API_URL + '/products', {
    form,
    file
  })

  return data
}
