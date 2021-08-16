import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  About: () => import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  NavItem: () => import('../../components/NavItem.vue' /* webpackChunkName: "components/nav-item" */).then(c => wrapFunctional(c.default || c)),
  NavSection: () => import('../../components/NavSection.vue' /* webpackChunkName: "components/nav-section" */).then(c => wrapFunctional(c.default || c)),
  Section: () => import('../../components/Section.vue' /* webpackChunkName: "components/section" */).then(c => wrapFunctional(c.default || c)),
  TitleItem: () => import('../../components/TitleItem.vue' /* webpackChunkName: "components/title-item" */).then(c => wrapFunctional(c.default || c)),
  TransitionExpand: () => import('../../components/TransitionExpand.vue' /* webpackChunkName: "components/transition-expand" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
