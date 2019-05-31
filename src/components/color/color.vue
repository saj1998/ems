<!-- html部分 -->
<template>
	<div id="app">
		<h1>父组件</h1>
		<color1></color1>
		<color2></color2>
	</div>
</template>
<!-- js部分 -->
<script>
	import color1 from './color1'
	import color2 from './color2'
	export default {
		components:{color1,color2},
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

</style>
