<!-- html部分 -->
<template>
	<div id="app">
		<div style='text-align: center;'>
		<h1>修改公司信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入公司名称' v-model='compname'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入联系人' v-model='contacts'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入联系电话' v-model='comptel'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入行业' v-model='industry'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入地址' v-model='address'></el-input> </el-col>
		  <el-col :span="12"> <span></span> </el-col>
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
				compname:'',
				contacts:'',
				comptel:'',
				address:'',
				industry:''
			};
		},
		methods:{
			saveEdit(){
				var url = this.baseUrl+"/baseCompany/update"
				// 传递给后端的数据
				var data = {compid:this.compid,compname:this.compname,contacts:this.contacts,comptel:this.comptel,address:this.address,industry:this.industry};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/CompList'});
					
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var row = this.$route.params.row;
			this.compname = row.compname;
			this.compid = row.compid;
			this.contacts = row.contacts;
			this.comptel = row.comptel;
			this.address = row.address;
			this.industry = row.industry;
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
