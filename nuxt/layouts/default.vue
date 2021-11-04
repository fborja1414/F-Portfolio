<template>
  <div class="main">
    <div class="header-container">
      <div>
        <a class="header">
          Francisco Borja
          <a class="subheader">designer and developer</a>
        </a>
      </div>

      <div class="contact">
        <a class="email" href="mailto:fborja1414@gmail.com">Email</a>
        <a class="github" href="fborja1414.github.io">Github</a>
        <a class="arena" href="https://www.are.na/francisco-borja">Are.na</a>
      </div>
    </div>

    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
@import "~assets/_typography.scss";

.main {
  width: 100%;
  height: 100vh;
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

.header {
  margin-left: 1rem;
  // width: 50%;
  opacity: 0.8;
}

.about {
  //width: 50%;
  position: fixed;
  right: 2vw;
  cursor: pointer;

  //text-align: right;
  //align-items: flex-end;
  //margin-left: 3vw;
  color: black;
  text-decoration: none;
}

.email,
.arena,
.github {
  color: black;
  text-decoration: none;
}

.contact {
  @include IBM-Plex-Mono;
  position: fixed;
  font-size: 14px;
  //bottom: 5vh;
  margin: 0 auto;
  display: block;
  //width: 20vw;
  right: 2vw;
  opacity: 0.7;

  a {
    cursor: pointer;
  }
}

.header-container {
  display: flex;
  @include IBM-Plex-Mono;
  //letter-spacing: 3px;
  //text-transform: uppercase;
  //width: calc(100vw - 3rem);
  font-size: 16px;
  //height: 10vh;
  //align-content: center;
  justify-content: space-between;
  position: fixed;
  opacity: 0.8;

  top: 1.5rem;
  z-index: 5;
  margin: 0;
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
    font-size: 2.5vw;
    margin-left: 1rem;
    width: 50vw;
  }

  .header-container {
    opacity: 0.8;
    //width: calc(100vw - 2rem);
  }

  .about {
    padding-top: 0.2rem;
    text-align: right;
    //right: 5.5vw;
  }
  .contact {
    font-size: 2vw;
    width: 40vw;
    margin-left: 0;
  }
}
</style>
