<template>
  <div
    class="name"
    v-on:click="
      $emit('clicked', index);
      navClick = true;
      resetClick();
      removeTitle();
    "
    :key="index"
  >
    <nuxt-link class="project-link" :to="'/' + entries.id">
      <a
        class="medium"
        @mouseenter="setTitle(entries.attributes.Name)"
        @mouseleave="removeTitle()"
        >{{ medium }}</a
      >
    </nuxt-link>
    <nuxt-link class="name-link" :to="'/' + entries.id">
      <a
        class="title"
        :class="{
          'blink-hover': navHovered
        }"
        @mouseenter="setTitle(entries.attributes.Name)"
        @mouseleave="removeTitle()"
      >
        {{ entries.attributes.Name }}
      </a>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "NavComponent",

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
      return this.entries.attributes.Name;
    },
    images: function() {
      return this.entries.attributes.Images.data[0];
    },
    position: function() {
      return this.entries.attributes.Position;
    },

    description: function() {
      return this.entries.attributes.Description;
    },
    titleHovered: function() {
      return this.entries.attributes.Name == this.$store.state.title;
    },
    showLanding: function() {
      return this.$store.state.landing;
    },
    medium: function() {
      if (this.entries.attributes.Medium != "") {
        return this.entries.attributes.Medium;
      }
      return;
    }
  },

  methods: {
    setTitle(title) {
      console.log("hoveredtrue");
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
  transition: opacity 1s;
  width: 100%;
  padding-right: 1em;
}

.project-link {
  color: black;
  text-decoration: none;
  text-align: right;
  cursor: auto;
}

.name-link {
  color: black;
  text-decoration: none;
  cursor: auto;
}

.medium {
  display: block;
  @include Canela-ThinItalic;
  font-size: 20px;
  cursor: pointer;
}

.title {
  display: block;
  cursor: pointer;
  text-align: right;
  padding: 1px;
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

@media screen and (max-width: 768px) {
  .dot {
    padding: 5px;
  }
}
</style>
