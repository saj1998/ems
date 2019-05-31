<!-- html部分 -->
<template>
	<div id="app">
		<el-date-picker
			v-model="years"
			type="year"
			placeholder="选择年" value-format="yyyy">
		</el-date-picker><el-button @click='fn()'>查询</el-button>
		<div class="chartss">
			<h2>流程作业量对比图 (单位：亿tce)</h2>
			<ve-line :data="chartData"></ve-line>
		</div>
		<div class="chartss">
			<h2>设备类别作业量对比图 (单位：吨)</h2>
			<ve-histogram :data="chartData1"></ve-histogram>
		</div>
		<div class="chartss">
			<h2> 设备信息作业量对比图 (单位：百分比)</h2>
			<ve-scatter :data="chartData2"></ve-scatter>
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
				chartData2: {
				  columns: [],
				  rows: []
				},
			
			};
		},
		methods:{
			fn(){
					// 后端网址
					var url = this.baseUrl+"/jobAmount/flowAmount"
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
					var url = this.baseUrl+"/jobAmount/devTypeAmount"
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
								
					// 后端网址
					var url = this.baseUrl+"/jobAmount/devAmount"
					// 传递给后端的数据
					var data = {year:this.years};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
					this.chartData2=res.data;
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
