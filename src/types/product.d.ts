export type Product = {
  id?: number
  name: string
  description: string
  price: number
  category: string
  stock: number
  imageFilename: string
  disabledSum?: boolean
  disabledMinus?: boolean
}
