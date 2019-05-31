<!-- html部分 -->
<template>
	<div id="app">
		<h1>父组件</h1>
		<el-button @click="fn1">小鸡</el-button>
		<el-button @click="fn2">小鸟</el-button>
		<router-view/>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			fn1(){
				this.$router.push({ path:'/check/check1'});
			},
			fn2(){
				this.$router.push({ path:'/check/check2'});
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
