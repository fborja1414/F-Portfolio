import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14565cc5 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _e185d0d0 = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _aadfd3c2 = () => interopDefault(import('../pages/projects/_projects.vue' /* webpackChunkName: "pages/projects/_projects" */))
const _68e80a87 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _5a1477a6 = () => interopDefault(import('../pages/_test.vue' /* webpackChunkName: "pages/_test" */))

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
    path: "/projects",
    component: _e185d0d0,
    name: "projects"
  }, {
    path: "/projects/:projects",
    component: _aadfd3c2,
    name: "projects-projects"
  }, {
    path: "/",
    component: _68e80a87,
    name: "index"
  }, {
    path: "/:test",
    component: _5a1477a6,
    name: "test"
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
