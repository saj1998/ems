<!-- html部分 -->
<template>
	
		<div style='text-align: center;'>
			<h1>修改报岗信息</h1>
			<el-row>
				  <el-col :span="12"> 
						<el-select style='width:160px;margin-top: 20px;' placeholder='请输入设备名称' v-model='devid'>
							<el-option v-for="obj in baseDevice" :value="obj.devid"  :key="obj.devname">{{obj.devname}}</el-option>
						</el-select>
				  </el-col>
				   <el-col :span="12"> 
						<el-date-picker
							v-model="starttime"
							type="datetime"
							placeholder="请输入实际到港时间"
							style='width:300px;margin-top: 20px;' value-format='yyyy-MM-dd hh:mm:ss'>
				   		</el-date-picker>
				   </el-col>
			</el-row>
			<el-row>
				  <el-col :span="12"> 
					<el-date-picker
						v-model="completetime"
						type="datetime"
						placeholder="请输入预计到港时间"
						style='width:300px;margin-top: 20px;' value-format='yyyy-MM-dd hh:mm:ss'>
					</el-date-picker>
				  </el-col>
				  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入运行时长' v-model='duration'></el-input></el-col>
				  
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入作业量' v-model='amount'></el-input> </el-col>
				<el-col :span="12"> 
					 <el-select style='width:160px;margin-top: 20px;' placeholder='请选择报岗人' v-model='reportid'>
					 	<el-option v-for="obj in produceReport" :value="obj.reportid"  :key="obj.reportuser">{{obj.reportuser}}</el-option>
					 </el-select>
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
				starttime:'',
				completetime:'',
				duration:'',
				amount:'',
				reportid:'',
				produceReport:[],
				baseDevice:[],
				jobid:''
				
			};
		},
		methods:{
			saveEdit(){
						var url = this.baseUrl+"/produceJob/update"
						// 传递给后端的数据
						var data = {devid:this.devid,starttime:this.starttime,completetime:this.completetime,
								duration:this.duration,amount:this.amount,reportid:this.reportid,jobid:this.jobid};
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							// res是后端的响应
							this.$message("更新成功");
							this.$router.push({path:'/JobList'});
							
						})
					},
					cancel(){
						this.$router.go(-1);
					}
				},
				
				mounted:function(){
					var row = this.$route.params.row;
					this.devid = row.devid;
					this.starttime = row.starttime;
					this.completetime = row.completetime;
					this.duration = row.duration;
					this.amount = row.amount;
					this.reportid = row.reportid;
					this.jobid = row.jobid;

			
					var url = this.baseUrl+"/produceReport/list"
					// 传递给后端的数据
					this.$axios.post(url,{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						
						this.produceReport=res.data;
					})
					
					var url = this.baseUrl+"/baseDevice/list"
					// 传递给后端的数据
					this.$axios.post(url,{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						
						this.baseDevice=res.data;
					})
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
