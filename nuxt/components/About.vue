<template>
  <div>
    <div class="about" v-if="inHome">
      Francisco is a designer developer based in San Francisco, California. In
      2020 he graduated with a degree in cognitive science from University of
      California, Los Angeles. He loves developing creative websites and honing
      his design perspective. In his free time he enjoys fashion, k-drama, and
      eating good ramen.
    </div>
  </div>
</template>

<script>
export default {
  name: "About",

  computed: {
    inHome: function () {
      return this.$route.params.index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/_typography.scss";
.about-copy {
  padding-top: 5vh;
  @include Canela-Thin;
  grid-column: 2/10;
  display: block;
  font-size: 2.5vw;
  text-indent: 15%;
}
</style>