<!-- html部分 -->
<template>
	<div id="app">
		<el-input v-model='color' style="width: 150px;"></el-input>
		<el-button @click="fn">更改颜色</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				color:''
			};
		},
		methods:{
			fn(){
				this.$store.commit('change',this.color);
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
