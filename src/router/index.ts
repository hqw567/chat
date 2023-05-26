import type { App } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: () => import('@/views/chat/ChatView.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/exception/404/NotFound.vue')
  },
  {
    path: '/500',
    name: 'ServerError',
    component: () => import('@/views/exception/500/ServerError.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404'
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
