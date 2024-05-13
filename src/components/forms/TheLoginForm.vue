<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import { useRouter } from 'vue-router'

import Button from 'primevue/button'

import FormInputEmail from './inputs/FormInputEmail.vue'
import FormInputPassword from './inputs/FormInputPassword.vue'

import { loginService } from '@/services/auth.service'
import { useAuthStore } from '@/store/auth.store'
import { reactive } from 'vue'

const router = useRouter()

const authStore = useAuthStore()

const form = reactive({
  email: '',
  password: ''
})

const handleSubmit = async (e: any) => {
  e.preventDefault()

  const payload = {
    email: form.email,
    password: form.password
  }

  try {
    const res = await loginService(payload)
    authStore.user = res
    authStore.isUserLogged = true
    router.push({ name: 'Home' })
  } catch (error) {
    console.error('Error:', error)
  }
}

const handleGoBack = async () => {
  router.push({ name: 'Home' })
}
</script>
<template>
  <form @submit="handleSubmit">
    <Field name="email" rules="required|email" v-slot="{ field }">
      <FormInputEmail
        :name="field.name"
        v-model="form.email"
        @update:model-value="field.onChange"
      />
    </Field>
    <Field name="password" rules="required|min" v-slot="{ field }">
      <FormInputPassword
        :name="field.name"
        v-model="form.password"
        @update:model-value="field.onChange"
      />
    </Field>
    <div class="text-center my-4">
      <span>
        No tenes cuenta?
        <RouterLink :to="{ name: 'Register' }" class="no-underline">Registrate</RouterLink>
      </span>
    </div>
    <Button label="Iniciar Sesion" class="w-full mb-3" type="submit" />
    <Button label="Volver" class="w-full" @click="handleGoBack" severity="danger" />
  </form>
</template>
