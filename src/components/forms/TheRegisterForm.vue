<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import { useRouter } from 'vue-router'

import Button from 'primevue/button'

import FormInputText from './inputs/FormInputText.vue'
import FormInputEmail from './inputs/FormInputEmail.vue'
import FormInputPassword from './inputs/FormInputPassword.vue'

import { registerService } from '@/services/auth.service'
import { reactive } from 'vue'

const router = useRouter()

const form = reactive({
  name: '',
  email: '',
  password: ''
})

const handleSubmit = async (event: any) => {
  event.preventDefault()
    
  const payload = {
    name: form.name,
    email: form.email,
    password: form.password
  }

  try {
    await registerService(payload)
    router.push({ name: 'Login' })
  } catch (error) {
    console.error(error)
  }
}

const handleGoBack = async () => {
  router.push({ name: 'Login' })
}
</script>

<template>
  <form @submit="handleSubmit">
    <Field name="name" rules="required" v-slot="{ field }">
      <FormInputText
        class="mb-5"
        label="Nombre"
        name="name"
        v-model="form.name"
        @update:model-value="field.onChange"
      />
    </Field>
    <Field name="email" rules="required" v-slot="{ field }">
      <FormInputEmail
        class="mb-5"
        label="Email"
        name="email"
        v-model="form.email"
        @update:model-value="field.onChange"
      />
    </Field>
    <Field name="password" rules="required" v-slot="{ field }">
      <FormInputPassword
        class="mb-5"
        label="Contraseña"
        name="password"
        v-model="form.password"
        @update:model-value="field.onChange"
      />
    </Field>
    <Button label="Registrarse" class="w-full mb-3" type="submit"/>
    <Button label="Volver" class="w-full" @click="handleGoBack" severity="danger" />
  </form>
</template>
