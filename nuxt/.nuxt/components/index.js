import { wrapFunctional } from './utils'

export { default as About } from '../../components/About.vue'
export { default as Landing } from '../../components/Landing.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as NavItem } from '../../components/NavItem.vue'
export { default as NavSection } from '../../components/NavSection.vue'
export { default as Section } from '../../components/Section.vue'
export { default as TitleItem } from '../../components/TitleItem.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const LazyLanding = import('../../components/Landing.vue' /* webpackChunkName: "components/landing" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNavItem = import('../../components/NavItem.vue' /* webpackChunkName: "components/nav-item" */).then(c => wrapFunctional(c.default || c))
export const LazyNavSection = import('../../components/NavSection.vue' /* webpackChunkName: "components/nav-section" */).then(c => wrapFunctional(c.default || c))
export const LazySection = import('../../components/Section.vue' /* webpackChunkName: "components/section" */).then(c => wrapFunctional(c.default || c))
export const LazyTitleItem = import('../../components/TitleItem.vue' /* webpackChunkName: "components/title-item" */).then(c => wrapFunctional(c.default || c))
