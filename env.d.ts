/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefindComponent } from 'vue'
  const component: DefindComponent
  export default component
}

declare module '*.mjs'
