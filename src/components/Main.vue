<!-- html部分 -->
<template>
	<div id="app" style="height: 600px;">
		<div id="tag">
			<el-tag  v-for="(tag,index) in $store.state.tags" :key="tag.name" closable :type="tag.type" style="margin-left:20px"
			 @close='del(tag,index)' @click='cli(tag,index)'>
				{{tag.name}}
			</el-tag>
		</div>
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
			del(tag,index){
				if(this.$store.state.tags.length==1){
						this.$message("只剩一个，不可以删除！");
					}else{
						// <!-- 删除 
						var flag=this.$store.state.tags[index].type=='warning';
						this.$store.commit('deltag',index);
						// index splice(index,1)
						if(flag){  //判断type='warning'
							if(index==0){
								this.$store.commit('clitag',0);
								this.$router.push({path:this.$store.state.tags[0].url});
// 								更改arr[0]
// 								跳转arr[0]
							}else{
								this.$store.commit('clitag',index-1);
								this.$router.push({path:this.$store.state.tags[index-1].url});
							}	
						}
					}
			},
			cli(tag,index){
				this.$router.push({path:tag.url});
				this.$store.commit('clitag',index);
			}
		}
	}
</script>
<!-- css部分 -->
<style>
	#tag{
		text-align: left;
	}
</style>
