(function(t){function e(e){for(var r,o,l=e[0],c=e[1],s=e[2],f=0,d=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"020a":function(t,e,n){"use strict";var r=n("0c18"),a=n.n(r);a.a},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0c18":function(t,e,n){},"186c":function(t,e,n){},"19f6":function(t,e,n){"use strict";var r=n("dde0"),a=n.n(r);a.a},"26fe":function(t,e,n){"use strict";var r=n("78e7"),a=n.n(r);a.a},2899:function(t,e,n){},"2fff":function(t,e,n){"use strict";var r=n("56c5"),a=n.n(r);a.a},4117:function(t,e,n){"use strict";var r=n("fc27"),a=n.n(r);a.a},"46d3":function(t,e,n){},"56c5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("BumperSection",[n("h2",[t._v("Scroll down to reach the horizontal scroll section")])]),n("HorizontalSection",[n("HorizontalScroll",[n("CardsContainer",t._l(5,(function(t){return n("SampleCards",{key:t})})),1)],1)],1),n("BumperSection",[n("h2",[t._v("You have left the horizontal horizontal scroll section")])])],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bumper"},[t._t("default")],2)},l=[],c={name:"BumperSection"},s=c,u=(n("de49"),n("2877")),f=Object(u["a"])(s,o,l,!1,null,"52df2c9a",null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"horizontalsection"},[t._t("default")],2)},h=[],m={name:"HorizontalSection"},v=m,y=(n("4117"),Object(u["a"])(v,p,h,!1,null,"479a819a",null)),b=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("TallOuterContainer",{attrs:{dynamicHeight:t.dynamicHeight}},[n("StickyInnerContainer",{ref:"containerRef"},[n("HorizontalTranslateContainer",{ref:"objectRef",attrs:{translateX:t.translateX}},[t._t("default")],2)],1)],1)},g=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"horizontaltranslate",style:{transform:"translateX("+t.translateX+"px)"}},[t._t("default")],2)},S=[],H={name:"HorizontalTranslateContainer",props:["translateX"]},O=H,j=(n("2fff"),Object(u["a"])(O,C,S,!1,null,"898dd904",null)),w=j.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sticky"},[t._t("default")],2)},z=[],$={name:"StickyInnerContainer"},E=$,T=(n("deee"),Object(u["a"])(E,x,z,!1,null,"2d9f8117",null)),k=T.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tall",style:{height:t.dynamicHeight+"px"}},[t._t("default")],2)},X=[],D={name:"TallOuterContainer",props:["dynamicHeight"]},R=D,B=(n("9c14"),Object(u["a"])(R,P,X,!1,null,"0d19856c",null)),L=B.exports,M={name:"HorizontalScroll",data(){return{dynamicHeight:0,translateX:0}},mounted(){this.handleDynamicHeight(this.$refs.objectRef),window.addEventListener("resize",this.resizeHandler),this.applyScrollListener(this.$refs.containerRef)},methods:{applyScrollListener(t){console.log(t),window.addEventListener("scroll",()=>{this.translateX=-t.$el.offsetTop})},resizeHandler(){this.handleDynamicHeight(this.$refs.objectRef)},handleDynamicHeight(t){const e=t.$el.scrollWidth;this.dynamicHeight=this.calcDynamicHeight(e)},calcDynamicHeight(t){const e=window.innerWidth,n=window.innerHeight;return t-e+n+150}},components:{HorizontalTranslateContainer:w,StickyInnerContainer:k,TallOuterContainer:L}},I=M,J=(n("19f6"),Object(u["a"])(I,_,g,!1,null,"ce07b9bc",null)),W=J.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cards"},[t._t("default")],2)},Y=[],q={name:"CardsContainer"},F=q,G=(n("26fe"),Object(u["a"])(F,A,Y,!1,null,"da149f22",null)),K=G.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t._t("default")],2)},Q=[],U={name:"SampleCards"},V=U,Z=(n("020a"),Object(u["a"])(V,N,Q,!1,null,"0d61b8c2",null)),tt=Z.exports,et={name:"App",components:{BumperSection:d,HorizontalSection:b,HorizontalScroll:W,CardsContainer:K,SampleCards:tt}},nt=et,rt=(n("034f"),Object(u["a"])(nt,a,i,!1,null,null,null)),at=rt.exports;r["a"].config.productionTip=!1,new r["a"]({render:t=>t(at)}).$mount("#app")},"78e7":function(t,e,n){},"85ec":function(t,e,n){},"9c14":function(t,e,n){"use strict";var r=n("2899"),a=n.n(r);a.a},dde0:function(t,e,n){},de49:function(t,e,n){"use strict";var r=n("186c"),a=n.n(r);a.a},deee:function(t,e,n){"use strict";var r=n("46d3"),a=n.n(r);a.a},fc27:function(t,e,n){}});
//# sourceMappingURL=app.fe534bee.js.map