<!-- html部分 -->
<template>
	<div id="app">
		<div style='text-align: center;'>
			<h1>添加流程信息</h1>
			<el-row>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入流程信息' v-model='flowname'></el-input> </el-col>
			  <el-col :span="12">
					<el-select style='width:300px;margin-top: 20px;' placeholder='请输入装船机名称' v-model='zcjid'>
						<el-option v-for="obj in zcjarr" :value="obj.devid"  :key="obj.devname">{{obj.devname}}</el-option>
					</el-select>
			 </el-col>
			</el-row>
			<el-row>
			   <el-col :span="12">
			  		<el-select style='width:300px;margin-top: 20px;' placeholder='请输入装船机名称' v-model='pdjid'>
			  			<el-option v-for="obj in pdjarr" :value="obj.devid"  :key="obj.devname">{{obj.devname}}</el-option>
			  		</el-select>
			  </el-col>
			   <el-col :span="12">
			  		<el-select style='width:300px;margin-top: 20px;' placeholder='请输入装船机名称' v-model='dljid'>
			  			<el-option v-for="obj in dljarr" :value="obj.devid"  :key="obj.devname">{{obj.devname}}</el-option>
			  		</el-select>
			  </el-col>
			</el-row>
			<el-row style='margin-top: 20px;text-align: center;'>
			  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
			</el-row>
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				flowname:'',
				dljid:'',
				zcjid:'',
				pdjid:'',
				dljarr:[],
				zcjarr:[],
				pdjarr:[]
			};
		},
		methods:{
			saveAdd(){
						// console.log(this.baseCompany);
					var url = this.baseUrl+"/baseFlow/insert"
					// 传递给后端的数据
					var data = {flowid:this.flowid,dljid:this.dljid,zcjid:this.zcjid,
								pdjid:this.pdjid,flowname:this.flowname,compid:this.compid};
					// console.log(data);
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("添加成功");
						this.$router.push({path:'/FlowList'});
						
					})
				},
				cancel(){
					this.$router.go(-1);
				}
			},
			mounted:function(){
				var url = this.baseUrl+"/baseDevice/findDljByCompid"
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.dljarr = res.data;
				})
				
				var url = this.baseUrl+"/baseDevice/findCzjByCompid"
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.zcjarr = res.data;
				})
				
				var url = this.baseUrl+"/baseDevice/findPdjByCompid"
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.pdjarr = res.data;
				})
			}
	}
</script>
<!-- css部分 -->
<style>

</style>
