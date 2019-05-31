<!-- html部分 -->
<template>
	<div id="app">
		<h2>子组件1</h2>
		<el-input style="width: 150px;" v-model="$store.state.v1" ></el-input>
		<el-input style="width: 150px;" v-model="$store.state.v2"></el-input>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
// 				v1:'',
// 				v2:''
			};
		},
		methods:{
			
		}
		
	}
</script>
<!-- css部分 -->
<style>

</style>
