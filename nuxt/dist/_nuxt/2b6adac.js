(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{244:function(t,e,n){var content=n(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("28f1127f",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n(244)},258:function(t,e,n){var o=n(82),r=n(113),l=n(114),c=n(115),f=n(116),h=o(!1),d=r(l),m=r(c),v=r(f);h.push([t.i,'.elliot{grid-column:4/10}.graphics{grid-column:1/5}.conne,.typography,.uganda,.zine{grid-column:4/10}@media screen and (max-width:768px){.elliot{grid-column:1/13}.graphics{grid-column:1/5}.conne,.typography,.uganda,.zine{grid-column:1/13}}@font-face{font-family:"Canela-Thin";src:local("Canela-Thin"),url('+d+') format("truetype")}@font-face{font-family:"Canela-ThinItalic";src:local("Canela-ThinItalic"),url('+m+') format("truetype")}@font-face{font-family:"Canela-Light";src:local("Canela-Light"),url('+v+') format("truetype")}.header-container{font-family:Canela-Thin,serif;font-style:normal;grid-row:1;grid-column:1/7;font-size:2.5vw;height:10vh;align-content:center;position:relative;top:1.5rem;z-index:5}.project-titles{justify-content:center;align-items:center;align-content:center;margin-top:15vh;text-align:center;cursor:pointer}.name{font-family:Canela-Thin,serif;font-style:normal;margin-right:10px}.next{right:1rem}.next,.prev{font-family:"IBM Plex Mono",monospace;position:absolute;bottom:1rem;font-size:12px;cursor:pointer}.medium,.subheader{font-family:Canela-ThinItalic,serif;font-style:Italic}.subheader{font-style:italic}.contact-container{display:flex;font-family:Canela-Thin,serif;font-style:normal;grid-row:1;grid-column:10/11;font-size:2.5vw;height:8vh;position:relative;top:1.5rem;z-index:5}.about{cursor:pointer;margin-left:3vw}.about,.nuxt-link-active{color:#000;text-decoration:none}.scroll-description{margin-top:10rem;align-content:center;font-style:italic}.slide{opacity:0}.slideIn{transition:opacity 3s ease-in-out,transform 2s ease-in-out}.page-container{display:grid;grid-template-columns:repeat(10,1fr);grid-auto-rows:auto;overflow:hidden}.contact{font-family:"IBM Plex Mono",monospace;font-size:.8vw;bottom:5vh;margin:0 auto;display:flex;width:10vw;align-content:center;align-items:center;justify-content:space-between;padding-top:25vh}.contact a{padding:5px}.nav-section{width:35vw;position:fixed;height:90vh;font-size:25px;padding:1rem;right:1rem;top:1.5rem;margin:none 1rem 1rem;overflow:hidden}.section{grid-column:3/8}.back{bottom:1rem}.back,.socials{position:fixed;font-size:18px}.socials{line-height:2;margin-top:1rem;font-style:italic;height:auto;color:#00f;z-index:5}.socials a{pointer-events:auto;display:block}.blink-hover{opacity:.5;transition:opacity .25}.select{position:absolute;left:-2vw;opacity:0}.blink{-webkit-animation:blink 1s 2;animation:blink 1s 2}@-webkit-keyframes blink{50%{opacity:0}}@keyframes blink{50%{opacity:0}}.image-container{width:100vw;height:100vh;position:absolute;opacity:0;height:auto;z-index:-1;filter:invert(80%)}.nav-container{cursor:pointer}.page-enter-active,.page-leave-active{transition:opacity .25s ease-in}.page-enter,.page-leave-to{opacity:0}@media screen and (max-width:768px){.navigation{font-size:6vw}.header-container{font-size:4vw;grid-column:1/9}}',""]),t.exports=h},270:function(t,e,n){"use strict";n.r(e);var o=n(7),r=(n(47),n(85),n(34),{components:{Landing:n(233).default},data:function(){return{show:!1,scroll:!0,sectionDescription:" ",showSection:!0,slideToggle:!1,showAbout:!1,navHovered:!1}},methods:{scrollSectionIntoView:function(t){var e=this;setTimeout((function(){var n=e.$refs.entry[t].$el.getBoundingClientRect().top+document.documentElement.scrollTop,o=e.$refs.entry[t].$el.offsetHeight,r=window.innerHeight,l=n-Math.abs((r-o)/2);window.scrollTo({top:l,behavior:"smooth"})}),1e3)},resetClick:function(){var t=this;setTimeout((function(){t.navClick=!1}),1200)},selectOn:function(){this.navHovered=!0},selectOff:function(){this.navHovered=!1},setDescription:function(t){for(var e=0;e<=this.$refs.entry.length;e++)this.$refs.entry[e].$el.getBoundingClientRect().top>=0&&window.innerHeight>=this.$refs.entry[e].$el.getBoundingClientRect().bottom-this.$refs.entry[e].$el.offsetHeight||this.$refs.entry[e].$el.getBoundingClientRect().bottom>=0&&window.innerHeight>=this.$refs.entry[e].$el.getBoundingClientRect().bottom-this.$refs.entry[e].$el.offsetHeight?(console.log(window.scrollY,"scrolltop"+this.$refs.entry[e].$el.getBoundingClientRect().top,"scrollbottom"+this.$refs.entry[e].$el.getBoundingClientRect().bottom),this.slideToggle=!0,this.$store.commit("setFocus",this.$refs.entry[e].entry.name),console.log(this.$refs.entry[e].entry.name)):window.scrollY<=this.$refs.entry[0].$el.getBoundingClientRect().top&&(this.slideToggle=!1)},toggleAbout:function(){this.showAbout?this.showAbout=!1:this.showAbout=!0},scrollUp:function(){console.log("inside")},hoveredNav:function(){this.navHovered=!0,console.log("ha")}},computed:{showLanding:function(){return this.$store.state.landing}},beforeMount:function(){window.addEventListener("scroll",this.setDescription)},beforeDestroy:function(){window.removeEventListener("scroll",this.setDescription)},mounted:function(){var t=this;this.$nextTick((function(){return t.show=!0}))},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://agile-peak-21162.herokuapp.com/projects");case 3:return o=e.sent,console.log({projects:o}),e.abrupt("return",{projects:o});case 6:case"end":return e.stop()}}),e)})))()}}),l=(n(257),n(58)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"page-container"},[n("transition",{attrs:{name:"page"}},[n("landing",{attrs:{projects:t.projects,slideToggle:t.slideToggle}})],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Landing:n(233).default})}}]);