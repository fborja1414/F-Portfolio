(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{223:function(t,e,r){"use strict";var n=r(8),o=r(4),c=r(84),l=r(14),d=r(10),f=r(38),v=r(163),h=r(58),m=r(5),y=r(60),N=r(59).f,w=r(27).f,I=r(13).f,_=r(224).trim,x="Number",E=o.Number,A=E.prototype,C=f(y(A))==x,S=function(t){var e,r,n,o,c,l,d,code,f=h(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=_(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(c(x,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var k,j=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof j&&(C?m((function(){A.valueOf.call(r)})):f(r)!=x)?v(new E(S(e)),r,j):S(e)},F=n?N(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;F.length>M;M++)d(E,k=F[M])&&!d(j,k)&&I(j,k,w(E,k));j.prototype=A,A.constructor=j,l(o,x,j)}},224:function(t,e,r){var n=r(17),o="["+r(225)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},225:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},226:function(t,e,r){var content=r(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("630cd415",content,!0,{sourceMap:!1})},228:function(t,e,r){"use strict";r(226)},229:function(t,e,r){var n=r(82)(!1);n.push([t.i,".elliot[data-v-2da16cae],.graphics[data-v-2da16cae]{grid-column:4/11}.graphics[data-v-2da16cae]{grid-row:3}.zine[data-v-2da16cae]{grid-row:5}.uganda[data-v-2da16cae],.zine[data-v-2da16cae]{grid-column:4/11}.uganda[data-v-2da16cae]{grid-row:6}.typography[data-v-2da16cae]{grid-column:4/11}.title[data-v-2da16cae]{font-style:italic;height:5rem}.scroll[data-v-2da16cae]{display:flex;overflow-x:scroll;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.description[data-v-2da16cae]{display:flex;justify-content:space-between}img[data-v-2da16cae]{width:100%;margin:0 0 1rem}.swipe[data-v-2da16cae]{text-align:right}.vid-size[data-v-2da16cae]{width:100%;margin:0 0 1rem}.section-container:hover .swipe[data-v-2da16cae]{font-style:bold}",""]),t.exports=n},232:function(t,e,r){"use strict";r.r(e);r(223),r(28),r(39);var n={name:"Section",props:{entry:Object,index:Number},computed:{images:function(){return this.entry.images},position:function(){return this.entry.position},description:function(){return this.entry.description}}},o=(r(228),r(37)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section-container",class:t.position},[t.images.length>1?r("div",{staticClass:"scroll"},[r("video",{key:t.index,staticClass:"vid-size",attrs:{src:t.images[1].url.split("/uploads/").join("http://localhost:1337/uploads/"),autoplay:"",loop:""}}),t._v(" "),t._l(t.images,(function(image,t){return r("img",{key:t,attrs:{src:image.url.split("/uploads/").join("http://localhost:1337/uploads/")}})}))],2):r("div",t._l(t.images,(function(image,t){return r("img",{key:t,attrs:{src:image.url.split("/uploads/").join("http://localhost:1337/uploads/")}})})),0),t._v(" "),r("div",{staticClass:"description"},[t.images.length>1?r("a",{staticClass:"swipe"},[t._v("swipe >> ")]):t._e()])])}),[],!1,null,"2da16cae",null);e.default=component.exports}}]);