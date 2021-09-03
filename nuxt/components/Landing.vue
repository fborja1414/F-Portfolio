<template>
  <div
    class="navigation"
    :class="{
      'slideIn-navigation-enter-active': !slideToggle,
      'slideIn-navigation-leave-active': !slideToggle,
      'slideIn-navigation-enter': slideToggle,
      'slideIn-navigation-leave-to': slideToggle,
    }"
  >
    <div class="project-titles">
      <title-item
        v-for="(entries, index) in projects"
        :key="index"
        :entries="entries"
        :index="index"
      />
    </div>
    <div class="contact">
      <a class="email" href="mailto:fborja1414@gmail.com">EMAIL</a>
      <a class="github" href="fborja1414.github.io">GITHUB</a>
      <a class="arena" href="https://www.are.na/francisco-borja">ARE.NA</a>
    </div>
    <nav-item
      :key="index"
      v-for="(entries, index) in projects"
      :index="index"
      :entries="entries"
      :slideToggle="slideToggle"
    />
  </div>
</template>

<script>
import NavItem from "@/components/NavItem.vue";
import TitleItem from "@/components/TitleItem.vue";

export default {
  name: "Landing",
  components: {
    NavItem,
    TitleItem,
  },
  props: {
    projects: Array,
    slideToggle: Boolean,
  },
  data() {
    return {
      slideToggle: false,
    };
  },
  methods: {
    hoveredNav() {
      this.navHovered = true;
      console.log("ha");
    },

    onLandingPage() {
      if (!this.$route.params.project) {
        this.$store.commit("toggleLanding", true);
      }
      console.log("togglelanding");
    },
  },
  mounted() {
    this.onLandingPage();
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

.project-titles {
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 20vh;
  text-align: center;
  cursor: pointer;
}

.name {
  @include Canela-Thin;
  margin-right: 10px;
}

.next {
  @include IBM-Plex-Mono;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 12px;
  cursor: pointer;
}

.prev {
  @include IBM-Plex-Mono;
  position: absolute;
  //left: 5rem;
  bottom: 1rem;
  font-size: 12px;
  cursor: pointer;
}

.medium {
  @include Canela-ThinItalic;
}

.subheader {
  @include Canela-ThinItalic;
  font-style: italic;
}

.nuxt-link-active {
  color: black;
  text-decoration: none;
}

.slide {
  opacity: 0;
}

.slideIn {
  transition: opacity 3s ease-in-out, transform 2s ease-in-out;
}

.navigation {
  position: absolute;
  top: 4rem;
  left: 1rem;
  height: calc(100vh - 5rem);
  width: calc(100vw - 2rem);
  //top: 10vh;
  grid-column: 1/11;
  font-size: 3vw;
  line-height: 1.5;
  display: block;
  overflow: hidden;
}

.contact {
  @include IBM-Plex-Mono;
  font-size: 0.8vw;
  //bottom: 5vh;
  margin: 0 auto;
  display: block;
  width: 15vw;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 25vh;

  a {
    padding: 5px;
    cursor: pointer;
  }
}

.email,
.arena,
.github {
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

// .blink {
//   animation: blink 1s;
// }

// @keyframes blink {
//   50% {
//     opacity: 0;
//   }
// }

.nav-container {
  cursor: pointer;
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
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}
.slideIn-navigation-enter,
.slideIn-navigation-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}

@media screen and (max-width: 768px) {
  .nav-section {
    opacity: 0;
  }

  .navigation {
    //margin-top: 10vh;
    font-size: 4vw;
    // grid-column: 3/11;
    // margin: 0 0 8rem 0;
  }
  .header-container {
    font-size: 1.5vw;
    grid-column: 1/9;
  }
  .contact {
    padding-top: 20vh;
    font-size: 1.6vw;
    text-align: center;
    width: 40vw;
  }
}
</style>