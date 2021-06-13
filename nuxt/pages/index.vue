<template>
  <div class="page-container">
    <div class="header-container">
      <a class="header">
        Francisco Borja, <br />
        designer and developer
      </a>
    </div>
    <div class="navigation">
      <div
        class="nav-container"
        v-for="(entries, index) in projects"
        :key="index"
      >
        <div class="nav-items" :key="index">
          <a :key="index" class="select"> > </a>
          <a> {{ entries.name }}</a>
        </div>
        <a :key="index" class="medium"> {{ entries.medium }}</a>
      </div>
    </div>
    <template v-for="(entry, index) in projects">
      <Section :entry="entry" :index="index" :key="index" />
    </template>
  </div>
</template>

<script>
import Section from "@/components/Section.vue";
export default {
  components: {
    Section,
  },
  data() {
    return {
      navHovered: false,
    };
  },
  methods: {
    hoveredNav() {
      this.navHovered = true;
      console.log("ha");
    },
  },
  async asyncData({ $axios }) {
    const projects = await $axios.$get("http://localhost:1337/projects");
    console.log({ projects });
    return { projects };
  },
};
</script>

<style lang="scss">
.header-container {
  display: flex;
  grid-column: 2/4;
  font-size: 20px;
  height: 2rem;
  position: sticky;
  top: 10rem;
  z-index: -1;
}

.page-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  margin: 10rem auto;
}

.navigation {
  position: relative;
  display: flex;
  grid-column: 5/11;
  font-size: 20px;
  flex-direction: column;
  height: 55vh;
  margin: 0 0 6rem 0;
  overflow-x: visible;
}
.medium {
  font-style: italic;
}

.select {
  position: absolute;
  left: -2vw;
  opacity: 0;
}

.nav-items {
  position: relative;
}

.nav-container {
  cursor: pointer;
}

.nav-container:hover {
  .select {
    opacity: 1;
  }
}
</style>
