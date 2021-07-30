<template>
  <div class="section-container" v-if="imagesloaded">
    <div class="scroll" v-if="video.length > 1">
      <video
        class="vid-size"
        :key="index"
        v-for="(videos, index) in video"
        :src="
          videos.url.split('/uploads/').join('http://localhost:1337/uploads/')
        "
        autoplay
        loop
      />
    </div>
    <div class="scroll" v-if="images.length > 1">
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
        v-for="(image, index) in images"
        :key="index"
        :src="
          image.url.split('/uploads/').join('http://localhost:1337/uploads/')
        "
      />
    </div>
    <div v-else>
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="
          image.url.split('/uploads/').join('http://localhost:1337/uploads/')
        "
      />
    </div>
    <div class="description">
      <a class="title">{{ entry.name }}</a>
      <a class="swipe" v-if="images.length > 1">swipe >> </a>
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
  },
  data() {
    return {
      imagesloaded: false,
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
  },

  computed: {
    images: function () {
      return this.entry.images;
    },
    position: function () {
      return this.entry.position;
    },
    description: function () {
      return this.entry.description;
    },
    video: function () {
      return this.entry.video;
    },
  },

  mounted() {
    if (!this.imagesLoaded) {
      this.loadImages();
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/_projects.scss";
@import "~assets/_typography.scss";
.title {
  font-style: italic;
  height: 5rem;
}

.scroll {
  display: flex;
  z-index: 5;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.description {
  //display: flex;
  justify-content: space-between;
}

.mobile-description {
  @include Canela-Thin;
  font-size: 20px;
  margin-top: 1rem;
}

.title {
  @include Canela-Light;
  font-size: 20px;
  opacity: 1;
}

img {
  width: 100%;
  margin: 0 0 1rem 0;
}

.swipe {
  text-align: right;
}

.vid-size {
  width: 100%;
  margin: 0 0 1rem 0;
}

.section-container {
  grid-column: 1/7;
  margin: 0 0 15rem 0;
  z-index: 2;
  overflow-x: scroll;
}

.section-container:hover {
  .swipe {
    font-style: bold;
  }
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
  .mobile-description {
    opacity: 0;
  }
  .title {
    opacity: 0;
  }
}
</style>
