//引入Vue组件
import Vue from "vue";
//引入自定组件
import App from "./app.vue";
import Home from "./components/home/home.vue";
import Vip from "./components/vip/vip.vue";
import ShoppingCart from "./components/shoppingCart/shoppingCart.vue";
import Search from "./components/search/search.vue";
import NewsList from "./components/news/newsList.vue";

//引入mint-ui
import MintUi from "mint-ui";
Vue.use(MintUi);
import "mint-ui/lib/style.css";



//引入mui的样式
import "./static/vendor/mui/dist/css/mui.css";

//配置axios
import Axios from "axios";
Vue.prototype.$ajax = Axios;

//配置路由router
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter({
	linkActiveClass: "mui-active",
	routes: [
		{name: "default", path: "/", redirect: "home"},
		{name: "home", path: "/home", component: Home},
		{name: "vip", path: "/vip", component: Vip},
		{name: "shoppingCart", path: "/shoppingCart", component: ShoppingCart},
		{name: "search", path: "/search", component: Search},
		{name: "newsList", path: "/newsList", component: NewsList}
	]
});

//引入自定义全局样式
import "./static/css/global.css";

//引入请求地址的配置文件
import HttpConfig from "./httpConfig.js";
Vue.prototype.$httpConfig = HttpConfig;

//设置全局组件
//轮播图组件
import MySwipe from "./components/common/mySwipe.vue";
Vue.component("my-swipe", MySwipe);

//返回导航栏
import NavBar from "./components/common/navBar.vue";
Vue.component("nav-bar", NavBar);

//注册时间格式过滤器momentjs插件
import Moment from "moment";
Vue.filter("timeTransform", (value) => {
	return Moment(value).format("YYYY-MM-DD hh:mm:ss");
});


new Vue({
	router,
	el: "#app",
	render: (c) => c(App)
})

