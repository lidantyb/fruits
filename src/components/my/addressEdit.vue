<template>
  <div>
    <!-- 顶部 -->
    <!-- <van-nav-bar :title="$route.name" /> -->
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
      :address-info="addressInfo"
      show-set-default
      show-delete
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @cancel-delete="cancelDelete"
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
        addressInfo:{},  // 收货人信息初始值
      }
    },
    methods: {
      // 保存
      onSave(item){
        // Toast("保存")
        // console.log(item)
        this.$store.commit("address/edit",{
          id:item.id,
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
      // 删除
      onDelete(item){
        // Toast("删除")
        this.$store.commit("address/del",item)
        this.$router.go(-1)
        sessionStorage.setItem('store',JSON.stringify(this.$store.state))
      },
      // 取消删除
      cancelDelete(){
        this.$router.go(-1)
      }
    },
    created() {
      // 获取当前点击的数据下标值
      let index = this.$route.query.index
      // console.log(index)
      // 获取收货人信息初始值
      this.addressInfo = this.$store.state.address.lists[index]
      // 
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