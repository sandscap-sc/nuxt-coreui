webpackJsonp([21],{"+NrB":function(a,t,e){var r=e("qZP3");"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);e("rjj0")("08622564",r,!1,{sourceMap:!1})},"7SDZ":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("Q8HY"),n=e("j93S"),s=!1;var i=function(a){s||e("+NrB")},o=e("VU/8")(r.a,n.a,!1,i,"data-v-3051bcb4",null);o.options.__file="pages/base/Paginations.vue",t.default=o.exports},Q8HY:function(a,t,e){"use strict";t.a={name:"paginations",data:function(){return{currentPage:3}},methods:{linkGen:function(a){return"#page/"+a+"/foobar"}}}},j93S:function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"animated fadeIn"},[e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("i",{staticClass:"fa fa-align-justify"}),e("strong",[a._v("Bootstrap Pagination")]),e("div",{staticClass:"card-actions"},[e("a",{attrs:{href:"https://bootstrap-vue.js.org/docs/components/pagination",target:"_blank"}},[e("small",{staticClass:"text-muted"},[a._v("docs")])])])]),e("div",[e("h6",[a._v("Default")]),e("b-pagination",{attrs:{size:"md","total-rows":100,"per-page":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br"),e("h6",[a._v("Small")]),e("b-pagination",{attrs:{size:"sm","total-rows":100,"per-page":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br"),e("div",{staticClass:"d-sm-down-none"},[e("h6",[a._v("Large")]),e("b-pagination",{attrs:{size:"lg","total-rows":100,"per-page":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br")],1),e("div",[a._v("currentPage: "+a._s(a.currentPage))])],1)]),e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("i",{staticClass:"fa fa-align-justify"}),e("strong",[a._v("Pagination")]),e("small",[a._v("alignment")])]),e("div",[e("h6",[a._v("Left alignment (default)")]),e("b-pagination",{attrs:{"total-rows":100,"per-page":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br"),e("h6",[a._v("Center alignment")]),e("b-pagination",{attrs:{align:"center","total-rows":100,"per-page":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br"),e("h6",[a._v("Right (end) alignment")]),e("b-pagination",{attrs:{align:"right","total-rows":100,"per-page":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br"),e("div",[a._v("currentPage: "+a._s(a.currentPage))])],1)]),e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("i",{staticClass:"fa fa-align-justify"}),e("strong",[a._v("Pagination")]),e("small",[a._v("navigation")]),e("div",{staticClass:"card-actions"},[e("a",{attrs:{href:"https://bootstrap-vue.js.org/docs/components/pagination",target:"_blank"}},[e("small",{staticClass:"text-muted"},[a._v("docs")])])])]),e("div",[e("h6",[a._v("Default")]),e("b-pagination-nav",{attrs:{"base-url":"#","number-of-pages":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("h6",{staticClass:"mt-4"},[a._v("With link generator function")]),e("b-pagination-nav",{attrs:{"link-gen":a.linkGen,"number-of-pages":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br"),e("div",{staticClass:"mt-4"},[a._v("currentPage: "+a._s(a.currentPage))])],1)])],1)])};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},qZP3:function(a,t,e){(a.exports=e("FZ+f")(!1)).push([a.i,"",""])}});