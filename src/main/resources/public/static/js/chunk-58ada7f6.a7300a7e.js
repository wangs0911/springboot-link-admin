(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58ada7f6"],{"0f66":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-document"},on:{click:t.handleDownload}},[t._v("Export")]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"Id",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Main Information",align:"center"}},[n("el-table-column",{attrs:{label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.title)+"\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Readings",width:"115",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.pageviews)+"\n        ")]}}])})],1),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"Date",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1)],1)},i=[],l=n("2423"),o=n("ed08"),r={name:"MergeHeader",data:function(){return{list:null,listLoading:!0,downloadLoading:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(l["c"])(this.listQuery).then((function(e){t.list=e.data.items,t.listLoading=!1}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([n.e("chunk-1aaf02db"),n.e("chunk-6579b732"),n.e("chunk-58293907")]).then(n.bind(null,"4bf8d")).then((function(e){var n=[["Id","Main Information","","","Date"]],a=["","Title","Author","Readings",""],i=["id","title","author","pageviews","display_time"],l=t.list,o=t.formatJson(i,l),r=["A1:A2","B1:D1","E1:E2"];e.export_json_to_excel({multiHeader:n,header:a,merges:r,data:o}),t.downloadLoading=!1}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return"timestamp"===t?Object(o["parseTime"])(e[t]):e[t]}))}))}}},u=r,c=n("2877"),d=Object(c["a"])(u,a,i,!1,null,null,null);e["default"]=d.exports},2423:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return l})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return u}));var a=n("b775");function i(t){return Object(a["a"])({url:"/article/list",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/article/detail",method:"get",params:{id:t}})}function o(t){return Object(a["a"])({url:"/article/pv",method:"get",params:{pv:t}})}function r(t){return Object(a["a"])({url:"/article/create",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/article/update",method:"post",data:t})}}}]);