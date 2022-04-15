<template>
  <div v-if="show">
    <transition name="page">
      <div class="overview-container">
        <!-- <landing
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
        /> -->

        <div class="project-titles">
          <div class="subtitle">
            Hi! I'm a designer developer based in San Francisco, California. In
            2020 I graduated with a degree in cognitive science from University
            of California, Los Angeles. I love developing creative websites and
            honing my design perspective. In my free time I enjoy fashion,
            k-drama, and eating good ramen. Here are some things I've worked on
          </div>
          <title-item
            v-for="(entries, index) in projects"
            :key="index"
            :entries="entries"
            :index="index"
          />
        </div>

        <nav-item
          :key="index"
          v-for="(entries, index) in projects"
          :index="index"
          :entries="entries"
          :slideToggle="slideToggle"
          class="preview"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import About from "@/components/About.vue";
import NavItem from "@/components/NavItem.vue";
import TitleItem from "@/components/TitleItem.vue";

export default {
  components: {
    NavItem,
    TitleItem,
    About
  },

  data() {
    return {
      show: false,
      scroll: true,
      sectionDescription: " ",
      showSection: true,
      slideToggle: false,
      showAbout: false,
      navHovered: false
      //position: Number
    };
  },
  methods: {
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
    }
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

  computed: {
    projects() {
      // this.$store.dispatch("requestFunc");
      console.log(JSON.stringify(this.$store.state.projects));
      return this.$store.state.projects;
      
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/_projects.scss";
@import "~assets/_typography.scss";

.project-titles {
  width: calc(100vw - 3rem);
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  margin-top: 15vh;
  color: black;
  //text-align: center;
  padding-bottom: 25rem;
  // z-index: 1;
  font-size: 3vw;
  line-height: 1.5;
}

.preview {
  position: fixed;
  top: 0px;
}

.navigation {
  width: 100vw;
  //top: 10vh;
  font-size: 3vw;
  line-height: 1.5;
  //overflow: scroll;
}

.blink-hover {
  opacity: 0.5;
  transition: opacity 0.25;
}

.subtitle {
  @include IBM-Plex-Mono;
  font-size: 16px;
  padding-top: 10rem;
  padding-bottom: 15rem;
  text-align: center;
  opacity: 0.8;
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

// .page-enter-active,
// .page-leave-active {
//   transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
// }
// .page-enter,
// .page-leave-to {
//   opacity: 0;
//   transform: translate3d(0, 15px, 0);
// }

.overview-container {
  height: auto;
  width: 100%;
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

.index {
  @include IBM-Plex-Mono;
  cursor: pointer;
  position: fixed;
  top: 1.5rem;
  right: 2vw;
  background: none;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.index:hover {
  opacity: 0.5;
  transition: 0.25s ease-in;
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

@media screen and (max-width: 768px) {
  .header,
  .about {
    font-size: 2.5vw;
    margin-left: 1rem;
    width: 50vw;
  }

  .navigation {
    margin-left: 0;
    font-size: 4vw;

    // grid-column: 3/11;
    // margin: 0 0 8rem 0;
  }

  .header-container {
    opacity: 0.8;
    //width: calc(100vw - 2rem);
  }

  .about {
    padding-top: 0.2rem;
    text-align: right;
    //right: 5.5vw;
  }

  .index {
    font-size: 14px;
    right: 5.5vw;
  }

  .contact {
    font-size: 2vw;
    width: 40vw;
    margin-left: 0;
  }

  .subtitle {
    font-size: 2vw;
    padding-bottom: 15rem;
  }

  .project-titles {
    margin-top: 15vh;
    width: calc(100vw - 3rem);
    margin-left: 1rem;
  }
}
</style>
