(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{571:function(e,t,a){"use strict";var r=a(4),l=a(192),n=a(81),o=a(16),s=a(19),d=a(193),c=a(82),i=a(83)("splice"),v=Math.max,_=Math.min;r({target:"Array",proto:!0,forced:!i},{splice:function(e,t){var a,r,i,p,u,m,h=s(this),b=o(h.length),f=l(e,b),w=arguments.length;if(0===w?a=r=0:1===w?(a=0,r=b-f):(a=w-2,r=_(v(n(t),0),b-f)),b+a-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(i=d(h,r),p=0;p<r;p++)(u=f+p)in h&&c(i,p,h[u]);if(i.length=r,a<r){for(p=f;p<b-r;p++)m=p+a,(u=p+r)in h?h[m]=h[u]:delete h[m];for(p=b;p>b-r+a;p--)delete h[p-1]}else if(a>r)for(p=b-r;p>f;p--)m=p+a-1,(u=p+r-1)in h?h[m]=h[u]:delete h[m];for(p=0;p<a;p++)h[p+f]=arguments[p+2];return h.length=b-r+a,i}})},598:function(e,t,a){},633:function(e,t,a){"use strict";var r=a(12),l=a(7),n=a(197),o=a(34),s=a(13),d=a(49),c=a(325),i=a(84),v=a(5),_=a(63),p=a(86).f,u=a(51).f,m=a(11).f,h=a(201).trim,b=l.Number,f=b.prototype,w="Number"==d(_(f)),g=function(e){var t,a,r,l,n,o,s,d,c=i(e,!1);if("string"==typeof c&&c.length>2)if(43===(t=(c=h(c)).charCodeAt(0))||45===t){if(88===(a=c.charCodeAt(2))||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+c}for(o=(n=c.slice(2)).length,s=0;s<o;s++)if((d=n.charCodeAt(s))<48||d>l)return NaN;return parseInt(n,r)}return+c};if(n("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var y,I=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof I&&(w?v((function(){f.valueOf.call(a)})):"Number"!=d(a))?c(new b(g(t)),a,I):g(t)},N=r?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;N.length>S;S++)s(b,y=N[S])&&!s(I,y)&&m(I,y,u(b,y));I.prototype=f,f.constructor=I,o(l,"Number",I)}},634:function(e,t,a){"use strict";var r=a(4),l=a(52).every;r({target:"Array",proto:!0,forced:!a(65)("every")},{every:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})},635:function(e,t,a){"use strict";a(598)},678:function(e,t,a){"use strict";a.r(t);a(118),a(119),a(35),a(633),a(634),a(323),a(571);var r={data:function(){return{tableData:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,tag:"家"},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,tag:"公司"},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,tag:"家"},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,tag:"公司"}],tableData2:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",$info:!0},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",$positive:!0}],tableData3:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",detailAddress:"金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",detailAddress:"金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",detailAddress:"金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",detailAddress:"金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",detailAddress:"金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",detailAddress:"金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",detailAddress:"金沙江路 1518 弄",zip:200333}],tableData4:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}],tableData5:[{id:"12987122",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987123",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987125",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"},{id:"12987126",name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:"10333"}],tableData6:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}],currentRow:null,multipleSelection:[]}},methods:{getSummaries:function(e){var t=e.columns,a=e.data,r=[];return t.forEach((function(e,t){if(0!==t){var l=a.map((function(t){return Number(t[e.property])}));l.every((function(e){return isNaN(e)}))?r[t]="N/A":(r[t]=l.reduce((function(e,t){var a=Number(t);return isNaN(a)?e:e+t}),0),r[t]+=" 元")}else r[t]="总价"})),r},setCurrent:function(e){this.$refs.singleTable.setCurrentRow(e)},toggleSelection:function(e){var t=this;e?e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleClick:function(e){console.log(e)},handleEdit:function(e,t){console.log(e,t)},handleDelete:function(e,t){console.log(e,t)},handleSelectionChange:function(e){this.multipleSelection=e},handleCurrentChange:function(e){this.currentRow=e},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},filterHandler:function(e,t,a){return t[a.property]===e},tableRowClassName:function(e){e.row;var t=e.rowIndex;return 1===t?"warning-row":3===t?"success-row":""},deleteRow:function(e,t){t.splice(e,1)},arraySpanMethod:function(e){e.row,e.column;var t=e.rowIndex,a=e.columnIndex;if(t%2==0){if(0===a)return[1,2];if(1===a)return[0,0]}},objectSpanMethod:function(e){e.row,e.column;var t=e.rowIndex;if(0===e.columnIndex)return t%2==0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}},indexMethod:function(e){return 2*e}},watch:{multipleSelection:function(e){console.log("selection: ",e)}}},l=(a(635),a(2)),n=Object(l.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"http://element.eleme.io/#/zh-CN/component/table",target:"_blank",rel:"noopener noreferrer"}},[e._v("Table"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。")]),e._v(" "),a("h3",{attrs:{id:"基础表格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础表格"}},[e._v("#")]),e._v(" 基础表格")]),e._v(" "),a("p",[e._v("基础的表格展示用法。")]),e._v(" "),a("p",[e._v("当"),a("code",[e._v("el-table")]),e._v("元素中注入"),a("code",[e._v("data")]),e._v("对象数组后，在"),a("code",[e._v("el-table-column")]),e._v("中用"),a("code",[e._v("prop")]),e._v("属性来对应对象中的键名即可填入数据，用"),a("code",[e._v("label")]),e._v("属性来定义表格的列名。可以使用"),a("code",[e._v("width")]),e._v("属性来定义列宽。")]),e._v(" "),[a("el-card",{attrs:{shadow:"hover"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)],e._v(" "),a("h3",{attrs:{id:"带斑马纹表格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带斑马纹表格"}},[e._v("#")]),e._v(" 带斑马纹表格")]),e._v(" "),a("p",[e._v("使用带斑马纹的表格，可以更容易区分出不同行的数据。")]),e._v(" "),a("p",[a("code",[e._v("stripe")]),e._v("属性可以创建带斑马纹的表格。它接受一个"),a("code",[e._v("Boolean")]),e._v("，默认为"),a("code",[e._v("false")]),e._v("，设置为"),a("code",[e._v("true")]),e._v("即为启用。")]),e._v(" "),[a("el-card",{attrs:{shadow:"hover"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)],e._v(" "),a("h3",{attrs:{id:"带边框表格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带边框表格"}},[e._v("#")]),e._v(" 带边框表格")]),e._v(" "),a("p",[e._v("默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用"),a("code",[e._v("border")]),e._v("属性，它接受一个"),a("code",[e._v("Boolean")]),e._v("，设置为"),a("code",[e._v("true")]),e._v("即可启用。")]),e._v(" "),[a("el-card",{attrs:{shadow:"hover"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)],e._v(" "),a("h3",{attrs:{id:"多级表头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多级表头"}},[e._v("#")]),e._v(" 多级表头")]),e._v(" "),a("p",[e._v("数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。")]),e._v(" "),a("p",[e._v("只需要在 el-table-column 里面嵌套 el-table-column，就可以实现多级表头。")]),e._v(" "),[a("el-card",{attrs:{shadow:"hover"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData3}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"配送信息"}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"地址"}},[a("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}})],1)],1)],1)],1)],e._v(" "),a("h3",{attrs:{id:"单选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单选"}},[e._v("#")]),e._v(" 单选")]),e._v(" "),a("p",[e._v("选择单行数据时使用色块表示。")]),e._v(" "),a("p",[e._v("Table 组件提供了单选的支持，只需要配置"),a("code",[e._v("highlight-current-row")]),e._v("属性即可实现单选。之后由"),a("code",[e._v("current-change")]),e._v("事件来管理选中时触发的事件，它会传入"),a("code",[e._v("currentRow")]),e._v("，"),a("code",[e._v("oldCurrentRow")]),e._v("。如果需要显示索引，可以增加一列"),a("code",[e._v("el-table-column")]),e._v("，设置"),a("code",[e._v("type")]),e._v("属性为"),a("code",[e._v("index")]),e._v("即可显示从 1 开始的索引号。")]),e._v(" "),[a("el-card",{attrs:{shadow:"hover"}},[a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":""},on:{"current-change":e.handleCurrentChange}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{property:"date",label:"日期",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{property:"name",label:"姓名",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{property:"address",label:"地址"}})],1),e._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{on:{click:function(t){return e.setCurrent(e.tableData[1])}}},[e._v("选中第二行")]),e._v(" "),a("el-button",{on:{click:function(t){return e.setCurrent()}}},[e._v("取消选择")])],1)],1)],e._v(" "),a("h3",{attrs:{id:"排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[e._v("#")]),e._v(" 排序")]),e._v(" "),a("p",[e._v("对表格进行排序，可快速查找或对比数据。")]),e._v(" "),a("p",[e._v("在列中设置"),a("code",[e._v("sortable")]),e._v("属性即可实现以该列为基准的排序，接受一个"),a("code",[e._v("Boolean")]),e._v("，默认为"),a("code",[e._v("false")]),e._v("。可以通过 Table 的"),a("code",[e._v("default-sort")]),e._v("属性设置默认的排序列和排序顺序。可以使用"),a("code",[e._v("sort-method")]),e._v("或者"),a("code",[e._v("sort-by")]),e._v("使用自定义的排序规则。如果需要后端排序，需将"),a("code",[e._v("sortable")]),e._v("设置为"),a("code",[e._v("custom")]),e._v("，同时在 Table 上监听"),a("code",[e._v("sort-change")]),e._v("事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了"),a("code",[e._v("formatter")]),e._v("属性，它用于格式化指定列的值，接受一个"),a("code",[e._v("Function")]),e._v("，会传入两个参数："),a("code",[e._v("row")]),e._v("和"),a("code",[e._v("column")]),e._v("，可以根据自己的需求进行处理。")]),e._v(" "),a("el-card",{attrs:{shadow:"hover"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"default-sort":{prop:"date",order:"descending"}}},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('<el-table-column\n  prop="date"\n  label="日期"\n  sortable\n  width="180">\n</el-table-column>\n<el-table-column\n  prop="name"\n  label="姓名"\n  sortable\n  width="180">\n</el-table-column>\n<el-table-column\n  prop="address"\n  label="地址"\n  :formatter="formatter">\n</el-table-column>\n')])])])])],1),e._v(" "),a("h3",{attrs:{id:"展开行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#展开行"}},[e._v("#")]),e._v(" 展开行")]),e._v(" "),a("p",[e._v('当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。\n通过设置 type="expand" 和 '),a("code",[e._v("Scoped slot")]),e._v(" 可以开启展开行功能，"),a("code",[e._v("el-table-column")]),e._v(" 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 "),a("code",[e._v("Scoped slot")]),e._v(" 相同。")]),e._v(" "),[a("el-card",{attrs:{shadow:"hover"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData5}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"商品名称"}},[a("span",[e._v(e._s(t.row.name))])]),e._v(" "),a("el-form-item",{attrs:{label:"所属店铺"}},[a("span",[e._v(e._s(t.row.shop))])]),e._v(" "),a("el-form-item",{attrs:{label:"商品 ID"}},[a("span",[e._v(e._s(t.row.id))])]),e._v(" "),a("el-form-item",{attrs:{label:"店铺 ID"}},[a("span",[e._v(e._s(t.row.shopId))])]),e._v(" "),a("el-form-item",{attrs:{label:"商品分类"}},[a("span",[e._v(e._s(t.row.category))])]),e._v(" "),a("el-form-item",{attrs:{label:"店铺地址"}},[a("span",[e._v(e._s(t.row.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"商品描述"}},[a("span",[e._v(e._s(t.row.desc))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商品 ID",prop:"id"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品名称",prop:"name"}}),e._v(" "),a("el-table-column",{attrs:{label:"描述",prop:"desc"}})],1)],1)]],2)}),[],!1,null,"01c28cbc",null);t.default=n.exports}}]);