<template>
  <a
    class="name"
    :class="{ 'blink-hover': navHovered, blink: navClick }"
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
    {{ entries.name }} |
    <a class="medium"> {{ entries.medium }}</a>
  </a>
</template>

<script>
export default {
  name: "TitleItem",

  props: {
    index: Number,
    entries: Object,
    slideToggle: Boolean
  },

  data() {
    return {
      navHovered: false,
      navClick: false,
      imagesloaded: false
    };
  },
  computed: {
    name: function() {
      return this.entries.name;
    },
    images: function() {
      return this.entries.images;
    },
    position: function() {
      return this.entries.position;
    },
    description: function() {
      return this.entries.description;
    },
    titleHovered: function() {
      return this.entries.name == this.$store.state.title;
    }
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/_typography.scss";

.name {
  @include Canela-Thin;
  margin: 10px;
  transition: opacity 1s;
}

.medium {
  @include Canela-ThinItalic;
}

.blink-hover {
  opacity: 0.5;
  transition: opacity 0.5;
}

.blink {
  animation: blink 1s;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.select {
  opacity: 0;
}

.selectOn {
  opacity: 1;
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
@media screen and (max-width: 768px) {
  .section-container {
    grid-column: 3/10;
  }
}
</style>
