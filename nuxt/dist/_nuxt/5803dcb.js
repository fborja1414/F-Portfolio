(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{242:function(e,t,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(83).default)("4c7d0d1e",content,!0,{sourceMap:!1})},253:function(e,t,n){"use strict";n(242)},254:function(e,t,n){var o=n(82),c=n(113),d=n(114),r=n(115),l=n(116),v=o(!1),f=c(d),h=c(r),m=c(l);v.push([e.i,'.elliot[data-v-6cfe441d]{grid-column:4/10}.graphics[data-v-6cfe441d]{grid-column:1/5}.conne[data-v-6cfe441d],.typography[data-v-6cfe441d],.uganda[data-v-6cfe441d],.zine[data-v-6cfe441d]{grid-column:4/10}@media screen and (max-width:768px){.elliot[data-v-6cfe441d]{grid-column:1/13}.graphics[data-v-6cfe441d]{grid-column:1/5}.conne[data-v-6cfe441d],.typography[data-v-6cfe441d],.uganda[data-v-6cfe441d],.zine[data-v-6cfe441d]{grid-column:1/13}}@font-face{font-family:"Canela-Thin";src:local("Canela-Thin"),url('+f+') format("truetype")}@font-face{font-family:"Canela-ThinItalic";src:local("Canela-ThinItalic"),url('+h+') format("truetype")}@font-face{font-family:"Canela-Light";src:local("Canela-Light"),url('+m+') format("truetype")}.header-container[data-v-6cfe441d]{font-family:Canela-Thin,serif;font-style:normal;grid-row:1;grid-column:1/7;font-size:2.5vw;height:10vh;align-content:center;position:relative;top:1.5rem;z-index:5}.project[data-v-6cfe441d]{width:100%;z-index:-5}.nuxt-link-active[data-v-6cfe441d]{color:#000;text-decoration:none}.blink-hover[data-v-6cfe441d]{opacity:.5;transition:opacity .25}.select[data-v-6cfe441d]{position:absolute;left:-2vw;opacity:0}.blink[data-v-6cfe441d]{-webkit-animation:blink-data-v-6cfe441d 1s 2;animation:blink-data-v-6cfe441d 1s 2}@-webkit-keyframes blink-data-v-6cfe441d{50%{opacity:0}}@keyframes blink-data-v-6cfe441d{50%{opacity:0}}.image-container[data-v-6cfe441d]{width:100vw;height:100vh;position:absolute;opacity:0;height:auto;z-index:-1;filter:invert(80%)}.nav-container[data-v-6cfe441d]{cursor:pointer}.page-enter-active[data-v-6cfe441d],.page-leave-active[data-v-6cfe441d]{transition:opacity .25s ease-in-out}.page-enter[data-v-6cfe441d],.page-leave-to[data-v-6cfe441d]{opacity:.2;transition:opacity .25 ease-out;filter:blur(2px)}.nav-enter-active[data-v-6cfe441d],.nav-leave-active[data-v-6cfe441d]{transition:opacity 1s ease-in}.nav-enter[data-v-6cfe441d],.nav-leave-to[data-v-6cfe441d]{opacity:0}@media screen and (max-width:768px){.navigation[data-v-6cfe441d]{font-size:4vw}.header-container[data-v-6cfe441d]{font-size:4vw;grid-column:1/9}}',""]),e.exports=v},268:function(e,t,n){"use strict";n.r(t);var o=n(7),c=(n(47),n(85),{components:{Landing:n(233).default},data:function(){return{show:!1,landing:!0,scroll:!0,sectionDescription:" ",showSection:!0,slideToggle:!1,showAbout:!1,navHovered:!1}},methods:{showLanding:function(){var e=this;setTimeout((function(){e.landing?e.landing=!1:e.landing=!0,console.log("lanidng"+e.landing)}),1050)},selectOn:function(){this.navHovered=!0},selectOff:function(){this.navHovered=!1},toggleAbout:function(){this.showAbout?this.showAbout=!1:this.showAbout=!0},scrollUp:function(){console.log("inside")},hoveredNav:function(){this.navHovered=!0,console.log("ha")}},mounted:function(){var e=this;this.$nextTick((function(){return e.show=!0}))},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("https://agile-peak-21162.herokuapp.com/projects");case 3:return o=t.sent,console.log({projects:o}),t.abrupt("return",{projects:o});case 6:case"end":return t.stop()}}),t)})))()}}),d=(n(253),n(58)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",[n("transition",{attrs:{name:"page"}},[n("div",[n("nuxt-child",{key:e.$route.params.nav,staticClass:"project",class:{"page-enter-active":!e.landing,"page-leave-active":!e.landing,"page-enter":e.landing,"page-leave-to":e.landing},nativeOn:{click:function(t){return e.showLanding.apply(null,arguments)}}}),e._v(" "),n("landing",{class:{"nav-enter-active":e.landing,"nav-leave-active":e.landing,"nav-enter":!e.landing,"nav-leave-to":!e.landing},attrs:{projects:e.projects,slideToggle:e.slideToggle},on:{click:e.showLanding},nativeOn:{click:function(t){return e.showLanding.apply(null,arguments)}}})],1)])],1):e._e()}),[],!1,null,"6cfe441d",null);t.default=component.exports;installComponents(component,{Landing:n(233).default})}}]);