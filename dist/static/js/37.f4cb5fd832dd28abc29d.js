webpackJsonp([37],{1028:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"main"},[i("div",{staticClass:"first"},[i("div",{staticClass:"tables"},[i("a",{staticClass:"bai",attrs:{id:"shishi"},on:{click:function(a){t.RealTimeFatchtoo()}}},[t._v("实时")]),t._v(" "),i("a",{attrs:{id:"leiji"},on:{click:function(a){t.CumulativeFatchtoo()}}},[t._v("累计")]),t._v(" "),i("font",{staticClass:"time2"},[t._v("更新时间："+t._s(t.NewUptime))])],1)]),t._v(" "),i("div",{staticClass:"tqbiaoti"},[t._v("固安县空气质量")]),t._v(" "),t.tianqiyuji?i("strong",{staticClass:"strong"},[t._v("今日空气质量预计为："+t._s(t.Datalist.quality))]):t._e(),t._v(" "),i("div",{staticClass:"Second"},[i("div",{staticClass:"tianqi"},[i("div",{staticClass:"tqbj"},[i("img",{staticClass:"beijing",attrs:{src:"static/imgs/weather/"+t.Datalist.weather+".png",title:t.Datalist.weather}})]),t._v(" "),i("p",[t._v("温度："+t._s(t.Datalist.temp)+"°C")]),t._v(" "),i("p",[t._v("湿度："+t._s(t.Datalist.humi)+"%")]),t._v(" "),i("p",[t._v("风力："+t._s(t.Datalist.wl)+t._s(t.Datalist.wd))]),t._v(" "),i("p",[t._v("降雨量："+t._s(t.Datalist.rain)+"mm")])]),t._v(" "),i("div",{staticClass:"yuanjindu"},[i("div",{staticClass:"jdflaot"},[i("div",{staticStyle:{width:"90px",height:"90px"},attrs:{id:"main_x"}}),t._v(" "),i("div",{staticClass:"texts"},[t._v(t._s(t.Datalist.aqi))]),t._v(" "),i("p",[t._v("小时AQI")])]),t._v(" "),i("div",{staticClass:"jdflaot"},[i("div",{staticStyle:{width:"90px",height:"90px"},attrs:{id:"main_y"}}),t._v(" "),i("div",{staticClass:"texts"},[t._v(t._s(t.Datalist.aqiAccu))]),t._v(" "),i("p",[t._v("当日累计AQI")])]),t._v(" "),i("div",{staticClass:"jdflaot"},[i("div",{staticStyle:{width:"90px",height:"90px"},attrs:{id:"main_z"}}),t._v(" "),i("div",{staticClass:"texts"},[t._v(t._s(t.Datalist.ComplexIndex))]),t._v(" "),i("p",[t._v("小时综合指数")])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.shishi,expression:"shishi"}],staticClass:"ph",staticStyle:{"margin-bottom":"4px"}},[i("ul",[i("li",{style:{background:t.Datalist.pm25Color,color:t.Datalist.pm25>100?t.changeColor:""}},[t._v("\n                                  PM2.5\n                              ")]),t._v(" "),i("li",{style:{background:t.Datalist.pm10Color,color:t.Datalist.pm10>150?t.changeColor:""}},[t._v("\n                                  PM10\n                              ")]),t._v(" "),i("li",{style:{background:t.Datalist.so2Color,color:t.Datalist.so2>150?t.changeColor:""}},[t._v("\n                                  SO2\n                              ")]),t._v(" "),i("li",{style:{background:t.Datalist.coColor,color:t.Datalist.co>150?t.changeColor:""}},[t._v("CO\n                              ")]),t._v(" "),i("li",{style:{background:t.Datalist.no2Color,color:t.Datalist.no2>100?t.changeColor:""}},[t._v("\n                                  NO2\n                              ")]),t._v(" "),i("li",{style:{background:t.Datalist.o3Color,color:t.Datalist.o3>150?t.changeColor:""}},[t._v("O3\n                              ")])]),t._v(" "),i("ol",[i("li",[t._v(t._s(t.Datalist.pm25))]),t._v(" "),i("li",[t._v(t._s(t.Datalist.pm10))]),t._v(" "),i("li",[t._v(t._s(t.Datalist.so2))]),t._v(" "),i("li",[t._v(t._s(t.Datalist.co))]),t._v(" "),i("li",[t._v(t._s(t.Datalist.no2))]),t._v(" "),i("li",[t._v(t._s(t.Datalist.o3))])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.leiji,expression:"leiji"}],staticClass:"ph",staticStyle:{"margin-bottom":"4px"}},[i("ul",[i("li",{style:{background:t.CumulativeData.pm25Color}},[t._v("PM2.5")]),t._v(" "),i("li",{style:{background:t.CumulativeData.pm10Color}},[t._v("PM10")]),t._v(" "),i("li",{style:{background:t.CumulativeData.so2Color}},[t._v("SO2")]),t._v(" "),i("li",{style:{background:t.CumulativeData.coColor}},[t._v("CO")]),t._v(" "),i("li",{style:{background:t.CumulativeData.no2Color}},[t._v("NO2")]),t._v(" "),i("li",{style:{background:t.CumulativeData.o3Color}},[t._v("O3")])]),t._v(" "),i("ol",[i("li",[t._v(t._s(t.CumulativeData.pm25))]),t._v(" "),i("li",[t._v(t._s(t.CumulativeData.pm10))]),t._v(" "),i("li",[t._v(t._s(t.CumulativeData.so2))]),t._v(" "),i("li",[t._v(t._s(t.CumulativeData.co))]),t._v(" "),i("li",[t._v(t._s(t.CumulativeData.no2))]),t._v(" "),i("li",[t._v(t._s(t.CumulativeData.o3))])])])]),t._v(" "),i("div",{staticClass:"table"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"current-change":t.RowCurrentChange}},[i("el-table-column",{attrs:{prop:"ranking",label:"排名",width:"52"}}),t._v(" "),i("el-table-column",{attrs:{prop:"pointname",label:"国省控点",width:"150"}}),t._v(" "),i("el-table-column",{attrs:{prop:"AirQualityGrade",label:"空气质量等级",width:"75"}}),t._v(" "),i("el-table-column",{attrs:{prop:"aqi",label:t.labelType,width:"60"}}),t._v(" "),i("el-table-column",{attrs:{prop:"PrimaryPollutant",label:"首要污染物"}})],1)],1)])},staticRenderFns:[]}},837:function(t,a,i){function e(t){i(962)}var o=i(1)(i(879),i(1028),e,"data-v-0c90d4bc",null);t.exports=o.exports},879:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i(6),o=i(7);a.default={name:"monitoring",data:function(){return{activeName:"guokongdian",changeColor:"#fff",ptType:"国控点",type:"AQI",labelType:"AQI",ClabelType:"AQI",tableData:[],tableCityData:[],DistrictCountyData:[],allData:[],value1:"",histrData:"",value2:"",Datalist:{},tianqiyuji:!0,CumulativeData:{},shishi:!0,leiji:!1,NewUptime:""}},created:function(){},mounted:function(){var t=this,a=this;$(".first .tables a").on("click",function(){$(this).addClass("bai").siblings().removeClass("bai")}),o.a.GetMonitoringPointReal().then(function(t){var i=t.data.Data;a.ObjectFactoryData(i,a.type)}),e.a.$on("switchRender",this.switchRender),o.a.GetLfAirData().then(function(a){var i=a.data.Data;t.Datalist=i,console.log(i),t.newUptimesData(t.Datalist.time),t.GetHourAPIcolortu(),t.GetCumulativeAPIcolortu(),t.GetcompositeIndexcolortu()})},methods:{newUptimesData:function(t){var a=t.replace("T"," "),i=a.replace("Z"," ");this.NewUptime=i},compare:function(t){return function(a,i){var e=a[t];return i[t]-e}},RowCurrentChange:function(t){},ObjectFactoryData:function(t,a){var i=this;this.data=t,this.histrData=t,this.tableData=[];var e=1;t.sort(this.compare("pm2.5"==a.toLowerCase()?"pm25":"index"==a.toLowerCase()?"complexindex":a.toLowerCase())).forEach(function(t){var o={};o.ranking=e++,o.pointname=t.pointname,o.citygid=t.citygid,o.latitude=t.latitude,o.longitude=t.longitude,o.AirQualityGrade=t.quality,o.aqi=t[i.getPollution(a.toLowerCase())],o.PrimaryPollutant=t.primary_pollutant,i.tableData.push(o)})},switchRender:function(t){this.type=t,this.labelType=this.Tochangelabeltype(t),this.ObjectFactoryData(this.histrData,this.type)},Tochangelabeltype:function(t){var a=t;switch(t.toUpperCase()){case"AQI":a="AQI";break;case"PM25":a="PM2.5";break;case"PM10":a="PM10";break;case"SO2":a="SO2";break;case"NO2":a="NO2";break;case"CO":a="CO";break;case"O3":a="O3";break;case"COMPLEXINDEX":a="综指";break;case"TEMP":a="温度";break;case"HUMI":a="湿度";break;case"WINDANGLE":a="风向";break;case"WINDSPEED":a="风力"}return a},getPollution:function(t){var a=t;switch(t.toUpperCase()){case"PM2.5":a="pm25";break;case"INDEX":a="complexindex";break;case"WS":a="windspeed";break;case"WD":case"WINDANGLE":a="winddirection"}return a},getPollutionTarget:function(t){var a=t;switch(t.toUpperCase()){case"INDEX":a="综指";break;case"TEMP":a="温度";break;case"HUMI":a="湿度";break;case"WS":a="风级";break;case"WD":a="风向"}return a},handleClick:function(t,a){this.ptType=t.label},GetHourAPIcolortu:function(){var t=500-this.Datalist.aqi,a=this.Datalist.aqi,i=this.Datalist.aqiColor,e=echarts.init(document.getElementById("main_x"));app.title="";var o={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left"},series:[{name:"小时AQI",type:"pie",radius:["100%","90%"],avoidLabelOverlap:!1,hoverAnimation:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!1,textStyle:{fontSize:"20",fontWeight:"bold"}}},labelLine:{normal:{show:!1}}}]};e.setOption(o),e.setOption({series:[{data:[{value:t,name:"占比"},{value:a,name:"AQI"}],color:["#ccc",i]}]})},GetCumulativeAPIcolortu:function(){var t=500-this.Datalist.aqiAccu,a=this.Datalist.aqiAccu,i=this.Datalist.accuAqiColor,e=echarts.init(document.getElementById("main_y"));app.title="";var o={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left"},series:[{name:"累计AQI",type:"pie",radius:["100%","90%"],avoidLabelOverlap:!1,hoverAnimation:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!1,textStyle:{fontSize:"20",fontWeight:"bold"}}},labelLine:{normal:{show:!1}}}]};e.setOption(o),e.setOption({series:[{data:[{value:t,name:"占比"},{value:a,name:"累计AQI"}],color:["#ccc",i]}]})},GetcompositeIndexcolortu:function(){var t=112.53-this.Datalist.ComplexIndex,a=this.Datalist.ComplexIndex,i=this.Datalist.aqiColor,e=echarts.init(document.getElementById("main_z"));app.title="";var o={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left"},series:[{name:"综合指数",type:"pie",radius:["100%","90%"],avoidLabelOverlap:!1,hoverAnimation:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!1,textStyle:{fontSize:"20",fontWeight:"bold"}}},labelLine:{normal:{show:!1}}}]};e.setOption(o),e.setOption({series:[{data:[{value:t,name:"占比"},{value:a,name:"综合指数"}],color:["#ccc",i]}]})},handleSizeChange:function(t){},handleCurrentChange:function(t){this.setPageTable(10,t)},setPageTable:function(t,a){for(var i=[],e=t*(a-1),o=0;o<t&&!(e+o+1>this.allData.length);o++)i.push(this.allData[e+o]);this.tableData=i},RealTimeFatchtoo:function(){var t=this;this.leiji=!1,this.shishi=!0,this.tianqiyuji=!0,o.a.GetMonitoringPointReal().then(function(a){var i=a.data.Data;t.ObjectFactoryData(i,t.type),e.a.$emit("loadCumulative",i,"layer_gs",t.type,"pointname")})},CumulativeFatchtoo:function(){var t=this,a=this;this.leiji=!0,this.shishi=!1,this.tianqiyuji=!1,o.a.GetLfAirPollution().then(function(a){var i=a.data.Data;t.CumulativeData=i}),o.a.GetMonitoringPointAccu().then(function(t){var i=t.data.Data;a.ObjectFactoryData(i,a.type),e.a.$emit("loadCumulative",i,"layer_gs",a.type,"pointname")})}},components:{}}},921:function(t,a,i){a=t.exports=i(832)(!1),a.push([t.i,".strong[data-v-0c90d4bc]{width:100%;padding:10px 0;display:inherit;margin-left:18px;text-align:left}img[data-v-0c90d4bc]{position:absolute;top:40%;left:-17px;cursor:pointer;float:left}.main[data-v-0c90d4bc]{width:430px;height:auto}.main .kbiaoti[data-v-0c90d4bc]{padding:10px 0}.main .bluexian[data-v-0c90d4bc]{width:26px;border:1px solid #1080cc;margin:0 auto}.main .first[data-v-0c90d4bc]{width:100%;height:50px;margin-top:10px}.main .first .tables[data-v-0c90d4bc]{float:left;margin-left:14px;margin-top:0;width:100%;border-bottom:1px solid #ccc}.main .first .tables .bai[data-v-0c90d4bc]{color:#4696ff;border-bottom:2px solid #4696ff}.main .first .tables a[data-v-0c90d4bc]{float:left;text-decoration:none;font-size:16px;font-weight:700;color:#666;display:inline-block;line-height:34px;padding:0 30px;width:auto;height:34px}.main .first .tables[data-v-0c90d4bc] :hover{cursor:pointer}.main .first .tables .time2[data-v-0c90d4bc]{line-height:34px;padding-right:20px;font-size:12px}.main .first .btnns[data-v-0c90d4bc],.main .first .shijian[data-v-0c90d4bc]{float:left;margin-left:6px}.main .first .btnns button[data-v-0c90d4bc]{border:none;width:80px;height:34px;background:#1080cc;color:#fff;border-radius:4px}.main .tqbiaoti[data-v-0c90d4bc]{width:100%;height:22px;padding-left:20px;text-align:left;margin-left:16px;border-left:3px solid #4696ff}.main .Second[data-v-0c90d4bc]{width:100%;height:auto}.main .Second .tianqi[data-v-0c90d4bc]{float:left;margin-left:20px}.main .Second .tianqi .tqbj[data-v-0c90d4bc]{width:64px;height:64px;position:relative}.main .Second .tianqi .tqbj .beijing[data-v-0c90d4bc]{width:45px;position:absolute;top:10px;left:12px}.main .Second .tianqi p[data-v-0c90d4bc]{text-align:left;font-size:12px;margin:0!important}.main .Second .yuanjindu[data-v-0c90d4bc]{width:100%;height:150px}.main .Second .yuanjindu .jdflaot[data-v-0c90d4bc]{margin-top:15px;margin-bottom:8px;float:left;margin-left:8px}.main .Second .yuanjindu .jdflaot p[data-v-0c90d4bc]{text-align:center;font-size:14px}.main .Second .yuanjindu div[data-v-0c90d4bc]{margin-bottom:8px;position:relative}.main .Second .yuanjindu div .texts[data-v-0c90d4bc]{width:100%;height:30px;position:absolute;top:32px;text-align:center;font-size:18px}.main .Second .ph[data-v-0c90d4bc]{width:100%;height:auto;padding-bottom:15px}.main .Second .ph ul[data-v-0c90d4bc]{padding-left:20px;width:100%;height:30px;padding-bottom:0}.main .Second .ph ul li[data-v-0c90d4bc]{font-size:14px;width:64px;height:30px;line-height:30px;float:left;list-style:none;margin-left:1px}.main .Second .ph ol[data-v-0c90d4bc]{padding-left:20px;width:100%;height:30px;margin-bottom:6px}.main .Second .ph ol li[data-v-0c90d4bc]{margin-top:1px;font-size:14px;width:64px;height:30px;line-height:30px;float:left;list-style:none;margin-left:1px;background:#ccc}.main .Second .wrjingdu[data-v-0c90d4bc]{width:100%;height:auto}.main .Second .wrjingdu p[data-v-0c90d4bc]{text-align:left;padding:4px 20px}.main .Second .wrjingdu .jdhezi[data-v-0c90d4bc]{height:24px;overflow:hidden}.main .Second .wrjingdu .jdhezi .font[data-v-0c90d4bc]{margin-left:30px;margin-right:10px;text-align:center;width:45px;font-size:14px;float:left}.main .Second .wrjingdu .jdhezi .tiaojd[data-v-0c90d4bc]{float:left;width:300px}.main .table[data-v-0c90d4bc]{overflow:auto;font-size:10px!important}",""])},962:function(t,a,i){var e=i(921);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(833)("5884e220",e,!0,{})}});