<!-- html部分 -->
<template>
	<div id="app">
		<div style='text-align: center;'>
			<h1>添加设备信息</h1>
			<el-row>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入设备名称' v-model='devname'></el-input> </el-col>
			  <el-col :span="12">
						<el-select style='width:300px;margin-top: 20px;' placeholder='设备类别' v-model='typeid'>
							<el-option v-for="obj in baseDevtype" :value="obj.typeid"  :key="obj.typename">{{obj.typename}}</el-option>
						</el-select>
						
						<!-- :label='' :key="obj.typeid" -->
			 </el-col>
			</el-row>
			<el-row>
				
			 <el-col :span="12"> 
				<el-date-picker 
					  v-model="devdate"
					  type="date"
					  placeholder="选择日期"
					  value-format='yyyy-mm-dd'
					  style='width:300px;margin-top: 20px;'>
				</el-date-picker>
	<!-- <el-input style='width:300px;margin-top: 20px;' placeholder='请输入投入时间' v-model='devdate'></el-input> -->
			</el-col>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入责任人' v-model='devuser'></el-input> </el-col>
			</el-row>
			<el-row>
			  <el-col :span="12">
						<el-select style='width:300px;margin-top: 20px;' placeholder='请输入所属企业' v-model='compid'>
							<el-option v-for="obj in baseCompany" :value="obj.compid" :key="obj.compname">{{obj.compname}}</el-option>
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
				devname:'',
				typeid:'',
				devdate:'',
				devuser:'',
				compid:'',
				baseDevtype:[],
				baseCompany:[]
			};
		},
		methods:{
			saveAdd(){
					// console.log(this.baseCompany);
				var url = this.baseUrl+"/baseDevice/insert"
				// 传递给后端的数据
				var data = {devname:this.devname,typeid:this.typeid,devdate:this.devdate,devuser:this.devuser,
				compid:this.compid};
				// console.log(data);
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/DeviceList'});
					
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseCompany/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.baseCompany = res.data;
			});
			
			var url = this.baseUrl+"/baseDevtype/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.baseDevtype = res.data;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
