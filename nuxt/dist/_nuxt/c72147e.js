(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{228:function(t,e,n){"use strict";var r=n(8),o=n(4),c=n(84),l=n(14),f=n(10),d=n(39),m=n(167),h=n(59),v=n(5),y=n(61),I=n(60).f,w=n(29).f,N=n(13).f,k=n(229).trim,x="Number",A=o.Number,C=A.prototype,E=d(y(C))==x,T=function(t){var e,n,r,o,c,l,f,code,d=h(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=k(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c(x,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var _,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(E?v((function(){C.valueOf.call(n)})):d(n)!=x)?m(new A(T(e)),n,S):T(e)},O=r?I(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;O.length>M;M++)f(A,_=O[M])&&!f(S,_)&&N(S,_,w(A,_));S.prototype=C,C.constructor=S,l(o,x,S)}},229:function(t,e,n){var r=n(17),o="["+n(230)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},230:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},231:function(t,e,n){var content=n(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("5144822f",content,!0,{sourceMap:!1})},234:function(t,e,n){"use strict";n(231)},235:function(t,e,n){var r=n(82),o=n(113),c=n(114),l=n(115),f=n(116),d=r(!1),m=o(c),h=o(l),v=o(f);d.push([t.i,'@font-face{font-family:"Canela-Thin";src:local("Canela-Thin"),url('+m+') format("truetype")}@font-face{font-family:"Canela-ThinItalic";src:local("Canela-ThinItalic"),url('+h+') format("truetype")}@font-face{font-family:"Canela-Light";src:local("Canela-Light"),url('+v+') format("truetype")}.section-container[data-v-6bfd4cd8]{position:absolute;top:0;height:calc(100vh - 5rem);width:100%;margin:0;z-index:-1;opacity:0;align-items:center;transition:opacity 1s}.section-container--active[data-v-6bfd4cd8]{opacity:.8;transition:opacity 1s}.fulldisplay[data-v-6bfd4cd8]{width:50vw;margin:0 auto}.blink-hover[data-v-6bfd4cd8]{opacity:.5;transition:opacity .25}.fulldisplay-image[data-v-6bfd4cd8]{height:100%;width:100%;margin-top:8vh}.name[data-v-6bfd4cd8]{font-family:Canela-Thin,serif;font-style:normal}.medium[data-v-6bfd4cd8]{font-family:Canela-ThinItalic,serif;font-style:Italic}.blink[data-v-6bfd4cd8]{-webkit-animation:blink-data-v-6bfd4cd8 1s;animation:blink-data-v-6bfd4cd8 1s}@-webkit-keyframes blink-data-v-6bfd4cd8{50%{opacity:0}}@keyframes blink-data-v-6bfd4cd8{50%{opacity:0}}.select[data-v-6bfd4cd8]{opacity:0}.selectOn[data-v-6bfd4cd8]{opacity:1}.description-two[data-v-6bfd4cd8]{height:auto;max-height:100%;opacity:1;transition:max-height 10s ease-in-out;transition:opacity 5 ease-in-out}.description--collapsed[data-v-6bfd4cd8]{max-height:0;opacity:0;transition:max-height 10s ease-out}@media screen and (max-width:768px){.navigation[data-v-6bfd4cd8]{font-size:6vw}.header-container[data-v-6bfd4cd8]{font-size:4vw;grid-column:1/9}.fulldisplay-image[data-v-6bfd4cd8]{width:100%;opacity:.5}}',""]),t.exports=d},241:function(t,e,n){"use strict";n.r(e);n(38),n(40),n(41);var r=n(7);n(47),n(228),n(34),n(11),n(28),n(27),n(37),n(23),n(62);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={name:"NavItem",props:{index:Number,entries:Object,slideToggle:Boolean},data:function(){return{navHovered:!1,navClick:!1,imagesloaded:!1}},computed:{name:function(){return this.entries.name},images:function(){return this.entries.images},imagezero:function(){return this.entries.images[0]},position:function(){return this.entries.position},description:function(){return this.entries.description},videoBoolean:function(){return this.entries.videoBoolean},titleHovered:function(){return this.entries.name==this.$store.state.title}},mounted:function(){this.imagesloaded||(this.loadImages(),console.log(this.$refs.image))},methods:{selectOn:function(){this.navHovered=!0},selectOff:function(){this.navHovered=!1},loadImages:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,image;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("".concat(t.imagesloaded)),n=performance.now(),r=[],c=o(t.entries.images);try{for(c.s();!(l=c.n()).done;)image=l.value,r.push(image)}catch(t){c.e(t)}finally{c.f()}return e.next=7,Promise.all(r).then((function(){t.imagesloaded=!0;var e=performance.now();console.log("".concat(t.entries.name," - Loaded ").concat(t.entries.images.length," images in ").concat(Math.round(e-n),"ms.")),console.log("".concat(t.imagesloaded))}));case 7:case"end":return e.stop()}}),e)})))()}}},f=(n(234),n(58)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.imagesloaded?n("div",{staticClass:"section-container",class:{"section-container--active":t.titleHovered}},[n("div",{staticClass:"fulldisplay"},t._l(t.images,(function(image,t){return n("img",{key:t,staticClass:"fulldisplay-image",attrs:{src:image.url.split("/uploads/").join("https://agile-peak-21162.herokuapp.com/uploads/")}})})),0)]):t._e()}),[],!1,null,"6bfd4cd8",null);e.default=component.exports}}]);