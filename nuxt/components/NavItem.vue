<template>
  <div
    v-if="imagesloaded"
    class="section-container"
    :class="{ 'section-container--active': titleHovered }"
  >
    <div class="fulldisplay">
      <video
        class="fulldisplay-image"
        v-if="videoBoolean"
        :src="
          imagezero.url
            .split('/uploads/')
            .join('https://agile-peak-21162.herokuapp.com/uploads/')
        "
        autoplay
        loop
      />
      <img
        v-else
        class="fulldisplay-image"
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
  name: "NavItem",

  props: {
    index: Number,
    entries: Object,
    slideToggle: Boolean,
  },

  data() {
    return {
      navHovered: false,
      navClick: false,
      imagesloaded: false,
    };
  },
  computed: {
    name: function () {
      return this.entries.name;
    },

    imagezero: function () {
      return this.entries.images[0];
    },
    images: function () {
      // const firstElement = this.entries.images.shift();
      return this.entries.images;
    },
    position: function () {
      return this.entries.position;
    },
    description: function () {
      return this.entries.description;
    },
    videoBoolean: function () {
      return this.entries.videoBoolean;
    },
    titleHovered: function () {
      return this.entries.name == this.$store.state.title;
    },
  },

  mounted() {
    if (!this.imagesloaded) {
      this.loadImages();
      console.log(this.$refs.image);
    }
  },

  methods: {
    selectOn() {
      this.navHovered = true;
    },

    selectOff() {
      this.navHovered = false;
    },

    async loadImages() {
      console.log(`${this.imagesloaded}`);
      const t0 = performance.now();
      let cachedImages = [];

      //load Images
      for (const image of this.entries.images) {
        cachedImages.push(image);
      }

      await Promise.all(cachedImages).then(() => {
        this.imagesloaded = true;
        const t1 = performance.now();
        console.log(
          `${this.entries.name} - Loaded ${
            this.entries.images.length
          } images in ${Math.round(t1 - t0)}ms.`
        );
        console.log(`${this.imagesloaded}`);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/_typography.scss";

.section-container {
  position: fixed;
  top: 0px;
  //height: calc(100vh - 5rem);
  //overflow: scroll;
  width: 100%;
  margin: 0;
  // display: grid;
  // grid-template-columns: repeat(12, 1fr);
  // grid-column-gap: 1rem;
  // grid-auto-columns: 1fr;
  opacity: 0;
  align-items: center;
  transition: opacity 1s;
  z-index: -1;
}

.section-container--active {
  opacity: 0.8;
  transition: opacity 1s;
  // overflow: hidden;
}

.fulldisplay {
  width: 50vw;
  margin: 0 auto;
}

.blink-hover {
  opacity: 0.5;
  transition: opacity 0.25;
}

.fulldisplay-image {
  height: 100%;
  width: 100%;
  margin-top: 10rem;
}

.name {
  @include Canela-Thin;
}

.medium {
  @include Canela-ThinItalic;
}

.blink {
  animation: blink 1s;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.select {
  opacity: 0;
}

.selectOn {
  opacity: 1;
}

.description-two {
  height: auto;
  max-height: 100%;
  opacity: 1;
  transition: max-height 10s ease-in-out;
  transition: opacity 5 ease-in-out;
  // margin: 10rem 0;
}

.description--collapsed {
  max-height: 0;
  opacity: 0;
  transition: max-height 10s ease-out;
}

// .nav-container:hover {

// //   .image-container {
// //     opacity: 1;
// //   }
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

@media screen and (max-width: 768px) {
  // nav-section {
  //   display: none;
  //   opacity: 0;
  // }
  // Section {
  //   display: none;
  // }
  .navigation {
    font-size: 6vw;
    // grid-column: 3/11;
    // margin: 0 0 8rem 0;
  }
  .contact {
  }
  .header-container {
    font-size: 4vw;
    grid-column: 1/9;
  }

  .fulldisplay-image {
    width: 100%;
    opacity: 0.5;
    //padding: 1.5rem;
  }
}
</style>
