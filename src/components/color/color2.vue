<!-- html部分 -->
<template>
	<div id="app">
		<div id="aa" :style="{background:$store.state.color}"></div>
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
			
		}
	}
</script>
<!-- css部分 -->
<style>
	#aa{
		display: inline-block;width: 400px;height: 500px;border: #1598ED solid 1px;
	}
</style>
