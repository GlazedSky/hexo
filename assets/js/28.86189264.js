(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{589:function(t,e,l){},624:function(t,e,l){"use strict";l(589)},671:function(t,e,l){"use strict";l.r(e);var s={data:function(){return{activeIndex:"1",activeIndex2:"1",isCollapse:!0}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},handleSelect:function(t,e){console.log(t,e)}}},a=(l(624),l(2)),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("p",[t._v("为网站提供导航功能的菜单。")]),t._v(" "),l("h3",{attrs:{id:"顶栏"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#顶栏"}},[t._v("#")]),t._v(" 顶栏")]),t._v(" "),l("p",[t._v("适用广泛的基础用法。")]),t._v(" "),l("p",[t._v("导航菜单默认为垂直模式，通过"),l("code",[t._v("mode")]),t._v("属性可以使导航菜单变更为水平模式。另外，在菜单中通过"),l("code",[t._v("submenu")]),t._v("组件可以生成二级菜单。Menu 还提供了"),l("code",[t._v("background-color")]),t._v("、"),l("code",[t._v("text-color")]),t._v("和"),l("code",[t._v("active-text-color")]),t._v("，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。")]),t._v(" "),l("p",[t._v("本主题采用黑白线条风格。")]),t._v(" "),[l("el-card",{attrs:{shadow:"hover"}},[l("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[l("el-menu-item",{attrs:{index:"1"}},[t._v("处理中心")]),t._v(" "),l("el-submenu",{attrs:{index:"2"}},[l("template",{slot:"title"},[t._v("我的工作台")]),t._v(" "),l("el-menu-item",{attrs:{index:"2-1"}},[t._v("选项1")]),t._v(" "),l("el-menu-item",{attrs:{index:"2-2"}},[t._v("选项2")]),t._v(" "),l("el-menu-item",{attrs:{index:"2-3"}},[t._v("选项3")]),t._v(" "),l("el-submenu",{attrs:{index:"2-4"}},[l("template",{slot:"title"},[t._v("选项4")]),t._v(" "),l("el-menu-item",{attrs:{index:"2-4-1"}},[t._v("选项1")]),t._v(" "),l("el-menu-item",{attrs:{index:"2-4-2"}},[t._v("选项2")]),t._v(" "),l("el-menu-item",{attrs:{index:"2-4-3"}},[t._v("选项3")])],2)],2),t._v(" "),l("el-menu-item",{attrs:{index:"3",disabled:""}},[t._v("消息中心")]),t._v(" "),l("el-menu-item",{attrs:{index:"4"}},[l("a",{attrs:{href:"https://yunyoujun.cn",target:"_blank"}},[t._v("订单管理")])])],1)],1)],t._v(" "),l("h3",{attrs:{id:"侧栏"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#侧栏"}},[t._v("#")]),t._v(" 侧栏")]),t._v(" "),l("p",[t._v("垂直菜单，可内嵌子菜单。")]),t._v(" "),l("p",[t._v("通过"),l("code",[t._v("el-menu-item-group")]),t._v("组件可以实现菜单进行分组，分组名可以通过"),l("code",[t._v("title")]),t._v("属性直接设定，也可以通过具名 slot 来设定。")]),t._v(" "),[l("el-card",{attrs:{shadow:"hover"}},[l("el-row",{staticClass:"tac"},[l("el-col",{attrs:{span:12}},[l("h5",[t._v("默认颜色")]),t._v(" "),l("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2"},on:{open:t.handleOpen,close:t.handleClose}},[l("el-submenu",{attrs:{index:"1"}},[l("template",{slot:"title"},[l("i",{staticClass:"el-icon-location"}),t._v(" "),l("span",[t._v("导航一")])]),t._v(" "),l("el-menu-item-group",[l("template",{slot:"title"},[t._v("分组一")]),t._v(" "),l("el-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")]),t._v(" "),l("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),t._v(" "),l("el-menu-item-group",{attrs:{title:"分组2"}},[l("el-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],1),t._v(" "),l("el-submenu",{attrs:{index:"1-4"}},[l("template",{slot:"title"},[t._v("选项4")]),t._v(" "),l("el-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项1")])],2)],2),t._v(" "),l("el-menu-item",{attrs:{index:"2"}},[l("i",{staticClass:"el-icon-menu"}),t._v(" "),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),t._v(" "),l("el-menu-item",{attrs:{index:"3",disabled:""}},[l("i",{staticClass:"el-icon-document"}),t._v(" "),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),t._v(" "),l("el-menu-item",{attrs:{index:"4"}},[l("i",{staticClass:"el-icon-setting"}),t._v(" "),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])])],1)],1)],1)],1)],t._v(" "),l("h3",{attrs:{id:"折叠"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#折叠"}},[t._v("#")]),t._v(" 折叠")]),t._v(" "),l("el-card",{attrs:{shadow:"hover"}},[l("el-radio-group",{staticStyle:{"margin-bottom":"20px"},model:{value:t.isCollapse,callback:function(e){t.isCollapse=e},expression:"isCollapse"}},[l("el-radio-button",{attrs:{label:!1}},[t._v("展开")]),t._v(" "),l("el-radio-button",{attrs:{label:!0}},[t._v("收起")])],1),t._v(" "),l("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:t.isCollapse},on:{open:t.handleOpen,close:t.handleClose}},[l("el-submenu",{attrs:{index:"1"}},[l("template",{slot:"title"},[l("i",{staticClass:"el-icon-location"}),t._v(" "),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航一")])]),t._v(" "),l("el-menu-item-group",[l("span",{attrs:{slot:"title"},slot:"title"},[t._v("分组一")]),t._v(" "),l("el-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")]),t._v(" "),l("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],1),t._v(" "),l("el-menu-item-group",{attrs:{title:"分组2"}},[l("el-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],1),t._v(" "),l("el-submenu",{attrs:{index:"1-4"}},[l("span",{attrs:{slot:"title"},slot:"title"},[t._v("选项4")]),t._v(" "),l("el-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项1")])],1)],2),t._v(" "),l("el-menu-item",{attrs:{index:"2"}},[l("i",{staticClass:"el-icon-menu"}),t._v(" "),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),t._v(" "),l("el-menu-item",{attrs:{index:"3",disabled:""}},[l("i",{staticClass:"el-icon-document"}),t._v(" "),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),t._v(" "),l("el-menu-item",{attrs:{index:"4"}},[l("i",{staticClass:"el-icon-setting"}),t._v(" "),l("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])])],1)],1)],2)}),[],!1,null,null,null);e.default=n.exports}}]);