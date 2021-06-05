import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import about from "./pages/about.vue";
import login from "./pages/login.vue";
import { store } from "./store";

const routes = [
	{
		name: "main",
		path: "/",
		component: about,
		meta: {
			requiresAuth: true,
		},
	},
	{
		name: "login",
		path: "/login",
		component: login,
	},
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		console.log(!store.getters.isLoggedIn);
		if (store.getters.isLoggedIn) {
			next();
			return;
		}
		next("/login");
	} else {
		next();
	}
});

export default router;
