<!-- html部分 -->
<template>
	<div style='text-align: center;'>
		<h1>修改折标煤系数</h1>
		<el-row>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入能源类别' v-model='energetype'></el-input></el-col>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入系数' v-model='ratio'></el-input></el-col>  
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
				energetype:'',
				ratio:'',
				sid:''
			};
		},
		methods:{
			saveEdit(){
						var url = this.baseUrl+"/energyStandradcoal/update"
						// 传递给后端的数据
						var data = {energetype:this.energetype,ratio:this.ratio,sid:this.sid};
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							// res是后端的响应
							this.$message("更新成功");
							this.$router.push({path:'/StandradcoalList'});
							
						})
					},
					cancel(){
						this.$router.go(-1);
					}
				},
				
				mounted:function(){
					var row = this.$route.params.row;
					this.energetype = row.energetype;
					this.ratio = row.ratio;
					this.sid = row.sid;
				}
	}
</script>
<!-- css部分 -->
<style>

</style>
