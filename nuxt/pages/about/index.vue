<template>
  <div>
    <div class="about">
      Francisco is a designer developer based in San Francisco, California. In
      2020 he graduated with a degree in cognitive science from University of
      California, Los Angeles. He loves developing creative websites and honing
      his design perspective. In his free time he enjoys fashion, k-drama, and
      eating good ramen.
    </div>
    <div class="contact-list">
      <a> email</a>
      <a>github </a>
      <a> twitter</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
@import "~assets/_typography.scss";

.about {
  @include Canela-Thin;
  grid-column: 2/9;
  display: block;
}

contact-list .page-enter-active,
.page-leave-active {
  transition: opacity 3s ease-in-out, transform 3s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>