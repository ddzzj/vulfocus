(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-687dd78a"],{"02f4":function(t,e,a){var i=a("4588"),n=a("be13");t.exports=function(t){return function(e,a){var s,r,l=String(n(e)),o=i(a),c=l.length;return o<0||o>=c?t?"":void 0:(s=l.charCodeAt(o),s<55296||s>56319||o+1===c||(r=l.charCodeAt(o+1))<56320||r>57343?t?l.charAt(o):s:t?l.slice(o,o+2):r-56320+(s-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var i=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?i(t,e).length:1)}},"214f":function(t,e,a){"use strict";a("b0c5");var i=a("2aba"),n=a("32e9"),s=a("79e5"),r=a("be13"),l=a("2b4c"),o=a("520a"),c=l("species"),u=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var f=l(t),d=!s((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),g=d?!s((function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[c]=function(){return a}),a[f](""),!e})):void 0;if(!d||!g||"replace"===t&&!u||"split"===t&&!p){var m=/./[f],h=a(r,f,""[t],(function(t,e,a,i,n){return e.exec===o?d&&!n?{done:!0,value:m.call(e,a,i)}:{done:!0,value:t.call(a,e,i)}:{done:!1}})),v=h[0],b=h[1];i(String.prototype,t,v),n(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},3007:function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return l})),a.d(e,"d",(function(){return o})),a.d(e,"f",(function(){return c}));var i=a("b775");function n(t,e,a){void 0===t&&(t=""),void 0!==a&&null!=a||(a=1);var n="/images/?query="+t+"&page="+a,s="";return!0===e&&(s="flag",n+="&flag="+s),Object(i["a"])({url:n,method:"get"})}function s(t){return Object(i["a"])({url:"/images/"+t+"/start/",method:"get"})}function r(){return Object(i["a"])({url:"/container/",method:"get"})}function l(t){return Object(i["a"])({url:"/container/"+t+"/delete/",method:"delete"})}function o(t){return Object(i["a"])({url:"/container/"+t+"/stop/",method:"get"})}function c(t,e){return Object(i["a"])({url:"/container/"+t+"/flag/?flag="+e,method:"get"})}},"386d":function(t,e,a){"use strict";var i=a("cb7c"),n=a("83a1"),s=a("5f1b");a("214f")("search",1,(function(t,e,a,r){return[function(a){var i=t(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,i):new RegExp(a)[e](String(i))},function(t){var e=r(a,t,this);if(e.done)return e.value;var l=i(t),o=String(this),c=l.lastIndex;n(c,0)||(l.lastIndex=0);var u=s(l,o);return n(l.lastIndex,c)||(l.lastIndex=c),null===u?-1:u.index}]}))},"520a":function(t,e,a){"use strict";var i=a("0bfb"),n=RegExp.prototype.exec,s=String.prototype.replace,r=n,l="lastIndex",o=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t[l]||0!==e[l]}(),c=void 0!==/()??/.exec("")[1],u=o||c;u&&(r=function(t){var e,a,r,u,p=this;return c&&(a=new RegExp("^"+p.source+"$(?!\\s)",i.call(p))),o&&(e=p[l]),r=n.call(p,t),o&&r&&(p[l]=p.global?r.index+r[0].length:e),c&&r&&r.length>1&&s.call(r[0],a,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)})),r}),t.exports=r},"5f1b":function(t,e,a){"use strict";var i=a("23c6"),n=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var s=a.call(t,e);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},a481:function(t,e,a){"use strict";var i=a("cb7c"),n=a("4bf8"),s=a("9def"),r=a("4588"),l=a("0390"),o=a("5f1b"),c=Math.max,u=Math.min,p=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};a("214f")("replace",2,(function(t,e,a,m){return[function(i,n){var s=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,s,n):a.call(String(s),i,n)},function(t,e){var n=m(a,t,this,e);if(n.done)return n.value;var p=i(t),f=String(this),d="function"===typeof e;d||(e=String(e));var v=p.global;if(v){var b=p.unicode;p.lastIndex=0}var y=[];while(1){var _=o(p,f);if(null===_)break;if(y.push(_),!v)break;var x=String(_[0]);""===x&&(p.lastIndex=l(f,s(p.lastIndex),b))}for(var k="",I=0,w=0;w<y.length;w++){_=y[w];for(var S=String(_[0]),L=c(u(r(_.index),f.length),0),D=[],T=1;T<_.length;T++)D.push(g(_[T]));var $=_.groups;if(d){var O=[S].concat(D,L,f);void 0!==$&&O.push($);var j=String(e.apply(void 0,O))}else j=h(S,f,L,D,$,e);L>=I&&(k+=f.slice(I,L)+j,I=L+S.length)}return k+f.slice(I)}];function h(t,e,i,s,r,l){var o=i+t.length,c=s.length,u=d;return void 0!==r&&(r=n(r),u=f),a.call(l,u,(function(a,n){var l;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(o);case"<":l=r[n.slice(1,-1)];break;default:var u=+n;if(0===u)return a;if(u>c){var f=p(u/10);return 0===f?a:f<=c?void 0===s[f-1]?n.charAt(1):s[f-1]+n.charAt(1):a}l=s[u-1]}return void 0===l?"":l}))}}))},b0c5:function(t,e,a){"use strict";var i=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},e036:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-dialog",{attrs:{visible:t.centerDialogVisible,title:"添加",width:"60%"},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[a("el-tabs",{attrs:{value:"add"},on:{"tab-click":t.handleClick}},[a("el-tab-pane",{attrs:{name:"add",label:"添加"}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"label-width":"80px","element-loading-text":"添加中"}},[a("el-form-item",{attrs:{label:"漏洞名称"}},[a("el-input",{attrs:{size:"medium"},model:{value:t.vulInfo.vul_name,callback:function(e){t.$set(t.vulInfo,"vul_name",e)},expression:"vulInfo.vul_name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"镜像"}},[a("el-col",{attrs:{span:17}},["file"===t.imgType?a("el-upload",{ref:"upload",attrs:{"http-request":t.uploadImg,accept:".tar",action:"/CombinationImage/",limit:1,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"medium",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1):t._e(),t._v(" "),"text"===t.imgType?a("el-autocomplete",{staticStyle:{width:"100%"},attrs:{size:"medium","fetch-suggestions":t.querySearchAsync},on:{select:t.handleSelect},model:{value:t.vulInfo.name,callback:function(e){t.$set(t.vulInfo,"name",e)},expression:"vulInfo.name"}}):t._e()],1),t._v(" "),a("el-col",{staticStyle:{float:"right",right:"0"},attrs:{span:5}},[a("el-button",{attrs:{size:"medium"},on:{click:function(e){return e.stopPropagation(),t.changeType(e)}},model:{value:t.imgType,callback:function(e){t.imgType=e},expression:"imgType"}},[t._v(t._s(t.imgTypeText))])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"Rank"}},[a("el-input-number",{attrs:{min:.5,max:5,precision:1,step:.5,size:"medium"},model:{value:t.vulInfo.rank,callback:function(e){t.$set(t.vulInfo,"rank",e)},expression:"vulInfo.rank"}}),t._v("\n                 \n              "),a("el-tooltip",{attrs:{content:"默认分数为2.5分，可根据漏洞的利用难度进行评判",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1),t._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea",size:"medium"},model:{value:t.vulInfo.desc,callback:function(e){t.$set(t.vulInfo,"desc",e)},expression:"vulInfo.desc"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.uploadImg}},[t._v("提 交")])],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{name:"local",label:"本地导入"}},[a("div",{staticClass:"filter-container"},[a("el-input",{staticStyle:{width:"230px"},attrs:{size:"medium"},model:{value:t.localSearch,callback:function(e){t.localSearch=e},expression:"localSearch"}}),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px","margin-bottom":"10px"},attrs:{size:"medium",type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:t.batchLocalAdd}},[t._v("\n              一键导入\n            ")]),t._v("   \n            "),a("el-tooltip",{attrs:{content:"一键导入默认导入分数为 2.5 分,漏洞名称为镜像名称,漏洞描述为漏洞名称",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.localLoading,expression:"localLoading"}],staticStyle:{width:"100%"},attrs:{data:t.localImageList.filter((function(e){return!t.localSearch||e.name.toLowerCase().includes(t.localSearch.toLowerCase())})),"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectLocalImages}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"标签",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[!0===i.flag?a("el-tag",{attrs:{effect:"dark",type:"info"}},[t._v("已导入")]):!1===i.flag?a("el-tag",{attrs:{effect:"dark"}},[t._v("未导入")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-button",{attrs:{type:"danger",size:"small"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLocalRemove(i.name)}}},[t._v("移除")])]}}])})],1)],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.progressShow,title:t.progress.title,width:"60%","before-close":t.closeProgress},on:{"update:visible":function(e){t.progressShow=e}}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.progressLoading,expression:"progressLoading"}]},t._l(t.progress.layer,(function(e,i){return a("el-row",{staticStyle:{"margin-bottom":"10px",height:"24px"}},[a("el-tag",{staticStyle:{float:"left",width:"15%",height:"24px","line-height":"24px"},attrs:{align:"center"}},[t._v(t._s(e.id))]),t._v(" "),a("div",{staticStyle:{float:"left",width:"80%","margin-left":"10px"}},[100===e.progress?a("el-progress",{attrs:{percentage:e.progress,"text-inside":!0,"stroke-width":24,status:"success"}}):a("el-progress",{attrs:{percentage:e.progress,"text-inside":!0,"stroke-width":24}})],1)],1)})),1)]),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-input",{staticStyle:{width:"230px"},attrs:{size:"medium"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px","margin-bottom":"10px"},attrs:{size:"medium",type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.handleQuery(1)}}},[t._v("\n      查询\n    ")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px","margin-bottom":"10px"},attrs:{size:"medium",type:"primary",icon:"el-icon-edit"},on:{click:t.openCreate}},[t._v("\n      添加\n    ")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:"",align:"center"}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"image_name",label:"镜像名称","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"image_vul_name",label:"漏洞名称","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"image_port",label:"端口",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"rank",label:"分数",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"image_desc","show-overflow-tooltip":!0,label:"描述"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[!1===i.is_ok&&""!==i.status.task_id?a("el-tag",{staticStyle:{display:"inline-block",float:"left","line-height":"28px",height:"28px","margin-left":"5px"},attrs:{effect:"dark"},on:{click:function(e){return t.openProgress(i,1)}}},[a("div",{staticStyle:{display:"inline-block",float:"left"}},[a("span",[t._v("下载中")])]),t._v(" "),a("div",{staticStyle:{display:"inline-block",float:"left"}},[a("el-progress",{staticStyle:{"margin-left":"3px","margin-top":"3px"},attrs:{type:"circle","stroke-width":3,"show-text":!1,"text-inside":!1,percentage:i.status.progress,width:20}})],1)]):!1===i.is_ok&&""===i.status.task_id?a("el-tag",{staticStyle:{display:"inline-block",float:"left","line-height":"28px",height:"28px","margin-left":"5px"},attrs:{type:"danger",effect:"dark"}},[a("div",{staticStyle:{display:"inline-block",float:"left"}},[a("span",[t._v("下载失败")])])]):t._e(),t._v(" "),!0===i.is_ok||!1===i.is_ok&&""===i.status.task_id?a("el-button",{staticStyle:{display:"inline-block",float:"left","margin-left":"5px"},attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(e){return t.handleDelete(i)}}},[t._v("删除")]):t._e(),t._v(" "),!0===i.is_ok&&!0===i.is_share?a("el-tag",{staticStyle:{display:"inline-block",float:"left","line-height":"28px",height:"28px","margin-left":"5px"},attrs:{type:"success",effect:"dark"}},[a("div",{staticStyle:{display:"inline-block",float:"left"}},[a("span",[t._v("已分享")])])]):t._e(),t._v(" "),!0===i.is_ok&&!1===i.is_share&&"share"!==i.status.progress_status?a("el-button",{staticStyle:{display:"inline-block",float:"left","margin-left":"5px"},attrs:{size:"mini",type:"primary",icon:"el-icon-share"},on:{click:function(e){return t.shareImg(i)}}},[t._v("分享")]):t._e(),t._v(" "),!0===i.is_ok&&"share"===i.status.progress_status?a("el-tag",{staticStyle:{display:"inline-block",float:"left","line-height":"28px",height:"28px","margin-left":"5px"},attrs:{effect:"dark"},on:{click:function(e){return t.openProgress(i,2)}}},[a("div",{staticStyle:{display:"inline-block",float:"left"}},[a("span",[t._v("分享中")])]),t._v(" "),a("div",{staticStyle:{display:"inline-block",float:"left"}},[a("el-progress",{staticStyle:{"margin-left":"3px","margin-top":"3px"},attrs:{type:"circle","stroke-width":3,"show-text":!1,"text-inside":!1,percentage:i.status.progress,width:20}})],1)]):t._e()]}}])})],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-pagination",{attrs:{"page-size":t.page.size,layout:"total, prev, pager, next, jumper",total:t.page.total},on:{"current-change":t.handleQuery}})],1)],1)},n=[],s=(a("386d"),a("a481"),a("7f7f"),a("ac6a"),a("3007")),r=a("bc3a"),l=a.n(r);function o(t){var e="https://hub.docker.com/api/content/v1/products/search?page_size=50&q=vulfocus%2F"+t+"&type=image";return l()({method:"get",url:e,headers:{"Sec-Fetch-Site":"none","Sec-Fetch-Mode":"cors","Sec-Fetch-Dest":"empty","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9","Search-Version":"v3"}})}var c=a("b775");function u(t){return Object(c["a"])({url:"/images/",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function p(t){return Object(c["a"])({url:"/images/"+t+"/delete/"})}function f(){return Object(c["a"])({url:"/images/local/local/"})}function d(t){return Object(c["a"])({url:"/images/local/local_add/",method:"post",data:t})}function g(t){return Object(c["a"])({url:"/images/"+t+"/share/"})}var m=a("ea7f"),h={name:"index",data:function(){return{tableData:[],search:"",localSearch:"",centerDialogVisible:!1,startCon:!1,vulInfo:{rank:"",name:"",vul_name:"",desc:""},imgType:"text",imgTypeText:"切换为文件",loading:!1,summaries:[],taskCheckInterval:null,tmpImageNameList:[],localImageList:[],tmpLocalImageList:[],localLoading:!0,selectLocalImages:[],progressShow:!1,progressLoading:!1,progress:{title:"",layer:[],total:0,count:0,progress:0,progressInterval:null},taskList:[],taskDict:{},page:{total:0,size:20}}},created:function(){this.initTableData(),this.initSummariesList()},methods:{querySearchAsync:function(t,e){var a=this,i=this.summaries;null===t||""===t||0===t.length?(this.initSummariesList(),e(i)):o(t).then((function(t){if(a.summaries=[],200===t.status){var n=t.data["summaries"];null!=n&&n.forEach((function(t,e,i){a.summaries.push({value:t["name"]})})),i=a.summaries,e(i)}}))},searchSummariesList:function(t){var e=this;this.summaries=[],o(t).then((function(t){if(e.summaries=[],200===t.status){var a=t.data["summaries"];a.forEach((function(t,a,i){e.summaries.push({value:t["name"]})}))}}))},initSummariesList:function(){this.searchSummariesList("")},initTableData:function(){var t=this;clearInterval(this.taskCheckInterval),Object(s["e"])(void 0,!0,1).then((function(e){t.tableData=e.data.results,t.page.total=e.data.count,t.tableData.forEach((function(e,a,i){var n=e.image_name;t.tmpImageNameList.indexOf(n)>-1&&t.$notify({title:"成功",message:n+" 添加成功",type:"success"})}));var a=e.data.results;t.taskCheckInterval=window.setInterval((function(){setTimeout((function(){t.checkTask(a)}),0)}),2e3)}))},openCreate:function(){this.centerDialogVisible=!0,this.vulInfo.rank=2.5,this.vulInfo.name="",this.vulInfo.vul_name="",this.vulInfo.desc=""},openProgress:function(t,e){var a=this;this.progress={title:"",layer:[],total:0,count:0,progress:0,progressInterval:null},this.progressShow=!0,this.progressLoading=!0;var i=t.status.task_id;this.progress.title=1===e?"下载镜像："+t.image_name:"分享镜像："+t.image_name,this.progress.progressInterval=window.setInterval((function(){setTimeout((function(){a.progressLoading=!1,Object(m["c"])(i).then((function(t){null!=t.data.data&&200===t.data.status&&(a.progress.count=t.data.data.progress_count,a.progress.progress=t.data.data.progress,a.progress.total=t.data.data.total,a.progress.layer=t.data.data.layer,(100===a.progress.progress||0!==a.progress.count&&0!==a.progress.total&&a.progress.count===a.progress.total)&&(clearInterval(a.progress.progressInterval),a.progressShow=!1))}))}),1.5)}),2e3)},closeProgress:function(){this.progressShow=!1,this.progressLoading=!1;try{clearInterval(this.progress.progressInterval)}catch(t){}},changeType:function(){"file"===this.imgType?(this.imgType="text",this.imgTypeText="切换为文件"):(this.imgType="file",this.imgTypeText="切换为文本")},uploadImg:function(t){var e=this,a=new FormData;if(null!=this.$refs.upload){var i=this.$refs.upload.uploadFiles;(null!=this.$refs.upload.uploadFiles||this.$refs.upload.uploadFiles.length>0)&&a.set("file",i[0].raw)}a.set("rank",this.vulInfo.rank),a.set("image_name",this.vulInfo.name),a.set("image_vul_name",this.vulInfo.vul_name),a.set("image_desc",this.vulInfo.desc),this.loading=!0,u(a).then((function(t){e.loading=!1;var a=t.data,i=a["data"];if(null!=i&&(i.indexOf("成功")>-1||i.indexOf("失败")>-1)){var n=i.replace("拉取镜像","").replace("任务下发成功","").replace(" ","");e.tmpImageNameList.push(n),i.indexOf("成功")>-1?(e.$notify({title:"成功",message:i,type:"success"}),e.centerDialogVisible=!1,e.initTableData()):(e.$notify({title:i,message:i,type:"error"}),e.centerDialogVisible=!1)}else e.$notify({title:"成功",message:a["msg"],type:"success"}),e.centerDialogVisible=!1,e.initTableData()}))},shareImg:function(t){var e=this;t.status.status="share",g(t.image_id).then((function(t){var a=t.data,i=a.status;200===i||e.$message({message:a.msg,type:"error"}),e.initTableData()}))},handleDelete:function(t){var e=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){p(t.image_id).then((function(t){var a=t.data;200===a.status?(e.$notify({title:"成功",message:"删除成功!",type:"success"}),e.initTableData()):e.$notify({title:"失败",message:a.msg,type:"error"})}))})).catch((function(){}))},handleQuery:function(t){var e=this;Object(s["e"])(this.search,!0,t).then((function(t){e.tableData=t.data.results,e.page.total=t.data.count}))},handleSelect:function(t){this.vulInfo.name=t.value,this.vulInfo.vul_name=t.value.replace("vulfocus/",""),this.vulInfo.desc=t.value.replace("vulfocus/","")},checkTask:function(t){var e=this;t.forEach((function(t,a,i){var n=t["is_ok"],s=t["status"]["task_id"],r=t["status"]["progress_status"];(!1===n&&null!=s&&""!==s||!0===n&&null!=s&&""!==s&&"share"===r)&&-1===e.taskList.indexOf(s)&&(e.taskList.push(s),e.taskDict[s]=t)}));var a=this.taskList.join(",");if(null!=a&&""!==a){var i=new FormData;i.set("task_ids",a),Object(m["a"])(i).then((function(t){var a=t.data.data;for(var i in a){var n=a[i],s=n["status"];if(1!==s)if(e.removeArray(e.taskList,i),e.taskDict[i].is_ok=!0,200===n["data"]["status"]){var r=n["data"]["data"];try{var l=r.replace('{"image_port":',"").replace("}","").replace(":","").replace('"',"").replace('"',"");e.taskDict[i].image_port=l}catch(o){}try{n["data"]["msg"].indexOf("分享")>-1&&(e.taskDict[i].is_share=!0,e.taskDict[i].status.progress_status="")}catch(o){}e.$notify({message:n["data"]["msg"],type:"success"})}else{try{n["data"]["msg"].indexOf("分享")>-1&&(e.taskDict[i].is_share=!1,e.taskDict[i].status.progress_status="")}catch(o){}e.$notify({message:n["data"]["msg"],type:"error"})}else e.taskDict[i].status.progress=n["progress"]}null!=e.taskList&&0!==e.taskList.length||(e.taskList=[],e.taskDict={},clearInterval(e.taskCheckInterval))}))}},removeArray:function(t,e){for(var a=0;a<t.length;a++)if(t[a]===e){t.splice(a,1);break}},loadLocalImages:function(){var t=this;this.localLoading=!0,f().then((function(e){var a=e.data,i=a.status,n=a.data;200===i&&(t.localImageList=n,t.tmpLocalImageList=n),t.localLoading=!1}))},handleClick:function(t,e){var a=t.name;"local"===a&&this.loadLocalImages()},handleLocalRemove:function(t){for(var e=0;e<this.localImageList.length;e++)if(this.localImageList[e].name===t){this.localImageList.splice(e,1);break}},handleSelectLocalImages:function(t){var e=[];for(var a in t)e.push(t[a].name);this.selectLocalImages=e},batchLocalAdd:function(){var t=this;if(0!==this.selectLocalImages.length){var e=new FormData;e.set("image_names",this.selectLocalImages.join(",")),d(e).then((function(e){var a=e.data,i=a.data,n=a.status;if(200===n){for(var s=0;s<i.length;s++){var r=i[s],l=r.replace(" ","").replace("拉取镜像","").replace("任务下发成功","");t.tmpImageNameList.push(l),t.$notify({title:"成功",message:r,type:"success"})}t.centerDialogVisible=!1,t.initTableData()}else 201===n?t.$notify({title:"失败",message:a["msg"],type:"info"}):t.$notify({title:"失败",message:a["msg"],type:"error"})}))}}}},v=h,b=a("2877"),y=Object(b["a"])(v,i,n,!1,null,"24bb79ac",null);e["default"]=y.exports},ea7f:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return r}));var i=a("b775");function n(t){return Object(i["a"])({url:"/tasks/"+t+"/get/",method:"get"})}function s(t){return Object(i["a"])({url:"/tasks/batch/batch/",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/tasks/"+t+"/progress/",method:"get"})}}}]);
//# sourceMappingURL=chunk-687dd78a.d175a327.js.map