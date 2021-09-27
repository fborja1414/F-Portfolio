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
          class="project"
          :landing="landing"
          :key="$route.params.index"
        />
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
      if (!this.landing) {
        this.landing = true;
      } else if (this.landing) {
        this.landing = false;
      }

      console.log("lanidng" + this.landing);

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
    const projectsraw = await $axios.$get(
      "https://agile-peak-21162.herokuapp.com/projects"
    );
    const projects = projectsraw.sort(function (firstItem, secondItem) {
      return firstItem.id - secondItem.id;
    });
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
  @include IBM-Plex-Mono;
  width: calc(100vw - 3rem);
  font-size: 14px;
  //height: 10vh;
  //align-content: center;
  justify-content: space-between;
  position: fixed;
  opacity: 0.8;

  top: 1.5rem;
  z-index: 5;
  margin: 0;
}

.header {
  margin-left: 1rem;
  // width: 50%;
}

.subheader {
  opacity: 0.8;
}

.nuxt-link-active {
  //width: 100%;
  color: black;
  text-decoration: none;
}

.about {
  //width: 50%;
  position: fixed;
  right: 2vw;
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
  background-color: f1f1f1;
  overflow: hidden;
}

.index {
  @include IBM-Plex-Mono;
  cursor: pointer;
  position: fixed;
  top: 1.5rem;
  right: 2vw;
  background: none;
}

.index:hover {
  opacity: 0.5;
  transition: 0.25s ease-in;
}

.project {
  // position: absolute;
  height: 100%;
  //width: calc(100vw - 2rem);
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

@media screen and (max-width: 768px) {
  .header,
  .about {
    font-size: 2.5vw;
    margin-left: 1rem;
  }

  .navigation {
    margin-left: 0;
    font-size: 4vw;

    // grid-column: 3/11;
    // margin: 0 0 8rem 0;
  }

  .header-container {
    width: calc(100vw - 2rem);
  }

  .about {
    text-align: right;
    right: 5.5vw;
  }

  .index {
    font-size: 14px;
    right: 5.5vw;
  }
}
</style>
