(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{563:function(e,l,a){var t=a(4),i=a(7),o=a(318),n=[].slice,s=function(e){return function(l,a){var t=arguments.length>2,i=t?n.call(arguments,2):void 0;return e(t?function(){("function"==typeof l?l:Function(l)).apply(this,i)}:l,a)}};t({global:!0,bind:!0,forced:/MSIE .\./.test(o)},{setTimeout:s(i.setTimeout),setInterval:s(i.setInterval)})},660:function(e,l,a){"use strict";a.r(l);a(563),a(61);var t={data:function(){return{options2:[{label:"江苏",cities:[]},{label:"浙江",cities:[]}],props:{value:"label",children:"cities"},options:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}],optionsWithDisabled:[],selectedOptions:[],selectedOptions2:[],selectedOptions3:["zujian","data","tag"]}},created:function(){this.optionsWithDisabled=JSON.parse(JSON.stringify(this.options)),this.optionsWithDisabled[0].disabled=!0},methods:{handleItemChange:function(e){var l=this;console.log("active item:",e),setTimeout((function(a){e.indexOf("江苏")>-1&&!l.options2[0].cities.length?l.options2[0].cities=[{label:"南京"}]:e.indexOf("浙江")>-1&&!l.options2[1].cities.length&&(l.options2[1].cities=[{label:"杭州"}])}),300)},handleChange:function(e){console.log(e)}}},i=a(2),o=Object(i.a)(t,(function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"cascader-级联选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cascader-级联选择器"}},[e._v("#")]),e._v(" Cascader 级联选择器")]),e._v(" "),a("p",[e._v("当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。")]),e._v(" "),a("h3",{attrs:{id:"基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[e._v("#")]),e._v(" 基础用法")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://element.eleme.io/#/zh-CN/component/cascader",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cascader"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"block"},[a("el-cascader",{attrs:{options:e.options},on:{change:e.handleChange},model:{value:e.selectedOptions,callback:function(l){e.selectedOptions=l},expression:"selectedOptions"}})],1)])}),[],!1,null,null,null);l.default=o.exports}}]);