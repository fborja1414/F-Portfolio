<template>
  <div
    class="nav-items-section"
    v-on:click="
      $emit('clicked', index);
      navClick = true;
      resetClick();
    "
  >
    <a class="name"> {{ entry.name }} |</a>
    <a class="medium" :class="{ blink: navClick }"> {{ entry.medium }}</a>

    <a
      class="description"
      :class="{ focusExpanded: focusExpanded }"
      v-html="entry.description"
    >
    </a>
  </div>
</template>

<script>
export default {
  name: "NavSection",
  props: {
    slideToggle: Boolean,
    entry: Object,
    index: Number,
  },
  data() {
    return {
      navClick: false,
    };
  },
  methods: {
    resetClick() {
      setTimeout(() => {
        this.navClick = false;
      }, 1200);
    },
  },

  computed: {
    images: function () {
      return this.entry.images;
    },
    position: function () {
      return this.entry.position;
    },
    description: function () {
      return this.entry.description;
    },
    focusExpanded() {
      return this.entry.name == this.$store.state.focus;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/_typography.scss";

.name {
  @include Canela-Light;
  // font-size: 1.7vw;
}

.medium {
  @include Canela-ThinItalic;
  // font-size: 1.7vw;
}
img {
  width: 100%;
}

.nav-item-section {
}

.description {
  //padding: 1rem;
  display: block;

  @include Canela-Thin;
  font-size: 25px;
  // font-size: 1.7vw;

  width: 35vw;
  text-align: end;
  justify-content: flex-end;
  max-height: 0;
  opacity: 0;

  // transition: max-height 1s ease-out;
  //opacity: 0;
  //transform: translate3d(0, 15px, 0);

  * {
    display: none !important;
  }
}

.focusExpanded {
  height: auto;
  margin-bottom: 5rem;
  padding: 1.5rem;
  max-height: 100%;
  opacity: 1;
  // transition: max-height 1s ease-in;
  //transition: opacity 0.2 ease-in-out;
}
</style>
