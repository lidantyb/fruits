import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "./home"
import list from "./list"
import cart from "./cart"
import my from "./my"
import search from "./search"
import details from "./details"
import publics from "./public"
import order from "./order"

const routes = [
  {
    path:"/",
    redirect:"/advertpage"   // 重定向
  },
  home,     // 首页
  search,   // 搜索页
  list,     // 分类页
  ...cart,     // 购物车页
  ...my,     // 我的页面  es6写法，扩展对象
  details,    // 详情页
  ...publics,   // 公共页面
  order,       // 我的订单
];

const router = new VueRouter({
  routes
});

export default router;
