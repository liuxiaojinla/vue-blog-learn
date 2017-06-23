import Vue from "vue";
import Router from "vue-router";

import SubRoute from "@/SubRoute";
import index from "@/pages/index";
import detail from "@/pages/detail";
import userIndex from "@/pages/user/index";
import userInfo from "@/pages/user/info";
import userLove from "@/pages/user/love";

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/',
		component: index
	}, {
		path: '/detail',
		component: detail
	}, {
		path: '/user',
		component: SubRoute,
		children: [
			{path: "/", component: userIndex},
			{path: "info", component: userInfo},
			{path: "love", component: userLove},
		]
	}]
});
