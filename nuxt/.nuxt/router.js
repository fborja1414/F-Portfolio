import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14565cc5 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _01ed44d0 = () => interopDefault(import('../pages/nav.vue' /* webpackChunkName: "pages/nav" */))
const _fdad61aa = () => interopDefault(import('../pages/nav/_nav.vue' /* webpackChunkName: "pages/nav/_nav" */))
const _68e80a87 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _b6012396 = () => interopDefault(import('../pages/_project.vue' /* webpackChunkName: "pages/_project" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _14565cc5,
    name: "about"
  }, {
    path: "/nav",
    component: _01ed44d0,
    name: "nav",
    children: [{
      path: ":nav?",
      component: _fdad61aa,
      name: "nav-nav"
    }]
  }, {
    path: "/",
    component: _68e80a87,
    name: "index"
  }, {
    path: "/:project",
    component: _b6012396,
    name: "project"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
