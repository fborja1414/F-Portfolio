<template>
  <div class="section-container">
    <div class="scroll" v-if="images.length > 1">
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
      <!-- <a class="title">2021 {{ entry.name }}</a> -->

      <a class="swipe" v-if="images.length > 1">swipe >> </a>
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
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/_projects.scss";

.title {
  font-style: italic;
  height: 5rem;
}

.scroll {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.description {
  display: flex;
  justify-content: space-between;
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
  margin: 0 0 10rem 0;
  z-index: -2;
  overflow-x: hidden;
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
</style>
