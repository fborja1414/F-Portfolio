<template>
  <div class="page-container">
    <div class="header-container">
      <a class="header">
        Francisco Borja, <br />
        designer and developer
      </a>
    </div>
    <div class="navigation">
      <a>> Resume </a>
      <a>> Elliot Evan</a>
      <a>> Grace Bukunmi </a>
      <a>> Fast Magazine 2020 Pages </a>
      <a>> Graphics </a>
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
  display: flex;
  grid-column: 5/11;
  font-size: 20px;
  flex-direction: column;
  margin: 0 0 6rem 0;
}
.items {
  display: block;
}
</style>
