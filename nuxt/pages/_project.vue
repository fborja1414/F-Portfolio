<template>
  <nuxt-link class="nuxt-link-active" :to="'/' + nextpage">
    <transition name="page">
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
    </transition>
  </nuxt-link>
</template>

<script>
import Landing from "../components/Landing.vue";
export default {
  components: { Landing },
  async asyncData({ params, $axios, route }) {
    const projects = await $axios.$get(
      `https://agile-peak-21162.herokuapp.com/projects/${route.params.project}`
    );
    const slug = route.params.test;
    console.log(route.params.project);
    return { projects };
  },

  computed: {
    nextpage: function () {
      if (this.projects.id == 6) {
        return this.projects.id - (6 - 1);
      }
      return this.projects.id + 1;
    },
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
  margin: vh auto;
}

.title {
  @include IBM-Plex-Mono;
  font-style: italic;
  font-size: 1vw;
  padding-bottom: 1rem;
}

.nuxt-link-active {
  color: black;
  text-decoration: none;
}
.description-container {
  @include IBM-Plex-Mono;
  font-style: italic;
  font-size: 1vw;
  grid-row: 2;
  grid-column: 4/10;
  pointer-events: none;
  margin-bottom: 3rem;
  .title,
  .description {
    margin: 0 auto;
    text-align: center;
    pointer-events: auto;
    z-index: 5;
  }
  // grid-row: 1;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}

.slideIn-enter-active,
.slideIn-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
}
.slideIn-enter,
.slideIn-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.slideIn-navigation-enter-active,
.slideIn-navigation-leave-active {
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}
.slideIn-navigation-enter,
.slideIn-navigation-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}

.image-cont {
  grid-row: 3;
  grid-column: 4/10;
  //display: block;
  cursor: default;
  img {
    width: 100%;
  }
}
</style>
