<template>
  <!-- <nuxt-link class="nuxt-link-active" :to="'/' + nextpage"> -->
  <transition name="page">
    <div
      class="pages-container"
      :class="{
        'page-enter-active': show,
        'page-leave-active': show,
        'page-enter': !show,
        'page-leave-to': !show,
      }"
      v-if="show && imagesloaded"
    >
      <div class="nav">
        <nav-component
          v-for="(entries, index) in titleprojects"
          :entries="entries"
          :key="index"
          :index="index"
        />
      </div>
      <div
        class="description-container"
        :class="{
          'desc-enter-active': show,
          'desc-leave-active': show,
          'desc-enter': !show,
          'desc-leave-to': !show,
        }"
      >
        <div v-if="videoBoolean" class="image-cont">
          <div
            class="pagination"
            :class="{
              'hide-text': landing,
            }"
          >
            {{ projects.id }} / 6 {{ name }}
            <div
              class="link"
              v-html="description"
              :class="{
                'hide-text': landing,
              }"
            ></div>
          </div>
          <video
            :src="
              imagezero.url
                .split('/uploads/')
                .join('https://agile-peak-21162.herokuapp.com/uploads/')
            "
            autoplay
            loop
          />
          <div
            v-if="projects.id == 1"
            class="description2"
            v-html="description2"
            :class="{
              'hide-text': landing,
            }"
          ></div>
          <div v-if="projects.id == 2">
            <div
              class="description2"
              v-html="description2"
              :class="{
                'hide-text': landing,
              }"
            ></div>
            <div class="description-images-container">
              <img
                :src="
                  imageone.url
                    .split('/uploads/')
                    .join('https://agile-peak-21162.herokuapp.com/uploads/')
                "
              />
              <img
                :src="
                  imagetwo.url
                    .split('/uploads/')
                    .join('https://agile-peak-21162.herokuapp.com/uploads/')
                "
              />
              <img
                :src="
                  imagethree.url
                    .split('/uploads/')
                    .join('https://agile-peak-21162.herokuapp.com/uploads/')
                "
              />
              <img
                :src="
                  imagefour.url
                    .split('/uploads/')
                    .join('https://agile-peak-21162.herokuapp.com/uploads/')
                "
              />
            </div>
            <div class="first-subtitle"></div>
            <div
              class="description3"
              v-html="description3"
              :class="{
                'hide-text': landing,
              }"
            ></div>
            <div class="second-description-container">
              <img
                :src="
                  imagefive.url
                    .split('/uploads/')
                    .join('https://agile-peak-21162.herokuapp.com/uploads/')
                "
              />
              <img
                :src="
                  imagesix.url
                    .split('/uploads/')
                    .join('https://agile-peak-21162.herokuapp.com/uploads/')
                "
              />
              <img
                :src="
                  imageseven.url
                    .split('/uploads/')
                    .join('https://agile-peak-21162.herokuapp.com/uploads/')
                "
              />
            </div>
            <div
              class="description4"
              v-html="description4"
              :class="{
                'hide-text': landing,
              }"
            ></div>
            <div class="third-description-container">
              <img
                :src="
                  imageeight.url
                    .split('/uploads/')
                    .join('https://agile-peak-21162.herokuapp.com/uploads/')
                "
              />
              <img
                :src="
                  imagenine.url
                    .split('/uploads/')
                    .join('https://agile-peak-21162.herokuapp.com/uploads/')
                "
              />
            </div>
            <div
              class="description5"
              v-html="description5"
              :class="{
                'hide-text': landing,
              }"
            ></div>
            <div class="fourth-description-container">
              <img
                :src="
                  imageten.url
                    .split('/uploads/')
                    .join('https://agile-peak-21162.herokuapp.com/uploads/')
                "
              />
            </div>
            <div
              class="description6"
              v-html="description6"
              :class="{
                'hide-text': landing,
              }"
            ></div>
          </div>
        </div>
        <div v-else class="image-cont">
          <a
            class="pagination"
            :class="{
              'hide-text': landing,
            }"
          >
            {{ projects.id }} / 6 {{ name }}
          </a>
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="
              image.url
                .split('/uploads/')
                .join('https://agile-peak-21162.herokuapp.com/uploads/')
            "
          />

          <div
            class="description"
            v-html="description"
            :class="{
              'hide-text': landing,
            }"
          ></div>
        </div>
      </div>
    </div>
  </transition>
  <!-- </nuxt-link> -->
</template>

<script>
import NavComponent from "../components/NavComponent.vue";

export default {
  components: { NavComponent },
  props: {
    landing: Boolean,
  },
  async asyncData({ params, $axios, route }) {
    const projects = await $axios.$get(
      `https://agile-peak-21162.herokuapp.com/projects/${route.params.entries}`
    );
    const slug = route.params.entries;
    console.log(slug);
    return { projects };
  },

  computed: {
    nextpage: function () {
      if (this.projects.id == 6) {
        return this.projects.id - (6 - 1);
      }
      return this.projects.id + 1;
    },

    prevpage: function () {
      if (this.projects.id == 1) {
        return this.projects.id + 5;
      }
      return this.projects.id - 1;
    },

    titleprojects: function () {
      //this.$store.dispatch("requestFunc");
      return this.$store.state.projects;
    },

    images: function () {
      return this.projects.images;
    },
    imagezero: function () {
      return this.projects.images[0];
    },
    imageone: function () {
      return this.projects.images[1];
    },
    imagetwo: function () {
      return this.projects.images[2];
    },
    imagethree: function () {
      return this.projects.images[3];
    },
    imagefour: function () {
      return this.projects.images[4];
    },
    imagefive: function () {
      return this.projects.images[5];
    },
    imagesix: function () {
      return this.projects.images[6];
    },
    imageseven: function () {
      return this.projects.images[7];
    },
    imageeight: function () {
      return this.projects.images[8];
    },
    imagenine: function () {
      return this.projects.images[9];
    },
    imageten: function () {
      return this.projects.images[10];
    },
    imageeleven: function () {
      return this.projects.images[11];
    },
    name: function () {
      return this.projects.name;
    },
    description: function () {
      return this.projects.description;
    },
    description2: function () {
      return this.projects.description2;
    },
    description3: function () {
      return this.projects.description3;
    },
    description4: function () {
      return this.projects.description4;
    },
    description5: function () {
      return this.projects.description5;
    },
    description6: function () {
      return this.projects.description6;
    },

    videoBoolean: function () {
      return this.projects.videoboolean;
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
    this.show = true;
    if (!this.imagesloaded) {
      this.loadImages();
      console.log(this.$refs.image);
    }
  },
  methods: {
    onLandingPage() {
      if (this.$route.params.nav) {
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
      const cachedImages = [];

      //load Images
      for (const image of this.images) {
        const img = new Image();
        img.src = image;
        if (img.onload) {
          cachedImages.push(image);
        }
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
        console.log(`${this.videoBoolean}`);
      });
    },
  },
};
</script>

<style lang="scss" >
@import "~assets/_projects.scss";
@import "~assets/_typography.scss";

.pages-container {
  top: 10vh;
  margin: 0;
  z-index: -1;
  align-items: center;
  overflow-x: scroll;
  display: grid;
  grid-template-columns: repeat(10, 10vw);
}

.pagination {
  @include IBM-Plex-Mono;
  margin: 0 auto;
  font-size: 20px;
  color: black;
}

.nav {
  //width: 100%;
  grid-column: 1/3;
  position: fixed;
  top: 25rem;
  left: 7vh;
  font-size: 25px;
}

.nuxt-link-active {
  color: black;
  text-decoration: none;
}
.title,
.description {
  pointer-events: auto;
  z-index: 5;
}

.description-container {
  position: relative;
  width: 100%;
  grid-column: 4/10;
  @include IBM-Plex-Mono;
  font-style: italic;
  font-size: 14px;
  margin-top: 5rem;
}
.image-cont {
  width: 100%;
  margin: 0 auto;
  img {
    height: 100%;
    width: 100%;
  }
  video {
    height: 100%;
    width: 100%;
  }
}

.description-images-container {
  display: grid;
  width: 100%; //
  grid-template-columns: 1fr 1fr;
  img {
    width: 100%;
    height: auto;
    // padding: 0.5rem;
  }
}

.second-description-container {
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
  }
}

.third-description-container {
  img {
    width: 100%;
  }
}

.fourth-description-container {
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
  }
}

.first-subtitle {
  pointer-events: auto;
  z-index: 5;
  opacity: 0.7;
  text-align: left;
}

.link {
  font-size: 20px;
  color: black;
}
.description {
  pointer-events: auto;
  z-index: 5;
  opacity: 0.7;
  text-align: left;
}

.description2,
.description3,
.description4,
.description5,
.description6 {
  pointer-events: auto;
  z-index: 5;
  color: black;
  opacity: 1;
  width: 50vw;
  //margin: 0 auto;
  opacity: 0.9;
  margin-bottom: 3rem;
  margin-top: 3rem;
}

.indent {
  text-indent: 50px;
  font-style: normal;
}

.p-graph .pagination {
  width: 100%;
  align-content: center;
  text-align: center;
}

.hide-text {
  opacity: 0;
  position: sticky;
  top: 10vh;
}

.scroll {
  display: flex;
  z-index: 5;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

@media screen and (max-width: 800px) {
  .description-container {
    margin: 0 auto;
    width: 100%;
    //grid-column: 2/10;
    .title,
    .description {
      width: auto;
      font-size: 14px;
      text-align: left;
    }
  }

  .nav {
    display: none;
  }

  .description-images-container {
    grid-template-columns: 1fr;
    img {
      // padding: none;
    }
  }
  .description2,
  .description3,
  .description4,
  .description5,
  .description6 {
    width: 90vw;
  }

  .second-description-container,
  .third-description-container,
  .fourth-description-container {
    width: 100%;
    // img {
    //   padding: none;
    // }
  }
  .pagination {
    padding: 1rem;
    font-size: 14px;
  }
  .grid-container {
    width: 80vw;
    grid-template-columns: 20vw 60vw;
  }
  .image-cont {
    width: 100%;
    //margin: 0 auto;
  }

  .link {
    font-size: 14px;
  }

  img {
    width: 100%;
  }
  video {
    width: 100%;
  }
}
</style>
