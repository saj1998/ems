<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: center">故障信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			
			<el-input style='width:160px' placeholder='请输入报告人' v-model='search_faultuser'></el-input>
			<el-select style='width:160px;margin-top: 20px;' placeholder='请输入设备名称' v-model='search_devid'>
				<el-option v-for="obj in baseDevice" :value="obj.devid"  :key="obj.devname">{{obj.devname}}</el-option>
			</el-select>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="faultId" label="ID" width="80"></el-table-column>
				<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
				<el-table-column prop="cause" label="故障原因" width="120"></el-table-column>
				<el-table-column prop="faultuser" label="报告人" width="120"></el-table-column>
				<el-table-column prop="faulttime" label="故障时间(分钟)" width="180"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.faultId)">删除</el-button>
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
				search_faultuser:'',
				list:[],
				baseDevice:[]
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/produceFault/search"
				// 传递给后端的数据
				var data = {devid:this.search_devid,faultuser:this.search_faultuser};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
				 this.list = res.data;
				})
			},
			del(faultId){
				// 后端网址
				var url = this.baseUrl+"/produceFault/delete"
				// 传递给后端的数据
				var data = {faultId:faultId};
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
				this.$router.push({name:'FaultEdit',params:{row:row}});
			},
			add(){
				// 路由跳转
				this.$router.push({path:'/FaultAdd'});
			}
		},
		mounted:function(){
			this.search();
			var url = this.baseUrl+"/baseDevice/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.baseDevice = res.data;
				})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
