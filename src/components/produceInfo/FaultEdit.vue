<!-- html部分 -->
<template>
	<div id="app">
		<div style='text-align: center;'>
			<h1>添加故障信息</h1>
			<el-row>
			  <el-col :span="12">
				  <el-select style='width:300px;margin-top: 20px;' placeholder='请输入设备名称' v-model='devid'>
				  	<el-option v-for="obj in baseDevice" :value="obj.devid"  :key="obj.devname" :label="obj.devname">{{obj.devname}}</el-option>
				  </el-select>
			   </el-col>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入故障原因' v-model='cause'></el-input> </el-col>
			</el-row>
			<el-row>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入报告人' v-model='faultuser'></el-input> </el-col>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入故障时间(分钟)' v-model='faulttime'></el-input> </el-col>
			</el-row>
			<el-row style='margin-top: 20px;text-align: center;'>
			  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
			</el-row>
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				devid:'',
				cause:'',
				faultuser:'',
				faulttime:'',
				baseDevice:[]
			};
		},
		methods:{
				saveEdit(){
							var url = this.baseUrl+"/produceFault/update"
							// 传递给后端的数据
							var data = {devid:this.devid,cause:this.cause,faultuser:this.faultuser,faulttime:this.faulttime,faultId:this.faultId};
							this.$axios.post(url,this.$qs.stringify(data),{
								headers: {
									'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
								}
							}).then(res=>{
								// res是后端的响应
								this.$message("更新成功");
								this.$router.push({path:'/FaultList'});
								
							})
						},
						cancel(){
							this.$router.go(-1);
						}
					},
					
					mounted:function(){
						var row = this.$route.params.row;
						this.faultId = row.faultId;
						this.faulttime = row.faulttime;
						this.faultuser = row.faultuser;
						this.cause = row.cause;
						this.devid = row.devid;

						var url = this.baseUrl+"/baseDevice/list"
						this.$axios.post(url,{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							this.baseDevice = res.data;
						})
					}
	}
</script>
<!-- css部分 -->
<style>

</style>
