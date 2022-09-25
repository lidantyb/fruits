<template>
  <div class="settlement">
    <!-- 顶部 -->
    <van-row class="topNav">
      <van-col span="3">
        <van-icon @click="goBack" name="arrow-left" class="img" />
      </van-col>
      <van-col span="18">
        <van-nav-bar :title="$route.name" class="middle" />
      </van-col>
    </van-row>
    <!-- 顶部 end -->
    <!-- 空地址 -->
    <van-contact-card v-show="isAddressNull" type="add" @click="onAdd" />
    <!-- 空地址 end -->
    <!-- 地址 -->
    <van-contact-card
      v-show="!isAddressNull"
      type="edit"
      :name="deafultAddress.name"
      :tel="deafultAddress.tel"
      @click="onEdit"
    />
    <!-- 地址 end -->
    <!-- 商品 -->
    <div class="goods">
      <van-card
        v-for="(item,index) in goodsList"
        :key="index"
        :num="item.num"
        :price="item.price + '.00'"
        :desc="item.info"
        :title="item.name"
        :thumb="item.icon"
      />
    </div>
    <!-- 商品 end -->
    <!-- 底部 -->
    <van-submit-bar 
      :price="totalPrice*100" 
      button-text="支付" 
      @submit="onSubmit" 
    />
    <!-- 底部 end -->
  </div>
</template>

<script>
import { Toast } from 'vant'
  export default {
    data() {
      return {
        deafultAddress:{},   // 默认选中地址
        goodsList:[],        // 商品数组
        isAddressNull:true,  // 判断地址是否为空
      }
    },
    created() {
      // 获取默认选中地址的id
      let defaultId = this.$store.state.address.defaultId
      // console.log(defaultId)
      // 获取地址数据
      let address = this.$store.state.address.lists
      // console.log(address)
      // 判断是否有地址
      if(address.length == 0){
        // 没有地址数据
        this.isAddressNull = true
      }else{
        // 有地址数据
        this.isAddressNull = false
        this.deafultAddress = address.find(item=>item.id == defaultId)
      }

      // 判断是从详情页购买还是购物车购买
      let index = this.$store.state.cart.index
      if(index == 0){
        // 从购物车中购买商品
        // 获取商品数据
        let lists = this.$store.state.cart.lists
        // console.log(lists)
        for(let i=0;i<lists.length;i++){
          // 判断商品是否选中
          if(lists[i].isSelect){
            // 将选中的商品添加到商品数组中
            this.goodsList.push(lists[i])
          }
        }
      }else if(index == 1){
        // 从详情页中购买商品
        this.goodsList = this.$store.state.cart.goodDetail
        this.goodsList[0].isSelect = true
      }
      console.log('settlement ==> ',this.goodsList)

      this.$store.state.isShowTabbar = false
    },
    methods: {
      // 空地址的点击事件
      onAdd(){
        // Toast("添加地址")
        this.$router.push("/address")
      },
      // 修改地址的点击事件
      onEdit(){
        // Toast("修改地址")
        this.$router.push("/address")
      },
      // 支付订单
      onSubmit(){
        // 判断是否有地址
        if(this.isAddressNull){
          Toast("请添加地址")
        }else{
          // 待收货
          // 将数据添加到订单vuex中
          let order = {
            orderId:new Date().getTime(),
            address:this.deafultAddress,
            goodsList:this.goodsList,
            type:3,
          }
          this.$store.commit("order/add",order)

          // 清除购物车中选中的商品
          this.$store.state.cart.lists.forEach((element,index) => {
            this.goodsList.forEach(item=>{
              // 判断购物车中那些商品已经结算
              if(element.id == item.id){
                // 删除当前商品
                this.$store.state.cart.lists.splice(index,1)
              }
            })
          })
          // 修改商品总数
          this.$store.state.cart.totalNum = 0
          this.$store.state.cart.lists.forEach((good)=>{
            this.$store.state.cart.totalNum += good.num
          })
          // 跳转到我的订单
          // Toast("跳转到我的订单页面")
          this.$router.push("/order/received")
        }
      },
      // 返回
      goBack(){
        // 待支付
        // 将数据添加到订单vuex中
        let order = {
          orderId:new Date().getTime(),
          address:this.deafultAddress,
          goodsList:this.goodsList,
          type:2,
        }
        this.$store.commit("order/add",order)

        // 清除购物车中选中的商品
        this.$store.state.cart.lists.forEach((element,index) => {
          this.goodsList.forEach(item=>{
            // 判断购物车中那些商品已经结算
            if(element.id == item.id){
              // 删除当前商品
              this.$store.state.cart.lists.splice(index,1)
            }
          })
        })
        // 修改商品总数
        this.$store.state.cart.totalNum = 0
        this.$store.state.cart.lists.forEach((good)=>{
          this.$store.state.cart.totalNum += good.num
        })
        // 返回上一级目录
        this.$router.go(-1)
        this.$store.state.isShowTabbar = true
      }
    },
    computed:{
      // 计算总价
      totalPrice(){
        // reduce()   调用计算价格
        // total   总价
        // item    数据中的元素
        return this.goodsList.reduce((total,item)=>{
          // 判断商品是否选中
          // console.log('item ==> ',total + parseInt(item.price) * parseInt(item.num))
          if(!item.isSelect)  return total   // false不计算当前商品的价格
          return total + parseInt(item.price) * parseInt(item.num)
        },0)   // 默认为0
      }
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
.goods{
  width: 90%;
  background-color: #fff;
  margin: 10px auto;
  padding: 8px;
  border-radius: 10px;
}
</style>