(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{231:function(t,e,n){"use strict";var r=n(8),o=n(4),c=n(85),l=n(14),d=n(10),f=n(40),m=n(168),v=n(62),h=n(5),y=n(64),w=n(63).f,I=n(28).f,_=n(13).f,x=n(232).trim,C="Number",N=o.Number,A=N.prototype,E=f(y(A))==C,k=function(t){var e,n,r,o,c,l,d,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=x(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c(C,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var T,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(E?h((function(){A.valueOf.call(n)})):f(n)!=C)?m(new N(k(e)),n,S):k(e)},j=r?w(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),L=0;j.length>L;L++)d(N,T=j[L])&&!d(S,T)&&_(S,T,I(N,T));S.prototype=A,A.constructor=S,l(o,C,S)}},232:function(t,e,n){var r=n(17),o="["+n(233)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},233:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},234:function(t,e,n){var content=n(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("2c5e4e0c",content,!0,{sourceMap:!1})},237:function(t,e,n){"use strict";n(234)},238:function(t,e,n){var r=n(59),o=n(164),c=n(165),l=n(166),d=n(167),f=r(!1),m=o(c),v=o(l),h=o(d);f.push([t.i,'.elliot[data-v-639c43b4]{grid-column:4/10}.graphics[data-v-639c43b4]{grid-column:1/5}.conne[data-v-639c43b4],.typography[data-v-639c43b4],.uganda[data-v-639c43b4],.zine[data-v-639c43b4]{grid-column:4/10}@font-face{font-family:"Canela-Thin";src:local("Canela-Thin"),url('+m+') format("truetype")}@font-face{font-family:"Canela-ThinItalic";src:local("Canela-ThinItalic"),url('+v+') format("truetype")}@font-face{font-family:"Canela-Light";src:local("Canela-Light"),url('+h+') format("truetype")}.title[data-v-639c43b4]{font-style:italic;height:5rem}.scroll[data-v-639c43b4]{display:flex;z-index:5;overflow-x:scroll;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.description[data-v-639c43b4]{justify-content:space-between}.mobile-description[data-v-639c43b4]{font-family:Canela-Thin,serif;margin-top:1rem}.mobile-description[data-v-639c43b4],.title[data-v-639c43b4]{font-style:normal;font-size:20px}.title[data-v-639c43b4]{font-family:Canela-Light,serif;opacity:1}img[data-v-639c43b4]{width:100%;margin:0 0 1rem}.swipe[data-v-639c43b4]{text-align:right}.vid-size[data-v-639c43b4]{width:100%;margin:0 0 1rem}.section-container[data-v-639c43b4]{grid-column:1/7;margin:0 0 15rem;z-index:2;overflow-x:scroll}.section-container:hover .swipe[data-v-639c43b4]{font-style:bold}.slideIn-navigation-enter-active[data-v-639c43b4],.slideIn-navigation-leave-active[data-v-639c43b4]{transition:opacity 1s ease-in-out,transform 1s ease-in-out}.slideIn-navigation-enter[data-v-639c43b4],.slideIn-navigation-leave-to[data-v-639c43b4]{opacity:0;transform:translate3d(0,15px,0)}@media screen and (max-width:768px){.section-container[data-v-639c43b4]{grid-column:1/11;margin:0 0 8rem;overflow-y:hidden}.swipe[data-v-639c43b4]{opacity:0}}@media screen and (min-width:768px){.mobile-description[data-v-639c43b4],.title[data-v-639c43b4]{opacity:0}}',""]),t.exports=f},243:function(t,e,n){"use strict";n.r(e);n(39),n(41),n(42);var r=n(7);n(48),n(231),n(11),n(23),n(29),n(65),n(34),n(27),n(38);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){d=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={name:"Section",props:{entry:Object,index:Number,slideToggle:Boolean},data:function(){return{imagesloaded:!1}},methods:{loadImages:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,image;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("".concat(t.imagesloaded)),n=performance.now(),r=[],c=o(t.entry.images);try{for(c.s();!(l=c.n()).done;)image=l.value,r.push(image)}catch(t){c.e(t)}finally{c.f()}return e.next=7,Promise.all(r).then((function(){t.imagesloaded=!0;var e=performance.now();console.log("".concat(t.entry.name," - Loaded section.vue ").concat(t.entry.images.length," images in ").concat(Math.round(e-n),"ms.")),console.log("".concat(t.imagesloaded)),console.log("".concat(t.entry.video))}));case 7:case"end":return e.stop()}}),e)})))()}},computed:{images:function(){return this.entry.images},position:function(){return this.entry.position},description:function(){return this.entry.description},video:function(){return this.entry.video}},mounted:function(){this.imagesLoaded||this.loadImages()}},d=(n(237),n(37)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.imagesloaded?n("div",{staticClass:"section-container"},[t.video.length>1?n("div",{staticClass:"scroll"},t._l(t.video,(function(t,e){return n("video",{key:e,staticClass:"vid-size",attrs:{src:t.url.split("/uploads/").join("https://agile-peak-21162.herokuapp.com/uploads/"),autoplay:"",loop:""}})})),0):t._e(),t._v(" "),t.images.length>1?n("div",{staticClass:"scroll"},t._l(t.images,(function(image,t){return n("img",{key:t,attrs:{src:image.url.split("/uploads/").join("https://agile-peak-21162.herokuapp.com/uploads/")}})})),0):n("div",t._l(t.images,(function(image,t){return n("img",{key:t,attrs:{src:image.url.split("/uploads/").join("https://agile-peak-21162.herokuapp.com/uploads/")}})})),0),t._v(" "),n("div",{staticClass:"description"},[n("a",{staticClass:"title"},[t._v(t._s(t.entry.name))]),t._v(" "),t.images.length>1?n("a",{staticClass:"swipe"},[t._v("swipe >> ")]):t._e(),t._v(" "),n("div",{staticClass:"mobile-description",domProps:{innerHTML:t._s(t.description)}})])]):t._e()}),[],!1,null,"639c43b4",null);e.default=component.exports}}]);