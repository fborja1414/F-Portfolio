<template>
  <transition name="page">
    <nuxt-link class="nuxt-link-active" :to="'/' + nextpage">
      <div class="page-container">
        <div class="description-container">
          <div class="title">{{ name }}</div>
          <div class="description" v-html="description"></div>
        </div>
        <div class="image-cont" v-if="imagesloaded">
          <!-- <div class="pagination" v-if="images.length > 1">
            {{ pageNum }} / {{ images.length }}
          </div>

          <div
            class="scroll"
            ref="imagescroll"
            v-if="images.length > 1"
            v-on:scroll="displayPagination"
          >
            <video
        class="vid-size"
        :key="index"
        :src="
          images[1].url
            .split('/uploads/')
            .join('http://localhost:1337/uploads/')
        "
        autoplay
        loop
      />
          <img
              class="img"
              ref="image"
              v-for="(image, index) in images"
              :key="index"
              :src="
                image.url
                  .split('/uploads/')
                  .join('https://agile-peak-21162.herokuapp.com/uploads/')
              "
            />
          </div>-->
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
    </nuxt-link>
  </transition>
</template>

<script>
import Landing from "@/components/Landing.vue";
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

  key(projects) {
    return projects.fullPath;
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
    showLanding: function () {
      return this.$store.state.landing;
    },
  },

  data() {
    return {
      show: false,
      imagesloaded: false,
      pageNum: 1,
    };
  },

  mounted() {
    if (!this.imagesloaded) {
      this.loadImages();
      console.log(this.$refs.image);
    }
    this.onLandingPage();
    this.show = true;
    console.log("show" + `${this.show}`);
  },
  methods: {
    onLandingPage() {
      if (this.$route.params.project) {
        this.$store.commit("toggleLanding", false);
      }
      console.log("untogglelanding");
    },

    displayPagination() {
      console.log("scrolled");
      console.log(`${this.$refs.image}`);
      for (var index = 0; index < this.images.length; index++) {
        if (
          (this.$refs.image[index].getBoundingClientRect().left >= 0 &&
            this.$refs.container.offsetWidth / 2 >=
              this.$refs.image[index].getBoundingClientRect().right -
                this.$refs.image[index].offsetWidth) ||
          (this.$refs.image[index].getBoundingClientRect().right >= 0 &&
            this.$refs.container.offsetWidth / 2 >=
              this.$refs.image[index].getBoundingClientRect().right -
                this.$refs.image[index].offsetWidth)

          //this.$refs.image[index].getBoundingClientRect().right >= 0
        ) {
          // console.log(leftScroll);
          // console.log(this.$refs.container.offsetWidth);
          console.log(this.$refs.image[index]);
          this.pageNum = index + 1;
        } else {
          // this.pageNum = 1;
          // console.log(leftScroll);
          // console.log(this.$refs.container.offsetWidth);
          // console.log(this.pageNum);
        }
      }
      // console.log(this.$refs.imagescroll);
    },

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
          `${this.projects.name} - Loaded section.vue ${
            this.projects.images.length
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
  //grid-gap: 20px;
  //margin: vh auto;
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
  margin-top: 10vh;
  .title,
  .description {
    margin: 0 auto;
    text-align: center;
    pointer-events: auto;
    z-index: 5;
  }
  // grid-row: 1;
}

.pagination {
  width: 100%;
  //display: flex;
  align-content: center;
  text-align: center;
}

.scroll {
  display: flex;
  z-index: 5;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

// .page-enter-active,
// .page-leave-active {
//   transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
// }
// .page-enter,
// .page-leave-to {
//   opacity: 0;
//   transform: translate3d(0, 15px, 0);
// }

// .slideIn-enter-active,
// .slideIn-leave-active {
//   transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
// }
// .slideIn-enter,
// .slideIn-leave-to {
//   opacity: 0;
//   transform: translate3d(0, 15px, 0);
// }
// .slideIn-navigation-enter-active,
// .slideIn-navigation-leave-active {
//   transition: opacity 1s ease-in-out, transform 1s ease-in-out;
// }
// .slideIn-navigation-enter,
// .slideIn-navigation-leave-to {
//   opacity: 0;
//   transform: translate3d(0, 15px, 0);
// }

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease-in-out, transform 0.25s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.image-cont {
  grid-row: 3;
  grid-column: 4/10;
  //display: block;
  // cursor: default;
  overflow-x: scroll;
  img {
    width: 100%;
    margin-bottom: 3rem;
  }
}

@media screen and (max-width: 768px) {
  .description-container {
    margin-top: 10vh;
    font-size: 1.8vw;
    grid-column: 1/12;
    .title {
      font-size: 1.8vw;
    }
  }
  .image-cont {
    grid-column: 1/13;
    width: 100%;
  }
  img {
    width: 100%;
  }
}
</style>
