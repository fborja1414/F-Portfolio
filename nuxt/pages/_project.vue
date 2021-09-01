<template>
  <div class="page-container">
    <div class="description-container">
      <div class="title">{{ name }}</div>
      <div class="description" v-html="description"></div>
    </div>
    <div class="image-cont" v-if="imagesloaded">
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

  data() {
    return {
      imagesloaded: false,
    };
  },

  mounted() {
    if (!this.imagesloaded) {
      this.loadImages();
    }
  },
  methods: {
    async loadImages() {
      console.log(`${this.imagesloaded}`);
      const t0 = performance.now();
      let cachedImages = [];

      //load Images
      for (const image of this.projects.images) {
        cachedImages.push(image);
      }

      await Promise.all(cachedImages).then(() => {
        this.imagesloaded = true;
        const t1 = performance.now();
        console.log(
          `${this.entry.name} - Loaded section.vue ${
            this.entry.images.length
          } images in ${Math.round(t1 - t0)}ms.`
        );
        console.log(`${this.imagesloaded}`);
        console.log(`${this.entry.video}`);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/_projects.scss";
@import "~assets/_typography.scss";

.page-container {
  display: grid;

  grid-template-columns: repeat(
    12,
    1fr
  ); // grid-template-rows: repeat(7, 40vh);
  grid-auto-rows: auto;
  grid-gap: 20px;
  //pointer-events: none;
  margin: 10vh auto;
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
  grid-row: 2;
  grid-column: 4/10;
  .title,
  .description {
    margin: 0 auto;
    text-align: center;
  }
  // grid-row: 1;
}

.image-cont {
  grid-row: 3;
  grid-column: 4/10;
  //display: block;
  img {
    width: 100%;
  }
}
</style>
