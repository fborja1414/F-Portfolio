<template>
  <div v-if="show">
    <transition name="page">
      <div>
        <nuxt-child
          :class="{
            'page-enter-active': !landing,
            'page-leave-active': !landing,
            'page-enter': landing,
            'page-leave-to': landing,
          }"
          @click.native="showLanding"
          class="project"
          :key="$route.params.nav"
        />
        <landing
          :class="{
            'nav-enter-active': landing,
            'nav-leave-active': landing,
            'nav-enter': !landing,
            'nav-leave-to': !landing,
          }"
          v-on:click="showLanding"
          @click.native="showLanding"
          :projects="projects"
          :slideToggle="slideToggle"
          v-if="landing"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import Landing from "@/components/Landing.vue";

export default {
  components: {
    Landing,
  },

  // transition: {
  //   appear: true,
  //   name: "slideIn",
  // },
  data() {
    return {
      show: false,
      landing: true,
      scroll: true,
      sectionDescription: " ",
      showSection: true,
      slideToggle: false,
      showAbout: false,
      navHovered: false,
      //position: Number
    };
  },
  methods: {
    showLanding() {
      setTimeout(() => {
        if (!this.landing) {
          this.landing = true;
        } else this.landing = false;

        console.log("lanidng" + this.landing);
      }, 150);
    },
    selectOn() {
      this.navHovered = true;
    },

    selectOff() {
      this.navHovered = false;
    },

    toggleAbout() {
      if (this.showAbout) {
        this.showAbout = false;
      } else {
        this.showAbout = true;
      }
    },

    scrollUp() {
      console.log("inside");
    },
    hoveredNav() {
      this.navHovered = true;
      console.log("ha");
    },
  },

  // beforeMount() {
  //   window.addEventListener("scroll", this.setDescription);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.setDescription);
  // },

  mounted() {
    this.$nextTick(() => (this.show = true));
  },

  async asyncData({ $axios }) {
    const projects = await $axios.$get(
      "https://agile-peak-21162.herokuapp.com/projects"
    );
    console.log({ projects });
    return { projects };
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/_projects.scss";
@import "~assets/_typography.scss";

.header-container {
  @include Canela-Thin;
  grid-row: 1;
  grid-column: 1/7;
  font-size: 2.5vw;
  height: 10vh;
  align-content: center;
  position: relative;
  top: 1.5rem;
  z-index: 5;
}

// .child {
//   color: black;
//   height: 100vh;
//   width: 100vw;
// }

.project {
  // position: absolute;
  width: 100%;
  z-index: -5;
}

.nuxt-link-active {
  color: black;
  text-decoration: none;
}
.blink-hover {
  opacity: 0.5;
  transition: opacity 0.25;
}

.section-container {
  //top: 0;
  //left: 0;
}

// .fade-in {
//   opacity: 0;
// }

// .fade {
//   opacity: 1;
//   transition: opacity 0.3s;
// }

.select {
  position: absolute;
  left: -2vw;
  opacity: 0;
}

.blink {
  animation: blink 1s 2;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.image-container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  // display: grid;
  //display: block;
  //right: 10vw;
  //grid-column: 4/6;

  opacity: 0;
  height: auto;
  z-index: -1;
  filter: invert(80%);
}

.nav-container {
  cursor: pointer;
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

// .navigation-scroll-enter-active,
// .navigation-scroll-leave-active {
//   transition: opacity 3s ease-in-out, transform 2s ease-in-out;
// }
// .navigation-scroll-enter,
// .navigation-leave-to {
//   opacity: 0;
//   transform: translate3d(0, 15px, 0);
// }
// .page-enter-active,
// .page-leave-active {
//   transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
// }
// .page-enter,
// .page-leave-to {
//   opacity: 0;
//   transform: translate3d(0, 15px, 0);
// }

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.page-enter,
.page-leave-to {
  opacity: 0.2;
  transition: opacity 0.25 ease-out;
  filter: grayscale(1);
}

.nav-enter-active,
.nav-leave-active {
  transition: opacity 1s ease-in;
}

.nav-enter,
.nav-leave-to {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  // nav-section {
  //   display: none;
  //   opacity: 0;
  // }
  // Section {
  //   display: none;
  // }
  .navigation {
    font-size: 4vw;
    // grid-column: 3/11;
    // margin: 0 0 8rem 0;
  }
  .contact {
  }
  .header-container {
    font-size: 4vw;
    grid-column: 1/9;
  }
}
</style>
