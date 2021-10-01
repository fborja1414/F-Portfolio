<template>
  <div class="navigation">
    <div class="project-titles">
      <title-item
        v-for="(entries, index) in projects"
        :key="index"
        :entries="entries"
        :index="index"
      />
      <div class="contact">
        <a class="email" href="mailto:fborja1414@gmail.com">EMAIL</a>
        <a class="github" href="fborja1414.github.io">GITHUB</a>
        <a class="arena" href="https://www.are.na/francisco-borja">ARE.NA</a>
      </div>
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
  font-size: 18px;
  height: 10vh;
  align-content: center;
  position: relative;
  top: 1.5rem;
  z-index: 5;
}

.project-titles {
  width: calc(100vw - 3rem);
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  margin-top: 20vh;
  color: black;
  //text-align: center;
  cursor: pointer;
}

.nuxt-link-active {
  color: black;
  text-decoration: none;
}

.navigation {
  height: 100vh;
  width: 100vw;
  //top: 10vh;
  font-size: 3vw;
  line-height: 1.5;
  display: block;
  overflow: scroll;
}

.contact {
  @include IBM-Plex-Mono;
  position: fixed;
  font-size: 12px;
  //bottom: 5vh;
  margin: 0 auto;
  display: block;
  width: 15vw;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  bottom: 3vh;
  opacity: 0.7;
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
  .contact {
    font-size: 2vw;
    width: 40vw;
    margin-left: 0;
  }

  .project-titles {
    margin-top: 15vh;
    width: calc(100vw - 3rem);
    margin-left: 1rem;
  }
}
</style>