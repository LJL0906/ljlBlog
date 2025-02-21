import type { Router } from 'vue-router'

export const routeGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    console.log('to:', to)
    console.log('from:', from)
    next()
  })
}