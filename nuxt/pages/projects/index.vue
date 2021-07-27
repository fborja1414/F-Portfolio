<template>
  <div class="page-container" v-if="show">
    <div class="header-container">
      <a class="header">
        Francisco Borja,
        <a class="subheader">designer and developer</a>
      </a>

      <!-- <div class="scroll-description" v-html="sectionDescription"></div> -->
    </div>
    <div class="nav-section">
      <div
        class="nav-container"
        v-for="(entry, index) in projects"
        :key="index"
      >
        <nav-section
          :index="index"
          :entry="entry"
          v-on:clicked="scrollSectionIntoView"
        />
      </div>
    </div>

    <template class="section-container">
      <Section
        :entry="entry"
        :index="index"
        v-for="(entry, index) in projects"
        :key="index"
        ref="entry"
      />
    </template>
  </div>
</template>

<script>
import Section from "@/components/Section.vue";
import NavSection from "@/components/NavSection.vue";
export default {
  components: {
    Section,
    NavSection,
  },

  data() {
    return {
      show: false,
    };
  },

  mounted() {
    this.$nextTick(() => (this.show = true));
  },

  async asyncData({ $axios }) {
    const projects = await $axios.$get("http://localhost:1337/projects");
    console.log({ projects });
    return { projects };
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/_typography.scss";

.page-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  //pointer-events: none;
  //margin: 10rem auto;
}

.header-container {
  @include Canela-Thin;
  grid-row: 1;
  grid-column: 1/7;
  font-size: 25px;
  height: 10rem;
  align-content: center;
  position: sticky;
  top: 1.5rem;
  left: 1.5rem;
  z-index: -1;
}

.subheader {
  @include Canela-ThinItalic;
  font-style: italic;
}

.nav-section {
  grid-row: 1;
  grid-column: 6/11;
  font-size: 25px;
  padding: 1rem;
  position: sticky;
  top: 1.5rem;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 3s ease-in-out, transform 3s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>