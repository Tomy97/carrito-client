export type User = {
  id: number
  name: string
  email: string
  balance: number
  role: 'user' | 'admin'
  cartId: number
}
