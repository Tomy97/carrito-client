<script setup lang="ts">
import { reactive } from 'vue'
import { Form, Field } from 'vee-validate'
import { addProductService } from '@/services/products.service'

import FormInputText from '@/components/forms/inputs/FormInputText.vue'
import FormInputNumber from '@/components/forms/inputs/FormInputNumber.vue'

import Card from 'primevue/card'
import FileUpload from 'primevue/fileupload'
import Button from 'primevue/button'
import { ref } from 'vue'

const price = ref(0)
const stock = ref(0)

const form = reactive({
  name: '',
  description: '',
  category: '',
  price: 0,
  stock: 0
})

const file = ref<File | null>(null)

const onUpload = (event: any) => {
  if (event.files.length > 0) {
    const uploadedFile = event.files[0]
    file.value = uploadedFile
    console.log('Archivo cargado:', file.value)
  }
}

const handleSubmit = async (e: any) => {
  e.preventDefault()

  form.name = form.name.trim()
  form.description = form.description.trim()
  form.category = form.category.trim()
  form.price = price.value
  form.stock = stock.value

  console.log('lg', form)

  try {
    // await addProductService(form, file.value!)
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <div class="flex w-full h-screen justify-content-center align-items-center">
    <Card class="w-full xl:w-6">
      <template #title>Crear un nuevo Producto</template>
      <template #content>
        <form @submit="handleSubmit">
          <div class="grid">
            <div class="col-6">
              <Field name="nombre" v-slot="{ field }">
                <FormInputText
                  class="mb-5"
                  label="Nombre"
                  name="name"
                  v-model="form.name"
                  @update:model-value="field.onChange"
                />
              </Field>
            </div>
            <div class="col-6">
              <Field name="descripcion" v-slot="{ field }">
                <FormInputText
                  class="mb-5"
                  label="Descripcion"
                  name="description"
                  v-model="form.description"
                  @update:model-value="field.onChange"
                />
              </Field>
            </div>
            <div class="col-4">
              <Field name="category" v-slot="{ field }">
                <FormInputText
                  class="mb-5"
                  label="Categoria"
                  name="category"
                  v-model="form.category"
                  @update:model-value="field.onChange"
                />
              </Field>
            </div>
            <div class="col-4">
              <Field name="precio" v-slot="{ field }">
                <FormInputNumber
                  class="mb-5"
                  label="Precio"
                  name="price"
                  v-model="price"
                  @update:model-value="field.onChange"
                />
              </Field>
            </div>
            <div class="col-4">
              <Field name="stock" v-slot="{ field }">
                <FormInputNumber
                  class="mb-5"
                  label="Stock"
                  name="stock"
                  v-model="stock"
                  @update:model-value="field.onChange"
                />
              </Field>
            </div>
            <div class="col-12">
              <FileUpload
                mode="basic"
                name="image"
                accept="image/*"
                :max-file-size="5000000"
                auto
                custom-upload
                choose-label="Upload image"
                @uploader="onUpload"
              />
            </div>
          </div>

          <Button type="submit">Crear Producto</Button>
        </form>
      </template>
    </Card>
  </div>
</template>
