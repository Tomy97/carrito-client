import type { User, UserResponse } from '@/types/user'
import axios from 'axios'

interface FormRegisterParams {
  name: string
  email: string
  password: string
}

interface FormLoginParams {
  email: string
  password: string
}

export const loginService = async (form: FormLoginParams): Promise<User> => {
  const { data } = await axios.post<UserResponse>(import.meta.env.VITE_API_URL + '/login', form)

  return data.user
}

export const registerService = async (form: FormRegisterParams): Promise<User> => {
  const { data } = await axios.post<User>(import.meta.env.VITE_API_URL + '/register', form)

  return data
}
