<template>
  <div
    class="nav-items"
    :key="index"
    @mouseenter="selectOn"
    @mouseleave="selectOff"
    v-on:click="
      $emit('clicked', index);
      navClick = true;
      resetClick();
    "
  >
    <a :key="index" class="select" :class="{ selectOn: navHovered }"> > </a>
    <a> {{ entries.name }}</a>
    <a :key="index" class="medium" :class="{ blink: navClick }">
      {{ entries.medium }}</a
    >
    <div
      v-if="ExpandStatus"
      class="description-two"
      :class="{ 'description--Collapsed': !ExpandStatus }"
    >
      extra info
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem",

  props: {
    index: Number,
    entries: Object,
  },

  computed: {
    name: function () {
      return this.entries.name;
    },
  },

  methods: {
    selectOn() {
      this.navHovered = true;
      console.log("in");
    },

    selectOff() {
      this.navHovered = false;
      console.log("out");
    },

    resetClick() {
      setTimeout(() => {
        this.navClick = false;
      }, 1200);
    },
  },

  data() {
    return {
      navClick: false,
      navHovered: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-items {
  position: relative;
  //margin-bottom: 10px;
  border-bottom: solid 1px black;
}

.blink {
  animation: blink 1s 2;
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

.description-two {
  height: auto;
  max-height: 100%;
  opacity: 1;
  transition: max-height 10s ease-in-out;
  transition: opacity 5 ease-in-out;
  // margin: 10rem 0;
}

.description--collapsed {
  max-height: 0;
  opacity: 0;
  transition: max-height 10s ease-out;
}

// .nav-container:hover {

// //   .image-container {
// //     opacity: 1;
// //   }
// }
</style>