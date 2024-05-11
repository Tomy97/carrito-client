import '@/assets/base.css'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'

import './setup/veeValidate'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(PrimeVue)

app.mount('#app')
