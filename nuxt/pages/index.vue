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
    <div v-for="(entry, index) in projects" :key="index">
      <Section :entry="entry" :index="index" />
    </div>
  </div>
</template>

<script>
export default {
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
  grid-row: 100%;
  font-size: 20px;
  height: 2rem;
  position: sticky;
  top: 10rem;
  z-index: -1;
}

.page-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 20px;
  margin: 10rem auto;
}

.navigation {
  display: flex;
  grid-column: 5/11;
  font-size: 20px;
  flex-direction: column;
}
</style>
