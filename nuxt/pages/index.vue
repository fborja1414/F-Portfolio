<template>
  <div class="page-container">
    <div class="header-container">
      <a class="header">
        Francisco Borja,
        <div class="subheader">designer and developer</div>
      </a>
    </div>
    <div class="navigation">
      <div
        class="nav-container"
        v-for="(entries, index) in projects"
        :key="index"
      >
        <div
          class="nav-items"
          :key="index"
          @click="scrollSectionIntoView(index)"
        >
          <a :key="index" class="select"> > </a>
          <a> {{ entries.name }}</a>
          <a :key="index" class="medium"> {{ entries.medium }}</a>
        </div>
      </div>
    </div>

    <template class="section-container">
      <!-- <div class="scroll-description" :key="index" :class="entry.position">
        Link
      </div> -->
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
    scrollSectionIntoView(index) {
      console.log(this.$refs.entry[index].$el);
      const rawTargetContainerYPos =
        this.$refs.entry[index].$el.getBoundingClientRect().top +
        document.documentElement.scrollTop;
      const targetContainerHeight = this.$refs.entry[index].$el.offsetHeight;
      const windowHeight = window.innerHeight;
      const centeredContainerYPos =
        rawTargetContainerYPos -
        Math.abs((windowHeight - targetContainerHeight) / 2);
      // console.log(rawTargetContainerYPos, targetContainerHeight, centeredContainerYPos)
      window.scrollTo({ top: centeredContainerYPos, behavior: "smooth" });
    },
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
@import "~assets/_projects.scss";

.header-container {
  //position: relative;
  display: flex;
  grid-column: 2/4;
  font-size: 20px;
  height: 2rem;
  //position: sticky;
  top: 10rem;
  z-index: -1;
}

.subheader {
  font-style: italic;
}

.page-container {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
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
  display: block;
  font-style: italic;
}

.section-container {
  //position: relative;
  margin: 0 0 6rem 0;
}

.scroll-description {
  //display: flex;
  //position: absolute;
  //text-align: center;
  position: relative;
  grid-column: 2/4;
  align-content: center;
  font-style: italic;
  //top: 50%;
  //height: 50%;
}

// .entry-description {
//   top: 50%;
// }
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
