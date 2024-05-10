import type { User } from '@/types/user'
import axios from 'axios'

export const loginService = async (email: string, password: string): Promise<User> => {
  const { data } = await axios.post<User>(import.meta.env.VITE_API_URL + '/login', {
    email,
    password
  })

  return data
}

export const registerService = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  const { data } = await axios.post<User>(import.meta.env.VITE_API_URL + '/register', {
    name,
    email,
    password
  })

  return data
}
