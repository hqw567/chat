import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPlus } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'

import { setupStore } from './stores'
import { setupRouter } from './router'
import './styles/index'

library.add(faPlus)

async function startVueApp() {
  const app = createApp(App)
  setupStore(app)
  app.component('FontAwesomeIcon', FontAwesomeIcon)
  await setupRouter(app)
  app.mount('#app')
}

startVueApp()

console.log(import.meta.env)
