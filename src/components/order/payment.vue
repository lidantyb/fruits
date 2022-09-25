<template>
  <div>
    <div v-for="(item,index) in lists" :key="index">
      <van-panel 
        :title="'订单号：'+item.orderId" 
        status="待付款"
        v-if="item.type == 2"
      >
        <!-- 商品 -->
        <div v-for="(value,key) in item.goodsList" :key="key">
          <van-card
            :num="value.num"
            :price="value.price + '.00'"
            :desc="value.info"
            :title="value.name"
            :thumb="value.icon"
          />
        </div>
        <!-- 待付款 -->
        <div slot="footer" class="btn">
          <van-button @click="delData(index)" size="small">删除</van-button>
          <van-button @click="paygood(item.orderId)" size="small" type="danger">立即付款</van-button>
        </div>
      </van-panel>
    </div>
  </div>
</template>

<script>
  // import {Toast} from "vant"
  export default {
    data() {
      return {
        lists:[],
        typeList:[]
      }
    },
    methods: {
      // 删除商品
      delData(index){
        this.lists.splice(index,1)
      },
      // 立即付款
      paygood(orderId){
        // Toast("立即付款"+orderId)
        let index = this.lists.findIndex(item=>item.orderId = orderId)
        // console.log(index)
        this.lists[index].type = 3
      },
    },
    created() {
      // 获取订单数据
      this.$store.state.order.lists.forEach(element => {
        if(element.type == 2){
          this.lists.push(element)
        }
      })

      this.$store.state.orderTab = 1
      this.$store.state.isShowTabbar = false
    },
    destroyed(){
      // 修改数据
      if(this.lists.length){
        this.$store.commit("order/editId",this.lists)
      }
    }
  }
</script>

<style lang="scss" scoped>
.btn{
  text-align: right;
  button{
    margin-left: 10px;
  }
}
</style>