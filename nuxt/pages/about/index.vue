<template>
  <div class="page-container-about">
    <div class="about-copy">
      Francisco is a designer developer based in San Francisco, California. In
      2020 he graduated with a degree in cognitive science from University of
      California, Los Angeles. He loves developing creative websites and honing
      his design perspective. In his free time he enjoys fashion, k-drama, and
      eating good ramen.
    </div>
    <!-- <div class="contact-list">
      <a> email</a>
      <a>github </a>
      <a> twitter</a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
@import "~assets/_typography.scss";

.page-container-about {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  // grid-template-rows: repeat(7, 40vh);
  grid-auto-rows: auto;
  grid-gap: 20px;
  //pointer-events: none;
  //margin: 10rem auto;
  overflow: hidden;
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
  @include Canela-Thin;
  grid-column: 2/10;
  display: block;
  font-size: 2.5vw;
  text-indent: 15%;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease-in-out, transform 0.25s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}

@media screen and (max-width: 768px) {
  .about-copy {
    font-size: 5vw;
  }
}
</style>
