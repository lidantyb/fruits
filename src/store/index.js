import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 
import cart from './cart.js'
import address from './address.js'
import order from './order.js'
import star from './star.js'

export default new Vuex.Store({
  state: {
    active:0,           // 底部导航的索引值
    isShowTabbar:true,  // 底部导航的显示隐藏
    orderTab:0,         // 订单导航的索引值
  },
  getters:{},
  mutations: {},
  actions: {},
  modules: {
    cart,   // 购物车
    address,  // 地址
    order,    // 我的订单
    star,    // 收藏夹
  }
});
