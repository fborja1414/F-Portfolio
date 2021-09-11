<template>
  <nuxt-link to="/">
    <div class="page-container-about">
      <div class="about-copy">
        Francisco is a designer developer based in San Francisco, California. In
        2020 he graduated with a degree in cognitive science from University of
        California, Los Angeles. He loves developing creative websites and
        honing his design perspective. In his free time he enjoys fashion,
        k-drama, and eating good ramen.
      </div>
      <!-- <div class="contact-list">
      <a> email</a>
      <a>github </a>
      <a> twitter</a>
    </div> -->
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
@import "~assets/_typography.scss";

.page-container-about {
}

.contact-container {
  display: flex;
  @include Canela-Thin;
  grid-row: 1;
  grid-column: 10/11;
  font-size: 2.5vw;
  height: 8rem;
  //align-content: center;
  position: sticky;
  top: 1.5rem;
  z-index: 5;
}

.about-copy {
  padding-top: 5vh;
  @include IBM-Plex-Mono;
  width: 90vw;
  margin: 0 auto;
  display: block;
  font-size: 1vw;
  text-indent: 15%;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .about-copy {
    font-size: 5vw;
  }
}
</style>
