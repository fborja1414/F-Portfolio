<template>
  <div class="page-container" v-if="show">
    <div class="header-container">
      <a class="header">
        Francisco Borja,
        <div class="subheader">designer and developer</div>
      </a>

      <!-- <div class="socials">
        <a href="https://www.are.na/francisco-borja">Are.na</a>
        <a href="https://github.com/fborja1414">Github</a>
        <a>Email</a>
      </div> -->
      <div class="scroll-description" v-html="sectionDescription"></div>
      <!-- <div
        class="back"
        @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
      >
        Back to Top
      </div> -->
    </div>
    <div class="navigation">
      <div
        class="nav-container"
        v-for="(entries, index) in projects"
        :key="index"
      >
        <nav-item
          :index="index"
          :entries="entries"
          v-on:clicked="scrollSectionIntoView"
        />
      </div>
    </div>

    <template class="section-container">
      <Section
        :entry="entry"
        :index="index"
        v-for="(entry, index) in projects"
        :key="index"
        ref="entry"
        class="fade-in"
        :class="{ fade: fadeToggle }"
      />
    </template>
  </div>
</template>

<script>
import Section from "@/components/Section.vue";
import NavItem from "@/components/NavItem.vue";
export default {
  components: {
    Section,
    NavItem,
  },

  transition: {
    appear: true,
    name: "page",
  },
  data() {
    return {
      show: false,
      scroll: true,
      sectionDescription: " ",
    };
  },
  methods: {
    scrollSectionIntoView(index) {
      setTimeout(() => {
        if (index == 1) {
          const rawTargetContainerYPos =
            this.$refs.entry[index].$el.getBoundingClientRect().top +
            document.documentElement.scrollTop;
          const targetContainerHeight = this.$refs.entry[index].$el
            .offsetHeight;
          const windowHeight = window.innerHeight;
          const centeredContainerYPos =
            rawTargetContainerYPos -
            Math.abs(windowHeight - targetContainerHeight / 2);
          // console.log(rawTargetContainerYPos, targetContainerHeight, centeredContainerYPos)
          window.scrollTo({ top: centeredContainerYPos, behavior: "smooth" });
        } else {
          console.log(this.$refs.entry[index].$el);
          const rawTargetContainerYPos =
            this.$refs.entry[index].$el.getBoundingClientRect().top +
            document.documentElement.scrollTop;
          const targetContainerHeight = this.$refs.entry[index].$el
            .offsetHeight;
          const windowHeight = window.innerHeight;
          const centeredContainerYPos =
            rawTargetContainerYPos -
            Math.abs((windowHeight - targetContainerHeight) / 2);
          // console.log(rawTargetContainerYPos, targetContainerHeight, centeredContainerYPos)
          window.scrollTo({ top: centeredContainerYPos, behavior: "smooth" });
        }
      }, 1000);
    },

    setDescription(event) {
      for (var index = 0; index <= this.$refs.entry.length; index++) {
        if (
          (this.$refs.entry[index].$el.getBoundingClientRect().top >= 0 &&
            window.innerHeight >=
              this.$refs.entry[index].$el.getBoundingClientRect().bottom -
                this.$refs.entry[index].$el.offsetHeight / 2) ||
          (this.$refs.entry[index].$el.getBoundingClientRect().bottom >= 0 &&
            window.innerHeight >=
              this.$refs.entry[index].$el.getBoundingClientRect().bottom -
                this.$refs.entry[index].$el.offsetHeight / 2)
          // this.$refs.entry[index - 1].$el.getBoundingClientRect().bottom >= 0
          //
          // window.innerHeight >=
          //   this.$refs.entry[index].$el.getBoundingClientRect().bottom
        ) {
          console.log(
            window.scrollY,
            this.$refs.entry[index].$el.getBoundingClientRect().top,
            this.$refs.entry[index].$el.getBoundingClientRect().bottom
          );
          this.sectionDescription = this.$refs.entry[index].description;
          this.fadeToggle = true;
        } else if (
          window.scrollY <= this.$refs.entry[0].$el.getBoundingClientRect().top
        ) {
          this.sectionDescription = " ";
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

    scrollUp() {
      console.log("inside");
    },
    hoveredNav() {
      this.navHovered = true;
      console.log("ha");
    },
  },

  // computed: {
  //   entries() {
  //     const entries = this.projects.entry;
  //   },
  // },

  beforeMount() {
    window.addEventListener("scroll", this.setDescription);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.setDescription);
  },

  async asyncData({ $axios }) {
    const projects = await $axios.$get("http://localhost:1337/projects");
    console.log({ projects });
    return { projects };
  },

  mounted() {
    this.$nextTick(() => (this.show = true));
  },
};
</script>

<style lang="scss">
@import "~assets/_projects.scss";

.header-container {
  //position: relative;
  //display: flex;
  grid-column: 1/3;
  font-size: 20px;
  height: 2rem;
  position: sticky;
  top: 3rem;
  z-index: -1;
}

.subheader {
  font-style: italic;
}

// .preview-container {
//   width: 10rem;
//   position: absolute;
//   opacity: 0;
// }

.scroll-description {
  display: block;
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

// .scroll-year {
//   position: relative;
//   grid-column: 1/2;
//   margin-top: 5rem;
//   position: sticky;
//   top: 15rem;
// }

.page-container {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 20px;
  //pointer-events: none;
  //margin: 10rem auto;
}

.navigation {
  //position: sticky;
  //top: 3rem;
  line-height: 2.5;
  //display: flex;
  grid-column: 4/10;
  font-size: 20px;
  // flex-direction: column;
  height: 55vh;
  margin: 0 0 10rem 0;
  overflow-x: visible;
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
.medium {
  //display: block;
  font-style: italic;
  //color: blue;
}

.section-container {
  //position: relative;
  margin: 0 0 6rem 0;
}

.fade-in {
  opacity: 0;
}

.fade {
  opacity: 1;
  transition: opacity 0.3s;
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

.description-enter-active,
.description-leave-active {
  transition: opacity 1s;
}
.description-enter,
.description-leave-to {
  opacity: 0;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
