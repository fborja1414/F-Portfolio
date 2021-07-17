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

// .nav-container:hover {

// //   .image-container {
// //     opacity: 1;
// //   }
// }
</style>