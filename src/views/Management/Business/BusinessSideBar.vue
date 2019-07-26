<!--后台管理-业务数据管理-->
<template>
    <div class="businessmanagement">
    	<!--左侧导航部分-->
    	<div class="left" v-if="isDuty">
			<el-col :span="8">
				<el-col :span="8">
					<el-menu default-active="Case-Review" :unique-opened=true router  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
						<el-submenu index="active2" >
							<template slot="title"><i class="icon-aj"></i>案件管理</template>
							<el-menu-item index="Case-Review">案件</el-menu-item>
						</el-submenu>
					</el-menu>
				</el-col>
			</el-col>
		</div>
    </div>
</template>

<script>
    import {Message} from 'element-ui';
    import api from '../../../api/index'
    export default {
        name: 'businessmanagement',
        data() {
            return {
				isDuty: false
            }
        },
        created(){
        	
        },
        
        mounted() {
        	this.isDuty = this.getlocal('userInfo').isDuty;
            this.handleOpen('active2');
        },
        computed: {
            
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
			//开启
	 		handleOpen(key, keyPath) {
		       // console.log('aaa')
       		    console.log(key, keyPath);
		        let content = key;
		        switch (content){
                    case 'active2':
                        var $elmt = $('.left .el-menu-vertical-demo li')[0];
                        // console.log($elmt)
                        $($elmt).find('.el-submenu__title').css('color','#2494F2');
                        $('.icon-aj').css('background','url("../../../../static/imgs/main/ico-aj-z.png") no-repeat center');
                        $('.icon-aj').css('background-size','18px 18px');
                        this.handleClose('active3');
                        this.handleClose('active4');
                        this.handleClose('active1');
                        break;
                    case 'active3':
                        var $elmt = $('.left .el-menu-vertical-demo li')[4];
                        // console.log($elmt)
						$($elmt).find('.el-submenu__title').css('color','#2494F2');
                        $('.icon-zhdd').css('background','url("../../../../static/imgs/main/ico-zhdd-z.png") no-repeat center');
                        $('.icon-zhdd').css('background-size','18px 18px')
                        this.handleClose('active2');
                        this.handleClose('active4');
                        this.handleClose('active1');
                        break;
                    case 'active4':
                        var $elmt = $('.left .el-menu-vertical-demo li')[6];
                        // console.log($elmt)
                        $($elmt).find('.el-submenu__title').css('color','#2494F2')
                        $('.icon-jxkh').css('background','url("../../../../static/imgs/main/ico-jxkh-z.png") no-repeat center');
                        $('.icon-jxkh').css('background-size','18px 18px')
                        this.handleClose('active3');
                        this.handleClose('active2');
                        this.handleClose('active1');
                        break;
                    case 'active1':
                        var $elmt = $('.left .el-menu-vertical-demo li')[11];
                        // console.log($elmt)
                        $($elmt).find('.el-submenu__title').css('color','#2494F2')
                        $('.icon-ywsj').css('background','url("../../../../static/imgs/main/ico-ywsj-z.png") no-repeat center');
                        $('.icon-ywsj').css('background-size','18px 18px')
                        this.handleClose('active3');
                        this.handleClose('active4');
                        this.handleClose('active2');
                        break;
					default:
                        var $elmt = $('.left .el-menu-vertical-demo li')[0];
                        // console.log($elmt)
                        $($elmt).find('.el-submenu__title').css('color','#2494F2');
                        $('.icon-aj').css('background','url("../../../../static/imgs/main/ico-aj-z.png") no-repeat center');
                        $('.icon-aj').css('background-size','18px 18px')
					    break;
				}
	  		},
			//关闭
	        handleClose(key, keyPath) {
                //console.log('bbb')
				console.log(key, keyPath);
                let content = key;
                switch (content){
                    case 'active2':
                        var $elmt = $('.left .el-menu-vertical-demo li')[0];
                        // console.log($elmt)
                        $($elmt).find('.el-submenu__title').css('color','#000');
                        $('.icon-aj').css('background','url("../../../../static/imgs/main/ico-aj.png") no-repeat center');
                        $('.icon-aj').css('background-size','18px 18px')
                        break;
                    case 'active3':
                        var $elmt = $('.left .el-menu-vertical-demo li')[4];
                        // console.log($elmt)
                        $($elmt).find('.el-submenu__title').css('color','#000');
                        $('.icon-zhdd').css('background','url("../../../../static/imgs/main/ico-zhdd.png") no-repeat center');
                        $('.icon-zhdd').css('background-size','18px 18px')
                        break;
                    case 'active4':
                        var $elmt = $('.left .el-menu-vertical-demo li')[6];
                        // console.log($elmt)
                        $($elmt).find('.el-submenu__title').css('color','#000')
                        $('.icon-jxkh').css('background','url("../../../../static/imgs/main/ico-jxkh.png") no-repeat center');
                        $('.icon-jxkh').css('background-size','18px 18px')
                        break;
                    case 'active1':
                        var $elmt = $('.left .el-menu-vertical-demo li')[11];
                        // console.log($elmt)
                        $($elmt).find('.el-submenu__title').css('color','#000')
                        $('.icon-ywsj').css('background','url("../../../../static/imgs/main/ico-ywsj.png") no-repeat center');
                        $('.icon-ywsj').css('background-size','18px 18px')
                        break;
                }
	        },

		},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.businessmanagement{
	width: 200px;
	float: left;
	height:  calc(100% - 64px);
	.left{
		height: 100%;
		li{
			width: 200px;
		}
		i{
			display: inline-block;
			width: 20px;
			height: 20px;
			margin-right: 6px;
		}
		.icon-ywsj{
			background: url("../../../../static/imgs/main/ico-ywsj.png") no-repeat center;
			background-size: 18px 18px;
		}
		.icon-aj{
			background: url("../../../../static/imgs/main/ico-aj.png") no-repeat center;
			background-size: 18px 18px;
		}
		.icon-zhdd{
			background: url("../../../../static/imgs/main/ico-zhdd.png") no-repeat center;
			background-size: 18px 18px;
		}
		.icon-jxkh{
			background: url("../../../../static/imgs/main/ico-jxkh.png") no-repeat center;
			background-size: 18px 18px;
		}
	}
}
.el-menu-vertical-demo{
	border: 0;
}

</style>
