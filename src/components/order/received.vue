<template>
  <div>
    <div v-for="(item,index) in lists" :key="index">
      <van-panel 
        :title="'订单号：'+item.orderId" 
        status="待收货"
        v-if="item.type == 3">
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
        <!-- 待收货 -->
        <div slot="footer" class="btn">
          <van-button @click="received(item.orderId)" size="small" type="danger">确认收货</van-button>
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
      // 确认收货
      received(orderId){
        // Toast("确认收货"+orderId)
        let index = this.lists.findIndex(item=>item.orderId = orderId)
        // console.log(index)
        this.lists[index].type = 4
      },
    },
    created() {
      // 获取订单数据
      this.$store.state.order.lists.forEach(element => {
        if(element.type == 3){
          this.lists.push(element)
        }
      });
      // 获取状态数组
      // this.typeList = this.$store.state.order.typeList
      // console.log(this.lists)

      this.$store.state.orderTab = 2
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