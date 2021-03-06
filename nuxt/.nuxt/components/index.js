import { wrapFunctional } from './utils'

export { default as About } from '../../components/About.vue'
export { default as NavComponent } from '../../components/NavComponent.vue'
export { default as NavItem } from '../../components/NavItem.vue'
export { default as TitleItem } from '../../components/TitleItem.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const LazyNavComponent = import('../../components/NavComponent.vue' /* webpackChunkName: "components/nav-component" */).then(c => wrapFunctional(c.default || c))
export const LazyNavItem = import('../../components/NavItem.vue' /* webpackChunkName: "components/nav-item" */).then(c => wrapFunctional(c.default || c))
export const LazyTitleItem = import('../../components/TitleItem.vue' /* webpackChunkName: "components/title-item" */).then(c => wrapFunctional(c.default || c))
