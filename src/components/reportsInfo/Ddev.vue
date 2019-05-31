<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: center">人员信息</h1>
		<el-date-picker
			v-model="years"
			type="year"
			placeholder="选择年" value-format="yyyy">
		</el-date-picker><el-button @click='fn()'>查询</el-button>
		<center>
			<el-table :data="list">
				<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
				<el-table-column prop="amount" label="作业量" width="120"></el-table-column>
				<el-table-column prop="consume" label="能耗(折标煤)" width="120"></el-table-column>
				<el-table-column prop="cost" label="维修成本" width="180"></el-table-column>
			</el-table>
		</center>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				years:'2018',
				list:[]
			};
		},
		methods:{
			fn(){
				// 后端网址
				var url = this.baseUrl+"/devInfo/cost"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
				 this.list = res.data;
				})
			}
		},
		 mounted:function(){
			 this.fn();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
