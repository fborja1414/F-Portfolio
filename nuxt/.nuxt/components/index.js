import { wrapFunctional } from './utils'

export { default as About } from '../../components/About.vue'
export { default as Landing } from '../../components/Landing.vue'
export { default as NavItem } from '../../components/NavItem.vue'
export { default as TitleItem } from '../../components/TitleItem.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const LazyLanding = import('../../components/Landing.vue' /* webpackChunkName: "components/landing" */).then(c => wrapFunctional(c.default || c))
export const LazyNavItem = import('../../components/NavItem.vue' /* webpackChunkName: "components/nav-item" */).then(c => wrapFunctional(c.default || c))
export const LazyTitleItem = import('../../components/TitleItem.vue' /* webpackChunkName: "components/title-item" */).then(c => wrapFunctional(c.default || c))
