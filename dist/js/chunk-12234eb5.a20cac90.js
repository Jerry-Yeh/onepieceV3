(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12234eb5"],{"07e3":function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},1462:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-card container mt-8 mb-3"},[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[r("img",{attrs:{src:"https://thumbs.gfycat.com/CostlyEnchantingAmericanshorthair-small.gif",alt:""}})]),r("h2",{staticClass:"text-center"},[t._v("確認列表")]),t._m(0),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"m-card__bg"},[t._m(1),r("ul",[r("li",{staticClass:"m-card__item"},[t._m(2),r("span",[t._v(t._s(t._f("date")(t.order.create_at)))])]),r("li",{staticClass:"m-card__item"},[t._m(3),r("span",[t._v(t._s(t.order.id))])]),r("li",{staticClass:"m-card__item"},[t._m(4),r("span",{staticClass:"text-danger h4"},[t._v(t._s(t._f("currency")(t.order.total)))]),r("small",[t._v("貝利")])])])])]),r("div",{staticClass:"col-md-6"},[r("form",{staticClass:"m-card__bg",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[t._m(5),r("ul",{staticClass:"p-0",staticStyle:{"list-style-type":"none"}},[r("li",{staticClass:"m-card__item"},[t._m(6),r("span",[t._v(t._s(t.order.user.email))])]),r("li",{staticClass:"m-card__item"},[t._m(7),r("span",[t._v(t._s(t.order.user.name))])]),r("li",{staticClass:"m-card__item"},[t._m(8),r("span",[t._v(t._s(t.order.user.tel))])]),r("li",{staticClass:"m-card__item"},[t._m(9),r("span",[t._v(t._s(t.order.user.address))])]),r("li",{staticClass:"m-card__item"},[t._m(10),r("p",[t._v(t._s(t.order.message))])]),r("li",{staticClass:"m-card__item"},[t._m(11),t.order.is_paid?r("span",{staticClass:"text-success"},[t._v("已寄出")]):r("span",[t._v("尚未寄出")])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("router-link",{staticClass:"btn btn-outline-primary w-100",attrs:{to:"/wanted"}},[t._v("取消列表")])],1),r("div",{staticClass:"col-md-6"},[r("router-link",{staticClass:"btn btn-danger w-100",attrs:{to:"/completed/"+t.orderId}},[t._v("確認寄出")])],1)])])])])],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row pt-3 mb-3 step"},[r("div",{staticClass:"col-md-4"},[r("h5",{staticClass:"text-center step__point step__point--ready"},[t._v("資料填寫")])]),r("div",{staticClass:"col-md-4"},[r("h5",{staticClass:"text-center step__point step__point--ready"},[t._v("確認列表")])]),r("div",{staticClass:"col-md-4"},[r("h5",{staticClass:"text-center step__point"},[t._v("列表完成")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",{staticClass:"text-center m-card__subtitle mb-0"},[r("strong",[t._v("訂單訊息")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"m-card__item__title"},[r("strong",[t._v("列表成立時間")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"m-card__item__title"},[r("strong",[t._v("列表編號")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"m-card__item__title"},[r("strong",[t._v("總懸賞金")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",{staticClass:"text-center m-card__subtitle mb-0"},[r("strong",[t._v("獵人資料")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"m-card__item__title"},[r("strong",[t._v("Email")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"m-card__item__title"},[r("strong",[t._v("姓名")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"m-card__item__title"},[r("strong",[t._v("收件人電話")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"m-card__item__title"},[r("strong",[t._v("收件人地址")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h5",{staticClass:"m-card__item__title"},[r("strong",[t._v("其他需求與備註")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"m-card__item__title"},[r("strong",[t._v("列表狀態")])])}],a=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=r("2f62");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={data:function(){return{orderId:""}},methods:{getOrder:function(){this.$store.dispatch("orderModules/getOrder",this.orderId)},payOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("onepiece","/pay/").concat(t.orderId);t.$http.post(e).then((function(e){t.getOrder(),t.$store.dispatch("alertModules/updateMessage",{message:"成功寄出",status:"success"},{root:!0})}))}},computed:o({isLoading:function(){return this.$store.state.isLoading},order:function(){return this.$store.state.orderModules.order}},Object(c["b"])("cartModules",["totalPrice"])),created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},f=u,l=(r("4987"),r("2877")),_=Object(l["a"])(f,n,s,!1,null,"6d230d16",null);e["default"]=_.exports},"1bc3":function(t,e,r){var n=r("f772");t.exports=function(t,e){if(!n(t))return t;var r,s;if(e&&"function"==typeof(r=t.toString)&&!n(s=r.call(t)))return s;if("function"==typeof(r=t.valueOf)&&!n(s=r.call(t)))return s;if(!e&&"function"==typeof(r=t.toString)&&!n(s=r.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,r){var n=r("f772"),s=r("e53d").document,a=n(s)&&n(s.createElement);t.exports=function(t){return a?s.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,r){var n=r("d9f6"),s=r("aebd");t.exports=r("8e60")?function(t,e,r){return n.f(t,e,s(1,r))}:function(t,e,r){return t[e]=r,t}},"454f":function(t,e,r){r("46a7");var n=r("584a").Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},"456d":function(t,e,r){var n=r("4bf8"),s=r("0d58");r("5eda")("keys",(function(){return function(t){return s(n(t))}}))},"46a7":function(t,e,r){var n=r("63b6");n(n.S+n.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},4987:function(t,e,r){"use strict";var n=r("7b9c"),s=r.n(n);s.a},"584a":function(t,e){var r=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=r)},"5eda":function(t,e,r){var n=r("5ca1"),s=r("8378"),a=r("79e5");t.exports=function(t,e){var r=(s.Object||{})[t]||Object[t],c={};c[t]=e(r),n(n.S+n.F*a((function(){r(1)})),"Object",c)}},"63b6":function(t,e,r){var n=r("e53d"),s=r("584a"),a=r("d864"),c=r("35e8"),i=r("07e3"),o="prototype",u=function(t,e,r){var f,l,_,d=t&u.F,p=t&u.G,m=t&u.S,v=t&u.P,b=t&u.B,h=t&u.W,y=p?s:s[e]||(s[e]={}),g=y[o],C=p?n:m?n[e]:(n[e]||{})[o];for(f in p&&(r=e),r)l=!d&&C&&void 0!==C[f],l&&i(y,f)||(_=l?C[f]:r[f],y[f]=p&&"function"!=typeof C[f]?r[f]:b&&l?a(_,n):h&&C[f]==_?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e[o]=t[o],e}(_):v&&"function"==typeof _?a(Function.call,_):_,v&&((y.virtual||(y.virtual={}))[f]=_,t&u.R&&g&&!g[f]&&c(g,f,_)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"794b":function(t,e,r){t.exports=!r("8e60")&&!r("294c")((function(){return 7!=Object.defineProperty(r("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7b9c":function(t,e,r){},"85f2":function(t,e,r){t.exports=r("454f")},"8e60":function(t,e,r){t.exports=!r("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8e6e":function(t,e,r){var n=r("5ca1"),s=r("990b"),a=r("6821"),c=r("11e9"),i=r("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),o=c.f,u=s(n),f={},l=0;while(u.length>l)r=o(n,e=u[l++]),void 0!==r&&i(f,e,r);return f}})},"990b":function(t,e,r){var n=r("9093"),s=r("2621"),a=r("cb7c"),c=r("7726").Reflect;t.exports=c&&c.ownKeys||function(t){var e=n.f(a(t)),r=s.f;return r?e.concat(r(t)):e}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},bd86:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("85f2"),s=r.n(n);function a(t,e,r){return e in t?s()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},d864:function(t,e,r){var n=r("79aa");t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,s){return t.call(e,r,n,s)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,r){var n=r("e4ae"),s=r("794b"),a=r("1bc3"),c=Object.defineProperty;e.f=r("8e60")?Object.defineProperty:function(t,e,r){if(n(t),e=a(e,!0),n(r),s)try{return c(t,e,r)}catch(i){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},e4ae:function(t,e,r){var n=r("f772");t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},f1ae:function(t,e,r){"use strict";var n=r("86cc"),s=r("4630");t.exports=function(t,e,r){e in t?n.f(t,e,s(0,r)):t[e]=r}},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-12234eb5.a20cac90.js.map