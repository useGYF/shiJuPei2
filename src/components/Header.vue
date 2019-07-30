<template>
    <div class="header">
        <div class="navbox">
            <!--环境监测-->
            <div class="logo">
                <!-- <img src="../assets/img/logo1.png" alt="logo"> -->
                <a style="color: #fff;font-size:21px;font-weight: 500;line-height: 56px;padding-left:30px;font-family: 'Microsoft YaHei' ">大数据管理平台</a>
            </div>
           <!---->
            <ul class="bnav">
                <li style="width: 136px;" v-for="(item,index) in JCtargets" v-show="item.visible" :style="'color:#fff;background:'+(item.checked ? '#436EEE' : '#1b9d33')" :data-parent-index="item.parentIndex" :data-parent="item.parentName" :data-index="index" :data-type="item.name" @click="OKQClick">
                <img style="display: none" :src="item.src" title=""/>
                <span>{{item.value}}</span>
              </li>
                <!--系统后台-退出系统-->
                <li style="margin-right: 0;">
                    <span class="position-p"></span>
                    <img style="padding: 0 20px" src="../assets/img/btn_intercalate.png" class="activehov">
                    <div class="Sixitem submenu" v-if="isShow">
                        <a href="#/Management/BusinessManagement/Case-Review" class="houtai"><img src="../assets/img/btn_Backstage1.png" alt="">进入后台</a><br/>
                        <a class="tuichu" v-on:click="exit"><img src="../assets/img/btn_quit1.png" alt="">退出系统</a>
                    </div>
                     <div class="Sixitem submenu" v-else>
                        <a class="tuichu" v-on:click="exit"><img src="../assets/img/btn_quit1.png" alt="">退出系统</a>
                    </div>
                </li>
            </ul>
        </div>
        <main-handle></main-handle>
    </div>
</template>

<script>
import MainHandle from '@/map/handle/MainHandle'
  import {bus} from '@/js/bus'
    export default {
        name: 'header',
        data () {
            return {
                msg: 'App',
                houtaiSrc: '../../static/imgs/mues/header/btn_Backstage2.png',
                houtaiChesSrc: '../../static/imgs/mues/header/btn_Backstage1.png',
                tuichuSrc: '../../static/imgs/mues/header/btn_quit2.png',
                tuichuChesSrc: '../../static/imgs/mues/header/btn_quit1.png',
                userMess:'',
                isShow:true,
                 hasSelect:false,
        kongqi: true,
        jiankong:true,
        shiping: true,
        aclink:false,
        mlength:4,
        defaultType:'LAYER_GS',
        clicksrc:'static/imgs/main/left.png',
        clickchesrc:'static/imgs/main/right.png',
                 //实时监测
        JCtargets: [
          {
            name: 'layer_gs',
            code:'layer_gs',
            value: '国省控监测',
            parentName: 'layer_jc',
            src: 'static/imgs/main/gs.png',
            checkedSrc: 'static/imgs/main/gs_c.png',
            checked:false,
            visible:true,
            displayName: 'pointname',
            childs:[{
              text: 'AQI',
              fieldName: 'aqi'
            }, {
              text: 'PM2.5',
              fieldName: 'pm25'
            }, {
              text: 'PM10',
              fieldName: 'pm10'
            }, {
              text: 'SO2',
              fieldName: 'so2'
            }, {
              text: 'NO2',
              fieldName: 'no2'
            }, {
              text: 'CO',
              fieldName: 'co'
            }, {
              text: 'O3',
              fieldName: 'o3'
            }, {
              text: '综指',
              fieldName: 'complexindex'
            }, {
              text: '温度',
              fieldName: 'temp'
            }, {
              text: '湿度',
              fieldName: 'humi'
            }, {
              text: '风向',
              fieldName: 'windangle'
            }, {
              text: '风力',
              fieldName: 'windspeed'
            }]
          },{
            name: 'layer_cgq_lcs',
            parentName: 'layer_jc',
            value: '六参数传感器',
            src: 'static/imgs/main/cg.png',
            checkedSrc: 'static/imgs/main/cg_c.png',
            checked:false,
            visible:false,
            childs: [{
              text: 'AQI',
              fieldName: 'aqi'
            }, {
              text: 'PM2.5',
              fieldName: 'pm25'
            }, {
              text: 'PM10',
              fieldName: 'pm10'
            }, {
              text: 'SO2',
              fieldName: 'so2'
            }, {
              text: 'NO2',
              fieldName: 'no2'
            }, {
              text: 'CO',
              fieldName: 'co'
            }, {
              text: 'O3',
              fieldName: 'o3'
            }]
          },
          {
            name: 'layer_cx',
            parentName: 'layer_jc',
            value: '乡镇空气站监测',
            src: 'static/imgs/main/m_cx.png',
            checkedSrc: 'static/imgs/main/cx_c.png',
            checked:false,
            visible:false,
            childs: [{
              text: 'PM2.5',
              fieldName: 'pm25'
            }, {
              text: 'SO2',
              fieldName: 'so2'
            },{
              text: '综指',
              fieldName: 'com_index'
            }]
          },
          {
            name: 'layer_gd',
            value: '工地扬尘监测',
            parentName: 'layer_jc',
            src: 'static/imgs/main/gd.png',
            checkedSrc: 'static/imgs/main/gd_c.png',
            checked:false,
            visible:true,
            childs:[{
              text: 'PM2.5',
              fieldName: 'pm25'
            }, {
              text: 'PM10',
              fieldName: 'pm10'
            }]
          },
          {
            name: 'layer_qy',
            value: '企业污染源监测',
            parentName: 'layer_jc',
            src: 'static/imgs/main/qy.png',
            checkedSrc: 'static/imgs/main/qy_c.png',
            checked:false,
            visible:false,
            childs:[{
              text: '烟尘',
              fieldName: 'smokeStatus'
            }, {
              text: 'NOX',
              fieldName: 'noxStatus'
            }, {
              text: 'SO2',
              fieldName: 'so2Status'
            }]
          },
          {
            name: 'layer_zt',
            value: '渣土车GPS',
            parentName: 'layer_jc',
            src: 'static/imgs/main/zt.png',
            checkedSrc: 'static/imgs/main/zt_c.png',
            checked:false,
            visible:false,
            childs:[]
          },{
            name: 'layer_cgq_vocs',
            parentName: 'layer_jc',
            value: 'VOCs监测',
            src: 'static/imgs/mues/sixzb/vocw.png',
            checkedSrc: 'static/imgs/mues/sixzb/vocw_c.png',
            checked:false,
            visible:true,
            childs: []
          },{
            name: 'layer_cy',
            parentName: 'layer_jc',
            value: '餐饮油烟监测',
            src: 'static/imgs/main/cyyy.png',
            checkedSrc: 'static/imgs/main/cyyy_c.png',
            checked:false,
            visible:false,
            childs: []
          },
        ],
            }
        },
        components: {
            MainHandle
        },
        mounted(){
        	this.isDuty = this.getlocal('userInfo').isDuty;
            //右侧收放
            const t = this;
            //
            $(".houtai").hover(function () {
                $(".houtai img").attr('src', t.houtaiSrc);
               // event.stopPropagation();
            }, function () {
                $(".houtai img").attr('src', t.houtaiChesSrc);
            });
            //
            $(".tuichu").hover(function () {
                $(".tuichu img").attr('src', t.tuichuSrc);
               // event.stopPropagation();
            }, function () {
                $(".tuichu img").attr('src', t.tuichuChesSrc);
            });

            //右侧伸缩栏模块
            $(".bnav li").hover(function () {
               //console.log($(this).find('div'))
                $(this).find('div').eq(0).css('display',"block")
            }, function () {
                $(this).find('div').eq(0).css('display',"none");
            });

        },

        methods: {
        	//获取本地
		    getlocal(name) {
		        let data = sessionStorage.getItem(name)
		        if (data != null && data != '') {
		            try {
		                let obj = eval('(' + data + ')')
		                return obj
		            } catch (e) {
		                return ''
		            }
		        } else {
		            return ''
		        }
		    },
            exit(){
                this.$cookies.remove('auth')
                setTimeout(() => {
                    //
                    this.$router.push('/login')
                })
            },

      //指标切换点击事件
      OKQClick(e){
        let _this = this;
        if (e.target.nodeName === 'SELECT' || _this.hasSelect) {
          _this.hasSelect = false;
          return;
        }
        let childElement = e.currentTarget;
        let imgElement = childElement.querySelector('img');
        let index = childElement.getAttribute('data-index');
        let type = childElement.getAttribute('data-type');
        let parentName = childElement.getAttribute('data-parent');
        let parentIndex = childElement.getAttribute('data-parent-index');
        let targets = parentName.toUpperCase() === 'LAYER_JC' ? this.$data.JCtargets : this.$data.ZHtargets;
        let item = targets[index];

        let hasChecked = false;
        item.childs && (item.childs.length && (item.checked = !item.checked));
        imgElement.getAttribute('src') !== item.src ? (imgElement.src = item.src, childElement.style.backgroundColor = '#1b9d33') : (imgElement.src = item.checkedSrc, childElement.style.backgroundColor = '#436EEE', hasChecked = true);

        bus.$emit('targetMainLayer', type, hasChecked);
        this.rightPanel(hasChecked,type);
      },

      //删除指定对象
      removeObjWithArr(_arr, _obj) {
            let length = _arr.length;
            for (let i = 0; i < length; i++) {
                if (_arr[i] == _obj) {
                    if (i == 0) {
                        _arr.shift(); //删除并返回数组的第一个元素
                        return;
                    }
                    else if (i == length - 1) {
                        _arr.pop();  //删除并返回数组的最后一个元素
                        return;
                    }
                    else {
                        _arr.splice(i, 1); //删除下标为i的元素
                        return;
                    }
                }
            }
        },
      rightPanel(hasChecked,type){
          //已有对象不添加
          if(this.$store.state.menuData){
              //console.log(Array.isArray(this.$store.state.menuData));
              for(let i=0;i<this.$store.state.menuData.length;i++){
                  let item = this.$store.state.menuData[i];
                  if(item.show_xs === type){
                      //删除选项
                      let keyarr = this.$store.state.menuData;
                      for (let k = 0; k < keyarr.length; k++) {
                          if (keyarr[k].show_xs == type) {
                              // 删除指定对象
                              this.removeObjWithArr(keyarr, keyarr[k])
                          }
                      }
                  }
              }
          };
        //动态添加右侧菜单
        if (hasChecked && type != 'layer_lk' && type != 'layer_zt' && type != 'layer_hw' && type != 'layer_jy') {
          //添加对应右侧菜单
          switch (type) {
            case 'layer_gs':
              this.$store.state.menuData.unshift({
                title: '国省',
                title_tx: '国省控点',
                show_xs: 'layer_gs',
                url: 'static/imgs/indeximgs/morenimg/icon_fang.png',
                url_one: 'static/imgs/indeximgs/morenimg/icon_fang.png'
              });
              bus.$emit('menuative', '国省');
              break;
            case 'layer_cgq_lcs':
              this.$store.state.menuData.unshift({
                title: '六参',
                title_tx: '六参数',
                show_xs: 'layer_cgq_lcs',
                url: 'static/imgs/indeximgs/morenimg/icon_yuan1.png',
                url_one: 'static/imgs/indeximgs/morenimg/icon_yuan1.png'
              });
              bus.$emit('menuative', '六参');
              break;
            case 'layer_cgq_vocs':
              this.$store.state.menuData.unshift({
                title: 'VOC',
                title_tx: 'VOC监测',
                show_xs: 'layer_cgq_vocs',
                url: 'static/imgs/indeximgs/morenimg/icon_Triangle_3.png',
                url_one: 'static/imgs/indeximgs/morenimg/icon_Triangle_3.png'
              });
              bus.$emit('menuative', 'VOC');
              break;
            case 'layer_cx':
              this.$store.state.menuData.unshift({
                title: '乡镇',
                title_tx: '乡镇统计',
                show_xs: 'layer_cx',
                url: 'static/imgs/indeximgs/morenimg/icon_ditu2.png',
                url_one: 'static/imgs/indeximgs/morenimg/icon_ditu2.png'
              });
              bus.$emit('menuative', '乡镇');
              break;
            case 'layer_gd':
              this.$store.state.menuData.unshift({
                title: '工地',
                title_tx: '工地扬尘',
                show_xs: 'layer_gd',
                url: 'static/imgs/indeximgs/morenimg/icon_gd.png',
                url_one: 'static/imgs/indeximgs/morenimg/icon_gd.png'
              });
              bus.$emit('menuative', '工地');
              break;
            case 'layer_qy':
              this.$store.state.menuData.unshift({
                title: '企业',
                title_tx: '企业监测',
                show_xs: 'layer_qy',
                url: 'static/imgs/indeximgs/morenimg/icon_enterprise.png',
                url_one: 'static/imgs/indeximgs/morenimg/icon_enterprise.png'
              });
              bus.$emit('menuative', '企业');
              break;
            case 'layer_yqd':
              this.$store.state.menuData.unshift({
                title: '静态',
                title_tx: '大气排放源清单',
                show_xs: 'layer_yqd',
                url: 'static/imgs/indeximgs/morenimg/icon_jiayou.png',
                url_one: 'static/imgs/indeximgs/morenimg/icon_jiayou.png'
              });
              bus.$emit('menuative', '静态');
              break;
            case 'layer_qm':
              this.$store.state.menuData.unshift({
                title: '案件',
                title_tx: '案件',
                show_xs: 'layer_qm',
                url: 'static/imgs/indeximgs/morenimg/anjian.png',
                url_one: 'static/imgs/indeximgs/morenimg/anjian.png'
              });
              bus.$emit('menuative', '案件');
              break;
            case 'layer_sp_slw':
              this.$store.state.menuData.unshift({
                title: '散乱视频',
                title_tx: '散乱污视频',
                show_xs: 'layer_sp_slw',
                url: 'static/imgs/indeximgs/morenimg/slw.png',
                url_one: 'static/imgs/indeximgs/morenimg/slw.png'
              });
              bus.$emit('menuative', '散乱视频');
              break;
            case 'layer_sp_jg':
              // this.$store.state.menuData.unshift({
              //   title: '秸秆焚烧',
              //   title_tx: '秸秆焚烧',
              //   show_xs: 'layer_sp_jg',
              //   url: 'static/imgs/mues/video/jg.png',
              //   url_one: 'static/imgs/mues/video/jg_c.png'
              // });
              //bus.$emit('menuative', '秸秆焚烧');
              break;
            case 'layer_xcy':
              this.$store.state.menuData.unshift({
                title: '巡查员',
                title_tx: '巡查员',
                show_xs: 'layer_xcy',
                url: 'static/imgs/indeximgs/morenimg/xcy.png',
                url_one: 'static/imgs/indeximgs/morenimg/xcy.png'
              });
              bus.$emit('menuative', '巡查员');
              break;
            default:
              bus.$emit('menuative', '统计');
              break;
          }
          console.log(type);
        } else {
          //删除选项
          let keyarr = this.$store.state.menuData;
          for (let i = 0; i < keyarr.length; i++) {
            //console.log(keyarr[i]);
            if (keyarr[i].show_xs == type) {
              // console.log('该删除我了')
              console.log(keyarr[i])
              // 删除指定对象
              this.removeObjWithArr(keyarr, keyarr[i])
            }
          }
        }
      },

      //删除指定对象
      removeObjWithArr(_arr, _obj) {
        let length = _arr.length;
        for (let i = 0; i < length; i++) {
          if (_arr[i] == _obj) {
            if (i == 0) {
              _arr.shift(); //删除并返回数组的第一个元素
              return;
            }
            else if (i == length - 1) {
              _arr.pop();  //删除并返回数组的最后一个元素
              return;
            }
            else {
              _arr.splice(i, 1); //删除下标为i的元素
              return;
            }
          }
        }
      },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 56px;
        .navbox{
            width: 100%;
            height: 56px;
            background: #1b9d33;
            position: absolute;
            top: 0;
            left: 0;
            box-shadow:9px 0px 18px rgba(36,148,242,0.53);
            .position-p{
                position: absolute;
                display: inline-block;
                width: 25px;
                height: 25px;
                border: 1px solid #e5e5dd;
                top: 16px;
                left: 26px;
            }
            .logo {
                float: left;
                width: auto;

                img {
                    width: 40px;
                    height: 40px;
                    margin-top: -9px;
                    margin-left: 20px;
                    margin-right: 2px;
                }

            }

            .bnav {
                /*width: 604px;*/
                float: right;
                height: 56px;

                h3:hover {
                    cursor: alias;
                }

                li {
                    float: left;
                    width: auto;
                    height: 56px;
                    list-style: none;
                    line-height: 56px;
                    position: relative;
                    margin-right: 15px;
                    padding: 0 10px;
                    .activehov {
                        transition: all 2s;
                    }

                    .activehov:hover {
                        transform: rotate(3600deg);
                    }

                    p {
                        margin: 0;
                    }

                    i {
                        color: #fff;
                        padding: 0 15px;
                    }

                    :active {
                        color: #0070CE;
                    }

                    a {
                        color: #dee9f5;
                        padding: 0 20px;
                        font-size: 16px;
                        font-family: '微软雅黑';
                        cursor: pointer;

                        i {
                            display: inline-block;
                            width: 9px;
                            height: 6px;
                            margin-left: 2px;
                            background: url("../assets/img/icon_sanjiao.png") no-repeat;
                        }

                    }
                    :hover {
                        text-decoration: none;
                    }

                    .line {
                        height: 10px;
                        width: 1px;
                        background: #DDDDDD;
                        margin: 0 13px;
                        display: inline-block;
                    }

                    .same {
                        z-index: 100;
                        display: none;
                        background: #fff;
                        box-shadow: 0 0 5px #ccc;
                        //border: 1px solid #ccc;
                        border-radius: 0 0 4px 4px;
                        padding: 4px 20px 20px 20px;
                        text-align: left;
                        line-height: 20px;

                        div {
                            text-align: left;
                            padding: 0;
                        }

                        a {
                            color: #666;
                            font-size: 14px;
                            padding: 0;
                            font-family: "Microsoft YaHei";
                            cursor: pointer;
                            font-weight: normal;
                        }

                        h3 {
                            margin: 16px 0 8px 0;
                            color: #333333;
                            font-size: 14px;
                            font-weight: bold;
                        }

                        :hover:not(h3) {
                            color: #0070CE;
                        }

                    }
                    .Twoitem {
                        position: absolute;
                        top: 56px;
                        left: 0;
                        width: 126px;
                    }

                    .Threeitem {
                        position: absolute;
                        top: 56px;
                        left: 0;
                        width: 277px;
                    }

                    .Fouritem {
                        text-align: left;
                        display: none;
                        z-index: 100;
                        width: 126px;
                        position: absolute;
                        top: 56px;
                        left: 0;
                        background: #fff;
                        line-height: 30px;
                        box-shadow: 0 0 5px #ccc;
                        padding: 10px 20px 10px;

                        a {
                            padding-left: 10px;
                            color: #666;
                            font-size: 14px;
                            font-family: "Microsoft YaHei";
                            cursor: pointer;

                        }

                        :hover {
                            color: #0070CE;
                        }

                    }
                    .Fiveitem {
                        width: 220px;
                        position: absolute;
                        top: 56px;
                        right: 0px;
                        box-shadow: 0 0 5px #ccc;
                    }

                    .Sixitem {
                        display: none;
                        z-index: 100;
                        width: 100px;
                        position: absolute;
                        top: 56px;
                        right: 0;
                        background: #fff;
                        line-height: 25px;
                        padding: 10px 0;
                        box-shadow: 0 0 5px #ccc;

                        a {
                            color: #666;
                            font-size: 12px;
                            padding: 0 10px;
                            font-family: "Microsoft YaHei";
                            margin-left: -17px;
                            cursor: pointer;

                            img {
                                vertical-align: middle;
                                padding-right: 6px;
                                padding-left: 18px;
                                margin-top: -2px;
                            }

                        }
                        :hover {
                            cursor: pointer;
                            color: #1080cc;
                        }

                    }
                    .none {
                        display: none;
                    }

                }
                >
                :hover {

                    a {
                        color: #fff;
                        font-weight: bold;
                    }

                    i {
                        font-size: 18px;
                        font-weight: bold;
                    }

                    cursor: pointer;
                    background: #0070CE;
                }
                .active {

                    a {
                        color: #FFFFFF;
                        font-weight: bold;
                    }

                    i {
                        color: #fff;
                        font-weight: bold;
                    }

                }
            }
        }
    }

</style>
