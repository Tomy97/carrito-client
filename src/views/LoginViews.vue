<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppUserAuthCard from '@/components/AppUserAuthCard.vue'
import TheLoginForm from '@/components/forms/TheLoginForm.vue'
</script>
<template>
  <div class="flex w-full h-screen justify-content-center align-items-center">
    <AppUserAuthCard class="w-full xl:w-30rem" title="Login">
      <TheLoginForm />
    </AppUserAuthCard>
  </div>
</template>
