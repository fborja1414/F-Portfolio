(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{223:function(e,t,n){"use strict";var r=n(8),o=n(4),c=n(84),l=n(14),f=n(10),d=n(38),v=n(163),m=n(58),h=n(5),k=n(60),N=n(59).f,_=n(27).f,x=n(13).f,I=n(224).trim,E="Number",y=o.Number,C=y.prototype,w=d(k(C))==E,A=function(e){var t,n,r,o,c,l,f,code,d=m(e,!1);if("string"==typeof d&&d.length>2)if(43===(t=(d=I(d)).charCodeAt(0))||45===t){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c(E,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var O,S=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof S&&(w?h((function(){C.valueOf.call(n)})):d(n)!=E)?v(new y(A(t)),n,S):A(t)},T=r?N(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;T.length>F;F++)f(y,O=T[F])&&!f(S,O)&&x(S,O,_(y,O));S.prototype=C,C.constructor=S,l(o,E,S)}},224:function(e,t,n){var r=n(17),o="["+n(225)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},225:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},227:function(e,t,n){var content=n(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(83).default)("38bcecbc",content,!0,{sourceMap:!1})},230:function(e,t,n){"use strict";n(227)},231:function(e,t,n){var r=n(82)(!1);r.push([e.i,".nav-items[data-v-66a81945]{position:relative;border-bottom:1px solid #000}.blink[data-v-66a81945]{-webkit-animation:blink-data-v-66a81945 1s 2;animation:blink-data-v-66a81945 1s 2}@-webkit-keyframes blink-data-v-66a81945{50%{opacity:0}}@keyframes blink-data-v-66a81945{50%{opacity:0}}.select[data-v-66a81945]{opacity:0}.selectOn[data-v-66a81945]{opacity:1}.description-two[data-v-66a81945]{height:auto;max-height:100%;opacity:1;transition:max-height 10s ease-in-out;transition:opacity 5 ease-in-out}.description--collapsed[data-v-66a81945]{max-height:0;opacity:0;transition:max-height 10s ease-out}",""]),e.exports=r},233:function(e,t,n){"use strict";n.r(t);n(223),n(33),n(11),n(29),n(61);var r={name:"NavItem",props:{index:Number,entries:Object},computed:{name:function(){return this.entries.name}},methods:{selectOn:function(){this.navHovered=!0,console.log("in")},selectOff:function(){this.navHovered=!1,console.log("out")},resetClick:function(){var e=this;setTimeout((function(){e.navClick=!1}),1200)}},data:function(){return{navClick:!1,navHovered:!1}}},o=(n(230),n(37)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{key:e.index,staticClass:"nav-items",on:{mouseenter:e.selectOn,mouseleave:e.selectOff,click:function(t){e.$emit("clicked",e.index),e.navClick=!0,e.resetClick()}}},[n("a",{key:e.index,staticClass:"select",class:{selectOn:e.navHovered}},[e._v(" > ")]),e._v(" "),n("a",[e._v(" "+e._s(e.entries.name))]),e._v(" "),n("a",{key:e.index,staticClass:"medium",class:{blink:e.navClick}},[e._v("\n    "+e._s(e.entries.medium))]),e._v(" "),e.ExpandStatus?n("div",{staticClass:"description-two",class:{"description--Collapsed":!e.ExpandStatus}},[e._v("\n    extra info\n  ")]):e._e()])}),[],!1,null,"66a81945",null);t.default=component.exports}}]);