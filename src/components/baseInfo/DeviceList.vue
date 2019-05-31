<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: center">设备信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-select style='width:160px;margin-top: 20px;' placeholder='设备类别' v-model='search_typeid'>
				<el-option v-for="obj in baseDevtype" :value="obj.typeid"  :key="obj.typename">{{obj.typename}}</el-option>
			</el-select>
			<el-select style='width:160px;margin-top: 20px;' placeholder='请输入所属企业' v-model='search_compid'>
				<el-option v-for="obj in baseCompany" :value="obj.compid" :key="obj.compname">{{obj.compname}}</el-option>
			</el-select>
			<!-- <el-input style='width:160px' placeholder='请输入设备类别' v-model='search_typeid' 
						v-for="obj in baseDevtype" :value="obj.typeid"  :key="obj.typename"></el-input> -->
			<!-- <el-input style='width:160px' placeholder='请输入所属企业' v-model='search_cname'></el-input> -->
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="devid" label="ID" width="80"></el-table-column>
				<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
				<el-table-column prop="baseDevtype.typename" label="设备类别" width="120"></el-table-column>
				<el-table-column prop="devdate" label="投入时间" width="120"></el-table-column>
				<el-table-column prop="devuser" label="责任人" width="180"></el-table-column>
				<el-table-column prop="baseCompany.compname" label="所属企业" width="180"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.devid)">删除</el-button>
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
				search_typeid:'',
				search_compid:'',
				list:[],
				baseDevtype:[],
				baseCompany:[]
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/baseDevice/search"
				// 传递给后端的数据
				var data = {typeid:this.search_typeid,compid:this.search_compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
				 this.list = res.data;
				})
			},
			del(userid){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/delete"
				// 传递给后端的数据
				var data = {devid:devid};
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
				this.$router.push({name:'DeviceEdit',params:{row:row}});
			},
			add(){
				// 路由跳转
				this.$router.push({path:'/DeviceAdd'});
			}
		},
		mounted:function(){
// 			var url = this.baseUrl+"/baseDevice/list"
// 			this.$axios.post(url,{
// 				headers: {
// 					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
// 				}
// 			}).then(res=>{
// 					this.list = res.data;
// 				})
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
			this.search();
			}
	}
</script>
<!-- css部分 -->
<style>

</style>
