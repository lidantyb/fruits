<template>
  <div>
    <!-- 顶部 -->
    <van-row class="topNav">
      <van-col span="3">
        <van-icon @click="$router.go(-1)" name="arrow-left" class="img" />
      </van-col>
      <van-col span="18">
        <van-nav-bar :title="$route.name" class="middle" />
      </van-col>
    </van-row>
    <!-- 顶部 end -->
    <!-- 优惠券单元格 -->
    <!-- <van-coupon-cell
      :coupons="state.coupons"
      :chosen-coupon="state.chosenCoupon"
      @click="state.showList = true"
    /> -->
    <!-- 优惠券列表 -->
    <!-- <van-popup
      v-model="state.showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px;"
    >
      <van-coupon-list
        :coupons="state.coupons"
        :chosen-coupon="state.chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup> -->
  </div>
</template>

<script>
// import { reactive } from 'vue';

// const coupon = {
//   available: 1,
//   condition: "无使用门槛\n最多优惠12元",
//   reason: "",
//   value: 150,
//   name: "优惠券名称",
//   startAt: 1489104000,
//   endAt: 1514592000,
//   valueDesc: "1.5",
//   unitDesc: "元",
// };
export default{
  // setup() {
  //   const state = reactive({
  //     coupons: [coupon],
  //     showList: false,
  //     chosenCoupon: -1,
  //   });

  //   const onChange = (index) => {
  //     state.showList = false;
  //     state.chosenCoupon = index;
  //   };
  //   const onExchange = () => {
  //     state.coupons.push(coupon);
  //   };

  //   return {
  //     state,
  //     onChange,
  //     onExchange,
  //     disabledCoupons: [coupon],
  //   };
  // },
  // 创建时隐藏底部导航
  created(){
    this.$store.state.isShowTabbar = false
  },
  // 销毁时显示底部导航
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