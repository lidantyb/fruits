<template>
  <div>
    <!-- 顶部 -->
    <van-row class="topNav">
      <van-col span="3">
        <van-icon @click="$router.push('/my')" name="arrow-left" class="img" />
      </van-col>
      <van-col span="18">
        <van-nav-bar title="我的订单" class="middle" />
      </van-col>
    </van-row>
    <!-- 顶部 end -->
    <van-tabs 
      v-model="$store.state.orderTab"
      background="#f2f2f2"
      color="#FF6B00"
      title-active-color="#FF6B00"
    >
      <van-tab to="/order/allorder" title="全部订单"></van-tab>
      <van-tab to="/order/payment" title="待付款"></van-tab>
      <van-tab to="/order/received" title="待收货"></van-tab>
      <van-tab to="/order/finished" title="已完成"></van-tab>
    </van-tabs>
    <!-- 三级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.state.isShowTabbar = false
    },
    destroyed() {
      this.$store.state.isShowTabbar = true
    },
  }
</script>

<style lang="scss" scoped>
.topNav{
  width: 100%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 28px;
  background: #F2F2F2;
  overflow: hidden;
  .img{
    line-height: 44px;
  }
  .middle{
    background: #F2F2F2;
  }
}
</style>