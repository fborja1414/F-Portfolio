(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{247:function(e,t,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(83).default)("4c2d59ca",content,!0,{sourceMap:!1})},261:function(e,t,n){"use strict";n(247)},262:function(e,t,n){var o=n(82),r=n(113),c=n(114),l=n(115),d=n(116),f=o(!1),m=r(c),h=r(l),v=r(d);f.push([e.i,'.elliot{grid-column:4/10}.graphics{grid-column:1/5}.conne,.typography,.uganda,.zine{grid-column:4/10}@media screen and (max-width:768px){.elliot{grid-column:1/13}.graphics{grid-column:1/5}.conne,.typography,.uganda,.zine{grid-column:1/13}}@font-face{font-family:"Canela-Thin";src:local("Canela-Thin"),url('+m+') format("truetype")}@font-face{font-family:"Canela-ThinItalic";src:local("Canela-ThinItalic"),url('+h+') format("truetype")}@font-face{font-family:"Canela-Light";src:local("Canela-Light"),url('+v+') format("truetype")}.pages-container{position:absolute;top:10vh;height:calc(100vh - 5rem);width:100%;margin:0;z-index:-1;align-items:center}.title{font-family:"IBM Plex Mono",monospace;font-style:italic;font-size:1vw;padding-bottom:1rem}.nuxt-link-active{color:#000;text-decoration:none}.description,.title{margin:0 auto;text-align:center;pointer-events:auto;z-index:5}.description-container{position:relative;font-family:"IBM Plex Mono",monospace;font-style:italic;font-size:1vw;grid-row:2;grid-column:4/10;pointer-events:none;margin-bottom:1vh;margin-top:5vh}.image-cont{width:50vw;margin:0 auto;overflow-x:scroll}.image-cont img{height:100%;width:100%;margin-top:8vh}.pagination{width:100%;align-content:center;text-align:center}.scroll{display:flex;z-index:5;overflow-x:scroll;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.page-enter-active,.page-leave-active{transition:opacity .25s ease-in-out;transition:opacity .2s ease-in-out,transform .25s ease-in-out}.page-enter,.page-leave-to{opacity:0}.desc-enter-active,.desc-leave-active{transition:opacity .2s ease-in-out,transform .25s ease-in-out}.desc-enter,.desc-leave-to{opacity:0;transform:translate3d(0,15px,0)}@media screen and (max-width:768px){.description-container{margin-top:10vh;font-size:2vw;width:90vw}.description-container .title{font-size:2vw}.image-cont{width:90vw;margin:0 auto}img{width:100%}}',""]),e.exports=f},274:function(e,t,n){"use strict";n.r(t);n(38),n(40),n(41);var o=n(7);n(34),n(27),n(37),n(11),n(23),n(28),n(62),n(47);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){d=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw r}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var l={asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,n=e.$axios,o=e.route,t.next=3,n.$get("https://agile-peak-21162.herokuapp.com/projects/".concat(o.params.index));case 3:return r=t.sent,c=o.params.index,console.log(c),t.abrupt("return",{projects:r});case 7:case"end":return t.stop()}}),t)})))()},computed:{images:function(){return this.projects.images},name:function(){return this.projects.name},description:function(){return this.projects.description}},data:function(){return{show:!1,imagesloaded:!1,pageNum:1}},mounted:function(){this.show=!0},methods:{onLandingPage:function(){this.$route.params.nav&&this.$store.commit("toggleLanding",!1),console.log("untogglelanding")},displayPagination:function(){console.log("scrolled"),console.log("".concat(this.$refs.image));for(var e=0;e<this.images.length;e++)(this.$refs.image[e].getBoundingClientRect().left>=0&&this.$refs.container.offsetWidth/2>=this.$refs.image[e].getBoundingClientRect().right-this.$refs.image[e].offsetWidth||this.$refs.image[e].getBoundingClientRect().right>=0&&this.$refs.container.offsetWidth/2>=this.$refs.image[e].getBoundingClientRect().right-this.$refs.image[e].offsetWidth)&&(console.log(this.$refs.image[e]),this.pageNum=e+1)},loadImages:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,c,l,image;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("".concat(e.imagesloaded)),n=performance.now(),o=[],c=r(e.projects.images);try{for(c.s();!(l=c.n()).done;)image=l.value,o.push(image)}catch(e){c.e(e)}finally{c.f()}return t.next=7,Promise.all(o).then((function(){e.imagesloaded=!0;var t=performance.now();console.log("".concat(e.projects.name," - Loaded section.vue ").concat(e.projects.images.length," images in ").concat(Math.round(t-n),"ms.")),console.log("".concat(e.imagesloaded)),console.log("".concat(e.entry.video))}));case 7:case"end":return t.stop()}}),t)})))()}}},d=(n(261),n(58)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"pages-container",class:{"page-enter-active":e.show,"page-leave-active":e.show,"page-enter":!e.show,"page-leave-to":!e.show}},[n("div",{staticClass:"description-container",class:{"desc-enter-active":e.show,"desc-leave-active":e.show,"desc-enter":!e.show,"desc-leave-to":!e.show}},[n("div",{staticClass:"title"},[e._v(e._s(e.name))]),e._v(" "),n("div",{staticClass:"description",domProps:{innerHTML:e._s(e.description)}})]),e._v(" "),n("div",{staticClass:"image-cont"},e._l(e.images,(function(image,e){return n("img",{key:e,attrs:{src:image.url.split("/uploads/").join("https://agile-peak-21162.herokuapp.com/uploads/")}})})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);