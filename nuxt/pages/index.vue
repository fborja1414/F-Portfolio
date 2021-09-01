<template>
  <div class="page-container">
    <landing :projects="projects" :slideToggle="slideToggle" />

    <!-- <transition name="slideIn">
      <div v-show="slideToggle" class="nav-section">
        <div
          class="nav-container"
          v-for="(entry, index) in projects"
          :key="index"
        >
          <nav-section
            v-on:clicked="scrollSectionIntoView"
            :index="index"
            :entry="entry"
          />
        </div>
      </div>
    </transition>
    <template
      v-show="slideToggle"
      class="section-container"
      :class="{
        'slideIn-navigation-enter-active': !slideToggle,
        'slideIn-navigation-leave-active': !slideToggle,
        'slideIn-navigation-enter': slideToggle,
        'slideIn-navigation-leave-to': slideToggle,
      }"
    >
      <Section
        :entry="entry"
        :index="index"
        v-for="(entry, index) in projects"
        :key="index"
        ref="entry"
        :slideToggle="slideToggle"
      />
    </template> -->
  </div>
</template>

<script>
import Section from "@/components/Section.vue";
import NavItem from "@/components/NavItem.vue";
import NavSection from "@/components/NavSection.vue";
import TitleItem from "@/components/TitleItem.vue";
import Landing from "@/components/Landing.vue";

export default {
  components: {
    Section,
    NavItem,
    NavSection,
    TitleItem,
    Landing,
  },

  // transition: {
  //   appear: true,
  //   name: "page",
  // },
  data() {
    return {
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
    scrollSectionIntoView(index) {
      setTimeout(() => {
        const rawTargetContainerYPos =
          this.$refs.entry[index].$el.getBoundingClientRect().top +
          document.documentElement.scrollTop;
        const targetContainerHeight = this.$refs.entry[index].$el.offsetHeight;
        const windowHeight = window.innerHeight;
        const centeredContainerYPos =
          rawTargetContainerYPos -
          Math.abs((windowHeight - targetContainerHeight) / 2);
        // console.log(rawTargetContainerYPos, targetContainerHeight, centeredContainerYPos)
        window.scrollTo({ top: centeredContainerYPos, behavior: "smooth" });
      }, 1000);
      //this.position = index;
    },

    resetClick() {
      setTimeout(() => {
        this.navClick = false;
      }, 1200);
    },

    selectOn() {
      this.navHovered = true;
    },

    selectOff() {
      this.navHovered = false;
    },

    setDescription(event) {
      for (var index = 0; index <= this.$refs.entry.length; index++) {
        if (
          (this.$refs.entry[index].$el.getBoundingClientRect().top >= 0 &&
            window.innerHeight >=
              this.$refs.entry[index].$el.getBoundingClientRect().bottom -
                this.$refs.entry[index].$el.offsetHeight) ||
          (this.$refs.entry[index].$el.getBoundingClientRect().bottom >= 0 &&
            window.innerHeight >=
              this.$refs.entry[index].$el.getBoundingClientRect().bottom -
                this.$refs.entry[index].$el.offsetHeight)
          // this.$refs.entry[index - 1].$el.getBoundingClientRect().bottom >= 0
          //
          // window.innerHeight >=
          //   this.$refs.entry[index].$el.getBoundingClientRect().bottom
        ) {
          console.log(
            window.scrollY,
            "scrolltop" +
              this.$refs.entry[index].$el.getBoundingClientRect().top,
            "scrollbottom" +
              this.$refs.entry[index].$el.getBoundingClientRect().bottom
          );
          // this.sectionDescription = this.$refs.entry[index].description;
          this.slideToggle = true;

          this.$store.commit("setFocus", this.$refs.entry[index].entry.name);

          console.log(this.$refs.entry[index].entry.name);
        } else if (
          window.scrollY <= this.$refs.entry[0].$el.getBoundingClientRect().top
        ) {
          this.slideToggle = false;
          //this.scroll = false;
        }
      }
    },

    // watch: {
    //     sectionDescription: function() {

    //       projects.foreach() if(window.scrollY >= this.$refs.entry[index] )
    //     //const rawTargetContainerYPos =
    //        // this.$refs.entry[index].$el.getBoundingClientRect().top == window.scrollY
    //         // document.documentElement.scrollTop;
    //     // Your scroll handling here
    //     console.log(window.scrollY);
    //   },
    // },

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

  beforeMount() {
    window.addEventListener("scroll", this.setDescription);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.setDescription);
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

<style lang="scss">
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
  margin-top: 15vh;
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

.contact-container {
  display: flex;
  @include Canela-Thin;
  grid-row: 1;
  grid-column: 10/11;
  font-size: 2.5vw;
  height: 8vh;
  //align-content: center;
  position: relative;
  top: 1.5rem;
  z-index: 5;
}

.about {
  cursor: pointer;
  // justify-content: flex-end;
  // text-align: end;{}
  // align-items: flex-end;
  margin-left: 3vw;
  color: black;
  text-decoration: none;
}

.nuxt-link-active {
  color: black;
  text-decoration: none;
}

.scroll-description {
  //display: block;
  margin-top: 10rem;
  //position: absolute;
  //text-align: center;
  //position: relative;
  //grid-column: 2/4;
  align-content: center;
  font-style: italic;
  //z-index: -1;
  //pointer-events: none;
  //left: %;
  //height: 50%;
}

.slide {
  opacity: 0;
}

.slideIn {
  transition: opacity 3s ease-in-out, transform 2s ease-in-out;
}
// .scroll-year {
//   position: relative;
//   grid-column: 1/2;
//   margin-top: 5rem;
//   position: sticky;
//   top: 15rem;
// }

// .page-container {
//   display: grid;
//   grid-template-columns: repeat(10, 1fr);
//   // grid-template-rows: repeat(7, 40vh);
//   grid-auto-rows: auto;
//   //grid-gap: 20px;
//   //pointer-events: none;
//   //margin: 10rem auto;
//   overflow: hidden;
// }

// .navigation {
//   grid-column: 1/11;
//   font-size: 3vw;
//   //  margin-bottom: 70vh;
//   //height: 100vh;
//   //overflow-x: visible;
//   line-height: 1.5;
//   display: flex;
//   overflow: hidden;
// }

.contact {
  @include IBM-Plex-Mono;
  font-size: 0.8vw;
  bottom: 5vh;
  margin: 0 auto;
  display: flex;
  width: 10vw;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 25vh;
  //position: absolute;'
  a {
    padding: 5px;
  }
}

.nav-section {
  width: 35vw;
  position: fixed;
  height: 90vh;
  // grid-row: 3;
  //grid-column: 7/11;
  font-size: 25px;
  padding-top: 3rem;
  padding: 1rem;
  //position: sticky;
  right: 1rem;
  top: 1.5rem;
  margin: 1rem;
  margin-top: none;
  overflow: hidden;
}

.section {
  grid-column: 3/8;
}

.back {
  position: fixed;
  bottom: 1rem;
  font-size: 18px;
}

.socials {
  //display: block;
  line-height: 2;
  margin-top: 1rem;
  position: fixed;
  font-size: 18px;
  font-style: italic;
  height: auto;
  //grid-row: 0;
  // grid-column: 9/11;
  //position: sticky;
  // bottom: 5rem;
  color: blue;
  z-index: 5;
  a {
    pointer-events: auto;
    display: block;
  }
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
//}
// .page-enter-active,
// .page-leave-active {
//   transition: opacity 0.25s ease-in-out, transform 0.5s ease-in-out;
// }
// .page-enter,
// .page-leave-to {
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
