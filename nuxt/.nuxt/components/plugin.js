import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  About: () => import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  NavItem: () => import('../../components/NavItem.vue' /* webpackChunkName: "components/nav-item" */).then(c => wrapFunctional(c.default || c)),
  NavSection: () => import('../../components/NavSection.vue' /* webpackChunkName: "components/nav-section" */).then(c => wrapFunctional(c.default || c)),
  Project: () => import('../../components/Project.vue' /* webpackChunkName: "components/project" */).then(c => wrapFunctional(c.default || c)),
  Section: () => import('../../components/Section.vue' /* webpackChunkName: "components/section" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}