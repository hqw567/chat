import { createApp } from 'vue'

import App from './App.vue'

import { setupStore } from './stores'

import './styles/index.scss'
import { setupRouter } from './router'

async function startVueApp() {
  const app = createApp(App)
  setupStore(app)
  await setupRouter(app)
  app.mount('#app')
}

startVueApp()
