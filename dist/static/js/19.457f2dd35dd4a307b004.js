webpackJsonp([19],{1031:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"businessOperation"},[a("div",{attrs:{id:"right"}},[e._m(0),e._v(" "),a("div",{staticClass:"search"},[a("span",[e._v("摄像头名称")]),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.departmentVal,callback:function(t){e.departmentVal=t},expression:"departmentVal"}}),e._v(" "),a("el-button",{staticClass:"btns",attrs:{type:"primary"},on:{click:e.QueryNeedsData}},[e._v("查询")]),e._v(" "),a("el-button",{staticClass:"btns",attrs:{type:"primary"},on:{click:e.openWin}},[e._v("添加监控点")]),e._v(" "),a("el-button",{staticClass:"btns",attrs:{type:"primary"},on:{click:e.ExportVideolist}},[e._v("导出")])],1),e._v(" "),e._m(1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"CameraResourceName",label:"摄像头资源名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"NameVideoMonitoringPoint",label:"视频监控点名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Contacts",label:"联系人"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ContactInformation",label:"联系方式"}}),e._v(" "),a("el-table-column",{attrs:{prop:"InstallationSite",label:"安装地点"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"eidt",attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick(t.row)}}},[e._v("编辑")]),e._v(" "),a("span",{staticStyle:{color:"#eee"}},[e._v("|")]),e._v(" "),a("el-button",{staticClass:"eidt",attrs:{type:"text",size:"small"},on:{click:function(a){e.DeleteOperatorInfo(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"page"},[a("span",{staticClass:"demonstration"},[e._v("共找到"+e._s(e.totalCount)+"条记录")]),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":e.pagesize,layout:"prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.lokerstate+"视频监控点",visible:e.dialogVisible,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"class-boxdar"},[a("div",{staticClass:"ca-left"},[a("div",{staticClass:"block"},[a("span",[e._v("视频自增ID：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入ID"},model:{value:e.videoId,callback:function(t){e.videoId=t},expression:"videoId"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("摄像头名称：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入摄像头名称"},model:{value:e.CamName,callback:function(t){e.CamName=t},expression:"CamName"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("摄像头编号：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入摄像头编号"},model:{value:e.CamIndexCode,callback:function(t){e.CamIndexCode=t},expression:"CamIndexCode"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("所属设备编号：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入所属设备编号"},model:{value:e.BelongDevice,callback:function(t){e.BelongDevice=t},expression:"BelongDevice"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("通道号：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入通道号"},model:{value:e.Channel,callback:function(t){e.Channel=t},expression:"Channel"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("设备类型：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入设备类型"},model:{value:e.DevType,callback:function(t){e.DevType=t},expression:"DevType"}})],1)]),e._v(" "),a("div",{staticClass:"ca-left"},[a("div",{staticClass:"block"},[a("span",[e._v("码流：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入码流"},model:{value:e.SubStream,callback:function(t){e.SubStream=t},expression:"SubStream"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("所属设备编号：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入所属设备编号"},model:{value:e.DevIndexCode,callback:function(t){e.DevIndexCode=t},expression:"DevIndexCode"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("经度：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入经度"},model:{value:e.Longitude,callback:function(t){e.Longitude=t},expression:"Longitude"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("纬度：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入纬度"},model:{value:e.Latitude,callback:function(t){e.Latitude=t},expression:"Latitude"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("摄像头类型：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入摄像头类型"},model:{value:e.Type,callback:function(t){e.Type=t},expression:"Type"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("联系人：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入联系人"},model:{value:e.Contact,callback:function(t){e.Contact=t},expression:"Contact"}})],1)]),e._v(" "),a("div",{staticClass:"ca-left"},[a("div",{staticClass:"block"},[a("span",[e._v("电话：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入电话"},model:{value:e.Phone,callback:function(t){e.Phone=t},expression:"Phone"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("企业名称：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入企业名称"},model:{value:e.CompanyName,callback:function(t){e.CompanyName=t},expression:"CompanyName"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("企业地址：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入企业地址"},model:{value:e.CompanyAddress,callback:function(t){e.CompanyAddress=t},expression:"CompanyAddress"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("所属区域：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入所属区域"},model:{value:e.Area,callback:function(t){e.Area=t},expression:"Area"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("区域编号：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入区域编号"},model:{value:e.GridCode,callback:function(t){e.GridCode=t},expression:"GridCode"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",[e._v("说明：")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入说明文字"},model:{value:e.shuoming,callback:function(t){e.shuoming=t},expression:"shuoming"}})],1)])]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.changeEidesend}},[e._v("确 定")])],1)])],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("div",{staticClass:"warning"},[a("a",[e._v("视频类型管理")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("div",{staticClass:"warning"},[a("a",[e._v("列表")])])])}]}},860:function(e,t,a){function n(e){a(965)}var i=a(1)(a(903),a(1031),n,"data-v-13329c35",null);e.exports=i.exports},903:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(105),i=(a.n(n),a(7));t.default={name:"businessOperation",data:function(){return{departmentVal:"",tableData:[{CameraResourceName:"摄像头"}],currentPage:1,pagesize:10,dialogVisible:!1,TotalRowsCount:null,totalCount:1,InfoData:[],ListData:[],lokerstate:"",videoId:"",CamName:"",CamIndexCode:"",BelongDevice:"",Channel:"",DevType:"",SubStream:"",DevIndexCode:"",Longitude:"",Latitude:"",Type:"",Contact:"",Phone:"",CompanyName:"",CompanyAddress:"",Area:"",GridCode:"",shuoming:""}},created:function(){},mounted:function(){this.getNotice(),i.a.GetVideoTypeR().then(function(e){console.log(e)})},computed:{},methods:{QueryNeedsData:function(){var e=this.departmentVal;this.getNotice(e)},ExportVideolist:function(){var e=this.departmentVal;i.a.VodeoExcelOutPutR(e)},DeleteOperatorInfo:function(e){var t=this;console.log(e);var a=e.Id;this.$confirm("确认要删除本条数据吗？").then(function(e){console.log("删除成功"),i.a.DeleteVideoPointR(a).then(function(e){console.log(res),e.data.Status>0?t.$message({showClose:!0,message:"删除成功",type:"success"}):t.$message({showClose:!0,message:"删除失败",type:"error"})}),setTimeout(function(){t.getNotice()},200)}).catch(function(e){console.log("删除失败")})},publish:function(){this.Insert(),this.getNotice()},handleClick:function(e){var t=this;this.lokerstate="编辑",this.dialogVisible=!0;var a=e.Id;i.a.GetVideoDeviceInfoByIdR(a).then(function(e){var a=e.data.Data;t.videoId=a.Id,t.CamName=a.CamName,t.CamIndexCode=a.CamIndexCode,t.BelongDevice=a.BelongDevice,t.Channel=a.Channel,t.DevType=a.DevType,t.SubStream=a.SubStream,t.DevIndexCode=a.DevIndexCode,t.Longitude=a.Longitude,t.Latitude=a.Latitude,t.Type=a.Type,t.Contact=a.Contact,t.Phone=a.Phone,t.CompanyName=a.CompanyName,t.CompanyAddress=a.CompanyAddress,t.Area=a.Area,t.GridCode=a.GridCode})},EditUpdate:function(){var e=this,t=e.videoId,a=e.CamName,n=e.CamIndexCode,s=e.BelongDevice,o=e.Channel,l=e.DevType,c=e.SubStream,r=e.DevIndexCode,d=e.Longitude,p=e.Latitude,u=e.Type,v=e.Contact,h=e.Phone,m=e.CompanyName,C=e.CompanyAddress,b=e.Area,g=e.GridCode;i.a.UpdateVideoPointR(t,a,n,s,o,l,c,r,d,p,u,v,h,m,C,b,g).then(function(t){t.data.Status>0?e.$message({showClose:!0,message:"编辑成功",type:"success"}):e.$message({showClose:!0,message:"编辑失败",type:"error"}),e.getNotice()})},changeEidesend:function(){var e=this;"添加"===e.lokerstate?e.publish():e.EditUpdate(),setTimeout(function(){e.dialogVisible=!1},600)},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){this.setPageTable(10,e)},openWin:function(){this.lokerstate="添加",this.dialogVisible=!0,this.videoId="",this.CamName="",this.CamIndexCode="",this.BelongDevice="",this.Channel="",this.DevType="",this.SubStream="",this.DevIndexCode="",this.Longitude="",this.Latitude="",this.Type="",this.Contact="",this.Phone="",this.CompanyName="",this.CompanyAddress="",this.Area="",this.GridCode="",this.shuoming=""},Insert:function(){var e=this,t=e.videoId,a=e.CamName,n=e.CamIndexCode,s=e.BelongDevice,o=e.Channel,l=e.DevType,c=e.SubStream,r=e.DevIndexCode,d=e.Longitude,p=e.Latitude,u=e.Type,v=e.Contact,h=e.Phone,m=e.CompanyName,C=e.CompanyAddress,b=e.Area,g=e.GridCode;i.a.AddVideoPointR(t,a,n,s,o,l,c,r,d,p,u,v,h,m,C,b,g).then(function(t){t.data.Status>0?e.$message({showClose:!0,message:"添加成功",type:"success"}):e.$message({showClose:!0,message:"添加失败",type:"error"})})},getNotice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this,a=e;this.ListData=[],i.a.GetVideoDeviceInfoR(a).then(function(e){var a=e.data.Data;t.totalCount=a.length,a.forEach(function(e){var a={};a.CameraResourceName=e.CamName,a.NameVideoMonitoringPoint=e.CompanyName,a.Contacts=e.Contact||"----",a.ContactInformation=e.Phone||"----",a.InstallationSite=e.CompanyAddress||"----",a.Latitude=e.Latitude,a.Longitude=e.Longitude,a.TypeName=e.TypeName,a.Id=e.Id,t.ListData.push(a)}),t.setPageTable(10,1)})},setPageTable:function(e,t){for(var a=[],n=e*(t-1),i=0;i<e&&!(n+i+1>this.ListData.length);i++)a.push(this.ListData[n+i]);this.tableData=a}}}},924:function(e,t,a){t=e.exports=a(832)(!1),t.push([e.i,".businessOperation .el-input[data-v-13329c35]{width:215px}.businessOperation .class-boxdar[data-v-13329c35]{margin:10px 20px}.businessOperation .class-boxdar .ca-left[data-v-13329c35]{margin-bottom:15px;width:33%;height:auto;float:left}.businessOperation .class-boxdar .ca-left .block[data-v-13329c35]{margin-top:15px}.businessOperation .class-boxdar .ca-left .block span[data-v-13329c35]{display:inline-block;width:100px;text-align:right}.businessOperation #right[data-v-13329c35]{width:100%;overflow:hidden;padding:20px;background-color:#f6fbff}.businessOperation #right .box[data-v-13329c35]{width:100%;height:auto}.businessOperation #right .box .warning[data-v-13329c35]{text-align:left;border-bottom:1px solid #ccc;width:100%;height:40px;margin-top:10px;margin-bottom:20px;margin-left:10px}.businessOperation #right .box .warning a[data-v-13329c35]{display:inline-block;height:20px;border-left:3px solid #428bca;padding-left:13px;font-size:16px;line-height:20px}.businessOperation #right .search[data-v-13329c35]{text-align:left;margin-bottom:24px}.businessOperation #right .search .searchBox[data-v-13329c35]{display:inline-block;margin-right:20px}.businessOperation #right .search .block[data-v-13329c35]{display:inline-block}.businessOperation #right .search .btns[data-v-13329c35]{margin-left:40px}.businessOperation #right .page[data-v-13329c35]{text-align:left}.businessOperation #right .eidt[data-v-13329c35]{color:#000}.businessOperation #right .eidt[data-v-13329c35] :hover{color:#20a0ff;text-decoration:underline}.businessOperation #right .InfoEnd[data-v-13329c35]{color:#000}.businessOperation #right .InfoEnd[data-v-13329c35] :hover{color:#bf3831;text-decoration:underline}.businessOperation #right .el-pagination[data-v-13329c35]{display:inline-block;margin-left:170px;padding-bottom:90px}",""])},965:function(e,t,a){var n=a(924);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(833)("600d2c91",n,!0,{})}});