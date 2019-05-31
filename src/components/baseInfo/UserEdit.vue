<!-- html部分 -->
<template>
	<div id="app">
		<div style='text-align: center;'>
			<h1>修改人员信息</h1>
			<el-row>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入姓名' v-model='cname'></el-input> </el-col>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入用户名' v-model='username'></el-input> </el-col>
			</el-row>
			<el-row>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入密码' v-model='password'></el-input> </el-col>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入手机号' v-model='telno'></el-input> </el-col>
			</el-row>
			<el-row>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入邮箱' v-model='email'></el-input> </el-col>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入性别' v-model='sex'></el-input> </el-col>
			</el-row>
			<el-row>
			  <el-col :span="12">
						<el-select style='width:300px;margin-top: 20px;' placeholder='请输入所属企业' v-model='compid'>
							<el-option v-for="(obj,index) in baseCompany" :value="obj.compid" :key="obj.compname">{{obj.compname}}</el-option>
						</el-select>
			  </el-col>
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
				cname:'',
				username:'',
				password:'',
				telno:'',
				email:'',
				sex:'',
				compid:'',
				baseCompany:[]
			};
		},
		methods:{
			saveEdit(){
					var url = this.baseUrl+"/baseUser/update"
					// 传递给后端的数据
					var data = {userid:this.userid,cname:this.cname,username:this.username,password:this.password,telno:this.telno,
				email:this.email,sex:this.sex,compid:this.compid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("更新成功");
						this.$router.push({path:'/UserList'});
						
					})
				},
				cancel(){
					this.$router.go(-1);
				}
			},
			
			mounted:function(){
				var row = this.$route.params.row;
				this.cname = row.cname;
				this.userid = row.userid;
				this.username = row.username;
				this.password = row.password;
				this.telno = row.telno;
				this.email = row.email;
				this.sex = row.sex;
				this.compid = row.compid;
				this.userid = row.userid;
				
				var url = this.baseUrl+"/baseCompany/list"
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.baseCompany = res.data;
				})
			}
		
	}
</script>
<!-- css部分 -->
<style>

</style>
