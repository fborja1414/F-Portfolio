(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,5],{223:function(t,e,n){"use strict";var o=n(8),r=n(4),c=n(84),l=n(14),d=n(10),f=n(38),v=n(163),h=n(58),m=n(5),y=n(60),w=n(59).f,x=n(27).f,_=n(13).f,k=n(224).trim,$="Number",C=r.Number,N=C.prototype,I=f(y(N))==$,E=function(t){var e,n,o,r,c,l,d,code,f=h(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=k(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>r)return NaN;return parseInt(c,o)}return+f};if(c($,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var j,T=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof T&&(I?m((function(){N.valueOf.call(n)})):f(n)!=$)?v(new C(E(e)),n,T):E(e)},O=o?w(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),R=0;O.length>R;R++)d(C,j=O[R])&&!d(T,j)&&_(T,j,x(C,j));T.prototype=N,N.constructor=T,l(r,$,T)}},224:function(t,e,n){var o=n(17),r="["+n(225)+"]",c=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},225:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},226:function(t,e,n){var content=n(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("630cd415",content,!0,{sourceMap:!1})},227:function(t,e,n){var content=n(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("38bcecbc",content,!0,{sourceMap:!1})},228:function(t,e,n){"use strict";n(226)},229:function(t,e,n){var o=n(82)(!1);o.push([t.i,".elliot[data-v-2da16cae],.graphics[data-v-2da16cae]{grid-column:4/11}.graphics[data-v-2da16cae]{grid-row:3}.zine[data-v-2da16cae]{grid-row:5}.uganda[data-v-2da16cae],.zine[data-v-2da16cae]{grid-column:4/11}.uganda[data-v-2da16cae]{grid-row:6}.typography[data-v-2da16cae]{grid-column:4/11}.title[data-v-2da16cae]{font-style:italic;height:5rem}.scroll[data-v-2da16cae]{display:flex;overflow-x:scroll;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.description[data-v-2da16cae]{display:flex;justify-content:space-between}img[data-v-2da16cae]{width:100%;margin:0 0 1rem}.swipe[data-v-2da16cae]{text-align:right}.vid-size[data-v-2da16cae]{width:100%;margin:0 0 1rem}.section-container:hover .swipe[data-v-2da16cae]{font-style:bold}",""]),t.exports=o},230:function(t,e,n){"use strict";n(227)},231:function(t,e,n){var o=n(82)(!1);o.push([t.i,".nav-items[data-v-66a81945]{position:relative;border-bottom:1px solid #000}.blink[data-v-66a81945]{-webkit-animation:blink-data-v-66a81945 1s 2;animation:blink-data-v-66a81945 1s 2}@-webkit-keyframes blink-data-v-66a81945{50%{opacity:0}}@keyframes blink-data-v-66a81945{50%{opacity:0}}.select[data-v-66a81945]{opacity:0}.selectOn[data-v-66a81945]{opacity:1}.description-two[data-v-66a81945]{height:auto;max-height:100%;opacity:1;transition:max-height 10s ease-in-out;transition:opacity 5 ease-in-out}.description--collapsed[data-v-66a81945]{max-height:0;opacity:0;transition:max-height 10s ease-out}",""]),t.exports=o},232:function(t,e,n){"use strict";n.r(e);n(223),n(28),n(39);var o={name:"Section",props:{entry:Object,index:Number},computed:{images:function(){return this.entry.images},position:function(){return this.entry.position},description:function(){return this.entry.description}}},r=(n(228),n(37)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-container",class:t.position},[t.images.length>1?n("div",{staticClass:"scroll"},[n("video",{key:t.index,staticClass:"vid-size",attrs:{src:t.images[1].url.split("/uploads/").join("http://localhost:1337/uploads/"),autoplay:"",loop:""}}),t._v(" "),t._l(t.images,(function(image,t){return n("img",{key:t,attrs:{src:image.url.split("/uploads/").join("http://localhost:1337/uploads/")}})}))],2):n("div",t._l(t.images,(function(image,t){return n("img",{key:t,attrs:{src:image.url.split("/uploads/").join("http://localhost:1337/uploads/")}})})),0),t._v(" "),n("div",{staticClass:"description"},[t.images.length>1?n("a",{staticClass:"swipe"},[t._v("swipe >> ")]):t._e()])])}),[],!1,null,"2da16cae",null);e.default=component.exports},233:function(t,e,n){"use strict";n.r(e);n(223),n(33),n(11),n(29),n(61);var o={name:"NavItem",props:{index:Number,entries:Object},computed:{name:function(){return this.entries.name}},methods:{selectOn:function(){this.navHovered=!0,console.log("in")},selectOff:function(){this.navHovered=!1,console.log("out")},resetClick:function(){var t=this;setTimeout((function(){t.navClick=!1}),1200)}},data:function(){return{navClick:!1,navHovered:!1}}},r=(n(230),n(37)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{key:t.index,staticClass:"nav-items",on:{mouseenter:t.selectOn,mouseleave:t.selectOff,click:function(e){t.$emit("clicked",t.index),t.navClick=!0,t.resetClick()}}},[n("a",{key:t.index,staticClass:"select",class:{selectOn:t.navHovered}},[t._v(" > ")]),t._v(" "),n("a",[t._v(" "+t._s(t.entries.name))]),t._v(" "),n("a",{key:t.index,staticClass:"medium",class:{blink:t.navClick}},[t._v("\n    "+t._s(t.entries.medium))]),t._v(" "),t.ExpandStatus?n("div",{staticClass:"description-two",class:{"description--Collapsed":!t.ExpandStatus}},[t._v("\n    extra info\n  ")]):t._e()])}),[],!1,null,"66a81945",null);e.default=component.exports},234:function(t,e,n){var content=n(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("28f1127f",content,!0,{sourceMap:!1})},236:function(t,e,n){"use strict";n(234)},237:function(t,e,n){var o=n(82)(!1);o.push([t.i,".elliot,.graphics{grid-column:4/11}.graphics{grid-row:3}.zine{grid-row:5}.uganda,.zine{grid-column:4/11}.uganda{grid-row:6}.typography{grid-column:4/11}.header-container{grid-column:1/3;font-size:20px;height:2rem;position:sticky;top:3rem;z-index:-1}.subheader{font-style:italic}.scroll-description{display:block;margin-top:10rem;align-content:center;font-style:italic}.page-container{display:grid;grid-template-columns:repeat(10,1fr);grid-gap:20px}.navigation{line-height:2.5;grid-column:4/10;font-size:20px;height:55vh;margin:0 0 10rem;overflow-x:visible}.back{bottom:1rem}.back,.socials{position:fixed;font-size:18px}.socials{line-height:2;margin-top:1rem;font-style:italic;height:auto;color:#00f;z-index:5}.socials a{pointer-events:auto;display:block}.medium{font-style:italic}.section-container{margin:0 0 6rem}.fade-in{opacity:0}.fade{opacity:1;transition:opacity .3s}.select{position:absolute;left:-2vw;opacity:0}.blink{-webkit-animation:blink 1s 2;animation:blink 1s 2}@-webkit-keyframes blink{50%{opacity:0}}@keyframes blink{50%{opacity:0}}.image-container{width:100vw;height:100vh;position:absolute;opacity:0;height:auto;z-index:-1;filter:invert(80%)}.nav-container{cursor:pointer}.description-enter-active,.description-leave-active{transition:opacity 1s}.description-enter,.description-leave-to{opacity:0}.page-enter-active,.page-leave-active{transition:opacity 1s}.page-enter,.page-leave-to{opacity:0}",""]),t.exports=o},241:function(t,e,n){"use strict";n.r(e);var o=n(7),r=(n(48),n(61),n(28),n(39),n(232)),c=n(233),l={components:{Section:r.default,NavItem:c.default},transition:{appear:!0,name:"page"},data:function(){return{show:!1,scroll:!0,sectionDescription:" "}},methods:{scrollSectionIntoView:function(t){var e=this;setTimeout((function(){if(1==t){var n=e.$refs.entry[t].$el.getBoundingClientRect().top+document.documentElement.scrollTop,o=e.$refs.entry[t].$el.offsetHeight,r=window.innerHeight,c=n-Math.abs(r-o/2);window.scrollTo({top:c,behavior:"smooth"})}else{console.log(e.$refs.entry[t].$el);var l=e.$refs.entry[t].$el.getBoundingClientRect().top+document.documentElement.scrollTop,d=e.$refs.entry[t].$el.offsetHeight,f=window.innerHeight,v=l-Math.abs((f-d)/2);window.scrollTo({top:v,behavior:"smooth"})}}),1e3)},setDescription:function(t){for(var e=0;e<=this.$refs.entry.length;e++)this.$refs.entry[e].$el.getBoundingClientRect().top>=0&&window.innerHeight>=this.$refs.entry[e].$el.getBoundingClientRect().bottom-this.$refs.entry[e].$el.offsetHeight/2||this.$refs.entry[e].$el.getBoundingClientRect().bottom>=0&&window.innerHeight>=this.$refs.entry[e].$el.getBoundingClientRect().bottom-this.$refs.entry[e].$el.offsetHeight/2?(console.log(window.scrollY,this.$refs.entry[e].$el.getBoundingClientRect().top,this.$refs.entry[e].$el.getBoundingClientRect().bottom),this.sectionDescription=this.$refs.entry[e].description,this.fadeToggle=!0):window.scrollY<=this.$refs.entry[0].$el.getBoundingClientRect().top&&(this.sectionDescription=" ")},scrollUp:function(){console.log("inside")},hoveredNav:function(){this.navHovered=!0,console.log("ha")}},beforeMount:function(){window.addEventListener("scroll",this.setDescription)},beforeDestroy:function(){window.removeEventListener("scroll",this.setDescription)},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("http://localhost:1337/projects");case 3:return o=e.sent,console.log({projects:o}),e.abrupt("return",{projects:o});case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;this.$nextTick((function(){return t.show=!0}))}},d=(n(236),n(37)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"page-container"},[n("div",{staticClass:"header-container"},[t._m(0),t._v(" "),n("div",{staticClass:"scroll-description",domProps:{innerHTML:t._s(t.sectionDescription)}})]),t._v(" "),n("div",{staticClass:"navigation"},t._l(t.projects,(function(e,o){return n("div",{key:o,staticClass:"nav-container"},[n("nav-item",{attrs:{index:o,entries:e},on:{clicked:t.scrollSectionIntoView}})],1)})),0),t._v(" "),t._l(t.projects,(function(e,o){return n("Section",{key:o,ref:"entry",refInFor:!0,staticClass:"fade-in",class:{fade:t.fadeToggle},attrs:{entry:e,index:o}})}))],2):t._e()}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"header"},[t._v("\n      Francisco Borja,\n      "),n("div",{staticClass:"subheader"},[t._v("designer and developer")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavItem:n(233).default,Section:n(232).default})}}]);