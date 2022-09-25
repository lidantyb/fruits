import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

// 引入vant
import vant from 'vant'
import 'vant/lib/index.css'
Vue.use(vant)

// 引入图标文件
import './assets/font/iconfont.css'

// 引入移动端css的公共样式
import "./assets/css/public.css"

// 引入swiper插件
import "swiper/swiper-bundle.css"
// 指示点
import Swiper2,{ Navigation , Pagination } from "swiper";
Swiper2.use([Navigation,Pagination])

// 手动安装rem
// $npm i amfe-flexible -S
// vscode安装插件  cssrem
// 注意：amfe-flexible对rem进行结构划分，分成10份，公式：rem(显示比值) = width(设计图宽度) / 10
// 设计图宽度：  750px  640px
import Flexible from 'amfe-flexible'
Vue.use(Flexible)

// import { createApp } from 'vue';
// import { CouponCell, CouponList } from 'vant';

// const app1 = createApp();
// app1.use(CouponCell);
// app1.use(CouponList);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
