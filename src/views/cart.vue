<template>
  <div>
    <!-- 顶部 -->
    <van-sticky>
      <van-row class="topNav">
        <van-col span="3">
          <!-- $router.push('/home')  跳转到指定的页面 -->
          <!-- $router.go(-1)  返回上一级目录 -->
          <van-icon
            class="reback"
            name="arrow-left"
            @click="$router.push('/home')"
          />
        </van-col>
        <van-col span="18">
          <van-nav-bar :title="$route.name" class="middle" />
        </van-col>
        <van-col span="3">
          <van-icon @click="getSearch" name="search" class="img" />
        </van-col>
      </van-row>  
    </van-sticky>
    <!-- 顶部 end -->
    <!-- 商品 -->
    <div class="goods" v-show="lists.length != 0">
      <div v-for="(item,index) in lists" :key="index">
        <van-card
          :price="item.price+'.00'"
          :desc="item.info"
          :title="item.name"
          :thumb="item.icon"
        >
          <template #tags>
            <van-tag plain @click="item.num <= 1 ? 1 : item.num --">-</van-tag>
            <input type="text" :value="item.num" class="inputBtn">
            <van-tag plain @click="item.num ++">+</van-tag>
          </template>
          <template #footer>
            <van-checkbox v-model="item.isSelect" class="checkBtn"></van-checkbox>
            <van-button @click="delData(index)" size="mini" class="delBtn">删除</van-button>
          </template>
        </van-card>  
      </div>  
    </div>
    <!-- 商品 end -->
    <!-- 底部 -->
    <van-submit-bar v-show="lists.length != 0" @submit="onSubmit" :price="totalPrice*100" button-text="提交订单">
      <van-checkbox v-model="checkAll" checked-color="#FF5722">全选</van-checkbox>
    </van-submit-bar>
    <!-- 底部 end -->
    <!-- 购物车为空时 -->
    <div class="cartNull" v-show="lists.length == 0">
      <img src="../assets/img/cartNull.png" alt="">
      <div class="text">购物车还是空的</div>
      <router-link class="toHome" to="/home">去逛逛</router-link>
      <!-- <div class="toHome">去逛逛</div> -->
    </div>
    <!-- 购物车为空时 end -->
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  const { mapState } = createNamespacedHelpers('cart')
  import { Toast } from 'vant'
  export default {
    data() {
      return {
        goodsList:[],
        // lists:[]
      }
    },
    methods: {
      // 跳转到搜索页
      getSearch(){
        this.$router.push("/search")
      },
      // 删除数据
      delData(index){
        this.lists.splice(index,1)
      },
      // 点击结算
      onSubmit(){
        let isPay = false
        // 判断是否有商品被选中
        this.lists.forEach((element)=>{
          if(element.isSelect){
            isPay = true
          }
        })
        if(isPay){
          this.$router.push("/settlement")
          this.$store.commit("cart/cartAdd",0)
        }else{
          Toast('请选择商品')
        }
        // sessionStorage.setItem('store',JSON.stringify(this.$store.state))
      },
      toDetail(index){
        // 跳转页面
        this.$router.push("/details")
        // 将当前点击的商品数据传入到详情页中
        let good = this.goodsList[index]
        // console.log(good)
        this.$store.commit("star/addDetail",good)
      }
    },
    computed:{
      // 获取数据
      ...mapState({
        lists: state=>state.lists
      }),
      // 全选
      checkAll:{
        // 获取
        get(){
          // 第一次加载页面过程中，判断商品数据中isSelect状态，如果全部为true,则返回true
          return this.lists.every((item)=>{
            // 所有商品中只要有一个为false，则返回为false
            return item.isSelect
          })
        },
        // 设置
        set(value){
          // 循环遍历数组中的数据
          this.lists.forEach((item)=>{
            return item.isSelect = value
          })
        }
      },
      // 计算总价
      totalPrice(){
        // reduce()   调用计算价格
        // total   总价
        // item    数据中的元素
        return this.lists.reduce((total,item)=>{
          // 判断商品是否选中
          if(!item.isSelect)  return total   // false不计算当前商品的价格
          return total + parseInt(item.price) * parseInt(item.num)
        },0)   // 默认为0
      }
    },
    // 在一个实例被创建之后执行代码
    created() {
      this.$store.state.active = 2

      // if(sessionStorage.getItem('store')){
      //   let lists = JSON.parse(sessionStorage.getItem('store'))
      //   this.lists = lists.cart.lists
      //   console.log('lists ==> ',this.lists)
      // }
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
    // background: #ccc
  }
}
.cartNull{
  width: 100%;
  height: 100vh;
  font-size:20px;
  text-align: center;
  background: #F2F2F2;
  img{
    width: 30%;
    margin: 0 auto;
    padding: 60px 0 40px;
  }
  .toHome{
    display: block;
    width: 80%;
    background-color: #FB6600;
    color: #fff;
    margin: 20px auto;
    padding: 10px 0;
    border-radius: 10px;
  }
}
.goods{
  margin-bottom: 100px;
  background: #F2F2F2;
  &>div{
    border-bottom: 1px solid #ccc;
  }
  .inputBtn{
    width: 30px;
    height: 30px;
    text-align: center;
  }
  .checkBtn{
    position: absolute;
    top: 50%;
    left: 5px;
    margin-top: -10px;
  }
  .delBtn{
    position: absolute;
    right: 20px;
    bottom: 5px;
  }
}
.van-tag{
  display:inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  padding: 0;
  text-align: center;
  // border-radius: 40px;
}
::v-deep .van-checkbox__icon--checked{
  i.van-icon{
    background-color: #ff6b00;
    border-color: #ff6b00;
  }
}
</style>