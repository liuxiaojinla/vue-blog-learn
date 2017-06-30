// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

import iView from "iview";
import "iview/dist/styles/iview.css";
import request from "./lib/request";
import config from "./config";
import router from "./routers";
import "./scss/app.scss";

global.$request = request;

Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: config.components
});
