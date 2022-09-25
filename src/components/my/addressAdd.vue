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
    <van-address-edit
      :area-list="areaList"
      show-set-default
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
  // import { Toast } from 'vant'
  import areaList from './area.js'
  export default {
    data() {
      return {
        areaList,  // 地区数据
      }
    },
    methods: {
      // 保存
      onSave(item){
        // Toast("保存")
        // console.log(item)
        this.$store.commit("address/add",{
          name:item.name,
          tel:item.tel,
          province:item.province,
          city:item.city,
          county:item.county,
          addressDetail:item.addressDetail,
          address:item.province + item.city + item.county +item.addressDetail,
          isDefault:item.isDefault,
        })
        sessionStorage.setItem('store',JSON.stringify(this.$store.state))
        // 返回上一级目录
        this.$router.go(-1)
      },
    },
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