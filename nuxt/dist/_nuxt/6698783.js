(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{247:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("4c2d59ca",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";n(247)},267:function(t,e,n){var o=n(82),r=n(113),c=n(114),l=n(115),d=n(116),m=o(!1),h=r(c),f=r(l),v=r(d);m.push([t.i,'.elliot{grid-column:4/10}.graphics{grid-column:1/5}.conne,.typography,.uganda,.zine{grid-column:4/10}@media screen and (max-width:768px){.elliot{grid-column:1/13}.graphics{grid-column:1/5}.conne,.typography,.uganda,.zine{grid-column:1/13}}@font-face{font-family:"Canela-Thin";src:local("Canela-Thin"),url('+h+') format("truetype")}@font-face{font-family:"Canela-ThinItalic";src:local("Canela-ThinItalic"),url('+f+') format("truetype")}@font-face{font-family:"Canela-Light";src:local("Canela-Light"),url('+v+') format("truetype")}.pages-container{top:10vh;height:calc(100vh - 5rem);width:100vh;margin:0;z-index:-1;align-items:center}.pagination,.title{font-family:"IBM Plex Mono",monospace;font-size:1vw}.pagination{margin:0 auto}.nuxt-link-active{color:#000;text-decoration:none}.description,.title{pointer-events:auto;z-index:5}.description-container{position:relative;font-family:"IBM Plex Mono",monospace;font-style:italic;font-size:1vw;margin-bottom:1vh;margin-top:10vh}.image-cont{width:50vw;margin:0 auto}.image-cont img,.image-cont video{height:100%;width:100%;margin-top:5vh}.description{bottom:5vh;pointer-events:auto;z-index:5;opacity:.7;text-align:left}.grid-container{padding-top:5vh;width:50vw;display:grid;grid-template-columns:10vw 40vw;margin:0 auto}.description2{margin-top:5vh;pointer-events:auto;z-index:5;margin-bottom:10vh;opacity:1}.pagination{width:100%;align-content:center;text-align:center}.hide-text{opacity:0;position:sticky;top:10vh}.scroll{display:flex;z-index:5;overflow-x:scroll;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.page-enter-active,.page-leave-active{transition:opacity .25s ease-in-out;transition:opacity .2s ease-in}.page-enter,.page-leave-to{opacity:0}.desc-enter-active,.desc-leave-active{transition:opacity .2s ease-in-out}.desc-enter,.desc-leave-to{opacity:0;transform:translate3d(0,15px,0)}@media screen and (max-width:800px){.description-container{margin:10vh auto 0;width:80vw}.description-container .description,.description-container .title{width:auto;font-size:2.5vw;text-align:left}.grid-container{width:80vw;grid-template-columns:20vw 60vw}.image-cont{width:80vw;margin:0 auto}img,video{width:100%}}',""]),t.exports=m},279:function(t,e,n){"use strict";n.r(e);n(38),n(40),n(41);var o=n(7);n(34),n(27),n(37),n(11),n(23),n(28),n(62),n(47);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){d=!0,r=t},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw r}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={props:{landing:Boolean},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,n=t.$axios,o=t.route,e.next=3,n.$get("https://agile-peak-21162.herokuapp.com/projects/".concat(o.params.index));case 3:return r=e.sent,c=o.params.index,console.log(c),e.abrupt("return",{projects:r});case 7:case"end":return e.stop()}}),e)})))()},computed:{nextpage:function(){return 6==this.projects.id?this.projects.id-5:this.projects.id+1},prevpage:function(){return 1==this.projects.id?this.projects.id+5:this.projects.id-1},images:function(){return this.projects.images},name:function(){return this.projects.name},description:function(){return this.projects.description},description2:function(){return this.projects.description2},videoBoolean:function(){return this.projects.videoboolean}},data:function(){return{show:!1,imagesloaded:!1,pageNum:1}},mounted:function(){this.show=!0,this.imagesloaded||(this.loadImages(),console.log(this.$refs.image))},methods:{onLandingPage:function(){this.$route.params.nav&&this.$store.commit("toggleLanding",!1),console.log("untogglelanding")},displayPagination:function(){console.log("scrolled"),console.log("".concat(this.$refs.image));for(var t=0;t<this.images.length;t++)(this.$refs.image[t].getBoundingClientRect().left>=0&&this.$refs.container.offsetWidth/2>=this.$refs.image[t].getBoundingClientRect().right-this.$refs.image[t].offsetWidth||this.$refs.image[t].getBoundingClientRect().right>=0&&this.$refs.container.offsetWidth/2>=this.$refs.image[t].getBoundingClientRect().right-this.$refs.image[t].offsetWidth)&&(console.log(this.$refs.image[t]),this.pageNum=t+1)},loadImages:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,image,img;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("".concat(t.imagesloaded)),n=performance.now(),o=[],c=r(t.images);try{for(c.s();!(l=c.n()).done;)image=l.value,(img=new Image).src=image,img.onload&&o.push(image)}catch(t){c.e(t)}finally{c.f()}return e.next=7,Promise.all(o).then((function(){t.imagesloaded=!0;var e=performance.now();console.log("".concat(t.projects.name," - Loaded section.vue ").concat(t.projects.images.length," images in ").concat(Math.round(e-n),"ms.")),console.log("".concat(t.imagesloaded)),console.log("".concat(t.videoBoolean))}));case 7:case"end":return e.stop()}}),e)})))()}}},d=(n(266),n(58)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show&&t.imagesloaded?n("div",{staticClass:"pages-container",class:{"page-enter-active":t.show,"page-leave-active":t.show,"page-enter":!t.show,"page-leave-to":!t.show}},[n("div",{staticClass:"description-container",class:{"desc-enter-active":t.show,"desc-leave-active":t.show,"desc-enter":!t.show,"desc-leave-to":!t.show}},[t.videoBoolean?n("div",{staticClass:"image-cont"},[n("a",{staticClass:"pagination",class:{"hide-text":t.landing}},[t._v("\n        "+t._s(t.projects.id)+" / 6\n      ")]),t._v(" "),t._l(t.images,(function(image,t){return n("video",{key:t,attrs:{src:image.url.split("/uploads/").join("https://agile-peak-21162.herokuapp.com/uploads/"),autoplay:"",loop:""}})}))],2):n("div",{staticClass:"image-cont"},[n("a",{staticClass:"pagination",class:{"hide-text":t.landing}},[t._v("\n        "+t._s(t.projects.id)+" / 6\n      ")]),t._v(" "),t._l(t.images,(function(image,t){return n("img",{key:t,attrs:{src:image.url.split("/uploads/").join("https://agile-peak-21162.herokuapp.com/uploads/")}})}))],2),t._v(" "),n("div",{staticClass:"grid-container"},[n("div",{staticClass:"title",class:{"hide-text":t.landing}},[t._v("\n        "+t._s(t.name)+"\n      ")]),t._v(" "),n("div",{staticClass:"description",class:{"hide-text":t.landing},domProps:{innerHTML:t._s(t.description)}})]),t._v(" "),n("div",{staticClass:"description2",class:{"hide-text":t.landing},domProps:{innerHTML:t._s(t.description2)}})])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);