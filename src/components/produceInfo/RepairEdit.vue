<!-- html部分 -->
<template>
	<div style='text-align: center;'>
		<h1>修改维修信息</h1>
	<el-row>
		<el-col :span="12"> 
		 <el-select  v-model="devid" style='width:300px;margin-top: 20px;'placeholder='请选择设备'>
		  <el-option v-for="(obj,index) in baseDevice" :value="obj.devid" :key="obj.devname">{{obj.devname}}</el-option>
		 </el-select>
		   </el-col>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入维修原因' v-model='cause'></el-input> </el-col>
	</el-row>
	<el-row>
		  <el-col :span="12"> 
			<el-input style='width:300px;margin-top: 20px;' placeholder='请输入维修费用' v-model='cost'></el-input></el-col>
		  <el-col :span="12"> 
			<el-date-picker  v-model='repairdate' type="date"placeholder="选择日期" style='width:300px;margin-top: 20px;' value-format='yyyy-MM-dd'></el-date-picker>
			</el-col>
	</el-row>
	
		 
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				devid:'',
				cause:'',
				cost:'',
				repairdate:"",
				baseDevice:[]
			};
		},
		methods:{
			saveEdit(){
						var url = this.baseUrl+"/produceRepair/update"
						// 传递给后端的数据
						var data = {devid:this.devid,cause:this.cause,cost:this.cost,repairdate:this.repairdate};
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							// res是后端的响应
							this.$message("更新成功");
							this.$router.push({path:'/RepairList'});
							
						})
					},
					cancel(){
						this.$router.go(-1);
					}
				},
				
				mounted:function(){
					var row = this.$route.params.row;
					this.repairdate = row.repairdate;
					this.cost = row.cost;
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
