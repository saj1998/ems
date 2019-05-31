<!-- html部分 -->
<template>
	<div id="app" style="height: 600px;">
		<h1 style="text-align: left; font-size: 20px;">人员信息</h1>
		<hr id="hh" />
		<!-- <div style="text-align: left;">
			<el-date-picker
			  v-model="value1"
			  type="date"
			  placeholder="选择日期">
			</el-date-picker>
			<el-input style='width: 180px;' placeholder='请输入查询条件' v-model='value2'></el-input>
			<el-button>查询</el-button>
		</div> -->
		<div style="text-align: right;margin: 30px 0;">
			<el-button>新增</el-button>
			<el-button>修改</el-button>
		</div>
		<div>
			<el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="xm"
      label="姓名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="yhm"
      label="用户名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="mm"
      label="密码"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sjh"
      label="手机号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="yx"
      label="邮箱"
      width="120">
    </el-table-column>
    <el-table-column
      prop="xb"
      label="性别"
      width="120">
    </el-table-column>
	<el-table-column
	  prop="ssqy"
	  label="所属企业"
	  width="180">
	</el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="183">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
			
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
// 				value1:'',
// 				value2:'',
				tableData: [
					{
						xm:'周口港',
						yhm:'',
						mm:'',
						sjh:'',
						yx:'',
						xb:'',
						ssqy:''
					},
					{
						xm:'漯河港',
						yhm:'',
						mm:'',
						sjh:'',
						yx:'',
						xb:'',
						ssqy:''
					},
					{
						xm:'刘湾港',
						yhm:'',
						mm:'',
						sjh:'',
						yx:'',
						xb:'',
						ssqy:''
					},
					{
						xm:'日照港',
						yhm:'',
						mm:'',
						sjh:'',
						yx:'',
						xb:'',
						ssqy:''
					},
				]
			};
		},
		methods:{
			handleClick(row) {
				console.log(row);
			  }
		}
	}
</script>
<!-- css部分 -->
<style>
	#hh{
		color:#52bab5;margin: 10px 0;
	}
</style>
