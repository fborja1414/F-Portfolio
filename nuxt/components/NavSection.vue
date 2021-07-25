<template>
  <div
    class="nav-items-section"
    v-on:click="
      $emit('clicked', index);
      navClick = true;
      resetClick();
    "
    @mouseenter="selectOn"
    @mouseleave="selectOff"
  >
    <a class="name"> {{ entry.name }} |</a>
    <a class="medium" :class="{ blink: navClick }"> {{ entry.medium }}</a>
  </div>
</template> 

<script>
export default {
  name: "NavSection",
  props: {
    entry: Object,
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
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/_typography.scss";

.name {
  @include Canela-Light;
}

.medium {
  @include Canela-ThinItalic;
}
img {
  width: 100%;
}

.nav-item-section {
}
</style>
