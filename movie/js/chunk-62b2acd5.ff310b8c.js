(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62b2acd5"],{"44b5":function(t,e,a){"use strict";var i=a("6308"),n=a.n(i);n.a},6308:function(t,e,a){},b7e6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.datalist,(function(e){return a("div",{key:e.filmId,staticClass:"nowplay",on:{click:function(a){return t.handleclick(e.filmId)}}},[a("div",{staticClass:"nowplayson"},[a("img",{attrs:{src:e.poster}}),a("div",{style:t.mystyle},[a("h4",[t._v(" "+t._s(e.name)+" "),a("i",[t._v(t._s(e.timeType)+"D")])]),a("p",[t._v("主演："+t._s(t._f("actorfilter")(e.actors)))])])])])})),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isnomore,expression:"isnomore"}],staticClass:"nomore"},[t._v("没有更多了")])],2)},n=[],s=(a("dbb3"),a("053b"),a("b85c")),o=a("82ae"),r=a.n(o),c=a("2b0e");c["default"].filter("actorfilter",(function(t){var e="";if(void 0!=t){var a,i=Object(s["a"])(t);try{for(i.s();!(a=i.n()).done;){var n=a.value;e+=n.name+" "}}catch(o){i.e(o)}finally{i.f()}}else e="暂无主演";return e}));var l={data:function(){return{datalist:[],isnomore:!1,mystyle:{width:"200px"}}},methods:{handleclick:function(t){this.$router.push("/nowplayinginfo/".concat(t))}},mounted:function(){var t=this;this.mystyle.width=window.screen.width-170+"px";var e=JSON.parse(localStorage.getItem("city")).cityId;r()({url:"https://m.maizuo.com/gateway?cityId="+e+"&pageNum=1&pageSize=10&type=2&k=930259",headers:{"X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"1595160935853105059037188","bc":"340800"}',"X-Host":"mall.film-ticket.film.list"}}).then((function(e){t.datalist=e.data.data.films,t.datalist.length<10&&t.datalist.length>0?t.isnomore=!0:t.isnomore=!1})).catch((function(){console.log("error")}))}},d=l,u=(a("44b5"),a("2877")),f=Object(u["a"])(d,i,n,!1,null,"042db504",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-62b2acd5.ff310b8c.js.map