<script setup lang="ts">
import AppUserAuthCard from '@/components/AppUserAuthCard.vue'
import TheRegisterForm from '@/components/forms/TheRegisterForm.vue'
</script>
<template>
  <div class="flex w-full h-screen justify-content-center align-items-center">
    <AppUserAuthCard class="w-full xl:w-30rem" title="Register">
      <TheRegisterForm />
    </AppUserAuthCard>
  </div>
</template>
