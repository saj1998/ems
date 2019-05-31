<!-- html部分 -->
<template>
	<div id="app">
		<el-date-picker
			v-model="years"
			type="year"
			placeholder="选择年" value-format="yyyy">
		</el-date-picker><el-button @click='fn()'>查询</el-button>
		<div class="chartss" style="width: 1000px;margin: 0 auto;">
			<h2>港口间作业量对比图</h2>
			<ve-line :data="chartData"></ve-line>
		</div>
		<div class="chartss" style="width: 1000px;margin: 0 auto;">
			<h2>港口间能耗对比图 (单位：吨)</h2>
			<ve-histogram :data="chartData1"></ve-histogram>
		</div>
		
		<!--style="width: 550px;height: 450px;display: inline-block;margin-right: 20px;"  -->
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				years:'2018',
				chartData: {
				  columns: [],
				  rows: []
				},
				chartData1: {
				  columns: [],
				  rows: []
				},
				
			
			};
		},
		methods:{
			fn(){
					// 后端网址
					var url = this.baseUrl+"/devInfo/amount"
					// 传递给后端的数据
					var data = {year:this.years};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
					 this.chartData = res.data;
					})
					
					// 后端网址
					var url = this.baseUrl+"/devInfo/consume"
					// 传递给后端的数据
					var data = {year:this.years};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
					this.chartData1=res.data;
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
