<template>
  <div v-if="show">
    <transition name="page">
      <div class="overview-container">
        <div class="header-container">
          <a class="nuxt-link-active">
            <a class="header" v-if="landing">
              Francisco Borja
              <a class="subheader">designer and developer</a>
            </a>
            <!-- <a class="index">index</a> -->
          </a>

          <a class="about" v-if="landing"
            ><nuxt-link class="nuxt-link-active" to="/about">about</nuxt-link>
          </a>
          <a class="index" v-if="!landing" @click="showLanding">index</a>
        </div>

        <landing
          :class="{
            'nav-enter-active': landing,
            'nav-leave-active': landing,
            'nav-enter': !landing,
            'nav-leave-to': !landing,
          }"
          class="landing"
          v-on:click="showLanding"
          @click.native="showLanding"
          :projects="projects"
          :slideToggle="slideToggle"
          v-show="landing"
        />

        <nuxt-child
          :class="{
            'page-enter-active': !landing,
            'page-leave-active': !landing,
            'page-enter': landing,
            'page-leave-to': landing,
          }"
          @click.native="showLanding"
          class="project"
          :landing="landing"
          :key="$route.params.index"
        />

        <!-- <about
          :class="{
            'nav-enter-active': !landing,
            'nav-leave-active': !landing,
            'nav-enter': landing,
            'nav-leave-to': landing,
          }"
        /> -->
      </div>
    </transition>
  </div>
</template>

<script>
import Landing from "@/components/Landing.vue";
import About from "@/components/About.vue";

export default {
  components: {
    Landing,
    About,
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
        } else if (this.landing && this.$route.params.index) {
          this.landing = false;
        }

        console.log("lanidng" + this.landing);
      }, 1050);
      // window.scrollTo({ top, behavior: "smooth" });
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

// .child {
//   color: black;
//   height: 100vh;
//   width: 100vw;
// }

.overview-container {
  width: 100%;
}
.header-container {
  display: flex;
  @include Canela-Thin;
  width: calc(100vw - 3rem);
  font-size: 3vw;
  //height: 10vh;
  //align-content: center;
  justify-content: space-between;
  position: fixed;

  top: 1.5rem;
  z-index: 5;
  margin: 0;
}

.header {
  margin-left: 1rem;
  // width: 50%;
}

// .blink-hover {
//   opacity: 0.5;
//   transition: opacity 10s;
//   filter: blur(1px);
// }

.subheader {
  @include Canela-ThinItalic;
  font-style: italic;
  //   filter: blur(2px);
}

.nuxt-link-active {
  //width: 100%;
  color: black;
  text-decoration: none;
}

.about {
  //width: 50%;
  cursor: pointer;

  //text-align: right;
  //align-items: flex-end;
  //margin-left: 3vw;
  color: black;
  text-decoration: none;
}

.landing {
  position: fixed;
  top: 4rem;
  z-index: 5;
}

.index {
  @include Canela-Thin;
  cursor: pointer;
  position: fixed;
  top: 1.5rem;
  right: 2vw;
}

.index:hover {
  opacity: 0.5;
  transition: 0.25s ease-in;
}

.project {
  // position: absolute;
  height: 100%;
  width: calc(100vw - 2rem);
  z-index: -5;
  cursor: pointer;
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
  transition: opacity 0.25s ease-out;
  filter: blur(2px);
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

  .header,
  .about {
    font-size: 4vw;
  }

  .navigation {
    font-size: 4vw;

    // grid-column: 3/11;
    // margin: 0 0 8rem 0;
  }

  .header-container {
    display: flex;
    font-size: 4vw;
  }

  .about {
    text-align: right;
  }
}
</style>
