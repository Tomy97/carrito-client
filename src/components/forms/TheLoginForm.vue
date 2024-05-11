<script setup lang="ts">
import { reactive } from 'vue'
import { Form } from 'vee-validate'
import { useRouter } from 'vue-router'

import Button from 'primevue/button'

import FormInputEmail from './inputs/FormInputEmail.vue'
import FormInputPassword from './inputs/FormInputPassword.vue'

import { loginService } from '@/services/auth.service'
import { useAuthStore } from '@/store/auth.store'

const router = useRouter()

const authStore = useAuthStore()
const form = reactive({
  email: '',
  password: ''
})

const handleSubmit = async (values: any) => {
  try {
    if (form.email && form.password) {
      const data = await loginService(form)
      authStore.user = data
      authStore.isUserLogged = true
      router.push({ name: 'Home' })
    }
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <Form>
    <FormInputEmail class="mb-5" label="Email" name="email" v-model="form.email" />
    <FormInputPassword name="password" label="Contraseña" v-model="form.password" />
    <div class="text-center my-4">
      <span>
        No tenes cuenta?
        <RouterLink :to="{ name: 'Register' }">Registrate</RouterLink>
      </span>
    </div>
    <Button label="Iniciar Sesion" class="w-full" @click="handleSubmit" />
  </Form>
</template>
