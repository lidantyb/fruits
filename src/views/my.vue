<template>
  <div>
    <!-- 登录注册 -->
    <van-row class="topMy">
      <van-col span="6">
        <van-image
          round
          width="80px"
          height="80px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </van-col>
      <van-col span="18" class="topMyClick">
        <router-link to="/login">登录</router-link>/
        <router-link to="/register">注册</router-link>
      </van-col>
    </van-row>
    <!-- 登录注册 end -->
    <van-cell to="/order/allorder" title="我的订单" icon="shop-o" is-link></van-cell>
    <van-cell to="/address" title="我的地址" icon="location" is-link></van-cell>
    <van-cell to="/starpage" title="我的收藏" icon="star" is-link></van-cell>
    <van-cell to="/coupon" title="优惠券" icon="coupon" is-link></van-cell>
    <van-cell title="设置" icon="setting" is-link></van-cell>
  </div>
</template>

<script>
  export default {
    // 在一个实例被创建之后执行代码
    created() {
      this.$store.state.active = 3
    },
  }
</script>

<style lang="scss" scoped>
.topMy{
  width: 100%;
  height: 120px;
  background:#FF6B00 url("../assets/img/bg.png");
  background-size: 100% auto;
  .van-image{
    padding: 20px;
  }
  .topMyClick{
    color: #fff;
    line-height: 120px;
    padding-left: 20px;
    a{
      color: #fff;
    }
  }
}
.van-icon{
  font-size: 20px;
  padding-right: 10px;
}
.van-cell:nth-child(3) .van-icon:nth-child(1){
  color: #51BBE0;
}
.van-cell:nth-child(4) .van-icon:nth-child(1){
  color: #ff6b00;
}
.van-cell:nth-child(5) .van-icon:nth-child(1){
  color: #51BBE0;
}
.van-cell:nth-child(6) .van-icon:nth-child(1){
  color:#818C99;
}
</style>