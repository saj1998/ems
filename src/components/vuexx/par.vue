<!-- html部分 -->
<template>
	<div id="app">
		<h1>父组件</h1>
		<chi1></chi1>
		<chi2></chi2>
	</div>
</template>
<!-- js部分 -->
<script>
	import chi1 from './chi1'
	import chi2 from './chi2'
	export default {
		components:{chi1,chi2},
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
