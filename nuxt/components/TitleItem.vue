<template>
  <a
    class="name"
    :class="{
      'blink-hover': navHovered,
      blink: onProjectpage,
    }"
    v-on:click="
      $emit('clicked', index);
      navClick = true;
      resetClick();
      removeTitle();
    "
    :key="index"
    @mouseenter="setTitle(entries.name)"
    @mouseleave="removeTitle()"
  >
    <nuxt-link class="project-link" :to="'/' + entries.id">
      <a class="dot" v-if="index != 0"> • </a>
      <a
        class="name"
        :class="{
          blink: onProjectpage,
        }"
      >
        {{ entries.name }} |
      </a>
      <a
        class="medium"
        :class="{
          blink: onProjectpage,
        }"
      >
        {{ entries.medium }}</a
      >
    </nuxt-link>
  </a>
</template>

<script>
export default {
  name: "TitleItem",

  props: {
    index: Number,
    entries: Object,
    slideToggle: Boolean,
  },

  data() {
    return {
      navHovered: false,
      navClick: false,
      imagesloaded: false,
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
    titleHovered: function () {
      return this.entries.name == this.$store.state.title;
    },
    showLanding: function () {
      return this.$store.state.landing;
    },
    onProjectpage() {
      return this.$route.params.index == this.entries.id;
    },
  },

  methods: {
    setTitle(title) {
      this.navHovered = true;
      this.$store.commit("titleHovered", title);
    },

    removeTitle() {
      this.navHovered = false;
      this.$store.commit("titleLeave");
    },
    resetClick() {
      setTimeout(() => {
        this.navClick = false;
      }, 1200);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/_typography.scss";

.name {
  @include Canela-Thin;
  margin: 5px;
  transition: opacity 1s;
  width: 100%;
}

.project-link {
  color: black;
  text-decoration: none;
}

.medium {
  @include Canela-ThinItalic;
}

.blink-hover {
  opacity: 0.5;
  transition: opacity 0.25s;
}

.blink {
  // filter: blur(2px);
  animation: blink 3s;
  //transition: opacity 1s;
  animation-iteration-count: infinite;
}

@keyframes blink {
  50% {
    opacity: 0.5;
  }
}

.select {
  opacity: 0;
}

.selectOn {
  opacity: 1;
}

.dot {
  padding-right: 10px;
}

// .slideIn-navigation-enter-active,
// .slideIn-navigation-leave-active {
//   transition: opacity 1s ease-in-out, transform 1s ease-in-out;
// }
// .slideIn-navigation-enter,
// .slideIn-navigation-leave-to {
//   opacity: 0;
//   transform: translate3d(0, 15px, 0);
// }

@media screen and (max-width: 768px) {
  .dot {
    padding: 0;
  }
}
</style>
