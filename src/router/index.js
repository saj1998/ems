import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
// baseInfo
import CompList from '@/components/baseInfo/CompList'
import CompAdd from '@/components/baseInfo/CompAdd'
import CompEdit from '@/components/baseInfo/CompEdit'

import DevtypeList from '@/components/baseInfo/DevtypeList'
import DevtypeAdd from '@/components/baseInfo/DevtypeAdd'
import DevtypeEdit from '@/components/baseInfo/DevtypeEdit'

import DeviceList from '@/components/baseInfo/DeviceList'
import DeviceAdd from '@/components/baseInfo/DeviceAdd'
import DeviceEdit from '@/components/baseInfo/DeviceEdit'

import UserList from '@/components/baseInfo/UserList'
import UserAdd from '@/components/baseInfo/UserAdd'
import UserEdit from '@/components/baseInfo/UserEdit'

import FlowList from '@/components/baseInfo/FlowList'
import FlowAdd from '@/components/baseInfo/FlowAdd'
import FlowEdit from '@/components/baseInfo/FlowEdit'
// produceInfo
import FaultList from '@/components/produceInfo/FaultList'
import FaultAdd from '@/components/produceInfo/FaultAdd'
import FaultEdit from '@/components/produceInfo/FaultEdit'

import RepairList from '@/components/produceInfo/RepairList'
import RepairAdd from '@/components/produceInfo/RepairAdd'
import RepairEdit from '@/components/produceInfo/RepairEdit'


import ReportList from '@/components/produceInfo/ReportList'
import ReportAdd from '@/components/produceInfo/ReportAdd'
import ReportEdit from '@/components/produceInfo/ReportEdit'
import Control from '@/components/produceInfo/Control'

import JobList from '@/components/produceInfo/JobList'
import JobAdd from '@/components/produceInfo/JobAdd'
import JobEdit from '@/components/produceInfo/JobEdit'

// energy
import ConsumeList from '@/components/energyInfo/ConsumeList'
import ConsumeAdd from '@/components/energyInfo/ConsumeAdd'
import ConsumeEdit from '@/components/energyInfo/ConsumeEdit'

import StandradcoalList from '@/components/energyInfo/StandradcoalList'
import StandradcoalAdd from '@/components/energyInfo/StandradcoalAdd'
import StandradcoalEdit from '@/components/energyInfo/StandradcoalEdit'

import Jobm from '@/components/reportsInfo/Jobm'
import Enerc from '@/components/reportsInfo/Enerc'
import EnergyModel from '@/components/reportsInfo/EnergyModel'
import Adev from '@/components/reportsInfo/Adev'
import Bdev from '@/components/reportsInfo/Bdev'
import Cdev from '@/components/reportsInfo/Cdev'
import Ddev from '@/components/reportsInfo/Ddev'

import Welcome from '@/components/Welcome'
import Login from '@/components/Login'
import par from '@/components/vuexx/par'
import chi1 from '@/components/vuexx/chi1'
import chi2 from '@/components/vuexx/chi2'
import color from '@/components/color/color'
import color1 from '@/components/color/color1'
import color2 from '@/components/color/color2'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
		{path: '/Login',name: 'Login',component: Login},
		{
		  path: '/',name: 'Index',component: Index,children:[
			  // baseInfo
				{path: 'CompList',name: 'CompList',component: CompList},
				{path: 'CompAdd',name: 'CompAdd',component: CompAdd},
				{path: 'CompEdit',name: 'CompEdit',component: CompEdit},
				{path: 'DevtypeList',name: 'DevtypeList',component: DevtypeList},
				{path: 'DevtypeAdd',name: 'DevtypeAdd',component: DevtypeAdd},
				{path: 'DevtypeEdit',name: 'DevtypeEdit',component: DevtypeEdit},
				{path: 'UserList',name: 'UserList',component: UserList},
				{path: 'UserAdd',name: 'UserAdd',component: UserAdd},
				{path: 'UserEdit',name: 'UserEdit',component: UserEdit},
				{path: 'DeviceList',name: 'DeviceList',component: DeviceList},
				{path: 'DeviceAdd',name: 'DeviceAdd',component: DeviceAdd},
				{path: 'DeviceEdit',name: 'DeviceEdit',component: DeviceEdit},
				{path: 'FlowList',name: 'FlowList',component: FlowList},
				{path: 'FlowAdd',name: 'FlowAdd',component: FlowAdd},
				{path: 'FlowEdit',name: 'FlowEdit',component: FlowEdit},
			// produceInfo
				{path: 'FaultList',name: 'FaultList',component: FaultList},
				{path: 'FaultAdd',name: 'FaultAdd',component: FaultAdd},
				{path: 'FaultEdit',name: 'FaultEdit',component: FaultEdit},
				{path: 'RepairList',name: 'RepairList',component: RepairList},
				{path: 'RepairAdd',name: 'RepairAdd',component: RepairAdd},
				{path: 'RepairEdit',name: 'RepairEdit',component: RepairEdit},
				{path: 'ReportList',name: 'ReportList',component: ReportList},
				{path: 'ReportAdd',name: 'ReportAdd',component: ReportAdd},
				{path: 'ReportEdit',name: 'ReportEdit',component: ReportEdit},
				{path: 'Control',name: 'Control',component: Control},
				{path: 'JobList',name: 'JobList',component: JobList},
				{path: 'JobAdd',name: 'JobAdd',component: JobAdd},
				{path: 'JobEdit',name: 'JobEdit',component: JobEdit},
			// energy
				{path: 'ConsumeList',name: 'ConsumeList',component: ConsumeList},
				{path: 'ConsumeAdd',name: 'ConsumeAdd',component: ConsumeAdd},
				{path: 'ConsumeEdit',name: 'ConsumeEdit',component: ConsumeEdit},
				{path: 'StandradcoalList',name: 'StandradcoalList',component: StandradcoalList},
				{path: 'StandradcoalAdd',name: 'StandradcoalAdd',component: StandradcoalAdd},
				{path: 'StandradcoalEdit',name: 'StandradcoalEdit',component: StandradcoalEdit},
				{path: '/',name: 'Welcome',component: Welcome},
				{path: 'Jobm',name: 'Jobm',component: Jobm},
				{path: 'Enerc',name: 'Enerc',component: Enerc},
				{path: 'EnergyModel',name: 'EnergyModel',component: EnergyModel},
				{path: 'Adev',name: 'Adev',component: Adev},
				{path: 'Bdev',name: 'Bdev',component: Bdev},
				{path: 'Cdev',name: 'Cdev',component: Cdev},
				{path: 'Ddev',name: 'Ddev',component: Ddev}
				]
		},
		{
			path:'/par',name: 'par',component:par
		},
		{
			path:'/color',name: 'color',component:color
		}
	
		
  ]
})
