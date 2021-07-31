import { wrapFunctional } from './utils'

export { default as About } from '../../components/About.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as NavItem } from '../../components/NavItem.vue'
export { default as NavSection } from '../../components/NavSection.vue'
export { default as Project } from '../../components/Project.vue'
export { default as Section } from '../../components/Section.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNavItem = import('../../components/NavItem.vue' /* webpackChunkName: "components/nav-item" */).then(c => wrapFunctional(c.default || c))
export const LazyNavSection = import('../../components/NavSection.vue' /* webpackChunkName: "components/nav-section" */).then(c => wrapFunctional(c.default || c))
export const LazyProject = import('../../components/Project.vue' /* webpackChunkName: "components/project" */).then(c => wrapFunctional(c.default || c))
export const LazySection = import('../../components/Section.vue' /* webpackChunkName: "components/section" */).then(c => wrapFunctional(c.default || c))
