<template>
  <div class="section-container" ref="container" v-if="imagesloaded">
    <div
      class="scroll"
      :class="{
        'slideIn-navigation-enter-active': scrollToggle,
        'slideIn-navigation-leave-active': scrollToggle,
        'slideIn-navigation-enter': !scrollToggle,
        'slideIn-navigation-leave-to': !scrollToggle
      }"
      ref="imagescroll"
      v-if="images.length > 1"
      v-on:scroll="displayPagination"
    >
      <!-- <video
        class="vid-size"
        :key="index"
        :src="
          images[1].url
            .split('/uploads/')
            .join('http://localhost:1337/uploads/')
        "
        autoplay
        loop
      /> -->
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
    </div>

    <div
      class="scroll"
      :class="{
        'slideIn-navigation-enter-active': scrollToggle,
        //'slideIn-navigation-leave-active': scrollToggle,
        'slideIn-navigation-enter': !scrollToggle
        // 'slideIn-navigation-leave-to': !scrollToggle
      }"
      v-else
    >
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
    <div class="pagination">{{ pageNum }} / {{ images.length }}</div>
    <div class="description">
      <a class="title">{{ entry.name }} |</a>
      <a class="medium" :class="{ blink: navClick }"> {{ entry.medium }}</a>

      <div v-html="description" class="mobile-description"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    entry: Object,
    index: Number,
    slideToggle: Boolean,
    scrollToggle: Boolean
  },
  data() {
    return {
      imagesloaded: false,
      pageNum: 1
    };
  },

  methods: {
    async loadImages() {
      console.log(`${this.imagesloaded}`);
      const t0 = performance.now();
      let cachedImages = [];

      //load Images
      for (const image of this.entry.images) {
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

    displayPagination() {
      console.log("scrolled");
      //var leftScroll = this.$refs.imagescroll.scrollLeft;
      //var totalscrollwidth = this.$refs.imagescroll.width;
      //  var containerwidth = this.$refs.container.offsetWidth;

      // console.log(leftScroll);
      // console.log(this.$refs.imagescroll.scrollWidth);
      // console.log(this.$refs.container.offsetWidth);

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
    }
  },

  computed: {
    images: function() {
      return this.entry.images;
    },
    position: function() {
      return this.entry.position;
    },
    description: function() {
      return this.entry.description;
    },
    video: function() {
      return this.entry.video;
    },
    scrollToggle: function() {
      return this.$store.state.scrolledfocus.includes(this.entry.name);
    }
  },

  mounted() {
    if (!this.imagesLoaded) {
      this.loadImages();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/_projects.scss";
@import "~assets/_typography.scss";
.section-container {
  grid-column: 1/11;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto;
  overflow-y: hidden;
  margin: 0 0 15rem 0;
  z-index: 2;
  overflow-x: scroll;
}

.title {
  font-style: italic;
  height: 5rem;
}

.scroll {
  display: flex;
  z-index: 5;
  overflow-x: scroll;
  width: 100%;
  scroll-snap-type: x mandatory;
  grid-column: 1/7;
  grid-row: 1;
}

.description {
  grid-column: 7/11;
  grid-row: 1;
  //width: 35vw;
  //height: 90vh;
  // grid-row: 3;
  //grid-column: 7/11;
  font-size: 30px;

  padding: 4rem;
  padding-top: 0;
  padding-right: 0rem;
  //position: sticky;
  margin: 1rem 0rem 1rem 1rem;
  margin-top: 0;
  overflow: hidden;
  height: auto;
  //float: right;
  //display: flex;
}

.mobile-description {
  @include Canela-Thin;
  font-size: 20px;
  margin-top: 1rem;
  margin-bottom: 5rem;
  padding: 1.5rem;
}

.title {
  @include Canela-Light;
  font-size: 25px;
  opacity: 1;
  justify-content: end;
}

.medium {
  @include Canela-ThinItalic;
  // font-size: 1.7vw;
  font-size: 25px;
}

img {
  width: 100%;
  margin: 0 0 1rem 0;

  // grid-column: 1/7;
}

.swipe {
  text-align: right;
}

.vid-size {
  width: 100%;
  margin: 0 0 1rem 0;
}

.pagination {
  @include Canela-Light;
  display: block;
  position: relative;
  font-size: 20px;
  text-align: right;
  right: 1px;
  margin: 10px;
  width: 10px;
  grid-row: 1;
  grid-column: 7/11;
}

.section-container:hover {
  .swipe {
    font-style: bold;
  }
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
  transition: opacity 0.2s ease-in, transform 0, 5s ease-in;
}
.slideIn-navigation-enter,
.slideIn-navigation-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
@media screen and (max-width: 768px) {
  .section-container {
    grid-column: 1/11;
    margin: 0 0 8rem 0;
    overflow-y: hidden;
  }
  .swipe {
    opacity: 0;
  }
}
@media screen and (min-width: 768px) {
  // .mobile-description {
  //   opacity: 0;
  // }
  // .title {
  //   opacity: 0;
  // }
}
</style>
