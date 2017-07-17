import Vue from "vue";
import Router from "vue-router";

import SubRoute from "@/components/SubRoute";
import index from "@/pages/index";
import detail from "@/pages/detail";
import userIndex from "@/pages/user/index";
import userInfo from "@/pages/user/info";
import userLove from "@/pages/user/love";

Vue.use(Router);
const router = new Router({
	routes: [{
		path: '/',
		meta:{title: '首页',},
		component: index
	}, {
		path: '/detail',
		meta:{title: '信息详情',},
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

router.afterEach(function (route) {
	if (route.meta.title) {
		document.title = route.meta.title;
	}
});

export default router;