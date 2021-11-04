import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  About: () => import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c)),
  NavItem: () => import('../../components/NavItem.vue' /* webpackChunkName: "components/nav-item" */).then(c => wrapFunctional(c.default || c)),
  TitleItem: () => import('../../components/TitleItem.vue' /* webpackChunkName: "components/title-item" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
