export type ProductResponse = {
  productos: Product[]
}

export type Product = {
  id: number
  name: string
  description: string
  price: number
  category: string
  stock: number
  image: string
  disabledSum?: boolean
  disabledMinus?: boolean
}
