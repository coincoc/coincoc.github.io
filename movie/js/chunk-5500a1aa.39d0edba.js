(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5500a1aa"],{"1ca1":function(t,e,n){var r=n("a719"),i=n("74e7"),o=n("90fb"),c=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"1ea7":function(t,e,n){var r=n("efe2"),i=n("90fb"),o=n("f594"),c=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3882:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-index-list",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}]},t._l(t.list,(function(e){return n("mt-index-section",{key:e.index,attrs:{index:e.index}},t._l(e.list,(function(e){return n("div",{key:e.cityId,on:{click:function(n){return t.handleclick(e.cityId,e.name)}}},[n("mt-cell",{attrs:{title:e.name}})],1)})),0)})),1)],1)},i=[],o=(n("dbb3"),n("82ae")),c=n.n(o),a={data:function(){return{list:[],msg:"",newlist:[],isshow:!0}},mounted:function(){var t=this;c()({url:"https://m.maizuo.com/gateway?k=7740296",headers:{"X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"1595160935853105059037188"}',"X-Host":"mall.film-ticket.city.list"}}).then((function(e){t.handlespace(e.data.data.cities)})).catch((function(){console.log("error")}))},watch:{$route:function(t,e){window.location.reload()}},methods:{handlespace:function(t){for(var e=[],n=65;n<=90;n++)e.push(String.fromCharCode(n));for(var r=0;r<e.length;r++){var i=t.filter((function(t){return t.pinyin.substring(0,1)===e[r].toLowerCase()}));""!=i&&this.list.push({index:e[r],list:i})}console.log(this.newlist)},handleclick:function(t,e){var n={cityId:t,cityname:e};localStorage.setItem("city",JSON.stringify(n)),this.$router.push("/movie")}}},s=a,u=n("2877"),f=Object(u["a"])(s,r,i,!1,null,null,null);e["default"]=f.exports},"5dfd":function(t,e,n){var r=n("e349"),i=n("692f"),o=n("3553"),c=n("d88d"),a=n("1ca1"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(h,v,p,m){for(var w,y,g=o(h),x=i(g),b=r(v,p,3),k=c(x.length),S=0,A=m||a,C=e?A(h,k):n?A(h,0):void 0;k>S;S++)if((d||S in x)&&(w=x[S],y=b(w,S,g),t))if(e)C[S]=y;else if(y)switch(t){case 3:return!0;case 5:return w;case 6:return S;case 2:s.call(C,w)}else if(f)return!1;return l?-1:u||f?f:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},"74e7":function(t,e,n){var r=n("2118");t.exports=Array.isArray||function(t){return"Array"==r(t)}},dbb3:function(t,e,n){"use strict";var r=n("1c8b"),i=n("5dfd").filter,o=n("1ea7"),c=n("ff9c"),a=o("filter"),s=c("filter");r({target:"Array",proto:!0,forced:!a||!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},ff9c:function(t,e,n){var r=n("1e2c"),i=n("efe2"),o=n("faa8"),c=Object.defineProperty,a={},s=function(t){throw t};t.exports=function(t,e){if(o(a,t))return a[t];e||(e={});var n=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,f=o(e,0)?e[0]:s,l=o(e,1)?e[1]:void 0;return a[t]=!!n&&!i((function(){if(u&&!r)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,f,l)}))}}}]);
//# sourceMappingURL=chunk-5500a1aa.39d0edba.js.map