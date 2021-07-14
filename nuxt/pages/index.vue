<template>
  <div class="page-container" v-if="show">
    <div class="header-container">
      <a class="header">
        Francisco Borja,
        <div class="subheader">designer and developer</div>
      </a>

      <div class="scroll-description">
        {{ sectionDescription }}
      </div>

      <!-- <div class="socials">
          <a>Instagram</a>
          <a>Are.na</a>
          <a>Github</a>
          <a>Email</a>
        </div> -->
    </div>
    <div class="navigation">
      <div
        class="nav-container"
        v-for="(entries, index) in projects"
        :key="index"
      >
        <div
          class="nav-items"
          :key="index"
          @click="scrollSectionIntoView(index)"
        >
          <a :key="index" class="select"> > </a>
          <a> {{ entries.name }}</a>
          <a :key="index" class="medium"> {{ entries.medium }}</a>
        </div>
      </div>
    </div>

    <template class="section-container">
      <Section
        :entry="entry"
        :index="index"
        v-for="(entry, index) in projects"
        :key="index"
        ref="entry"
      />
    </template>
  </div>
</template>

<script>
import Section from "@/components/Section.vue";
export default {
  components: {
    Section,
  },

  transition: {
    appear: true,
    name: "page",
  },
  data() {
    return {
      navHovered: false,
      show: false,
      sectionDescription: " ",
    };
  },
  methods: {
    scrollSectionIntoView(index) {
      if (index == 1) {
        const rawTargetContainerYPos =
          this.$refs.entry[index].$el.getBoundingClientRect().top +
          document.documentElement.scrollTop;
        const targetContainerHeight = this.$refs.entry[index].$el.offsetHeight;
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
        const targetContainerHeight = this.$refs.entry[index].$el.offsetHeight;
        const windowHeight = window.innerHeight;
        const centeredContainerYPos =
          rawTargetContainerYPos -
          Math.abs((windowHeight - targetContainerHeight) / 2);
        // console.log(rawTargetContainerYPos, targetContainerHeight, centeredContainerYPos)
        window.scrollTo({ top: centeredContainerYPos, behavior: "smooth" });
      }
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
        } else if (
          window.scrollY <= this.$refs.entry[0].$el.getBoundingClientRect().top
        ) {
          this.sectionDescription = " ";
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
  grid-column: 2/4;
  font-size: 20px;
  height: 2rem;
  position: sticky;
  top: 10rem;
  z-index: -1;
}

.subheader {
  font-style: italic;
}

.scroll-description {
  display: block;
  margin-top: 5rem;
  //position: absolute;
  //text-align: center;
  //position: relative;
  //grid-column: 2/4;
  align-content: center;
  font-style: italic;
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
  margin: 10rem auto;
}

.navigation {
  position: relative;
  display: flex;
  grid-column: 5/8;
  font-size: 20px;
  flex-direction: column;
  height: 55vh;
  margin: 0 0 10rem 0;
  overflow-x: visible;
}

// .socials {
//   //display: block;
//   position: relative;
//   font-size: 20px;
//   font-style: italic;
//   //grid-row: 0;
//   // grid-column: 9/11;
//   //position: sticky;
//   //top: 10rem;
//   a {
//     display: block;
//   }
// }
.medium {
  display: block;
  font-style: italic;
}

.section-container {
  //position: relative;
  margin: 0 0 6rem 0;
}

.select {
  position: absolute;
  left: -2vw;
  opacity: 0;
}

.nav-items {
  position: relative;
}

.image-container {
  width: 10rem;
  position: absolute;
  //display: block;
  left: -15vw;
  opacity: 0;
  height: auto;
}

.nav-container {
  cursor: pointer;
}

.nav-container:hover {
  .select {
    opacity: 1;
  }
  .image-container {
    opacity: 1;
  }
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
