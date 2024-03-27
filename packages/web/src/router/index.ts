// CONSOLE LOG TEMPLATE
//console.log(`router.index > FUNCTION_NAME > MSG_OR_VALUE :`)

import { createRouter, createWebHistory, type RouteLocationNormalized, type RouteLocationNormalizedLoaded } from 'vue-router'
import { routes } from '@/router/route'

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash }
    }
    return { top: 0 }
  },
  routes: routes
})
