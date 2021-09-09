<template>
  <!-- <nuxt-link class="nuxt-link-active" :to="'/' + nextpage"> -->
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
    <div
      class="description-container"
      :class="{
        'desc-enter-active': show,
        'desc-leave-active': show,
        'desc-enter': !show,
        'desc-leave-to': !show,
      }"
    >
      <div
        class="title"
        :class="{
          'hide-text': !landing,
        }"
      >
        {{ name }}
      </div>

      <div class="image-cont">
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
      <div
        class="description"
        v-html="description"
        :class="{
          'hide-text': landing,
        }"
      ></div>
      <div
        class="description2"
        v-html="description2"
        :class="{
          'hide-text': landing,
        }"
      ></div>
    </div>
  </div>
  <!-- </nuxt-link> -->
</template>

<script>
export default {
  props: {
    landing: Boolean,
  },
  async asyncData({ params, $axios, route }) {
    const projects = await $axios.$get(
      `https://agile-peak-21162.herokuapp.com/projects/${route.params.index}`
    );
    const slug = route.params.index;
    console.log(slug);
    return { projects };
  },

  computed: {
    // nextpage: function () {
    //   if (this.projects.id == 6) {
    //     return this.projects.id - (6 - 1);
    //   }
    //   return this.projects.id + 1;
    // },

    images: function () {
      return this.projects.images;
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
    // showLanding: function () {
    //   return this.$store.state.landing;
    // },
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
    //   this.onLandingPage();
    //   this.show = true;
    //   console.log("show" + `${this.show}`);
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
        console.log(`${this.entry.video}`);
      });
    },
  },
};
</script>

<style lang="scss" >
@import "~assets/_projects.scss";
@import "~assets/_typography.scss";

.pages-container {
  // position: absolute;
  top: 10vh;
  height: calc(100vh - 5rem);
  width: 100vh;
  margin: 0;
  z-index: -1;
  // display: grid;
  // grid-template-columns: repeat(12, 1fr);
  // grid-column-gap: 1rem;
  // grid-auto-columns: 1fr;
  align-items: center;
}

.title {
  @include IBM-Plex-Mono;
  //font-style: italic;
  font-size: 1.5vw;
  padding-bottom: 1rem;
  opacity: 0;
}

.nuxt-link-active {
  color: black;
  text-decoration: none;
}
.title,
.description {
  margin: 0 auto;
  text-align: center;
  pointer-events: auto;
  z-index: 5;
  width: 50vw;
}

.description-container {
  position: relative;
  @include IBM-Plex-Mono;
  font-style: italic;
  font-size: 1vw;
  // grid-row: 2;
  //grid-column: 4/10;
  pointer-events: none;
  margin-bottom: 1vh;
  margin-top: 10vh;
  // grid-row: 1;
}
.image-cont {
  //grid-column: 4/10;
  width: 50vw;
  margin: 0 auto;
  //display: block;
  // cursor: default;
  //overflow-x: scroll;
  img {
    height: 100%;
    width: 100%;
    margin-top: 5vh;
    // margin-bottom: 3vh;
  }
}

.description {
  position: sticky;
  bottom: 5vh;
  margin-top: 15vh;
  //text-align: center;
  pointer-events: auto;
  z-index: 5;
  // margin-bottom: 10vh;
  opacity: 0.7;
  text-align: left;
}

.description2 {
  margin-top: 5vh;
  //text-align: center;
  pointer-events: auto;
  z-index: 5;
  margin-bottom: 10vh;
  opacity: 1;
}

.pagination {
  width: 100%;
  //display: flex;
  align-content: center;
  text-align: center;
}

.hide-text {
  opacity: 0.7;
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
  transition: opacity 0.25s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

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
  //   transform: translate3d(0, 15px, 0);
}

.desc-enter-active,
.desc-leave-active {
  transition: opacity 0.2s ease-in-out, transform 0.25s ease-in-out;
}
.desc-enter,
.desc-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}

@media screen and (max-width: 800px) {
  .description-container {
    margin: 0 auto;
    margin-top: 10vh;
    // font-size: 2vw;
    width: 80vw;
    .title,
    .description {
      width: auto;
      font-size: 2.5vw;
      text-align: left;
    }
  }
  .image-cont {
    width: 80vw;
    margin: 0 auto;
  }
  img {
    width: 100%;
  }
}
</style>
