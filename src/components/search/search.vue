<template>
  <div>
    <!-- 顶部 -->
    <van-row class="topNav">
      <van-col span="3">
        <van-icon @click="$router.go(-1)" name="arrow-left" class="img" />
      </van-col>
      <van-col span="18">
        <van-search placeholder="搜索商品名称" class="middle" />
      </van-col>
      <van-col span="3">
        <van-icon name="search" class="img" />
      </van-col>
    </van-row>
    <!-- 顶部 end -->
    <!-- 内容 -->
    <img src="../../assets/img/search.jpg" alt="">
    <h1>搜索页</h1>
    <!-- 内容 end -->
  </div>
</template>

<script>
  export default {
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
    padding: 5px;
    background: #F2F2F2;
  }
}
</style>