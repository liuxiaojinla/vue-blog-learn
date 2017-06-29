// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

import api from "./config/api";
import App from "./App";
import router from "./router";
import iView from "iview";
import "iview/dist/styles/iview.css";
import "./scss/app.scss";

Vue.use(iView);
Vue.config.productionTip = false;
global.$api = api;

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {App}
});
