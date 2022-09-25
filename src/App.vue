// vbase快捷方式
<template>
  <div>
    <van-tabbar v-model="$store.state.active" v-show="$store.state.isShowTabbar">
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/list" icon="bar-chart-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created(){
    // 在页面加载时读取sessionStorage
    if(sessionStorage.getItem('store')){
      this.$store.replaceState(Object.assign({},this.$store.state),JSON.parse(sessionStorage.getItem('store')))
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener('beforeunload',() => {
      sessionStorage.setItem('store',JSON.stringify(this.$store.state))
    })
  }
};
</script>

<style lang="scss" scoped>
</style>