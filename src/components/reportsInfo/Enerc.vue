<!-- html部分 -->
<template>
	<div id="app">
		<div style="text-align: left;">
		请选择年份：<el-date-picker style=""
			v-model="years"
			type="year"
			placeholder="选择年" value-format="yyyy">
		</el-date-picker><el-button @click='fn()'>查询</el-button>
		</div>
		<div class="chartss" style="width: 550px;height: 450px;display: inline-block;margin-right: 20px;">
			<h2>设备类别能耗比对比图 (单位：亿tce)</h2>
			<ve-line :data="chartData"></ve-line>
		</div>
		<div class="chartss" style="width: 550px;height: 450px;display: inline-block;">
			<h2>设备信息对比图 (单位：亿tce)</h2>
			<ve-line :data="chartData1"></ve-line>
		</div>
		<div class="chartss" style="width: 550px;height: 450px;display: inline-block;margin-right: 20px;">
			<h2>电能耗比对比图 (单位：亿tce)</h2>
			<ve-line :data="chartData2"></ve-line>
		</div>
		<div class="chartss" style="width: 550px;height: 450px;display: inline-block;">
			<h2>流程信息比对比图 (单位：亿tce)</h2>
			<ve-line :data="chartData3"></ve-line>
		</div>
		<div class="chartss" style="width: 550px;height: 450px;display: inline-block;margin-right: 20px;">
			<h2>水能耗比对比图 (单位：亿tce)</h2>
			<ve-line :data="chartData4"></ve-line>
		</div>
		<div class="chartss" style="width: 550px;height: 450px;display: inline-block;">
			<h2>油能耗比对比图 (单位：亿tce)</h2>
			<ve-line :data="chartData5"></ve-line>
		</div>
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
				chartData3: {
				  columns: [],
				  rows: []
				},
				chartData4: {
				  columns: [],
				  rows: []
				},
				chartData5: {
				  columns: [],
				  rows: []
				}	
			};
		},
		methods:{
			fn(){
					// 后端网址
					var url = this.baseUrl+"/energyConsume/devTypeConsume"
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
					var url = this.baseUrl+"/energyConsume/devConsume"
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
					var url = this.baseUrl+"/energyConsume/electricConsume"
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
					
					// 后端网址
					var url = this.baseUrl+"/energyConsume/flowConsume"
					// 传递给后端的数据
					var data = {year:this.years};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
					this.chartData3=res.data;
					})
					
					// 后端网址
					var url = this.baseUrl+"/energyConsume/waterConsume"
					// 传递给后端的数据
					var data = {year:this.years};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
					this.chartData4=res.data;
					})
					
					// 后端网址
					var url = this.baseUrl+"/energyConsume/oilConsume"
					// 传递给后端的数据
					var data = {year:this.years};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
					this.chartData5=res.data;
					})
				}
		},
		mounted:function() {
			this.fn();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
