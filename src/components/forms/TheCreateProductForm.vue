<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Product } from '../../types/product'

const form = reactive({
  name: '',
  price: 0,
  description: '',
  imageFilename: '',
  stock: 0,
  category: ''
})
</script>
<template>
  <form>
    <div>
      <label for="name">Name</label>
      <input v-model="form.name" type="text" id="name" />
    </div>
    <div>
      <label for="price">Price</label>
      <input v-model="form.price" type="number" id="price" />
    </div>
    <div>
      <label for="description">Description</label>
      <textarea v-model="form.description" id="description"></textarea>
    </div>
    <div>
      <label for="imageFilename">Image Filename</label>
      <input v-model="form.imageFilename" type="text" id="imageFilename" />
    </div>
    <div>
      <label for="stock">Stock</label>
      <input v-model="form.stock" type="number" id="stock" />
    </div>
    <div>
      <label for="category">Category</label>
      <input v-model="form.category" type="text" id="category" />
    </div>
    <button type="submit">Create Product</button>
  </form>
</template>
