import type { Product } from "./product";

export type CarRespose = {
  id: number,
  products: Cart[]
}

export interface Cart extends Product {
  quantity?: number
}
