<!-- html部分 -->
<template>
	<div style='text-align: center;'>
		<h1>添加报岗信息</h1>
		<el-row>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入船队名称' v-model='shipname'></el-input></el-col>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入装载量(吨)' v-model='capacity'></el-input></el-col> 
		</el-row>
		<el-row>
			  <el-col :span="12"> 
				<el-date-picker
					v-model="planjobtime"
					type="datetime"
					placeholder="请输入预计到港时间"
					style='width:300px;margin-top: 20px;' value-format='yyyy-MM-dd hh-mm-ss'>
				</el-date-picker>
			  </el-col>
			  <el-col :span="12"> 
				<el-date-picker
					v-model="startjobtime"
					type="datetime"
					placeholder="请输入实际到港时间"
					style='width:300px;margin-top: 20px;' value-format='yyyy-MM-dd hh-mm-ss'>
				</el-date-picker>
			  </el-col>
		</el-row>
		<el-row>
			  <el-col :span="12"> 
				  <el-date-picker
					v-model="completetime"
					type="datetime"
					placeholder="请输入完成时间"
					style='width:300px;margin-top: 20px;' value-format='yyyy-MM-dd hh-mm-ss'>
				  </el-date-picker>
			  </el-col>
			  <el-col :span="12"> 
			  	 <el-select  v-model="flowid" style='width:300px;margin-top: 20px;'placeholder='请选择流程'>
			  	  <el-option v-for="(obj,index) in baseFlow" :value="obj.flowid" :key="obj.flowname">{{obj.flowname}}</el-option>
			  	 </el-select>
			  </el-col>
		</el-row>
		<el-row>
			<el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入报岗人' v-model='reportuser'></el-input> </el-col>
			<el-col :span="12"> 
				 <el-select  v-model="compid" style='width:300px;margin-top: 20px;'placeholder='请选择所属企业'>
				  <el-option v-for="(obj,index) in baseCompany" :value="obj.compid" :key="obj.compname">{{obj.compname}}</el-option>
				 </el-select>
			</el-col>	
		</el-row>
		
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				shipname:'',
				capacity:'',
				planjobtime:'',
				startjobtime:'',
				completetime:'',
				flowid:'',
				reportuser:'',
				compid:'',
				baseCompany:[],
				baseFlow:[]
			};
		},
		methods:{
			saveAdd(){
					// 后端网址
					var url = this.baseUrl+"/produceReport/insert"
					// 传递给后端的数据
					var data = {shipname:this.shipname,capacity:this.capacity,planjobtime:this.planjobtime,
							startjobtime:this.startjobtime,completetime:this.completetime,flowid:this.flowid,
							reportuser:this.reportuser,compid:this.compid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("添加成功");
						this.$router.push({path:'/ReportList'});
					})
				},
				cancel(){
					this.$router.go(-1);
				}
			},
			mounted:function(){
				var url = this.baseUrl+"/baseCompany/list"
				// 传递给后端的数据
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					
					this.baseCompany=res.data;
				})
				var url = this.baseUrl+"/baseFlow/list"
				// 传递给后端的数据
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					
					this.baseFlow=res.data;
				})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
