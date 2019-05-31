import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// state对象用来存储数据
var state={
// 	v1:'',
// 	v2:'',
// 	color:'',
	tags: [
	  {name: '首页', type: 'warning' ,url:'/'},
	],
// 	compArr:[
// 		{ date: '2016-05-03',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333},
// 		{ date: '2016-05-04',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333},
// 		{ date: '2016-05-07',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333},
// 		{ date: '2016-05-09',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333}
// 	],
	loginFlag:false
	
	
}
// mutations对象用来存储方法
var mutations = {
// 	add(state){
// 		count++;
// 	}
// 		change(state,colorname){
// 			state.color=colorname;
// 		}
		addtag(state,obj){
			for (var item of state.tags) {
				item.type='';
			}
			for (var item of state.tags) {
				if (item.name==obj.name) {
					item.type='warning';
					return;
				}
			}
			state.tags.push(obj);
		},
		clitag(state,index){
			for (var item of state.tags) {
				item.type='';
			}
			state.tags[index].type='warning';
		},
		deltag(state,index){
			state.tags.splice(index,1);
		},
		addcomp(state,comp){
			state.compArr.push(comp);
		},
		delComp(state,date){
			for(var i=0;i<state.compArr.length;i++){
				if(state.compArr[i].date==date){
					state.compArr.splice(i,1);
				}
			}
	}
}
// 创建一个store对象,并暴露出去 store对象有两个属性,state和mutations
export default new Vuex.Store({
	state,
	mutations
})