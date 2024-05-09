import type { Product, ProductResponse } from '@/types/product'
import axios from 'axios'

export const getProductsService = async (): Promise<Product[]> => {
  const { data } = await axios.get<ProductResponse>('../../public/mock/db.mock.json')
  console.log('se ejecuto el servicio', data)
  
  return data.productos
}
