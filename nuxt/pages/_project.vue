<template>
  <div class="page-container">
    <div
      class="header-container"
      :class="{
        'slideIn-navigation-enter-active': !slideToggle,
        'slideIn-navigation-leave-active': !slideToggle,
        'slideIn-navigation-enter': slideToggle,
        'slideIn-navigation-leave-to': slideToggle,
      }"
    >
      <a class="header">
        Francisco Borja
        <a class="subheader">designer and developer</a>
      </a>
    </div>
    <!-- <pre>{{ images }}</pre> -->
    <!-- <video
        class="vid-size"
        :key="index"
        :src="
          image[1].url.split('/uploads/').join('http://localhost:1337/uploads/')
        "
        autoplay
        loop
      /> -->
    <div class="description-container">
      <div class="title">{{ name }}</div>
      <div class="description" v-html="description"></div>
    </div>
    <div class="image-cont">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="
          image.url
            .split('/uploads/')
            .join('https://agile-peak-21162.herokuapp.com/uploads/')
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios, route }) {
    const projects = await $axios.$get(
      `https://agile-peak-21162.herokuapp.com/projects/${route.params.project}`
    );
    const slug = route.params.test;
    console.log(route.params.project);
    return { projects };
  },

  computed: {
    images: function () {
      return this.projects.images;
    },
    name: function () {
      return this.projects.name;
    },
    description: function () {
      return this.projects.description;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/_projects.scss";
@import "~assets/_typography.scss";

.page-container {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  // grid-template-rows: repeat(7, 40vh);
  grid-auto-rows: auto;
  grid-gap: 20px;
  //pointer-events: none;
  //margin: 10rem auto;
}

.header-container {
  @include Canela-Thin;
  grid-row: 1;
  grid-column: 1/7;
  font-size: 2.5vw;
  height: 10vh;
  align-content: center;
  position: relative;
  top: 1.5rem;
  z-index: 5;
}

.title {
  @include IBM-Plex-Mono;
  font-style: italic;
  font-size: 1vw;
  padding-bottom: 1rem;
}

.description-container {
  @include IBM-Plex-Mono;
  font-style: italic;
  font-size: 1vw;
  grid-column: 1/10;
  // grid-row: 1;
}

.image-cont {
  grid-column: 1/8;
  //display: block;
  img {
    width: 100%;
  }
}
</style>
