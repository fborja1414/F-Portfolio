<template>
  <div class="main">
    <div class="header-container">
      <nuxt-link class="nuxt-link-active" to="/">
        <a class="header">
          Francisco Borja
          <a class="subheader">designer and developer</a>
        </a>
        <!-- <a class="index">index</a> -->
      </nuxt-link>

      <a class="about"
        ><nuxt-link class="nuxt-link-active" to="/about">about</nuxt-link>
      </a>
    </div>

    <Nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    // openLanding() {
    //   console.log("inabout");
    //   this.$store.commit("toggleLanding", true);
    // },
  },
};
</script>


<style lang="scss">
@import "~assets/_typography.scss";

.main {
  width: calc(100% - 40px);
  margin: 0rem 1rem 1rem 1rem;
  // max-width: 1460px;
}
html {
  font-family: "Times New Roman", Times, serif Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.header-container {
  display: flex;
  @include Canela-Thin;
  width: 100%;
  font-size: 3vw;
  height: 10vh;
  //align-content: center;
  position: relative;
  top: 1.5rem;
  z-index: 5;
  margin: 0;
}

.header {
  width: 100%;
}

// .blink-hover {
//   opacity: 0.5;
//   transition: opacity 10s;
//   filter: blur(1px);
// }

.subheader {
  @include Canela-ThinItalic;
  font-style: italic;
  //   filter: blur(2px);
}

.index {
  @include Canela-Thin;
}

.nuxt-link-active {
  width: 100%;
  color: black;
  text-decoration: none;
}

.about {
  width: 100%;
  cursor: pointer;
  justify-content: flex-end;
  text-align: right;
  align-items: flex-end;
  //margin-left: 3vw;
  color: black;
  text-decoration: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;

  //background: black;
  //color: white;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

@media screen and (max-width: 768px) {
  .header,
  .about {
    font-size: 5vw;
    grid-column: 1/9;
    width: 30vw;
  }
}
</style>
