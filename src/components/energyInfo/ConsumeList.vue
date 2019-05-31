<!-- html部分 -->
<template>
	<div>
			<h1 style="text-align: center">能耗信息</h1>
			<div style="text-align: left;margin:0 0 20px 50px;">
				<el-select style='width:160px;margin-top: 20px;' placeholder='请输入设备名称' v-model='search_devid'>
					<el-option v-for="obj in baseDevice" :value="obj.devid"  :key="obj.devname">{{obj.devname}}</el-option>
				</el-select>
				<el-button @click='search'>查询</el-button>
				<el-button @click='add'>添加</el-button>
			</div>
			<center>
				<el-table :data="list">
					<el-table-column prop="consumeid" label="ID" width="80"></el-table-column>
					<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
					<el-table-column prop="electric" label="电耗(kw.h) " width="180"></el-table-column>
					<el-table-column prop="water" label="水耗(吨)" width="160"></el-table-column>
					<el-table-column prop="oil" label="油耗(L)" width="160"></el-table-column>
					<el-table-column prop="reportid" label="报岗人id" width="100"></el-table-column>
					<el-table-column label="操作" width="230">
					  <template slot-scope="scope">
						<el-button size="mini" @click="update(scope.row)">编辑</el-button>
						<el-button size="mini" type='danger' @click="del(scope.row.consumeid)">删除</el-button>
					  </template>
					</el-table-column>
				</el-table>
			</center>
		</div>
	
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				search_devid:'',
				list:[],
				baseDevice:[],
				produceReport:[]
			};
		},
		methods:{
			search(){
					var url = this.baseUrl+"/energyConsume/search"
					// 传递给后端的数据
					var data = {devid:this.search_devid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
					 this.list = res.data;
					})
				},
				del(consumeid){
					// 后端网址
					var url = this.baseUrl+"/energyConsume/delete"
					// 传递给后端的数据
					var data = {consumeid:consumeid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("删除成功");
						this.search();
					})
				},
				update(row){
					// 跳转
					this.$router.push({name:'ConsumeEdit',params:{row:row}});
				},
				add(){
					// 路由跳转
					this.$router.push({path:'/ConsumeAdd'});
				}
			},
			mounted() {
				this.search();
				var url = this.baseUrl+"/baseDevice/list"
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
						this.baseDevice = res.data;
					})
					var url = this.baseUrl+"/produceReport/list"
					this.$axios.post(url,{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
							this.produceReport = res.data;
						})
			}
	}
</script>
<!-- css部分 -->
<style>

</style>
