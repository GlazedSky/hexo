(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{571:function(t,e,a){"use strict";var n=a(4),s=a(192),i=a(81),r=a(16),l=a(19),o=a(193),v=a(82),c=a(83)("splice"),_=Math.max,u=Math.min;n({target:"Array",proto:!0,forced:!c},{splice:function(t,e){var a,n,c,d,p,h,f=l(this),g=r(f.length),m=s(t,g),y=arguments.length;if(0===y?a=n=0:1===y?(a=0,n=g-m):(a=y-2,n=u(_(i(e),0),g-m)),g+a-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(c=o(f,n),d=0;d<n;d++)(p=m+d)in f&&v(c,d,f[p]);if(c.length=n,a<n){for(d=m;d<g-n;d++)h=d+a,(p=d+n)in f?f[h]=f[p]:delete f[h];for(d=g;d>g-n+a;d--)delete f[d-1]}else if(a>n)for(d=g-n;d>m;d--)h=d+a-1,(p=d+n-1)in f?f[h]=f[p]:delete f[h];for(d=0;d<a;d++)f[d+m]=arguments[d+2];return f.length=g-n+a,c}})},599:function(t,e,a){},636:function(t,e,a){"use strict";a(599)},680:function(t,e,a){"use strict";a.r(e);a(571),a(61);var n={data:function(){return{tags:[{name:"标签一",type:""},{name:"Dark",type:"dark"},{name:"标签二",type:"success"},{name:"标签三",type:"info"},{name:"标签四",type:"warning"},{name:"标签五",type:"danger"}],dynamicTags:["标签一","标签二","标签三"],inputVisible:!1,inputValue:""}},methods:{handleClose:function(t){this.dynamicTags.splice(this.dynamicTags.indexOf(t),1)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var t=this.inputValue;t&&this.dynamicTags.push(t),this.inputVisible=!1,this.inputValue=""}}},s=(a(636),a(2)),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("用于标记和选择。")]),t._v(" "),a("h3",{attrs:{id:"基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),a("p",[t._v("由"),a("code",[t._v("type")]),t._v("属性来选择 tag 的类型，也可以通过"),a("code",[t._v("color")]),t._v("属性来自定义背景色。")]),t._v(" "),a("el-card",{attrs:{shadow:"hover"}},[a("el-tag",[t._v("标签一")]),t._v(" "),a("el-tag",{attrs:{type:"dark"}},[t._v("dark")]),t._v(" "),a("el-tag",{attrs:{type:"success"}},[t._v("success")]),t._v(" "),a("el-tag",{attrs:{type:"info"}},[t._v("Info")]),t._v(" "),a("el-tag",{attrs:{type:"warning"}},[t._v("warning")]),t._v(" "),a("el-tag",{attrs:{type:"danger"}},[t._v("danger")])],1),t._v(" "),a("h3",{attrs:{id:"可移除标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可移除标签"}},[t._v("#")]),t._v(" 可移除标签")]),t._v(" "),a("p",[t._v("设置"),a("code",[t._v("closable")]),t._v("属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置"),a("code",[t._v("disable-transitions")]),t._v("属性，它接受一个"),a("code",[t._v("Boolean")]),t._v("，true 为关闭。")]),t._v(" "),[a("el-card",{attrs:{shadow:"hover"}},t._l(t.tags,(function(e){return a("el-tag",{key:e.name,attrs:{closable:"",type:e.type}},[t._v("\n    "+t._s(e.name)+"\n  ")])})),1)],t._v(" "),a("h3",{attrs:{id:"动态编辑标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态编辑标签"}},[t._v("#")]),t._v(" 动态编辑标签")]),t._v(" "),a("p",[t._v("动态编辑标签可以通过点击标签关闭按钮后触发的 "),a("code",[t._v("close")]),t._v(" 事件来实现")]),t._v(" "),[a("el-card",{attrs:{shadow:"hover"}},[t._l(t.dynamicTags,(function(e){return a("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(a){return t.handleClose(e)}}},[t._v("\n    "+t._s(e)+"\n  ")])})),t._v(" "),t.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm.apply(null,arguments)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v("+ New Tag")])],2)],t._v(" "),a("h3",{attrs:{id:"不同尺寸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同尺寸"}},[t._v("#")]),t._v(" 不同尺寸")]),t._v(" "),a("p",[t._v("Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。")]),t._v(" "),a("p",[t._v("额外的尺寸："),a("code",[t._v("medium")]),t._v("、"),a("code",[t._v("small")]),t._v("、"),a("code",[t._v("mini")]),t._v("，通过设置"),a("code",[t._v("size")]),t._v("属性来配置它们。")]),t._v(" "),a("el-card",{attrs:{shadow:"hover"}},[a("el-tag",{attrs:{closable:""}},[t._v("默认标签")]),t._v(" "),a("el-tag",{attrs:{size:"medium",closable:""}},[t._v("中等标签")]),t._v(" "),a("el-tag",{attrs:{size:"small",closable:""}},[t._v("小型标签")]),t._v(" "),a("el-tag",{attrs:{size:"mini",closable:""}},[t._v("超小标签")])],1)],2)}),[],!1,null,"742ab648",null);e.default=i.exports}}]);