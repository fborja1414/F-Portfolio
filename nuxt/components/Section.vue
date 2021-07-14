<template>
  <div class="section-container" :class="position">
    <div class="scroll" v-if="images.length > 1">
      <video
        class="vid-size"
        :key="index"
        :src="
          images[0].url
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
}
</style>
