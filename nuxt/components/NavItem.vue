<template>
  <div>
    <div
      class="nav-items"
      v-on:click="
        $emit('clicked', index);
        navClick = true;
        resetClick();
      "
      @mouseenter="selectOn"
      @mouseleave="selectOff"
    >
      <a class="name"> {{ entries.name }} |</a>
      <a class="medium" :class="{ blink: navClick }"> {{ entries.medium }}</a>
    </div>

    <div
      class="section-container"
      :class="{ 'section-container--active': navHovered }"
    >
      <div :class="position">
        <div v-if="images.length > 1" class="fulldisplay">
          <img
            class="fulldisplay-image"
            v-for="(image, index) in images"
            :key="index"
            :src="
              image.url
                .split('/uploads/')
                .join('http://localhost:1337/uploads/')
            "
          />
        </div>
        <div v-else>
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="
              image.url
                .split('/uploads/')
                .join('http://localhost:1337/uploads/')
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem",

  props: {
    index: Number,
    entries: Object,
  },

  data() {
    return {
      navHovered: false,
      navClick: false,
    };
  },
  computed: {
    name: function () {
      return this.entries.name;
    },
    images: function () {
      return this.entries.images;
    },
    position: function () {
      return this.entries.position;
    },
    description: function () {
      return this.entries.description;
    },
  },

  methods: {
    selectOn() {
      this.navHovered = true;
      console.log("in");
    },

    selectOff() {
      this.navHovered = false;
      console.log("out");
    },

    resetClick() {
      setTimeout(() => {
        this.navClick = false;
      }, 1200);
    },
  },

  // data() {
  //   return {
  //     navClick: false,
  //     navHovered: false,
  //   };
  // },
};
</script>

<style lang="scss" scoped>
@import "~assets/_typography.scss";

.section-container {
  position: fixed;
  top: 4rem;
  left: 1rem;
  height: calc(100% - 5rem);
  width: calc(100vw - 2rem);
  margin: 0;
  z-index: -1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  grid-auto-columns: 1fr;
  align-items: center;
  opacity: 0;
  transition: opacity 1s;
}

.section-container--active {
  opacity: 1;
  transition: opacity 1s;
}

img {
  opacity: 40%;
  width: 100%;
  object-fit: cover;
  z-index: 5;
  //mix-blend-mode: exclusion;
}

.fulldisplay {
  display: flex;
}

.fulldisplay-image {
  padding: 1.5rem;
}
.nav-items {
  position: relative;
}

.name {
  @include Canela-Thin;
}

.medium {
  @include Canela-ThinItalic;
}

.blink {
  animation: blink 1s 2;
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
</style>