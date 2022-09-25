<template>
  <div>
    <div v-for="(item,index) in lists" :key="index">
      <van-panel 
        :title="'订单号：'+item.orderId" 
        status="已完成"
        v-if="item.type == 4">
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
        <!-- 已完成 -->
        <div slot="footer" class="btn">
          <van-button @click="delData(index)" size="small">删除</van-button>
          <van-button @click="evaluate(item.orderId)" size="small" type="danger">评价</van-button>
        </div>
      </van-panel>
    </div>
  </div>
</template>

<script>
  import {Toast} from "vant"
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
        // this.lists.splice(index,1)
        this.lists[index].type = 5
      },
      // 评价
      evaluate(orderId){
        Toast("评价"+orderId)
      },
    },
    created() {
      // 获取订单数据
      this.$store.state.order.lists.forEach(element => {
        if(element.type == 4){
          this.lists.push(element)
        }
      });
      // 获取状态数组
      this.typeList = this.$store.state.order.typeList
      // console.log(this.lists)

      this.$store.state.orderTab = 3
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